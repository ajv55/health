import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import {getServerSession} from 'next-auth'
import { options } from "../auth/[...nextauth]/route";

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY!
})

export async function GET() {


    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You're a nutritionist expert, here to help the user lose weight by giving them the healthiest recipes available`},
            {role: 'user', content: 'i need some healthy recipes'}
        ]
    })

    console.log(res)


    return NextResponse.json({recipes: 'hello'})
}