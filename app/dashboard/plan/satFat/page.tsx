'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoChevronBackCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import CardSkeleton from '@/app/components/skeleton/cardSkeleton';
import Link from 'next/link';
import style from '@/app/style.module.css';

export default function Page() {

  const [satFoods, setSatFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const fetchHighFoods = async () => {
    setIsLoading(true)
    await axios.get('/api/getHighFoods').then((res) => {
      if(res.status === 201) {
        setSatFoods(res.data)
        setIsLoading(false)
      }
    })
  }

  useEffect(() => {
    fetchHighFoods();
  }, [])

  const newItems = satFoods.filter((sf: any, i) => sf?.satFat > 8);

  const three = [1, 2, 3]

  console.log(three)

  return (
    <div className={`${style.background} p-6 bg-indigo-50 rounded-lg shadow-md`}>
      <div onClick={() => router.push('/dashboard/plan?tab=Nutrient Targets')} className='flex hover:cursor-pointer justify-start mb-5 items-center gap-1'>
        <IoChevronBackCircle size={35} color='#786ee4' />
        <h2 className='text-lg text-gray-500'>Back</h2>
      </div>
    <h2 className="text-4xl  font-bold text-indigo-700 mb-4">Saturated Fat in Example Foods</h2>
    <div className="flex justify-around mb-5">
      {isLoading && three.map((t) => <CardSkeleton key={t} />)}
      {newItems.map((ni: any, i) => (
        <div key={i} className="text-center bg-white hover:shadow-indigo-400 shadow-md p-6 rounded-lg">
          <Image src={ni?.img} width={200} height={200} alt="Cheese" className="h-[14rem] ring-1 ring-indigo-200 drop-shadow-lg w-[17rem] rounded-lg mx-auto mb-2" />
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
      <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/funFact'>READ ARTICLE</Link>
      </div>
    </div>
  </div>
  )
}
