'use client';
import { useEffect, useState } from "react";
import {useSession} from 'next-auth/react';
import {motion} from 'framer-motion'

 

export default  function Quote() {

    const {data: session} = useSession();
    const [motivate, setMotivate ] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const getQuote = async () => {
        const res = await fetch('/api/quote');
        const data = await res.json();
        setMotivate(data)
        setIsLoading(false)
        console.log('get quote funtion ran')
    }
    useEffect(() => {
      if(motivate === undefined) {
        getQuote()
        return console.log('motivate state is undefined')
      }

      if(motivate !== undefined) {
        return console.log('theres a quote already')
      }
        
    }, [motivate])

    const randomNumber = Math.floor(Math.random() * 50);

    const randomQuote = motivate?.data[randomNumber] ;

    const cleanup = randomQuote?.replace(/[^\w\s]/gi, '');




  return ( 
    <div className="w-full mt-10 h-[27rem] rounded-2xl bg-slate-200 flex flex-col justify-start items-center">
      
      <div className="w-full h-20 rounded-2xl shadow-lg shadow-zinc-900 bg-gradient-to-br from-slate-900 via-slate-600 to-slate-300 flex justify-center items-center p-3">
        <h1 className="text-4xl text-white font-bold tracking-wider">Quote Of The Day</h1>
      </div>
        <motion.h1 initial={{scale: 0, opacity: 0, y: '-100%'}} animate={{y: '100%'}} transition={{duration: 1, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className="text-4xl text-center text-zinc-800 p-3  font-semibold tracking-wide mt-20">{cleanup}</motion.h1>
        {isLoading && 
<div role="status" className="space-y-2.5 animate-pulse w-[85%]">
    <div className="flex items-center w-full">
        <div className="h-3.5 bg-zinc-500 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="h-3.5 ms-2 bg-zinc-400 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-3.5 ms-2 bg-zinc-700 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div className="flex items-center w-full max-w-[480px]">
        <div className="h-3.5 bg-gray-600 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div className="flex items-center w-full max-w-[400px]">
        <div className="h-3.5 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-3.5 ms-2 bg-zinc-700 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div className="flex items-center w-full max-w-[480px]">
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-3.5 ms-2 bg-zinc-700 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div className="flex items-center w-full max-w-[440px]">
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-3.5 ms-2 bg-gray-800 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-700 w-full"></div>
    </div>
    <div className="flex items-center w-full max-w-[360px]">
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-3.5 ms-2 bg-gray-800 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-3.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
}
    </div>
  )
}
