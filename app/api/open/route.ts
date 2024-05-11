import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import {getServerSession} from 'next-auth'
import { options } from "../auth/[...nextauth]/route";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function GET() {


    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You're a fitness trainer here to help the user find the best exercise` + 'the final response will always be a JSON formatted string ready to be parse, following this schema: workouts: [ {id: , name: , description: , sets: , reps: , duration: , calories: , demoVideo: } ]'},
            {role: 'user', content: `give me a list of the top 45 most common workouts`}
        ],
        response_format: {type: 'json_object'}
    })

    const workout = JSON.parse(completion.choices[0].message.content as string)


    return NextResponse.json({workout})
}