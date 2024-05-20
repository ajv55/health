import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";


export async function GET(){

    const session = await getServerSession(options);

    const water = await prisma.waterIntakeRecord.findMany({
        where: {
            userId: session?.user?.id
        }
    })

    return NextResponse.json({water})
}