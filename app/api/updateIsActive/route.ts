import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const session = await getServerSession(options);
    console.log('bodyyyyy' ,body);

    const { stripeCustomerId } = body;
    
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
        isActive: user.isActive,
      },
    };
    console.log(updatedSession)

  return NextResponse.json({session: updatedSession})

}