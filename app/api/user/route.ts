import prisma from "@/app/libs/prismadb";
import Email from "next-auth/providers/email";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    const {email} = body

    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(!exist) {
        return new Error('something went wrong, email not existing')
    }

    const updateUser = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            age: '32',
            weightInKg: '95',
            heightInInches: '68',
            calories: '2300'
        }
    })


    return NextResponse.json(updateUser)

}