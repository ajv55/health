import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {

    const session = await getServerSession(authOptions);

    const user = await prisma.user.findUnique({
        where: {id: session?.user.id},
        select: {favoriteFoods: true},
    })

    return NextResponse.json(user, {status: 201})
}