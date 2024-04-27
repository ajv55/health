'use client';
import {Line, Bar} from 'react-chartjs-2';
import { Chart as ChartJS, Legend, Title, Tooltip,  BarController , BarElement , LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import MealCard from './mealCard';
import { format } from 'date-fns'; 
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '@/app/store';
import {setUsersMeals} from '@/app/slices/mealSlice';
import Skeleton from './skeleton';

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

      console.log(list)
  }

    useEffect(() => {

      getList();


       
    }, [])



    const mealCal = list?.map((m: any) => m?.totalCalories)
    const validMeals = list?.filter((meal: any) => meal?.date && new Date(meal.date) instanceof Date);
    validMeals?.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const formattedMealDate = validMeals?.map((meal: any) => format(new Date(meal.date), 'MMM dd, yyyy'));
    // const mealDate = meals?.map((meal: any) => format(meal?.date, 'MMM dd, yyyy'));
    

    // Format sorted mealDate array

  //  const formattedMealDate = mealDate?.map((date: any) => format(date, 'MMM dd, yyyy'));

    // console.log(meals)

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
    <div className='w-full h-screen relative flex  justify-evenly gap-10 items-center'>  
    {loading && <Skeleton />}
         
           
           <div className='w-[47%] h-[32rem] overflow-scroll  flex gap-8 flex-col justify-start items-center'>
           {!loading && <h1 className='text-5xl text-center font-bold tracking-wide'>Your Meal Logs</h1>   }
            <div className='w-full flex flex-wrap gap-5  justify-center items-center'>
              {list?.map((m: any, i: number) => <MealCard onDelete={() => handleDelete(m.id)} key={i} food={m.foodItem} cal={m.totalCalories} date={m.date} meal={m.mealType} />)}
            </div>

           </div>

           {!loading && <div className='w-[47%] bg-slate-900 rounded-xl flex justify-center items-center h-[23rem] p-7'>
             <Bar  options={option} data={data} />
           </div>}
    </div>
  )
}
