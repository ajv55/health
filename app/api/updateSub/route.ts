import { getServerSession } from "next-auth/next";
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/option";

export async function GET() {

  const session = await getServerSession(authOptions);

  const email = session?.user?.email

  const user = await prisma.user.findUnique({
    where: {id: session?.user?.id}
  })

  const subscriptionId = user?.subscriptionId;

  const updateSession = {
    ...session, 
    user: {
      ...session?.user,
      subscriptionId: subscriptionId
    }
  }

  const subId = updateSession?.user?.subscriptionId


  return NextResponse.json({subId})
}