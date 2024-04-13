'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';

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





  return (
    <div className='bg-stone-900 w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-white'>Dashboard Page</h1>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.weight)}</h3>
        <h3 className='text-4xl text-white'>Hi, {JSON.stringify(session?.user?.email)}</h3>
        <Link href='/signOut'  className='text-4xl text-white bg-slate-500'>Sign Out</Link>

    </div>
  )
}
