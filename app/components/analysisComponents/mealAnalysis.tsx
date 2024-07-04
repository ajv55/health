'use client';
import { setCurrentDate } from '@/app/slices/weightSlice';
import { RootState } from '@/app/store';
import axios from 'axios';
import { addWeeks, endOfWeek, format, startOfWeek, subWeeks } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { GiFriedEggs, GiKnifeFork, GiPopcorn } from 'react-icons/gi';
import { MdDinnerDining } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

const CaloriesAnalysis = () => {

    const [unhealthyFoods, setUnhealthyFoods] = useState<any>([]);
    const dispatch = useDispatch();

    const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');
  const startOfWeekDate = format(startOfWeek(currentDate!, { weekStartsOn: 1 }), 'MMM d');
  const endOfWeekDate = format(endOfWeek(currentDate!, { weekStartsOn: 1 }), 'MMM d');
  const weekRange = `${startOfWeekDate} to ${endOfWeekDate}`;
  
  const fetchUnhealthyFoods = async () => {
    await axios.get('/api/getLogsForLastSeven').then((res: any) => {
        if(res.status === 201){
            console.log(res.data)
            const breakfastLog = res.data.breakfastLogs
            const lunchLog = res.data.lunchLogs;
            const dinnerLog = res.data.dinnerLogs;
            const snackLog = res.data.snackLogs;
            const allLog = [...breakfastLog, ...lunchLog, ...dinnerLog, ...snackLog];
           setUnhealthyFoods(allLog) 
        }
    })
  };

  useEffect(() => {
    fetchUnhealthyFoods();
  }, []);

  console.log(unhealthyFoods);

  const caloriesOver = unhealthyFoods.reduce((acc: number, cur: any) => acc + cur?.calories, 0) || 0;

  const goToPreviousWeek = () => {
    dispatch(setCurrentDate(subWeeks(currentDate!, 1)));
  };

  const goToNextWeek = () => {
    dispatch(setCurrentDate(addWeeks(currentDate!, 1)));
  };


  return (
    <div className="max-w-4xl rounded-lg bg-indigo-50 mt-10 ring-2 ring-indigo-500 mx-auto p-4">
      <h2 className="text-4xl font-semibold text-indigo-700">Calories Analysis on {formattedDate}</h2>
      
      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-medium text-indigo-600">Recent Meals Providing Most Calories</h3>
        <div className="flex items-center mt-2">
          <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01m-6.938 4h13.856c.938 0 1.792-.384 2.438-1.062C21.616 19.208 22 18.354 22 17.416V6.584c0-.938-.384-1.792-1.062-2.438C20.208 3.384 19.354 3 18.416 3H5.584C4.646 3 3.792 3.384 3.146 4.146A3.49 3.49 0 002 6.584v10.832c0 .938.384 1.792 1.062 2.438C3.792 20.616 4.646 21 5.584 21z" />
            </svg>
          </div>
          <p className="ml-3 text-lg text-gray-600"><span className='text-indigo-500 text-xl'>{unhealthyFoods.length} meals</span> with noticeable calories content provided a total of <span className="font-bold text-indigo-600">{Math.round(caloriesOver)} cals</span> within the last 7 days.</p>
        </div>
      </div>

      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-3xl font-medium text-indigo-600">Calories in Meals</h3>
        <div className="mt-2 flex justify-between items-center">
          <button onClick={goToPreviousWeek} className="text-indigo-600 hover:text-indigo-800" >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg text-gray-600">{weekRange}</span>
          <button onClick={goToNextWeek} className="text-indigo-600 hover:text-indigo-800">
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
            <span className='text-lg'>0 cals, 0% daily average</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <GiKnifeFork className="h-7 w-7 text-orange-500" />
              <span className="ml-2 text-2xl">Lunch</span>
            </span>
            <span className='text-lg'>0 cals, 0% daily average</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <MdDinnerDining className="h-7 w-7 text-blue-500" />
              <span className="ml-2 text-2xl">Dinner</span>
            </span>
            <span className='text-lg'>99 cals, 26% daily average</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <GiPopcorn className="h-7 w-7 text-red-500" />
              <span className="ml-2 text-2xl">Snack</span>
            </span>
            <span className='text-lg'>0 cals, 0% daily average</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesAnalysis;

