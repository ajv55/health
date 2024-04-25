import Image from 'next/image'
import React from 'react';

type FoodCardProps = {
    food?: string,
    carbs?: string,
    fat?: string, 
    protein?: string,
    caloriesOfMeal?: string,
    caloriesOfIngredient?: string
}

export default function FoodCard({food, carbs, fat, protein, caloriesOfIngredient, caloriesOfMeal}: FoodCardProps) {
  return (
    <div className='w-full  bg-slate-300 drop-shadow-2xl p-2 rounded-md mt-4 h-content flex flex-col gap-9 justify-start items-start'>
            <h1 className='text-4xl tracking-wide self-center text-zinc-900'>{food}</h1>
            <ul className=' flex w-full justify-evenly items-center list-inside '>
                <div className=' bg-red-100 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide'>Carbs</li>
                   <span className='text-3xl'>{carbs}</span>
                </div>
                <div className=' bg-purple-300 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide'>Protein</li>
                   <span className='text-3xl'>{protein}</span>
                </div>
                <div className=' bg-orange-100 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide'>Fat</li>
                   <span className='text-3xl'>{fat}</span>
                </div>
                <div className=' bg-blue-300 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide text-center'>Calories </li>
                   <span className='text-3xl'>{caloriesOfIngredient}</span>
                </div>
            </ul>
    </div>
  )
}
