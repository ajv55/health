import prisma from "@/app/libs/prismadb";
import {getServerSession} from 'next-auth'
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/option";
import toast from "react-hot-toast";

export async function GET() {
    const session = await getServerSession(authOptions)

    if (!session) {
        return toast.error('no session found')
    }

    const user = await prisma.user.findUnique({
        where: {
            email: `${session.user?.email}`
        }
    })

    return NextResponse.json({user: user},{status: 200})
}