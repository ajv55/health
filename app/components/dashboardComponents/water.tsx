'use client'; 
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import {  useSelector , useDispatch} from 'react-redux';
import { RootState } from '@/app/store';
import { incrementDailyWater, setWater, setWaterModal } from '@/app/slices/waterSlice';
import { useSession } from 'next-auth/react';


export default function Water() {
  const{data: session} = useSession();
  console.log(session)
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null)

  const liters = useSelector((state: RootState) => state.water.value)

  const dispatch = useDispatch();

  const fetchWaterIntake = async () => {
    await axios.get('/api/getWater').then((res) => dispatch(setWater(res?.data?.addWater)));
  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      await axios.post('/api/postWater', {amount}).then((res) => console.log(res)).then(() => toast.success('Successfully add water intake')).catch(() => toast.error('something went wrong when trying to add some water'));
      fetchWaterIntake();

    } catch (error) {
      setError('Failed to add water intake');
      toast.error('Failed to add water intake');
    } finally {
      setLoading(false);
      dispatch(setWaterModal(false))
    }

    
  }



  return (
      <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{type: 'spring', damping: 20, stiffness: 120}} exit={{opacity: 0, y: -100}}  className='w-full  h-full  flex flex-col justify-center items-center absolute top-0 left-0 rounded-xl bg-transparent backdrop-blur-sm'>
        <form onSubmit={handleSubmit} className='w-[50%] bg-gray-50 rounded-lg drop-shadow-lg mx-auto h-[18rem] flex flex-col justify-center items-center'>
          <label className=' text-2xl mt-5 font-bold mb-2 text-indigo-400 tracking-wide' htmlFor="options">Add Water Intake</label>
        <select value={amount} onChange={(e: any) => setAmount(Number(e.target.value))} id='options' className='w-[80%] drop-shadow-md h-10 p-2 rounded-xl '>
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
        <div className='w-full mt-8 h-[6rem] flex justify-evenly items-center'>
          <button className='text-white  bg-gradient-to-br from-indigo-800 via-indigo-500 to-indigo-300 hover:bg-gradient-to-bl hover:from-indigo-800 hover:via-indigo-500 hover:to-indigo-300 text-xl px-2.5 py-2 w-[35%] rounded-2xl '  type='submit'>Add Water</button>
          <button className='text-white bg-gradient-to-br from-indigo-700 via-indigo-400 to-indigo-200 hover:bg-gradient-to-bl hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-200 text-xl px-2.5 py-2 w-[25%] rounded-2xl ' type='button' onClick={() => dispatch(setWaterModal(false))}>Cancel</button>
        </div>
        </form>
        </motion.div>
  )
}
