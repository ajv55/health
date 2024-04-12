'use client';
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react';
import {useSession} from 'next-auth/react'
import { options } from '../api/auth/[...nextauth]/route'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import prisma from '../libs/prismadb';
import axios from 'axios';
import {toast} from 'react-hot-toast';

export default  function Page() {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('/api/user', data ).then(() => toast.success('you added the calories data')).catch(() => toast.error('something went wrong'))
    console.log('heres where i add the calories and weight and age to the database')
    
  }


  return (
    <div className='bg-stone-900 w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-white'>Dashboard Page</h1>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.name)}</h3>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.email)}</h3>
        <button onClick={() => {
          signOut()
        }} className='text-4xl text-white bg-slate-500'>Sign Out</button>

        <div>
          <form className='w-[55%] h-[19rem] bg-slate-500 text-white' onSubmit={handleSubmit}>
            <label htmlFor="weight">Weight</label>
            <input placeholder='Enter weight' id='weight' type="text" />
            <label htmlFor="height">Height</label>
            <input placeholder='Enter height' id='height' type="text" />
            <select name="gender" id="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button className='bg-slate-200 px-2.5 py-3 text-3xl' type='submit'>Sumbit</button>
          </form>
        </div>
    </div>
  )
}
