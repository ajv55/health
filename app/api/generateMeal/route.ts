import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: NextRequest) {

    const session = await getServerSession(options);
    const userCal = Number(session?.user?.calories);

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }


    const body = await req.json();
    console.log(body);
    const {dietaryPreferences, allergies, duration, mealType, nutritionalGoals} = body;

   



    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You're a nutritoinal expert here to give generate meal plans for a paid user. You're here to give them the best advice possible` + 'the final response will be a JSON formatted string ready to be parse following this schema: mealPlan: [meals: {meal: , mealType: , ingredients: [], description: , calories: , protien: , carbs: , fat: }]'}, {role: 'user', content: `Generate meal plan for this many ${duration}, with these dietary preferences: ${dietaryPreferences}, for ${mealType}, these are my goals ${nutritionalGoals}, and these are my allergies: ${allergies.map((a: string) => a)}`}]
    })

    const data = res?.choices[0]?.message?.content

    const jsonData = data && JSON.parse(data!)

    const mealPlan = jsonData && jsonData?.mealPlan
    const meals = mealPlan.map((mp: any) => mp);

    console.log(meals)
    await prisma.mealPlan.create({
       data: {
        userId: session.user.id,
        meals: meals
       }
    })

    return NextResponse.json({data})
}