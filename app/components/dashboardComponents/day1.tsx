'use client'; 
import { useState } from "react";
import {useSession} from 'next-auth/react'

type Day1Props = {
    onClick: () => void,
    day?: string
}

export default function Day1({onClick, day}: Day1Props) {
    const {data: session} = useSession();


  return (
    <div onClick={onClick} className="w-[15%] cursor-pointer h-full border flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">{day}</h1>
    </div>
  )
}
