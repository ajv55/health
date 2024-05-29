import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import prisma from "@/app/libs/prismadb";
import { connect } from "http2";
import { error } from "console";
import { authOptions } from "../../libs/option";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function GET() {
    const session = await getServerSession(authOptions);

    const sessionUserId = session?.user?.id


    const usersCal = Number(session?.user?.calories);
    const cal = usersCal - 500

    const existingChallenges = await prisma.exerciseChallenges.findFirst({
        where: {
            userId: session?.user?.id
        }
    });



    const dailyChallenges = await prisma.dailyChallenges.findMany();

    console.log(dailyChallenges.length === 0)
   if(dailyChallenges.length === 5) {
    return NextResponse.json({dailyChallenges})
   }

   if (dailyChallenges.length === 0) {
    const challenges = JSON.parse(existingChallenges?.challenges!);
    const challenge1 = JSON.stringify(challenges?.workouts[0])
    const challenge2 = JSON.stringify(challenges?.workouts[1])
    const challenge3 = JSON.stringify(challenges?.workouts[2])
    const challenge4 = JSON.stringify(challenges?.workouts[3])
    const challenge5 = JSON.stringify(challenges?.workouts[4])
  
    await prisma.dailyChallenges.createMany({
        data: [
            {challenges: challenge1},
            {challenges: challenge2},
            {challenges: challenge3},
            {challenges: challenge4},
            { challenges: challenge5},
            
        ]
    })
   }
    

    if (existingChallenges !== null) {
        
        return NextResponse.json({data: existingChallenges}, {status: 200});
    }





    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: `you're a fitness coach here to give the best daily workout plan to help the user lose weight ,include total calories the user should expext to lose per workout, the workouts should be strength training, and HIIT focused, this workout plan should be at least 5 different challenges workouts` + 'the final response will always be a JSON format string ready to be parse following this schema: workouts: [ Challenge: {exercise: , workout: , sets: , reps: , instructions: , duration: , totalCalories: ,  }, Challenge: {exercise: , workout: , sets: , reps: , instructions: , duration: , totalCalories: ,  }, Challenge: {exercise: , workout: , sets: , reps: , instructions: , duration: , totalCalories: ,  }, Challenge: {exercise: , workout: , sets: , reps: , instructions: , duration: , totalCalories: ,  }, Challenge: {exercise: , workout: , sets: , reps: , instructions: , duration: , totalCalories: ,  } ]'}, {role: 'user', content: `Need a workout plan for five day challenge. My target calories is this ${cal}`}],
        response_format: {type: 'json_object'}
    })

    const exercise = res?.choices[0]?.message?.content
    const ex = JSON.parse(res?.choices[0]?.message?.content!);
    console.log(ex.workout)

    const results = await prisma.exerciseChallenges.create({
        data: {
            user: {connect: {id: session?.user?.id!}},
            challenges: exercise,
            completed: false
        }
    })

    

    return NextResponse.json({results})
}