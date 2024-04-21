'use client';
import {useSession} from 'next-auth/react'
import { useEffect, useState } from 'react';
import Exercise from '../exercise';
import ExerciseTable from '../exerciseComponents/exerciseTable';
import Burn from '@/public/burnCalories.svg';
import Dura from '@/public/duration-svgrepo-com.svg';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa";

type DayProps = {
    day?: string 
}



export default function Day({day}: DayProps) {
    const [stringWorkout, setStringWorkout] = useState<any>();
    const [isCompleted, setIsCompleted] = useState<boolean>(false)
 
    const {data: session, update} = useSession();

      const getWorkout = async () => {
    try {
  
      const res = await fetch('/api/open', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({gender: session?.user.gender, age: session?.user.age, weight: session?.user.weight, activity: session?.user.activity})
      })
      const data = await res.json();
      console.log(data.workout)
      update({workoutPlan: data?.workout});
      return console.log('getworkout function ran')
    } catch (error) {
      return console.error('getworkout functiong didnt run', error)
    }
    

  }

    useEffect(() => {
        try {
            const workout = session?.user?.workoutPlan ? session?.user?.workoutPlan as string : null;
            setStringWorkout(workout)
        } catch (error) {
            console.error('Error pasing JSON:', error)
            
        }
    }, [session])

    const workoutPlanJson = session && JSON.parse(stringWorkout)

    const Day1 = workoutPlanJson?.medium_intensity?.day1;
    const Day2 = workoutPlanJson?.medium_intensity?.day2;
    const Day3 = workoutPlanJson?.medium_intensity?.day3;

    const Day1exercises = Day1?.exercise.map((e: any) => e.name);
    const Day2exercises = Day2?.exercise.map((e: any) => e.name);
    const Day3exercises = Day3?.exercise.map((e: any) => e.name);


    console.log(Day1)

  return (
    <div className='w-full h-content  bg-slate-500'>
        <div className='w-full border h-content flex flex-wrap gap-12 justify-start items-start' >
            <div className='w-full border h-content flex justify-end items-center p-2'>
                <button onClick={() => setIsCompleted(!isCompleted)} className='text-4xl text-center px-2.5 py-3 bg-slate-300 rounded-3xl'>{isCompleted ? <FaCheck size={45} color='white' /> : 'Done' }</button>
            </div>
            <div className=' w-[45%] flex ml-6 flex-col gap-5 p-3 '>
            <h1 className='text-5xl text-white self-start font-bold tracking-wider'>Day 1</h1>
                <ExerciseTable 
                exercise1={Day1exercises && Day1exercises[0]} 
                exercise2={Day1exercises && Day1exercises[1]} 
                exercise3={Day1exercises && Day1exercises[2]} 
                exercise1reps={Day1?.exercise[0]?.reps}
                exercise2reps={Day1?.exercise[1]?.reps}
                exercise3reps={Day1?.exercise[2]?.reps}
                exercise3sets={Day1?.exercise[2]?.sets}
                exercise2sets={Day1?.exercise[1]?.sets}
                exercise1sets={Day1?.exercise[0]?.sets}
                />
            </div>

            <div className=' mt-32 border-green-400 flex gap-5 justify-evenly items-center w-[45%] h-content'>
                <div className=' w-[47%] flex flex-col justify-center gap-5 items-center'>
                    <h2 className='text-3xl text-white font-light tracking-widest'>Calories To Burn</h2>
                  <Image src={Burn} alt='burn_caloires_svg' width={120} height={120}></Image>
                  <h1 className='text-7xl text-white font-bold tracking-wider'>{Day1?.calories_burned}</h1>
                </div>

                <div className=' w-[47%] flex flex-col justify-center gap-5 items-center'>
                <h2 className='text-3xl text-white font-light tracking-widest'>Duration</h2>
                  <Image src={Dura} alt='burn_caloires_svg' width={120} height={120}></Image>
                  <h1 className='text-7xl text-white font-bold tracking-wider'>{Day1?.duration}</h1>
                </div>
            </div>

                <div className='w-full flex flex-wrap justify-center gap-3 items-center'>
                    <div className='w-[48%]  mt-4'>
                        {Day1exercises?.map((e: string) => {
                            return  e === Day1?.exercise[0]?.name && <Exercise exercise={e} />
                        })}
                    </div>
                <div className='w-[48%] mt-4 '>
                    {Day1exercises?.map((e: string) => {
                                return  e === Day1?.exercise[1]?.name && <Exercise exercise={e} />
                            })}
                </div>
                <div className='w-[48%]  '>
                    {Day1exercises?.map((e: string) => {
                                return  e === Day1?.exercise[2]?.name && <Exercise exercise={e} />
                            })}
                </div>
                </div>
          
            
        </div>
        {/* day 2 workout */}
        <div className='w-full h-content'>
            <h1>Day 2</h1>
            {Day2exercises?.map((e: string) => {
                return  e === Day2?.exercise[0]?.name && <Exercise exercise={e} />
            })}
        </div>
        {/* day 3 workout */}
        <div>
            <h1>Day 3</h1>
            {Day3exercises?.map((e: string) => {
                return  e === Day3?.exercise[0]?.name && <Exercise exercise={e} />
            })}
        </div>
    </div>
  )
}
