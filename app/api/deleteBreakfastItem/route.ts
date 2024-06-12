import { authOptions } from "@/app/libs/option";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest){
    const session = await getServerSession(authOptions)

    const searchParams = await req.nextUrl.searchParams;
    const id = searchParams.get('id');
    console.log(id)

    const res = await prisma.mealLog.delete({
        where: {id: id!}
    })

    return NextResponse.json(res, {status: 201})
}