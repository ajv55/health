import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET(){

    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You're a nutritionist expert here to give JSON formatted responses. This response will be for the most common foods and snacks eaten, along with nutritional facts` + 'the final response will always be in a JSON format string ready to be parse following this schema: [carbs: {name: , protein: , carbs: , fat: , caloriesPerServingSize: , servingSize: , } ]'}, {role: 'user', content: 'Give me a list of 50 of the most common healthiest source of carbs with different serving size'}],
        response_format: {type: 'json_object'},
    })

    const data = res?.choices[0].message.content

    return NextResponse.json({data})
}