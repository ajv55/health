import React from 'react'
import style from '@/app/style.module.css';

export default function PrivacyHeader() {
  return (
    <div className={`${style.background} w-full bg-center bg-cover h-[32rem] flex justify-end   items-center `}>
        <div className=' p-3 max-w-6xl mx-auto h-[27rem] flex flex-col justify-center items-start rounded-xl '>
            <h1 className='lg:text-8xl mb-5 text-5xl text-indigo-600 text-bold tracking-wide'>Privacy Policy</h1>
            <p className='lg:text-2xl text-md font-bold text-gray-400 tracking-wider text-balance text-left'>Welcome to Fitgenius, your trusted partner in health and fitness. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services. By using our website, you agree to the terms of this Privacy Policy.</p>
        </div>
    </div>
  )
}
