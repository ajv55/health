'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoChevronBackCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Page() {

  const [satFoods, setSatFoods] = useState([]);

  const router = useRouter();

  const fetchHighFoods = async () => {
    await axios.get('/api/getHighFoods').then((res) => {
      if(res.status === 201) {
        setSatFoods(res.data)
      }
    })
  }

  useEffect(() => {
    fetchHighFoods();
  }, [])

  const newItems = satFoods.filter((sf: any, i) => sf?.satFat > 8);

  console.log(newItems)

  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
      <div onClick={() => router.push('/dashboard/plan?tab=Nutrient Targets')} className='flex hover:cursor-pointer justify-start mb-8 items-center gap-1'>
        <IoChevronBackCircle size={35} color='indigo' />
        <h2 className='text-lg text-gray-500'>Back</h2>
      </div>
    <h2 className="text-4xl  font-bold text-indigo-700 mb-4">Saturated Fat in Example Foods</h2>
    <div className="flex justify-around mb-5">
      {newItems.map((ni: any, i) => (
        <div key={i} className="text-center bg-white hover:shadow-indigo-400 shadow-md p-6 rounded-lg">
          <Image src={ni?.img} width={200} height={200} alt="Cheese" className="h-[14rem] w-[17rem] rounded-lg mx-auto mb-2" />
          <p className="text-lg font-semibold text-indigo-700">{ni?.name}</p>
          <p className="text-sm text-indigo-500">{ni?.servingSize}</p>
          <p className="text-xl text-indigo-700">~{ni?.satFat}g</p>
      </div>
      ))}
    </div>
    <div className="bg-indigo-100 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-indigo-700 mb-2">About Saturated Fat</h3>
      <p className="text-lg text-indigo-600">
        The 2015 U.S. Dietary Guidelines recommend no more than 10% of total calories come from saturated fats. For your 2,174cals budget that is 24g. Saturated fats are solid at room temperature and come from full-fat dairy products, meat, poultry, and tropical fats such as coconut and palm oils. A diet very high saturated fat intake can raise LDL (bad) cholesterol in your blood. A high LDL level increases risk for heart disease.
      </p>
      <div className="mt-4 flex justify-between">
        <a href="#" className="text-indigo-700 underline">READ ARTICLE</a>
        <a href="#" className="text-indigo-700 underline">RELATED NUTRIENTS</a>
      </div>
    </div>
  </div>
  )
}
