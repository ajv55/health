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
    <div className='w-full bg-sky-800 p-2 rounded-md mt-4 h-content flex flex-col gap-9 justify-start items-start'>
            <h1 className='text-4xl self-center text-white'>{food}</h1>
            <ul className=' flex w-full justify-evenly items-center list-inside '>
                <div className='border bg-red-100 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide'>Carbs</li>
                   <span className='text-3xl'>{carbs}</span>
                </div>
                <div className='border bg-purple-300 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide'>Protein</li>
                   <span className='text-3xl'>{protein}</span>
                </div>
                <div className='border bg-orange-100 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide'>Fat</li>
                   <span className='text-3xl'>{fat}</span>
                </div>
                <div className='border bg-blue-300 rounded-xl w-[23%] h-[5rem] flex flex-col justify-center items-center'>
                   <li className='text-xl font-bold tracking-wide text-center'>Calories </li>
                   <span className='text-3xl'>{caloriesOfIngredient}</span>
                </div>
            </ul>
    </div>
  )
}
