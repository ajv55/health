import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { preferences, user } = body;

    // Ensure both user and preferences are provided
    if (!user || !preferences) {
      return NextResponse.json(
        { error: "User details or preferences are missing" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);

    // Handle case where session is null (user is not authenticated)
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User is not authenticated" },
        { status: 401 }
      );
    }

    // Log session for debugging (optional)
    console.log("Session:", session);
    console.log("User Details:", user);

    // Define the OpenAI prompt
    const prompt = `
      You are a professional fitness trainer. Create a workout plan for a person with the following details:
      - Age: ${user.age}
      - Weight: ${user.weight} lbs
      - Height: ${user.height} cm
      - Activity Level: ${user.activityLevel}
      - Workout Type: ${preferences.workoutType}
      - Goal: ${preferences.workoutGoal}
      - Days per Week: ${preferences.daysPerWeek}
      - Duration per Session: ${preferences.duration} minutes.

      Return the workout plan in the following JSON format:
      {
        "age": number,
        "weight": number,
        "height": number,
        "activity_level": string,
        "workout_type": string,
        "goal": string,
        "days_per_week": number,
        "duration_per_session": string,
        "entireExercisesCompleted": boolean,
        "exercises": [
          {
            "name": string,
            "description": string,
            "sets": number,
            "reps": number,
            "target_muscle_groups": [string]
            "completed" : boolean
          },
          ...
        ]
      }

      Ensure all the exercises are described clearly with their target muscle groups, sets, and reps. Provide explanations for the user on how to perform each exercise.
      Only return valid JSON that follows this exact structure.
    `;

    // Call OpenAI API
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert fitness trainer. Always return a parsable JSON string in the exact structure requested.",
        },
        { role: "user", content: prompt },
      ],
    });

    const openAiResponse = res.choices[0]?.message?.content;

    if (!openAiResponse) {
      throw new Error("Invalid response from OpenAI");
    }

    // Attempt to parse the JSON response from OpenAI
    let workoutPlan;
    try {
      workoutPlan = JSON.parse(openAiResponse);
    } catch (err) {
      throw new Error("Failed to parse JSON response from OpenAI");
    }

    console.log(workoutPlan)

    // Save the generated workout plan in the database
    const result = await prisma.exercisePlan.create({
      data: {
        userId: session.user.id!,
        exercisePlan: workoutPlan,
      },
    });

    console.log("Workout Plan Created:", result);

    return NextResponse.json(workoutPlan, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Error occured when trying to generated exercise plan' }, { status: 500 });
  }
}

