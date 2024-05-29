import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/option";

export async function GET() {
    const session = await getServerSession(options);

    console.log(session?.user?.id)

    const usersList = await prisma.calorieIntake.findMany({
        where: {
            userId: session?.user?.id
        }
    })
    console.log(usersList)
    // const ids = usersList.map((u) => u.id);

    return NextResponse.json({usersList})
}