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
import { setExerciseLog } from '@/app/slices/searchSlice';



export default function Personal() {

  const dispatch = useDispatch();
  const stepsModal = useSelector((state: RootState) => state.log.stepsModal);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const todaysStep = useSelector((state: RootState) => state.log.todaysSteps);
  const waterModal = useSelector((state: RootState) => state.water.waterModal);
  const liters = useSelector((state: RootState) => state.water.value)
  const [stepDetailModal, setStepDetailModal] = useState<boolean>(false);
  const [waterDetailModal, setWaterDetailModal] = useState<boolean>(false);
  const exerciseLog = useSelector((state: RootState) => state?.search.exerciseLog);

  const totalCalories = exerciseLog?.reduce((acc, curr) => Number(acc) + Number(curr.caloriesBurned), 0);

  console.log(totalCalories);

   const fetchSteps = async () => {
    await axios.get(`/api/getSteps?currentDate=${currentDate}`).then((res: any) => {
      if(res.status === 201){
        dispatch(setTodaysSteps(res?.data?.totalSteps))
      }
    })
  }

  const fetchExerciseLogs = async () => {
    const res = await axios.get(`/api/getExerciseEntry?currentDate=${currentDate}`);
    if (res.status === 201) {
      dispatch(setExerciseLog(res.data))
    }
  };

  const fetchWaterIntake = async () => {
    await axios.get(`/api/getWater?currentDate=${currentDate}`).then((res: any) => {
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

  useEffect(() => {
    fetchExerciseLogs();
  }, [currentDate]);



  return (
        <div className=' w-[25%] flex flex-col justify-evenly items-center h-full'>
          
        <div className='flex flex-col justify-center items-center gap-1'>
            <div onMouseOver={() => setWaterDetailModal(true)} onMouseLeave={() => setWaterDetailModal(false)} onClick={() => dispatch(setWaterModal(!waterModal))}  className='flex hover:cursor-pointer justify-center items-center gap-1 relative'>
            {waterDetailModal && <div className='w-[210%] lg:flex hidden absolute -bottom-4 -right-9 h-4 p-2 rounded-md bg-black bg-opacity-30  justify-center items-center'><p className='text-xs text-white font-thin'>Start logging water intake </p></div>}
              <h1 className='text-gray-500 lg:text-xl text-lg font-light'>Water</h1>
              <IoWater className='text-indigo-600'  size={20}  />
            </div>
            <span className='text-indigo-600 lg:text-xl text-lg'>{liters}</span>
          </div>

          <div className='flex flex-col  justify-center items-center gap-1'>  
            <div onMouseOver={() => setStepDetailModal(true)} onMouseLeave={() => setStepDetailModal(false)} onClick={() => dispatch(setStepsModal(true))}  className='flex hover:cursor-pointer relative  justify-center items-center gap-1'>
            {stepDetailModal && <div className='w-[170%] absolute -bottom-4 -right-5 h-4 p-2 rounded-md bg-black bg-opacity-30 flex justify-center items-center'><p className='text-xs text-white font-thin'>Start logging steps</p></div>}
              <h1 className='text-gray-500 lg:text-xl text-lg font-light'>Steps</h1>
              <GiFootsteps className='text-indigo-600' size={25}  />
            </div>
            <span className='text-indigo-600 lg:text-xl text-lg'>{todaysStep}</span>
          </div>

          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='text-gray-500 lg:text-xl text-lg font-light'>Exercise</h1>
            <span className='text-indigo-600 lg:text-xl text-lg'>{totalCalories! > 0 ?  totalCalories + ' 🔥' : totalCalories}</span>
          </div>

        </div>
  )
}
