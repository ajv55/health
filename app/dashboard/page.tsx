'use client';

import Link from 'next/link'
import { use, useEffect, useState } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';

import {toast} from 'react-hot-toast';
import prisma from '../libs/prismadb';
import axios from 'axios';
import { json } from 'stream/consumers';
import { revalidatePath } from 'next/cache';

export default  function Page() {

  const {data: session, status ,update} = useSession();
  const router = useRouter();


  if(status === 'unauthenticated') {

    router.push('/')
  } 

  useEffect(() => {

    if (session?.user.calories !== null) {
     
      return  console.log('theres caloires existing alread')
    }
    if(session?.user?.gender === 'Male') {
      const calories = 88.362 + (4.799 * Number(session?.user?.height)) + (13.397 * Number(session.user.weight)) - (5.677 * Number(session.user.age))
      update({calories: calories.toString() })
  }

  if(session?.user?.gender === 'Female') {
    const calories = 88.362 + (4.799 * Number(session?.user?.height)) + (13.397 * Number(session.user.weight)) - (5.677 * Number(session.user.age))
    update({calories: calories.toString() })
}


}, [session]);

  

  return (
    <div className='bg-stone-900 w-full h-screen flex flex-col justify-start items-center'>
      <div className='border w-full h-[25rem] flex justify-between items-start '>
        <div className='border-2 flex flex-col justify-start items-center w-[48%] h-[14rem] p-2'>
        <h1 className='text-8xl text-white'>Hello, <span className='font-extrabold bg-gradient-to-br from-orange-600 via-orange-400 to-orange-400 bg-clip-text text-transparent tracking-wider'>{session?.user.name.toUpperCase()}</span></h1>
        <h6 className='text-md font-light tracking-wide text-white'>Total calories: {Math.round(Number(session?.user.calories))}</h6>
        </div>
        <div className='border-2 flex justify-center items-center w-[30%] h-[14rem]'>
           <Link href='/signOut'  className='text-4xl rounded-2xl text-white bg-slate-500 px-2.5 py-2.5 w-[85%] text-center'>Sign Out</Link>
        </div>
      </div>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.weight)}</h3>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.height)}</h3>
        <button className='text-5xl text-red-400' >click</button>


    </div>
  )
}
