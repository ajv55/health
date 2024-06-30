'use client';
import CardSkeleton from '@/app/components/skeleton/cardSkeleton';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoChevronBackCircle } from 'react-icons/io5'

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

  const newItems = satFoods.filter((sf: any, i) => sf?.calcium > 500);

  const three = [1, 2, 3]

  console.log(newItems)

  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
  <div onClick={() => router.push('/dashboard/plan?tab=Nutrient Targets')} className='flex hover:cursor-pointer justify-start mb-8 items-center gap-1'>
    <IoChevronBackCircle size={35} color='#786ee4' />
    <h2 className='text-lg text-gray-500'>Back</h2>
  </div>
  <h2 className="text-4xl font-bold text-indigo-700 mb-8">Calcium in Example Foods</h2>
  <div className="flex justify-around mb-10">
  {isLoading && three.map((t) => <CardSkeleton key={t} />)}
    {newItems.map((ni: any, i) => (
      <div key={i} className="text-center bg-white hover:shadow-indigo-400 shadow-md p-6 rounded-lg">
        <Image src={ni?.img} width={200} height={200} alt="Food Image" className="h-[14rem] ring-1 ring-indigo-200 drop-shadow-lg w-[17rem] rounded-lg mx-auto mb-2" />
        <p className="text-lg font-semibold text-indigo-700">{ni?.name}</p>
        <p className="text-sm text-indigo-500">{ni?.servingSize}</p>
        <p className="text-xl text-indigo-700">~{ni?.calcium}mg</p>
      </div>
    ))}
  </div>
  <div className="bg-indigo-100 p-4 rounded-lg">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">About Calcium</h3>
    <p className="text-lg text-indigo-600">
      Calcium is essential for building and maintaining strong bones and teeth. The recommended daily intake for adults is about 1,000 mg. Dairy products, leafy green vegetables, and fortified foods are good sources of calcium. Adequate calcium intake can help prevent osteoporosis and support overall bone health.
    </p>
    <div className="mt-4 flex justify-between">
      <Link className=' text-indigo-400 hover:cursor-pointer hover:text-indigo-600 hover:bg-indigo-300 hover:rounded-md p-2 hover:bg-opacity-50' href='/planning'>READ ARTICLE</Link>
    </div>
  </div>
</div>

  )
}

