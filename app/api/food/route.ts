import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET() {

    // const data = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{role: 'system', content: 'you are a expert nutritionist, you are here to help user lose weight by provide them with a list of recpies along with food nutrition facts.' + 'the final response will be in a completed JSON format string ready to be parse following this schema: nutrition_guide: [{day_1: {breakfast: {meal: , calories: , img: , ingredients: [{food: , calories: ,carbs: , protein: , fat: }, {}, {}]} } },{day_2:  }, {day_3: }, {day_4: }, {day_5: }, {day_6: }, {day_7: }]' + 'provide this guide for a seven day week with breakfast, lunch, and dinner along with how much calories per meal' + 'also add the carbs, protein, and fat in each ingredient' + 'also add total calories per week'}, {role: 'user', content: 'need a nutrition guide that can be target for a wide range of user, make sure the guide is foods that a very common'}],
    //     response_format: {type: 'json_object'}
    // })

    // const resutls = data.choices[0].message.content;

    // const cleanup = resutls && JSON.parse(resutls);

    // console.log(cleanup)

    const data = await prisma.nutriton.findMany();

    const results = JSON.parse(data[0]?.nutritionGuide as string);



    const nut = results;

    return NextResponse.json({nut})
}