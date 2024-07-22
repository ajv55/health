'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Custom() {

    const {data: sessoin} = useSession();
  const userIsActive = sessoin?.user?.isActive || false;
  const [customFoods, setCustomFoods] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchCustomFoods = async () => {
    setLoading(true);
    await axios.get('/api/getCustomFoods').then((res) => {
        if(res.status === 201){
            setCustomFoods(res.data)
        }
    })
    setLoading(false)
  }

  useEffect(() => {
    fetchCustomFoods();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto ring-1 ring-indigo-400 bg-indigo-50 shadow-md rounded-lg lg:p-6 p-4 relative">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <Link href='/dashboard/calories' className="text-indigo-600 lg:text-xl text-sm font-semibold">
            ← BACK TO MEALS
          </Link>
          <Link href='/dashboard/calories/search/customFood' className="text-indigo-600 hover:bg-indigo-400 hover:rounded-md drop-shadow-lg hover:text-indigo-100 lg:text-xl text-sm p-2 font-semibold">
            CREATE AND LOG CUSTOM FOOD
          </Link>
        </div>
        <div className="bg-white overflow-scroll shadow-md mt-5 rounded-lg p-3 ring-2 ring-indigo-300">
          <h2 className="text-xl font-semibold text-indigo-500 mb-4">
            Custom Foods
          </h2>
          {loading && <div className="w-full h-14 rounded-lg bg-indigo-400 animate-pulse"></div>}
          {customFoods?.length === 0 && !loading && <h1 className='text-indigo-300'>No custom foods added.</h1>}
          {!loading && customFoods?.map((rf: any) => {
              console.log(rf)
              return (
                <Link href={{
                  pathname: `/dashboard/calories/search/${rf.name}`,
                  query: {
                    name: rf.name,
                    calories: rf.calories,
                    fat: rf.fat,
                    carbs: rf.carbs,
                    protein: rf.protein,
                    servingSize: rf.servingSize,
                    sodium: rf.sodium,
                    transFat: rf.transFat,
                    satFat: rf.satFat,
                    calcium: rf.calcium,
                    fiber: rf.fiber
                  }
                }} className="flex mt-3 hover:cursor-pointer hover:bg-white hover:ring-2 hover:ring-indigo-400 justify-between items-center bg-indigo-100 p-4 rounded" key={rf?.name}>
                  <span className="text-indigo-600  font-bold">{rf?.name}</span>
                  <span className="text-indigo-600 font-bold">{rf?.calories} Cals</span>
                </Link>
              )
            })}
        </div>
        <div className="mt-4 flex justify-end items-center w-full">
          <h2>{userIsActive === false ? <Link className="text-indigo-600 text-sm" href='/pricing'>Become a premium user!</Link> : ''}</h2>
        </div>
      </div>
    </div>
  )
}
