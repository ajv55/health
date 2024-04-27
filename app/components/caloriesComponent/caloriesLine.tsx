'use client';
import {Line, Bar} from 'react-chartjs-2';
import { Chart as ChartJS, BarController , BarElement , LineController, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import MealCard from './mealCard';
import { format } from 'date-fns'; 

ChartJS.register(LineController, LineElement, LinearScale, CategoryScale, PointElement, BarController, BarElement )

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
    const validMeals = meals?.filter((meal: any) => meal?.date && new Date(meal.date) instanceof Date);
    validMeals?.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const formattedMealDate = validMeals?.map((meal: any) => format(new Date(meal.date), 'MMM dd, yyyy'));
    // const mealDate = meals?.map((meal: any) => format(meal?.date, 'MMM dd, yyyy'));
    

    // Format sorted mealDate array

  //  const formattedMealDate = mealDate?.map((date: any) => format(date, 'MMM dd, yyyy'));

    console.log(meals)

    const option: any = {
      responsive: true,
  indexAxis: 'x',
  scales: {
    x: {
      ticks: {
        color: 'black',
        beginAtZero: true,
        font: {
          size: 18
        }
      },
      grid: {
        color: 'black',
      },
      title: {
        display: true,
        text: 'Days',
        color: 'black',
        font: {
          size: 35,
        }
      }
    },
    y: {
      ticks: {
        color: 'black',
        beginAtZero: true,
        font:{
          size: 18
        }
      },
      title: {
        display: true,
        text: 'Calories',
        color:'black',
        font: {
          size: 35
        }
      },
      grid: {
        color: 'black',
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'black', 
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
          label: 'My First Dataset',
          data: mealCal,
          backgroundColor: 'rgb(107, 248, 255)',
          borderColor: 'rgb(0, 49, 80)',
          tension: 0.4,
          barThickness: 50,
          barPercentage: 3,

        }]
      };


      const handleDelete = async (id: string) => {
        try {
          const res = await axios.delete(`/api/delete?mealId=${id}`).then(() => toast.success('Deleted A Meal'));
          console.log(res)
          // Handle any additional logic after successful deletion
        } catch (error) {
          console.error('Error deleting meal:', error);
          // Handle error
        }
      }

  return (
    <div className='w-full h-screen flex justify-evenly items-start'>    
           <div className='w-[49%] border flex justify-center items-center h-[32rem]'>
             <Bar options={option} data={data} />
           </div>
           <div className='w-[47%] h-[32rem] overflow-scroll border flex gap-8 flex-col justify-start items-center'>
            <h1 className='text-5xl text-center font-bold tracking-wide'>Your Meal Logs</h1>
            <div className='w-full flex flex-wrap gap-5  justify-center items-center'>
              {meals?.map((m: any, i: number) => <MealCard onDelete={() => handleDelete(m.id)} key={i} food={m.foodItem} cal={m.totalCalories} date={m.date} meal={m.mealType} />)}
            </div>

           </div>
    </div>
  )
}
