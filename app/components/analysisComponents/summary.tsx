'use client';
import React, { useEffect, useState } from 'react'
import DatePicker from '../tabComponents/datePicker'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import axios from 'axios';


export default function Summary() {
    const {data: session} = useSession();

    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);

    const userCalories = session?.user.recommend;
    const total = useSelector((state: RootState) => state.log.totals);
    const currentDate = useSelector((state: RootState) => state.weight.currentDate);
    const formattedDate = format(currentDate!, 'MMM d');

    const fetchMealLogs = async (date: any) => {
        await axios.get(`/api/getBreakfastByDate?date=${date}`).then((res: any) => {
          if (res.status === 201) {
            setBreakfast(res.data);
          }
        });
      };

      const fetchLunchLogs = async (date: Date) => {
        await axios.get(`/api/getLunchByDate?date=${date}`).then((res: any) => {
          if (res.status === 201) {
            console.log(res)
            setLunch(res.data);
          }
        });
      };

      useEffect(() => {
        fetchMealLogs(currentDate);
        fetchLunchLogs(currentDate!)
      }, [currentDate])

      console.log(lunch)
   

    const maintenanceCalories = Number(userCalories) || 0;
   const caloriesLeft = maintenanceCalories - (total?.calories || 0);
   const percentageConsumed = ((total?.calories || 0) / maintenanceCalories) * 100;

   console.log(percentageConsumed)
  return (
    <div className='max-w-6xl mx-auto bg-gray-100 rounded-lg ring-1 ring-indigo-300 p-4 drop-shadow-xl'>
         <div className="flex border-b-zinc-800 border-b p-2 items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-600">Calories Analysis on {formattedDate}</h2>
        <button className="text-indigo-600 font-medium">Get Premium Analysis</button>
      </div>
      <div className="mt-4">
        <div className="text-gray-600 text-2xl">0 cals</div>
        <div className="text-lg text-gray-500">0% of budget {maintenanceCalories} cals</div>
        <div className="text-lg font-semibold text-gray-800">{caloriesLeft} left</div>
        <div className="h-2 mt-2 bg-gray-200 rounded-full">
          <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${percentageConsumed}%` }}></div>
        </div>
      </div>
      <div className="mt-6">
       <DatePicker />
        {/* Assuming you will insert the date picker here */}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-800">About Calories</h3>
        <p className="text-gray-600 text-sm mt-2">
          Calories measure the amount of energy we consume from foods and beverages and the amount we burn from basal metabolism (at complete rest), thermogenesis (to digest and process food), and physical activity. To lose weight, calories intake must be less than calories burned. To gain weight, calories intake must be more than calories burned. To maintain weight, calories intake needs to match calories burned.
        </p>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 font-medium">Read Article</a>
          <a href="#" className="ml-4 text-indigo-600 font-medium">Related Nutrients</a>
        </div>
      </div>
        
    </div>
  )
}
