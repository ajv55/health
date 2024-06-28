'use client';
import { useSelector, useDispatch } from 'react-redux';
import { GiFootsteps } from 'react-icons/gi'
import { IoWater } from 'react-icons/io5'
import { setStepsModal, setTodaysSteps } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import LogDailySteps from './loggingSteps';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setWater, setWaterModal } from '@/app/slices/waterSlice';
import { C } from '@fullcalendar/core/internal-common';
import toast from 'react-hot-toast';



export default function Personal() {

  const dispatch = useDispatch();
  const stepsModal = useSelector((state: RootState) => state.log.stepsModal);
  const todaysStep = useSelector((state: RootState) => state.log.todaysSteps);
  const waterModal = useSelector((state: RootState) => state.water.waterModal);
  const liters = useSelector((state: RootState) => state.water.value)
  const [stepDetailModal, setStepDetailModal] = useState<boolean>(false);
  const [waterDetailModal, setWaterDetailModal] = useState<boolean>(false);

  console.log(liters);

   const fetchSteps = async () => {
    await axios.get('/api/getSteps').then((res: any) => {
      if(res.status === 201){
        dispatch(setTodaysSteps(res?.data?.totalSteps))
      }
    })
  }

  const fetchWaterIntake = async () => {
    await axios.get('/api/getWater').then((res: any) => {
      console.log(res);
      if(res?.data?.status === 201){
        return dispatch(setWater(res?.data?.addWater))
      }
    }).catch((res) => console.log(res?.response?.data?.error));
  }

  useEffect(() => {
    fetchSteps();
    fetchWaterIntake();

  }, [])



  return (
        <div className=' w-[25%] flex flex-col justify-evenly items-center h-full'>
          
        <div className='flex flex-col justify-center items-center gap-1'>
            <div onMouseOver={() => setWaterDetailModal(true)} onMouseLeave={() => setWaterDetailModal(false)} onClick={() => dispatch(setWaterModal(!waterModal))}  className='flex hover:cursor-pointer justify-center items-center gap-1 relative'>
            {waterDetailModal && <div className='w-[210%] absolute -bottom-4 -right-9 h-4 p-2 rounded-md bg-black bg-opacity-30 flex justify-center items-center'><p className='text-xs text-white font-thin'>Start logging water intake </p></div>}
              <h1 className='text-gray-500 text-xl font-light'>Water</h1>
              <IoWater className='text-indigo-600'  size={20}  />
            </div>
            <span className='text-indigo-600 text-xl'>{liters}</span>
          </div>

          <div className='flex flex-col  justify-center items-center gap-1'>  
            <div onMouseOver={() => setStepDetailModal(true)} onMouseLeave={() => setStepDetailModal(false)} onClick={() => dispatch(setStepsModal(true))}  className='flex hover:cursor-pointer relative  justify-center items-center gap-1'>
            {stepDetailModal && <div className='w-[170%] absolute -bottom-4 -right-5 h-4 p-2 rounded-md bg-black bg-opacity-30 flex justify-center items-center'><p className='text-xs text-white font-thin'>Start logging steps</p></div>}
              <h1 className='text-gray-500 text-xl font-light'>Steps</h1>
              <GiFootsteps className='text-indigo-600' size={25}  />
            </div>
            <span className='text-indigo-600 text-xl'>{todaysStep}</span>
          </div>

          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-gray-500 text-xl font-light'>Exercise</h1>
            <span className='text-indigo-600 text-xl'>0</span>
          </div>

        </div>
  )
}
