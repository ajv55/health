import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/option";


export async function POST(req: NextRequest) {

    const session = await getServerSession(options);

    const body = await req.json();
    const {workoutData} = body;
    const { workout, exercise, reps, sets, date } = workoutData
    console.log(workoutData)

    try {
        const res = await prisma.workout.create({
            data: {
                user: {connect: {id: session?.user?.id}},
                muscle: workout,
                exercise: exercise,
                reps: reps,
                sets: sets,
                date: date
            }
        })

        return NextResponse.json({res})
    } catch (error) {
        console.error('Error adding meal:', error);
       return NextResponse.json({ error: 'Internal Server Error' });
    }

    

    
}