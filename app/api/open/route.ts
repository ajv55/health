import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import {getServerSession} from 'next-auth'
import { options } from "../auth/[...nextauth]/route";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {

    const data = await getServerSession(options);
    console.log(data);

    const usersCal = Number(data?.user.calories);
    const low = usersCal - 250;
    const med = usersCal - 500;
    const hi = usersCal - 750;

    const body = await req.json();
    const {gender , age, weight, activity} = body;

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `You are a persoanl trainer, here to help the user lose weight, you will give them a seven day workout plan for the week with the total of calories expexted to burn at the end of the week. The workout plan should be strength training, HIIT, and cadrio focused. The workout plan should have all exercises that dont require a gym, just dumbells, barbells, and body weight exercises. Youll give them three different intensity paths low, med, and hi` + `The final response should be a completed useable JSON format string ready to be parse following this schema: {high_intensity: {day1: {calories_bured: , duration: , excerise: [{name: , reps: , sets: },{name: , reps: , sets:  },{name: , reps: , sets:  }], quote: , workout: }, day2: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day3: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day4: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day5: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day6: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day7: {calories_bured: , duration: , excerise: [{}], quote: , workout: }}, medium_intensity: {day1: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day2: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day3: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day4: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day5: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day6: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day7: {calories_bured: , duration: , excerise: [{}], quote: , workout: }}, low_intensity: {day1: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day2: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day3: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day4: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day5: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day6: {calories_bured: , duration: , excerise: [{}], quote: , workout: }, day7: {calories_bured: , duration: , excerise: [{}], quote: , workout: }}, total_calories: {high_intensity: , medium_intensity: , low_intensity: } }, giving me the workout plan in days, the workouts, the exercise with at least 3 to 4 different types of exercises, sets per exercise, reps per exercise, how much to calories expected to lose from workout, duration of workout, and a motivation quote per day.`},
            {role: 'user', content: `workout plan for someone who is age of ${age} , weight of ${weight}, and a ${gender}`}
        ],
        response_format: {type: 'json_object'}
    })

    const workout = completion.choices[0].message.content


    return NextResponse.json({workout})
}