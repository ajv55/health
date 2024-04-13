'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';

import {toast} from 'react-hot-toast';
import prisma from '../libs/prismadb';
import axios from 'axios';
import { json } from 'stream/consumers';

export default  function Page() {

  const [name, setName] = useState('');
  const {data: session, status} = useSession();
  const router = useRouter();

  const [data, setData] = useState({
    weight: '',
    gender: '',
    height: '',
    email: `${session?.user?.email}`
  });

  if(status === 'unauthenticated') {

    router.push('/')
  } 


  const update = async () => {
    const res = await fetch('/api/updateCal', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email: session?.user.email})});
    const data = await res.json();
    console.log(data);
  }

  
  
  

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
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.email)}</h3>
        <button className='text-5xl text-red-400' onClick={update}>click</button>


    </div>
  )
}
