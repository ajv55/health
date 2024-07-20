import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){

    const session = await getServerSession(authOptions);

    const customLog = await prisma.customLog.findMany({
        where: {
            userId: session?.user?.id
        }
    })

    return NextResponse.json(customLog, {status: 201})
}