'use client';
import {signIn, signOut} from 'next-auth/react'
import Link from 'next/link';
import {useSession} from 'next-auth/react'

export default function Signing() {
    const {data: session} = useSession();
  return (
    <div className='w-[15%] flex justify-end items-end text-xl'>
        {!session ? <Link className=' bg-gradient-to-tr from-orange-800 via-orange-600 to-orange-300 w-[67%] rounded-xl text-2xl font-light tracking-wider hover:from-orange-300 hover:via-orange-500 hover:to-orange-800 text-white px-2.5 py-3 text-center ' href='/login'>Sign-In</Link> : <Link className='bg-slate-100 px-2.5 py-3 ' href='/signOut'>Sign-Out</Link> }
        
        
    </div>
  )
}
