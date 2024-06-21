import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {

    const session = await getServerSession(authOptions)

    const macros = await prisma.macronutrient.findUnique({
        where:{userId: session?.user.id}
    })



    return NextResponse.json(macros, {status: 201})
}