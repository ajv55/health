'use client'; 
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import {  useSelector } from 'react-redux';
import { RootState } from '@/app/store';


export default function Water() {
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const selector = useSelector((state: RootState) => state.water.value);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post('/api/postWater', {amount}).then((res) => console.log(res)).then(() => toast.success('Successfully add water intake')).catch(() => toast.error('something went wrong when trying to add some water'))
    setOpen(false)
    console.log(res)
  }

  
console.log(amount)


  return (
    <AnimatePresence>
    <div className='w-[45%] h-[12rem] rounded-2xl bg-slate-900 flex relative flex-wrap justify-between items-start'>
      {open && <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{type: 'spring', damping: 20, stiffness: 120}} exit={{opacity: 0, y: -100}}  className='w-full  h-[13rem]  flex flex-col justify-center items-center absolute top-0 left-0 rounded-xl bg-transparent backdrop-blur-sm'>
        <form onSubmit={handleSubmit} className=' w-full h-full flex flex-col justify-center items-center'>
          <label className='text-white text-2xl mt-5 font-bold mb-2 tracking-wide' htmlFor="options">Add Water Intake</label>
        <select value={amount} onChange={(e: any) => setAmount(Number(e.target.value))} id='options' className='w-[80%] h-10 p-2 rounded-xl '>
          <option disabled>How much liter&#39;s did you drink ?</option>
          <option value="0">0 liters (0 oz)</option>
          <option value="0.25">1/4 liter (8.45 oz)</option>
          <option value="0.5">1/2 liter (16.9 oz)</option>
          <option value="0.75">3/4 liter (25.4 oz)</option>
          <option value="1">1 liter (33.8 oz)</option>
          <option value="1.5">1.5 liters (50.7 oz)</option>
          <option value="2">2 liters (67.6 oz)</option>
          <option value="2.5">2.5 liters (84.5 oz)</option>
          <option value="3">3 liters (101.4 oz)</option>
        </select>
        <div className='w-full h-[12rem] flex justify-evenly items-center'>
          <button className='text-white  bg-gradient-to-br from-sky-800 via-sky-500 to-sky-300 hover:bg-gradient-to-bl hover:from-sky-800 hover:via-sky-500 hover:to-sky-300 text-xl px-2.5 py-2 w-[35%] rounded-2xl '  type='submit'>Add Water 💧</button>
          <button className='text-white bg-gradient-to-br from-red-700 via-red-400 to-red-200 hover:bg-gradient-to-bl hover:from-red-700 hover:via-red-500 hover:to-red-200 text-xl px-2.5 py-2 w-[25%] rounded-2xl ' onClick={() => setOpen(false)}>Cancel ❌</button>
        </div>
        </form>
        </motion.div>}
      <div className='w-full h-10   flex justify-end items-start p-3'>
        
        <FaPlus onClick={() => {setOpen(true), setAmount(0)}} className=' cursor-pointer' size={28} color='white' />
      </div>
        <div className=' w-[50%] h-32   flex justify-center items-center'>
            <h1 className='text-6xl'>💧</h1>
        </div>
        <div className=' w-[50%] h-32  flex flex-col justify-center items-center'>
            <h2 className='text-3xl text-white font-bolg'>3 liters</h2>
            <h6 className='text-xs text-white'>Water</h6>
        </div>
    </div>
    </AnimatePresence>
  )
}
