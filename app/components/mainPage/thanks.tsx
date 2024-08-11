import Link from 'next/link'
import React from 'react'
import style from '@/app/style.module.css'

export default function Thanks() {
  return (
    <div className={`${style.background} w-full bg-slate-100 py-12 px-4 lg:px-16 flex flex-col items-center text-center space-y-6`}>
        <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600">Thank you for visiting MyFitGenius</h2>
        <p className="text-lg lg:text-3xl text-gray-800 max-w-4xl">
        Your trusted partner in achieving your fitness goals. Ready to start your journey to a healthier, happier you? Sign up now and let&#39;s get moving together! Remember, every step counts towards a brighter, fitter future. See you on the other side!
        </p>
        <Link href='/reg' className="px-6 py-3 text-xl font-bold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-full hover:bg-gradient-to-l focus:ring-2 ring-indigo-200 shadow-lg transform hover:scale-105 transition-transform">
        Sign-Up Now
        </Link>
    </div>
  )
}
