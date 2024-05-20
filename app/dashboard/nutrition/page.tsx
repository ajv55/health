import Macro from '@/app/components/nutritionComponent/macro'
import MealGenerator from '@/app/components/nutritionComponent/mealGenerator'
import NutritionHeader from '@/app/components/nutritionComponent/nutritionHeader'
import NutritionTab from '@/app/components/nutritionComponent/nutritionTab'
import WaterIntake from '@/app/components/nutritionComponent/waterIntake'
import React from 'react'

export default function Page
() {
  return (
    <div className='w-full flex flex-col justify-start overflow-scroll items-start'>
       <NutritionHeader/>
      <div className='w-full flex justify-evenly items-center'>
        <MealGenerator />
        <WaterIntake />
      </div>
       <NutritionTab />
       
    </div>
  )
}