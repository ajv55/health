'use client';
import { SlOptionsVertical } from 'react-icons/sl';
import { useSession } from 'next-auth/react';
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogModal } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import LogMenu from './logMenu';
import { AnimatePresence } from 'framer-motion';

export default function Main() {

    const {data: session, update} = useSession();
    const [modalTrue, setModalTrue] = useState<boolean>(false);
    const [moreDetailModal, setMoreDetailModal] = useState<boolean>(false);
    const logModal = useSelector((state: RootState) => state.log.logModal);
    const dispatch = useDispatch();
    const recommend = useSelector((state: RootState) => state.weight.recommend);
    const activity = session?.user.activity ?? 'Moderate-Exercise';
    const userCalories = Number(session?.user.calories);
    const userRecommend = session?.user?.recommend ?? 0

    console.log(userRecommend)


   
  return (
    <div className='flex w-full p-2 relative justify-between items-center'>
        {modalTrue && <div className='w-[20%] absolute -bottom-2 -left-3 h-4 rounded-md bg-black bg-opacity-30 flex justify-center items-center'><p className='text-xs text-white font-thin'>Click here to start logging.</p></div>}
        {moreDetailModal && <div className='w-[20%] absolute -bottom-2 -right-3 h-4 rounded-md bg-black bg-opacity-30 flex justify-center items-center'><p className='text-xs text-white font-thin'>Click for more Diet Info.</p></div>}
        <AnimatePresence>{logModal && <LogMenu />}</AnimatePresence>
        <div onClick={() => dispatch(setLogModal(true)) } onMouseLeave={() => setModalTrue(false)} onMouseOver={() => setModalTrue(true)}  className='bg-indigo-600 hover:bg-indigo-800 cursor-pointer drop-shadow-xl bg-opacity-86 lg:w-[68px] xl:w-[65px] w-[64px] h-14 flex justify-center items-center rounded-full'>
          <FaPlus className=' text-white' size={27} />
        </div>
        <div className='flex flex-col w-full justify-end  items-center'>
          <h1 className='text-xl text-gray-400'>Calories Allowance</h1>
          <span className='text-4xl text-indigo-600 font-light'>{userRecommend}</span>
        </div>
        <div onMouseLeave={() => setMoreDetailModal(false)} onMouseOver={() => setMoreDetailModal(true)} className='hover:bg-slate-200 hover:bg-opacity-55 w-[65px] h-14 flex justify-center items-center rounded-full'>
          <SlOptionsVertical className='cursor-pointer' size={27} />
        </div>
      </div>
  )
}
