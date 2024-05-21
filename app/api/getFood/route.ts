import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET(){

    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You're a nutritionist expert here to give JSON formatted responses.` + 'the final response will always be in a JSON format string ready to be parse following this schema: nutrition: [ {name: , protein: , carbs: , fat_total: , fat_saturated: , calories: , servingSize: , sodium: , potassium_mg: , cholesterol_mg: , fiber_g: , sugar_g:  , img:   } ]'}, {role: 'user', content: 'need an advance nutrition meal plan for 7 days'}],
        response_format: {type: 'json_object'},
    })

    const data = res?.choices[0].message.content

    return NextResponse.json({data})
}