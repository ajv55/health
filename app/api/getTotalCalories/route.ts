import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";


export async function GET() {
    const session = await getServerSession();


    const breakfast = await prisma.mealLog.findMany({
        where: {userId: session?.user?.id}
    })
    const lunch = await prisma.lunchLog.findMany({
        where: {userId: session?.user?.id}
    })
    const dinner = await prisma.dinnerLog.findMany({
        where: {userId: session?.user?.id}
    })
    const snack = await prisma.snackLog.findMany({
        where: {userId: session?.user?.id}
    })

    return NextResponse.json(breakfast, {status: 201})
}