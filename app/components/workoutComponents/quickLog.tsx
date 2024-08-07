'use client';
import { setExerciseLog } from '@/app/slices/searchSlice';
import { RootState } from '@/app/store';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

export default function QuickLog({isDone, setIsDone, onClose}: {onClose: () => void, isDone?: boolean, setIsDone: (e: any) => void}) {

    const [time, setTime] = useState(0); // default to 30 minutes
    const [unit, setUnit] = useState('min');
    const [calories, setCalories] = useState(0);
    const currentDate = useSelector((state: RootState) => state.weight.currentDate);
    const dispatch = useDispatch();

    const fetchExerciseLogs = async () => {
        const res = await axios.get(`/api/getExerciseEntry?currentDate=${currentDate}`);
        if (res.status === 201) {
          dispatch(setExerciseLog(res.data))
        }
      };

    const handlePostExercise = async () => {
        await axios.post('/api/postExercise', {name: 'Generic exercise', duration: `${time.toString()} ${unit}`,  caloriesBurned: calories.toString(), icon: 'FaWalking'  }).then((res) => {
          if(res.status === 201){
            toast.success('Added a exercise entry');
            onClose();
            fetchExerciseLogs();
          }
        })
      };


    

      const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(parseFloat(event.target.value));
      };

      const handleCaloriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCalories(parseFloat(event.target.value));
      };
    
      const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUnit(event.target.value);
      };

      console.log(calories,time, unit )


  return (
    <div  className="fixed lg:-inset-10 inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-2.5 z-40 rounded-lg overflow-hidden ring-4 ring-indigo-600 shadow-xl max-w-3xl w-full">
        <div className='flex justify-between mb-4 items-center'>
           <h1 className='lg:text-5xl text-3xl  text-indigo-600'>Log Exercise Quickly</h1>
           <IoCloseCircle onClick={onClose} size={40}  className='text-indigo-600 hover:cursor-pointer '/>
        </div>
        <label className="block text-2xl font-medium text-indigo-500">
            Enter Calories
          </label>
            <input
              type="number"
              className="block w-full pl-7 border-b-2 p-2.5 border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="0"
              value={calories}
              onChange={handleCaloriesChange}
            />

         <div className="mt-4">
          <label className="block text-2xl font-medium text-indigo-500">
            Enter Duration
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              className="block w-full pl-7 border-b-2 p-2.5 border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="0"
              value={time}
              onChange={handleTimeChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="min" className="sr-only">
                Minutes
              </label>
              <select
                id="min"
                name="min"
                className="h-full py-0 pl-2 pr-7 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                value={unit}
                onChange={handleUnitChange}
              >
                <option value='min'>min</option>
                <option value='hr'>hr</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
        <button
            type="button"
            className="mt-4 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            onClick={handlePostExercise}
          >
            Log Entry
          </button>
        </div>
      </div> 
    </div>
  )
}
