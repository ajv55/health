import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaLeaf, FaGlassWhiskey, FaUtensils, FaAppleAlt, FaSmile, FaRunning, FaBed, FaClock, FaSeedling, FaDumbbell } from 'react-icons/fa';
import AdviceSkeleton from '../skeleton/adviceSkeleton';
import Link from 'next/link';

const iconMapping = {
  FaLeaf: FaLeaf,
  FaGlassWhiskey: FaGlassWhiskey,
  FaUtensils: FaUtensils,
  FaAppleAlt: FaAppleAlt,
  FaSmile: FaSmile,
  FaRunning: FaRunning,
  FaBed: FaBed,
  FaClock: FaClock,
  FaSeedling: FaSeedling,
  FaDumbbell: FaDumbbell
} as any;

export default function MyAdvice() {

    const [adviceList, setAdviceList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAdvice = async () => {
        await axios.get('/api/getAdvice').then((res: any) => {
            if(res.status === 201){
                setAdviceList(res?.data.slice(0, 30)); 
                setLoading(false);
            }
        })
    }

    useEffect(()=> {
        fetchAdvice();
    }, [])

    console.log(adviceList)

  return (
    <div className="bg-indigo-50 ring-1 ring-indigo-300  max-w-5xl mx-auto  p-6 rounded-lg shadow-md">
    <h2 className="text-4xl font-bold text-indigo-700 mb-6">Healthy Advice</h2>
    <ul className="list-disc bg-white ring-2 ring-indigo-400 rounded-md drop-shadow-lg py-5 pl-5 flex flex-col justify-start items-start gap-4 space-y-2">
    {loading ? <AdviceSkeleton /> : adviceList?.map((advice: any, index) => {
            const IconComponent = iconMapping[advice?.icon];
            return (
              <div key={index} className='flex lg:p-0 p-1 items-center gap-5 space-x-2 my-2'>
                <IconComponent size={30} className='text-indigo-700' />
                <p className='text-indigo-700 lg:text-2xl text-sm font-semibold'>{advice?.text}</p>
              </div>
            );
          })}
    </ul>
    
      <div className="mt-4">
        <Link href='/pricing' className="text-indigo-600 text-sm">Become a premium user to access more advice!</Link>
      </div>
  </div>
  )
}
