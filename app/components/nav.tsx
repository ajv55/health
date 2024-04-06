import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='lg:w-full bg-gradient-to-tl from-emerald-950 via-emerald-600 to-emerald-300  z-10 fixed top-0 lg:h-content py-3 flex justify-between items-center p-3'>
        <h1 className='text-5xl'>Logo</h1>
        <nav className=' lg:text-3xl lg:w-[75%] text-white flex justify-evenly items-center'>
            <Link className='hover:underline underline-offset-4 hover:text-2xl' href='/'>Home</Link>
            <Link className='hover:underline underline-offset-4 hover:text-2xl' href='/Contact'>Contact</Link>
            <Link className='hover:underline underline-offset-4 hover:text-2xl' href='/About'>About</Link>
        </nav>
    </div>
  )
}
