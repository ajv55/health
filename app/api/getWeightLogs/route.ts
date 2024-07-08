// pages/api/weights.js
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/libs/option';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const weightEntries = await prisma.weightLog.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: 'asc', // Sort by creation date in ascending order
      },
    });
    return NextResponse.json(weightEntries, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching weight logs' }, { status: 500 });
  }
}
