import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { connect } from "http2";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions);

    const body = await req.json();
    console.log(body)

    const steps = await prisma.stepLog.create({
        data: {
            steps: body,
            user: {connect: {id: session?.user?.id}}
        }
    })

    return NextResponse.json(steps, {status: 201})
}