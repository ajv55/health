'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ThirdReason() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView){
        mainControls.start('visible');
      }
    }, [isInView, mainControls])
  return (
    <motion.div ref={ref} variants={{visible: {scale: 1, opacity: 1, x: 0}}} initial={{scale: 0, opacity: 0, x: 100}} animate={mainControls} transition={{duration: 0.55, type: 'spring', delay: 0.25}} className=' drop-shadow-xl  w-full h-[23rem] flex flex-col lg:flex-row justify-evenly items-center relative'>
        <div className='relative'>
            <h1 className='text-[30rem] text-white -z-10 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>3</h1>
            <h1 className='lg:text-5xl text-3xl text-center bg-gradient-to-br  from-purple-800 via-red-300 to-yellow-300 bg-clip-text text-transparent  font-bold tracking-wide'>Comprehensive Support</h1>
        </div>
            <p className='lg:text-3xl text-xl lg:text-left text-center text-balance text-white tracking-wide font-light w-full lg:w-[65%]'>Weight loss can be challenging, <span className='font-extrabold lg:text-4xl text-2xl bg-gradient-to-br from-amber-800 via-amber-500 to-amber-300 bg-clip-text text-transparent'>but you don&#39;t have to go it alone</span>. With WeightTrack, <span className='font-extrabold lg:text-4xl text-2xl bg-gradient-to-tr from-indigo-600 via-indigo-300 to-indigo-200 bg-clip-text text-transparent'>you&#39;ll have access to comprehensive support</span> every step of the way. Whether you have questions about nutrition, need motivation to stick to your workout routine, or simply want to connect with like-minded individuals, our team and community are here to support you. <span className='font-extrabold lg:text-4xl text-2xl bg-gradient-to-tr from-amber-800 via-amber-500 to-amber-200 bg-clip-text text-transparent'>We&#39;re committed to your success</span> and will do whatever it takes to help you reach your goals.</p>
        </motion.div>
  )
}
