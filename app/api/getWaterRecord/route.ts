import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../libs/option";


export async function GET(){

    const session = await getServerSession(authOptions);

    const water = await prisma.waterIntakeRecord.findMany({
        where: {
            userId: session?.user?.id
        }
    })

    return NextResponse.json({water})
}