import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../libs/option";


export async function GET() {

    const session = await getServerSession(authOptions);

    const data = await prisma.mealPlan.findMany({
        where: {userId: session?.user?.id }
    })

    return NextResponse.json({data})
}