import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {

    const session = await getServerSession(authOptions);

    const custom = await prisma.customFood.findMany({
        where: {userId: session?.user.id}
    })

    return NextResponse.json(custom, {status: 201})
}