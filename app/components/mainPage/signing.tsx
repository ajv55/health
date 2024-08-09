'use client';
import {signIn, signOut} from 'next-auth/react'
import Link from 'next/link';
import {useSession} from 'next-auth/react'

export default function Signing() {
    const {data: session} = useSession();
  return (
    <div data-testid="signing-component" className='w-[25%] hidden lg:flex gap-2 justify-end items-end text-xl'>
        {!session ? <Link className='bg-white w-[47%] rounded-xl text-xl font-light tracking-wider border-2 border-indigo-300  text-indigo-600 hover:shadow-md hover:shadow-indigo-500 px-2 py-2 text-center ' href='/login'>Sign-In</Link> : <Link className='bg-gradient-to-tr border-2 border-indigo-300  text-indigo-600 hover:shadow-md hover:shadow-indigo-500 w-[67%]  text-xl font-light tracking-wider rounded-xl  text-center px-2.5 py-3 ' href='/signOut'>Sign-Out</Link> }
        
    </div>
  )
}
