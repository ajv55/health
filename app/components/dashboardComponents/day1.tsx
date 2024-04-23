'use client'; 
import { HTMLAttributes, useState } from "react";
import {useSession} from 'next-auth/react'

type Day1Props = {
    onClick: () => void,
    day?: string,
    style?: any 
}

export default function Day1({onClick, day, style}: Day1Props) {
    const {data: session} = useSession();


  return (
    <div style={style} onClick={onClick} className="w-[17%] cursor-pointer h-full  flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">{day}</h1>
    </div>
  )
}
