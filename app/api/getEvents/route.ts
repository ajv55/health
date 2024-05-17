import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";



export async function GET() {
    const session = await getServerSession(options)

    const res = await prisma.workout.findMany({
        where: {
            userId: session?.user?.id
        }
    });


    if(res.length === 0) {
        return NextResponse.json({error: 'no workout records'}, {status: 401})
    }

    return NextResponse.json({res})
}