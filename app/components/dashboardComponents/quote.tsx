'use client';
import { useEffect, useState } from "react";
import {useSession} from 'next-auth/react';
import {motion} from 'framer-motion'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

 

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
    <div className="w-full h-[18rem] rounded-2xl  flex flex-col justify-center items-center">
       <RiDoubleQuotesL className={`${isLoading && 'hidden'}`} size={50} color="white"/>
        <motion.h1 initial={{x: '-100%', opacity: 0}} animate={{x: 0, opacity: 1, scale: 0}} transition={{duration: 1, ease: 'easeInOut', type: 'spring', stiffness: 100, damping: 10}} whileInView={{scale:1, opacity: 1}} className="lg:text-4xl text-xl text-center text-balance text-white p-3  font-semibold tracking-wide">{cleanup}</motion.h1>
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
