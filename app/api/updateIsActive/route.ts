import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/option";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const session = await getServerSession(authOptions);
    console.log('body: ', body)

    const { stripeCustomerId, subscriptionId } = body;
    console.log(subscriptionId)
    
    // Fetch the user data from the database based on stripeCustomerId
    const user = await prisma.user.findUnique({
      where: { stripeCustomerId },
    });

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ error: 'User not found' });
    }

    // Update the session with the new isActive status
    const updatedSession = {
      ...session,
      user: {
        ...session?.user,
        isActive: user?.isActive,
        subscriptionId: user?.subscriptionId
        
      },
    };
    console.log(updatedSession)

  return NextResponse.json({session: updatedSession})

}