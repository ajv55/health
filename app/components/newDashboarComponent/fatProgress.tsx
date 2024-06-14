'use client';
import { RootState } from '@/app/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function FatProgress() {

  const total = useSelector((state: RootState) => state.log.totals);
  const grams = useSelector((state: RootState) => state?.log?.grams);
  console.log(grams)
  console.log(total)

   // Assuming you have access to the user's daily protein goal in grams
   const fatGoalGrams = Math.round(grams?.fatGrams); // Replace with actual user's daily protein goal

   // Calculate percentage of protein intake relative to the goal
   const fatPercentage = Math.min(100, Math.round((total?.fat / fatGoalGrams) * 100));

    // Calculate remaining protein based on the goal and total consumed
  const fatLeft = Math.max(0, fatGoalGrams - (total?.fat || 0));

   console.log(fatPercentage)

  return (
    <div className='w-[32%] h-full flex p-2  flex-col justify-center gap-1 items-center'>
        <div className='w-full flex justify-between items-center'>
            <span className='text-indigo-400 font-light'>Fats</span>
            <div className='flex justify-center items-center gap-1'>
                <span>{fatPercentage}%</span>
                <span>cals</span>
            </div>
        </div>

        <div className='w-full h-5 bg-indigo-50 rounded-lg overflow-hidden'>
        <motion.div
          initial={false}
          animate={{ width: `${fatPercentage}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='h-full bg-indigo-400 rounded-lg'
          style={{ width: `${fatPercentage}%`}}
        />
      </div>

        <div className='flex w-full justify-between items-center'>
            <span>{Math.round(grams?.fatGrams)}g</span>
            <span>left {Math.round(fatLeft)} g</span>
        </div>

    </div>
  )
}
