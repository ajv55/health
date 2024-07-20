import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){
    const session = await getServerSession(authOptions);

    const body = await req.json();
    console.log(body);
    const {name, icon, calories} = body;

    const res = await prisma.customLog.create({
        data: {
            user: {connect: {id: session?.user?.id}},
            name,
            icon,
            caloriesBurned: calories
        }
    })

    return NextResponse.json(res, {status: 201})
}