import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";


export async function POST(req:NextRequest) {

    const session = await getServerSession(options);

    const body = await req.json();
    const {amount} = body;

    console.log(body.amount)

    const date = new Date();

    const res = await prisma.waterIntakeRecord.create({
        data: {
            amount: amount,
            date: date,
            user: {connect: {id: session?.user?.id}}  
        }
    })


    return NextResponse.json({res})
}