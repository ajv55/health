import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {gender , age, weight, activity} = body;

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: 'You are a personal trainer, here to help the user lose weight with the most accurate way' + 'all of your anwser are back by science and proof youll acqiue from the internet'},
            {role: 'user', content: `workout plan for someone who is age of ${age} , weight of ${weight}, and a ${gender}, workout should be a ${activity} level`}
        ],
    })

    const workout = completion.choices[0].message.content


    console.log(body)
    console.log()

    return NextResponse.json({workout})
}