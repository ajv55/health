'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react'
import { RiH1 } from 'react-icons/ri';


export default function GeneratedMeal() {
  const [activeTab, setActiveTab] = useState('day_1');

  const [mealPlans, setMealPlans] = useState([]);


  const getMeals = async () => {
    await axios.get('/api/getUserMeals').then((res) => setMealPlans(res?.data?.data))
  }

  useEffect(() => {
    getMeals();
  }, [])

  const handleTabClick = (tabId: string) => {
    console.log(tabId)
    setActiveTab(tabId);
};

 const newPlan: any = mealPlans.map((mp: any, i: number) => {
  const meals = mp?.meals && JSON.parse(mp?.meals);
  return meals
 } );

 console.log(newPlan)
 const meals = newPlan.map((np: any) => np?.mealPlan)




  // const jsonMeal = mealPlans && JSON.parse(mealPlans!)
  console.log(meals)
  // const day1: any = jsonMeal?.mealPlan?.map((jd: any) => jd && jd?.Day_1?.lunch);
  // const day2 = jsonMeal?.mealPlan?.map((jd: any) => jd?.Day_2);

  return (
    <div className='w-full mt-14 h-content flex flex-wrap  justify-center items-center'>
      {mealPlans.length === 0 && <div className='w-[85%] h-[34rem] flex justify-center items-center rounded-2xl shadow-lg shadow-zinc-900'>
        <h1 className=' text-5xl text-center'>No generated meal yet 😭</h1>
        </div>}
        
        {mealPlans.length !== 0 && <h1 className='text-6xl mb-10 '>Your Generated Meal Plans</h1>}
      <div className="mb-4 w-full h-screen flex flex-wrap justify-center items-center gap-3 overflow-scroll  relative  border-b border-gray-200 dark:border-gray-700" >
        {meals.map((meal: any) => meal.map((m: any, i: number) => {
          console.log(m)
          return (
            <div key={i} className="border w-[42%] h-content border-gray-300 rounded-2xl shadow-lg shadow-teal-500 p-4 mb-6 bg-gradient-to-bl from-violet-900 via-violet-600 to-violet-200">
              <h3 className="font-bold text-3xl mb-2 text-white text-center text-balance">{m?.meal}</h3>
              <ul className="list-disc  list-inside mb-4">
                {m.ingredients.map((ingredient: string, idx: number) => (
                  <li key={idx} className="text-white text-xl">{ingredient}</li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4 text-white">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-xl">Calories</span>
                  <span className='text-lg'>{m.calories}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-xl">Protein</span>
                  <span className='text-lg'>{m.protein}g</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-xl">Carbs</span>
                  <span className='text-lg'>{m.carbs}g</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-xl">Fat</span>
                  <span className='text-lg'>{m.fat}g</span>
                </div>
              </div>
            </div>
        
          )
        }))}
      </div>
    </div>
  )
}
