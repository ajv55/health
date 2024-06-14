import { RootState } from '@/app/store'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ProteinProgress() {

  const total = useSelector((state: RootState) => state.log.totals);
  const grams = useSelector((state: RootState) => state?.log?.grams);
  console.log(grams)
  console.log(total)

    // Assuming you have access to the user's daily protein goal in grams
    const proteinGoalGrams = Math.round(grams?.proteinGrams); // Replace with actual user's daily protein goal

   // Calculate percentage of protein intake relative to the goal
   const proteinPercentage = Math.min(100, Math.round((total?.protein / proteinGoalGrams) * 100));

    // Calculate remaining protein based on the goal and total consumed
  const proteinLeft = Math.max(0, proteinGoalGrams - (total?.protein || 0));

   console.log(proteinPercentage)

  return (
    <div className='w-[32%] h-full flex p-2  flex-col justify-center gap-1 items-center'>
        <div className='w-full flex justify-between items-center'>
            <span className='text-indigo-400 font-light'>Proteins</span>
            <div className='flex justify-center items-center gap-1'>
                <span>{proteinPercentage}%</span>
                <span>cals</span>
            </div>
        </div>

        <div className='w-full h-5 bg-indigo-50 rounded-lg '>
            <div className='h-full bg-indigo-400 rounded-lg' style={{ width: `${proteinPercentage}%` }}></div>
        </div>

        <div className='flex w-full justify-between items-center'>
            <span>{Math.round(grams?.proteinGrams)}g</span>
            <span>left {proteinLeft} g</span>
        </div>

    </div>
  )
}
