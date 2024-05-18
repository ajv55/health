import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/route";



export async function POST (req: NextRequest) {

    const session = await getServerSession(options);

    const body = await req.json();

    const {stripeCustomerId} = body
    console.log(stripeCustomerId)

    const user = await prisma.user.findUnique({
        where: { stripeCustomerId },
    });

   // Update the session with the new isActive status
   const updatedSession = {
    ...session,
    user: {
        ...session?.user,
        isActive: user?.isActive,
    },
};

const isUserActive = updatedSession.user.isActive

console.log(isUserActive)



    return NextResponse.json({isUserActive})
}
