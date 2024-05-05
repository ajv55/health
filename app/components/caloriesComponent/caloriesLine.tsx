'use client';
import {Line, Bar} from 'react-chartjs-2';
import { Chart as ChartJS, Legend, Title, Tooltip,  BarController , BarElement , LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import MealCard from './mealCard';
import {motion} from 'framer-motion';
import { format } from 'date-fns'; 
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '@/app/store';
import {setUsersMeals} from '@/app/slices/mealSlice';
import Skeleton from './skeleton';
import { GiEmptyMetalBucket } from "react-icons/gi";
import MealTimeline from './mealTimeline';

ChartJS.register(LineController, Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement, BarController, BarElement )

export default function CaloriesLine() {
    const [userCal, setUserCal] = useState<any>([]);
    const [userMeals, setUserMeals] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const list = useSelector((state: RootState) => state.meal.usersMeals);
    const dispatch = useDispatch();

    const getList = async () => {
      try {
          const res = await axios.get('/api/getlist');
          dispatch(setUsersMeals(res?.data?.usersList))
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



    const mealCal = list?.map((m: any) => m?.totalCalories);
    const validMeals = list?.filter((meal: any) => meal?.date && new Date(meal.date) instanceof Date);
    validMeals?.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const formattedMealDate = validMeals?.map((meal: any) => format(new Date(meal.date), 'MMM dd, yyyy'));
    
    list.map((l: any) => console.log(l?.carbs))

    const option: any = {
      responsive: true,
  indexAxis: 'x',
  scales: {
    x: {
      ticks: {
        color: 'teal',
        beginAtZero: true,
        font: {
          size: 18
        }
      },
      grid: {
        color: 'white',
      },
      title: {
        display: true,
        text: 'Days',
        color: 'white',
        font: {
          size: 35,
        }
      }
    },
    y: {
      ticks: {
        color: 'teal',
        beginAtZero: true,
        font:{
          size: 18
        }
      },
      title: {
        display: true,
        text: 'Calories',
        color:'white',
        font: {
          size: 35
        }
      },
      grid: {
        color: 'white',
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'white', 
        font: {
          size: 15
        }
      }
    }
  }
  };

    const data = {
        labels: formattedMealDate,
        datasets: [{
          label: 'Your Calories',
          data: mealCal,
          backgroundColor: 'rgba(79, 70, 229, 0.5)',
          borderColor: '#9a93ff',
          tension: 0.4,
          barThickness: 50,
          borderWidth: 2,

        }]
      };

      console.log(list)


      const handleDelete = async (id: string) => {
        try {
          await axios.delete(`/api/delete?mealId=${id}`).then(() => toast.success('Deleted A Meal'));
          getList();
          // Handle any additional logic after successful deletion
        } catch (error) {
          console.error('Error deleting meal:', error);
          // Handle error
        }
      }

  return (
    <div className='w-full h-screen relative flex flex-col  justify-evenly gap-10 items-center'>  
    {loading && <Skeleton />}
    {!loading && <h1 className='text-5xl w-[55%]  border-b border-zinc-800 p-2 shadow-md shadow-zinc-800  text-center font-bold tracking-wide'>Your Meals History</h1>   }
         
          {!loading && <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 10 }} className='w-[85%] bg-slate-900 rounded-xl flex justify-center items-center h-[32rem] p-7'>
              <Bar  options={option} data={data} />
            </motion.div>}

            {!loading && <h1 className='text-5xl w-[55%]  border-b border-zinc-800 p-2 shadow-md shadow-zinc-800  text-center font-bold tracking-wide'>Your Meal Logs</h1>   }
           <div className='w-full h-content   flex gap-8 flex-col justify-start items-center'>
            <div className='w-full flex p-1 border-4 border-zinc-900 shadow-xl shadow-zinc-900 flex-wrap gap-5  justify-center items-center'>
              {list.length === 0 && <div className='w-full  h-[23rem] flex flex-col justify-center items-center'><h1 className='text-4xl'>No Meal Logs 😭</h1><GiEmptyMetalBucket size={50}/> </div>}
              {/* {list?.map((m: any, i: number) => <MealCard onDelete={() => handleDelete(m.id)} key={i} food={m.foodItem} cal={m.totalCalories} date={m.date} meal={m.mealType} />)} */}
              
              <ol className="relative w-[99%] border-s border-zinc-900 dark:border-gray-700">                  
                  {list.map((m: any, i: number) => <MealTimeline key={i} onDelete={() => handleDelete(m.id)} carb={m.carbs} vegetable={m.vegetable} drink={m.drink} meat={m.meat}  date={m.date} fruit={m.fruit} mealType={m.mealType} />)}
              </ol>
            </div>
            

           </div>

           
    </div>
  )
}
