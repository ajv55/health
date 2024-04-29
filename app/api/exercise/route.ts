import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { options } from "../auth/[...nextauth]/route";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET() {
    const session = await getServerSession(options);

    const usersCal = Number(session?.user?.calories);
    const cal = usersCal - 500

    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `you're a fitness coach here to give the best daily workout plan to help the user lose weight ,include total calories the user should expext to lose per workout, the workouts should be strength training, and HIIT focused, this workout plan should be at least 5 different challenges workouts` + 'the final response will always be a JSON format string ready to be parse following this schema: workouts: [ Challenges: {exercise: , workout: , sets: , reps: , instructions: , duration: , totalCalories: ,  } ]'}, {role: 'user', content: `Need a workout plan for five day challenge. My target calories is this ${cal}`}],
        response_format: {type: 'json_object'}
    })

    const exercise = JSON.parse(res?.choices[0]?.message?.content as string)
    

    return NextResponse.json({exercise})
}