import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { connect } from "http2";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){

    const session = await getServerSession(authOptions);

    const body = await req.json();

    const {name, caloriesBurned, sets, duration, note, icon} = body;
    
    console.log(caloriesBurned)

   const res =  await prisma.exerciseLog.create({
        data: {
            user: {connect: {id: session?.user.id}},
            name,
            caloriesBurned,
            sets,
            duration,
            note,
            icon
        }
    })

    return NextResponse.json(res, {status: 201})
}