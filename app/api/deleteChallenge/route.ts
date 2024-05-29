import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../libs/option";



export async function DELETE(req: NextRequest) {

    const session = await getServerSession(authOptions);

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const challenge = searchParams.get('challenge');


    await prisma.completedChallenges.create({
        data: {
            user: {connect: {id: session?.user?.id }},
            challenge: challenge,
        }
    })

    console.log(id)

    const res = await prisma.dailyChallenges.delete({
        where: {
            id: id!
        }
    })
    
    return NextResponse.json({res})
}