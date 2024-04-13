import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';

type calories = {
    age: string, 
    weight: string,
    height: string
}


export async function POST(req: NextRequest) {
    const body =  await req.json();
    const {name, email, password, age, weightInKg, heightInInches} = body;

    console.log(name, email, password);


    if(!name || !email || !password || !age || !weightInKg || !heightInInches) {
        return new NextResponse('Missing Fields', {status: 400})
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (exist) {
        throw new Error('Email already exists')
    }

    const calculateCalories = ({age, height, weight}: calories) => {
        
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            age,
            weightInKg,
            heightInInches

        }
    });

    return NextResponse.json(user)
}



