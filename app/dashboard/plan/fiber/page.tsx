'use client';
import CardSkeleton from '@/app/components/skeleton/cardSkeleton';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoChevronBackCircle } from 'react-icons/io5'
import style from '@/app/style.module.css';

export default function Page() {

    const [fiberItems, setFiberItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const fetchHighFoods = async () => {
        setIsLoading(true)
        await axios.get('/api/getHighFoods').then((res: any) => {
          if(res.status === 201) {
            setFiberItems(res.data)
            setIsLoading(false)
          }
        })
      }
    
      useEffect(() => {
        fetchHighFoods();
      }, [])
    
      const newItems = fiberItems.filter((sf: any, i) => sf?.fiber > 10);

      const three = [1, 2, 3]


      console.log(newItems)

  return (
    <div className={`${style.background} p-6 bg-indigo-50 rounded-lg shadow-md`}>
    <div onClick={() => router.push('/dashboard/plan?tab=Nutrient Targets')} className='flex hover:cursor-pointer justify-start mb-5 items-center gap-1'>
      <IoChevronBackCircle size={35} color='#786ee4' />
      <h2 className='text-lg text-gray-500'>Back</h2>
    </div>
    <h2 className="text-4xl font-bold text-indigo-700 mb-7">Fiber Content in Example Foods</h2>
    <div className="flex justify-around mb-10">
    {isLoading && three.map((t) => <CardSkeleton key={t} />)}
      {newItems.map((item: any, i) => (
        <div key={i} className="text-center bg-white hover:shadow-indigo-400 shadow-md p-6 rounded-lg">
          <Image src={item.img} width={200} height={200} alt={item.name} className="h-[14rem] ring-1 ring-indigo-200 drop-shadow-lg w-[17rem] rounded-lg mx-auto mb-2" />
          <p className="text-lg font-semibold text-indigo-700">{item.name}</p>
          <p className="text-sm text-indigo-500">{item.servingSize}</p>
          <p className="text-xl text-indigo-700">~{item.fiber}g</p>
        </div>
      ))}
    </div>
    <div className="bg-indigo-100 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-indigo-700 mb-2">About Fiber</h3>
      <p className="text-lg text-indigo-600">
        Dietary fiber is an essential part of a healthy diet. It helps to keep the digestive system healthy, can aid in weight management, and can lower cholesterol levels. The recommended daily intake for adults is 25 grams for women and 38 grams for men. High-fiber foods include fruits, vegetables, whole grains, and legumes.
      </p>
      <div className="mt-4 flex justify-between">
        <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/fiberFact'>READ ARTICLE</Link>
      </div>
    </div>
  </div>
  )
}
