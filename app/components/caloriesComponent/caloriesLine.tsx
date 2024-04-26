'use client';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import MealCard from './mealCard';
import { format } from 'date-fns'; 

ChartJS.register(LineController, LineElement, LinearScale, CategoryScale, PointElement )

export default function CaloriesLine() {
    const [userCal, setUserCal] = useState<any>([]);
    const [userMeals, setUserMeals] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getList = async () => {
      try {
          const res = await axios.get('/api/getlist');
          setUserMeals(res?.data);
      } catch (error) {
          setError('Failed to fetch user meals');
          console.error('Error fetching user meals:', error);
      } finally {
          setLoading(false);
      }
  }

    useEffect(() => {

      getList();


       
    }, [])


    const meals = userMeals?.usersList;

    const mealCal = meals?.map((m: any) => m?.totalCalories)
    const mealDate = meals?.map((meal: any) => format(new Date(meal.date), 'MMM dd, yyyy'));

    console.log(mealDate)

    const option = {};

    const data = {
        labels: mealDate,
        datasets: [{
          label: 'My First Dataset',
          data: mealCal,
          fill: false,
          borderColor: 'rgb(209, 62, 13)',
          tension: 0.2
        }]
      };

  return (
    <div className='w-full h-screen flex justify-evenly items-start'>    
           <div className='w-[47%]'>
             <Line options={option} data={data} />
           </div>
           <div className='w-[47%] h-[32rem] overflow-scroll border flex gap-8 flex-col justify-start items-center'>
            <h1 className='text-5xl text-center font-bold tracking-wide'>Your Meal Logs</h1>
            <div className='w-full flex flex-wrap gap-5  justify-center items-center'>
              {meals?.map((m: any, i: number) => <MealCard key={i} food={m.foodItem} cal={m.totalCalories} meal={m.mealType} />)}
            </div>

           </div>
    </div>
  )
}
