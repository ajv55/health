'use client';
import CardSkeleton from '@/app/components/skeleton/cardSkeleton';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoChevronBackCircle } from 'react-icons/io5'
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

  const newItems = satFoods.filter((sf: any, i) => sf?.sodium > 800);

  const three = [1, 2, 3]

  console.log(newItems)

  return (
    <div className={`${style.background} p-6 bg-indigo-50 rounded-lg shadow-md`}>
    <div onClick={() => router.push('/dashboard/plan?tab=Nutrient Targets')} className='flex hover:cursor-pointer justify-start mb-5 items-center gap-1'>
      <IoChevronBackCircle size={35} color='#786ee4' />
      <h2 className='text-lg text-gray-500'>Back</h2>
    </div>
    <h2 className="text-4xl font-bold text-indigo-700 mb-7">Sodium in Example Foods</h2>
    <div className="flex justify-around mb-10">
    {isLoading && three.map((t) => <CardSkeleton key={t} />)}
      {newItems.map((ni: any, i) => (
        <div key={i} className="text-center bg-white hover:shadow-indigo-400 shadow-md p-6 rounded-lg">
          <Image src={ni?.img} width={200} height={200} alt={ni?.name} className="h-[14rem] ring-1 ring-indigo-200 drop-shadow-lg w-[17rem] rounded-lg mx-auto mb-2" />
          <p className="text-lg font-semibold text-indigo-700">{ni?.name}</p>
          <p className="text-sm text-indigo-500">{ni?.servingSize}</p>
          <p className="text-xl text-indigo-700">~{ni?.sodium}mg</p>
        </div>
      ))}
    </div>
    <div className="bg-indigo-100 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-indigo-700 mb-2">About Sodium</h3>
      <p className="text-lg text-indigo-600">
        The American Heart Association recommends no more than 2,300 milligrams (mg) a day and moving toward an ideal limit of no more than 1,500 mg per day for most adults. High sodium intake can raise blood pressure, which is a major risk factor for heart disease and stroke.
      </p>
      <div className="mt-4 flex justify-between">
        <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/sodiumFact'>READ ARTICLE</Link>
      </div>
    </div>
  </div>
  )
}
