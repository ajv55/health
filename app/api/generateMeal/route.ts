import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET() {

    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You're a nutritoinal expert here to give generate meal plans for a paid user. You're here to give them the best advice possible` + 'the final response will be a JSON formatted string ready to be parse following this schema: '} ]
    })

    return NextResponse.json({})
}