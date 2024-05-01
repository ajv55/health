import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    console.log(id)

    const res = await prisma.dailyChallenges.delete({
        where: {
            id: id!
        }
    })
    
    return NextResponse.json({res})
}