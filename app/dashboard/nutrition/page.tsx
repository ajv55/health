import Macro from '@/app/components/nutritionComponent/macro'
import MealGenerator from '@/app/components/nutritionComponent/mealGenerator'
import NutritionHeader from '@/app/components/nutritionComponent/nutritionHeader'
import NutritionTab from '@/app/components/nutritionComponent/nutritionTab'
import React from 'react'

export default function Page
() {
  return (
    <div className='w-full flex flex-col justify-start overflow-scroll items-start'>
       <NutritionHeader/>
       <NutritionTab />
       <MealGenerator />
    </div>
  )
}