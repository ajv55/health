import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions);

    const body = await req.json();
    const {weight} = body

    console.log(weight);

    const res = await prisma.weightLog.create({
        data: {
            user: {connect: {id: session?.user.id!}},
            newWeight: weight
        }
    })

    return NextResponse.json(res, {status: 201})
}