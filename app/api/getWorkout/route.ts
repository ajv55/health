import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})  

export async function GET() {

    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: 'Youre a fitness expert, here to give the user gudiance through lists workouts along with muscles groups to choose from' + 'the final response will always be in a JSON formatted string ready to be parse'}, {role: 'user', content: 'Give me a list of the major muscle groups people usually workout '}],
        response_format: {type: 'json_object'},
    })

    const data = res.choices[0].message.content

    return NextResponse.json({data})
}