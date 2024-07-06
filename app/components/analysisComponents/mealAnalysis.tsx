'use client';
import { setCurrentDate } from '@/app/slices/weightSlice';
import { RootState } from '@/app/store';
import axios from 'axios';
import { addDays, addWeeks, endOfWeek, format, startOfDay, startOfWeek, subDays, subWeeks } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GiFriedEggs, GiKnifeFork, GiPopcorn } from 'react-icons/gi';
import { MdDinnerDining } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

const CaloriesAnalysis = () => {

    const [unhealthyFoods, setUnhealthyFoods] = useState<any>([]);
    const [allFoods, setAllFoods] = useState<any>({});
    const [duration, setDuration] = useState<number>(7); 
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const isActive = session?.user.isActive as boolean;
    const currentDate = useSelector((state: RootState) => state.weight.currentDate);
    const router = useRouter()


    const startDate = startOfDay(subDays(currentDate!, duration - 1));
    const endDate = startOfDay(currentDate!);
    const formattedStartDate = format(startDate, 'MMM d');
    const formattedEndDate = format(endDate, 'MMM d');
    const  weekRange = `${formattedStartDate} to ${formattedEndDate}`;
    const formattedDate = format(currentDate!, 'MMM d');
  
  const fetchUnhealthyFoods = async () => {
    await axios.get('/api/getLogsForLastSeven').then((res: any) => {
        if(res.status === 201){
            const breakfastLog = res.data.breakfastLogs
            const lunchLog = res.data.lunchLogs;
            const dinnerLog = res.data.dinnerLogs;
            const snackLog = res.data.snackLogs;
            const allLog = [...breakfastLog, ...lunchLog, ...dinnerLog, ...snackLog];
           setUnhealthyFoods(allLog) 
        }
    })
  };

  const fetchAllLogs = async () => {

    const startDate = startOfWeek(currentDate!, { weekStartsOn: 1 });
    const endDate = endOfWeek(currentDate!, { weekStartsOn: 1 });

    await axios.get(`/api/getLastSevenTotal?startDate=${startDate}&endDate=${endDate}&days=${duration}`).then((res: any) => {
      if(res.status === 201){
        setAllFoods(res?.data)
      }
    })
  }

  useEffect(() => {
    fetchUnhealthyFoods();
  }, []);

  useEffect(() => {
    fetchAllLogs();
  }, [currentDate, duration])


const totalCalories = unhealthyFoods.reduce((acc: number, cur: any) => acc + cur?.calories, 0) || 0;


console.log(allFoods)

const goToPrevious = () => {
  dispatch(setCurrentDate(subDays(currentDate!, duration)));
};

const goToNext = () => {
  dispatch(setCurrentDate(addDays(currentDate!, duration)));
};

const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newDuration = parseInt(e.target.value);
  setDuration(newDuration);

  if (newDuration === 30 && isActive === false) {
      router.push('/pricing'); // Redirect to pricing page if not active and trying to select 30 days
  }
};



  return (
    <div className="max-w-5xl rounded-lg bg-indigo-50 mt-10 ring-2 ring-indigo-500 mx-auto p-4">
      <h2 className="text-4xl font-semibold bg-gradient-to-br from-indigo-600 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">Calories Analysis on {formattedDate}</h2>
      
      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-medium text-indigo-600">Recent Meals Providing Most Calories</h3>
        <select
            value={duration}
            onChange={handleDurationChange}
            className="p-2 border rounded-md"
          >
            <option value={7}>Last 7 Days</option>
            <option value={30}>Last 30 Days{isActive === false ?  ' 🔐' : ''}</option>
          </select>
        <div className="flex items-center mt-2">
          <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01m-6.938 4h13.856c.938 0 1.792-.384 2.438-1.062C21.616 19.208 22 18.354 22 17.416V6.584c0-.938-.384-1.792-1.062-2.438C20.208 3.384 19.354 3 18.416 3H5.584C4.646 3 3.792 3.384 3.146 4.146A3.49 3.49 0 002 6.584v10.832c0 .938.384 1.792 1.062 2.438C3.792 20.616 4.646 21 5.584 21z" />
            </svg>
          </div>
          <p className="ml-3 text-lg text-gray-600"><span className='text-indigo-500 text-xl'>{unhealthyFoods.length} meals</span> with noticeable calories content provided a total of <span className="font-bold text-indigo-600">{Math.round(totalCalories)}  cals</span> within the last {duration} days.</p>
        </div>
      </div>

      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-3xl font-medium text-indigo-600">Calories in Meals</h3>
        <div className="mt-2 flex justify-between items-center">
          <button onClick={goToPrevious} className="text-indigo-600 hover:text-indigo-800" >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg text-gray-600">{weekRange}</span>
          <button onClick={goToNext} className="text-indigo-600 hover:text-indigo-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <GiFriedEggs className="h-7 w-7 text-yellow-400" />
              <span className="ml-2 text-2xl">Breakfast</span>
            </span>
            <span className='text-xl'><span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.totalBreakfastCalories)}</span> cals, <span className=' text-indigo-600 text-4xl'>{Math.round(allFoods?.breakfastPercentage) || 0}%</span> daily average</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <GiKnifeFork className="h-7 w-7 text-orange-500" />
              <span className="ml-2 text-2xl">Lunch</span>
            </span>
            <span className='text-xl'><span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.totalLunchCalories)}</span> cals, <span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.lunchPercentage) || 0}%</span> daily average</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <MdDinnerDining className="h-7 w-7 text-blue-500" />
              <span className="ml-2 text-2xl">Dinner</span>
            </span>
            <span className='text-xl'><span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.totalDinnerCalories)}</span> cals, <span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.dinnerPercentage) || 0}% </span> daily average</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <GiPopcorn className="h-7 w-7 text-red-500" />
              <span className="ml-2 text-2xl">Snack</span>
            </span>
            <span className='text-xl'><span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.totalSnackCalories)}</span> cals, <span className='text-indigo-600 text-4xl'>{Math.round(allFoods?.snackPercentage) || 0}%</span> daily average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesAnalysis;

