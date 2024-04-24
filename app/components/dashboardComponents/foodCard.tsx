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
    <div className='w-full h-[7rem] bg-red-200 flex flex-col justify-start items-center'>
        <div className='w-full h-32'>
            <h1 className='text-2xl'>{food}</h1>
            <div className='w-full flex justify-evenly items-center'>
                <div className=' flex flex-col justify-center items-center'>
                    <h3>{carbs}</h3>
                    <span>Carbs</span>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <h3>{protein}</h3>
                    <span>Protein</span>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <h3>{fat}</h3>
                    <span>Fat</span>
                </div>
            </div>
        </div>
    </div>
  )
}
