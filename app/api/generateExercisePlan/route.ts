import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { preferences, user } = body;
  
  // Log user preferences for debugging
  console.log(preferences);
  console.log(user);

  // Define the prompt with strict instructions for JSON output
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

  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "You are an expert fitness trainer. Always return a parsable JSON string in the exact structure requested.",
        },
        { role: 'user', content: prompt },
      ],
    });

    // Get the response data from OpenAI and ensure it's valid JSON
    const data = res.choices[0].message?.content;

    // Attempt to parse the JSON response
    const workoutPlan = JSON.parse(data!);

    console.log(workoutPlan);

    return NextResponse.json(workoutPlan, { status: 201 });
  } catch (error) {
    console.error("Error parsing the OpenAI response:", error);
    return NextResponse.json({ error: "Failed to generate workout plan" }, { status: 500 });
  }
}
