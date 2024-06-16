'use client';
import { RootState } from '@/app/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function LogCarb() {

  const total = useSelector((state: RootState) => state.log.totals);
  const grams = useSelector((state: RootState) => state?.log?.grams);
  console.log(grams)
  console.log(total)

    // Assuming you have access to the user's daily protein goal in grams
    const carbGoalGrams = Math.round(grams?.carbGrams); // Replace with actual user's daily protein goal

   // Calculate percentage of protein intake relative to the goal
   const carbPercentage = Math.min(100, Math.round((total?.carbs / carbGoalGrams) * 100));

    // Calculate remaining protein based on the goal and total consumed
  const carbLeft = Math.max(0, carbGoalGrams - (total?.carbs || 0));

   console.log(carbLeft)

  return (
    <div className='w-full h-full flex p-2  flex-col justify-center gap-1 items-center'>
        <div className='w-full flex justify-between items-center'>
            <span className='text-indigo-400 font-light'>Carbs</span>
            <div className='flex justify-center items-center gap-1'>
                <span>{carbPercentage}%</span>
                <span>Cals</span>
            </div>
        </div>

        <div className='w-full h-4 bg-indigo-50 rounded-lg overflow-hidden'>
        <motion.div
          initial={false}
          animate={{ width: `${carbPercentage}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='h-full bg-indigo-400 rounded-lg'
          style={{ width: `${carbPercentage}%`}}
        />
      </div>

        <div className='flex w-full justify-between items-center'>
            <span>{Math.round(grams?.carbGrams)}g</span>
            <span>left {Math.round(carbLeft)} g</span>
        </div>

    </div>
  )
}
