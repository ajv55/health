import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const body = await req.json()
    const {email} = body
    const user = await prisma.user.findUnique({
        where: {
            email: 'abel@mail.com'
        }
    })

    return NextResponse.json({user: 'hello'})
}