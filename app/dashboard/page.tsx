'use client';
import Link from 'next/link'
import { useEffect } from 'react';
import {useSession} from 'next-auth/react'
import { options } from '../api/auth/[...nextauth]/route'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default  function Page() {
  const {data: session, status} = useSession();
  const router = useRouter();

  if(status === 'unauthenticated') {

    router.push('/')
  }



  return (
    <div className='bg-stone-900 w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-white'>Dashboard Page</h1>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.name)}</h3>
        <button onClick={() => {
          signOut()
        }} className='text-4xl text-white bg-slate-500'>Sign Out</button>
    </div>
  )
}
