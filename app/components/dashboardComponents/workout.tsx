'use client';
import Day1 from "./day1";
import Day2 from "./day2";
import { use, useEffect, useState } from "react";
import {useSession} from 'next-auth/react';
import Day1Workout from "./day1workout";
import Day2Workout from "./day2workout";
import Day3Workout from "./day3workout";
import Day4Workout from "./day4workout";
import Day5Workout from "./day5workout";
import Day6Workout from "./day6workout";
import Day7Workout from "./day7workout";
import {useAppDispatch, useAppSelector} from '@/app/hooks';
import {decrementProgress, incrementProgress} from '@/app/slices/progressSlice';
import ExerciseLine from "./exerciseLine";


export default function Workout() {
    const {data: session, update} = useSession();

    const progress = useAppSelector((state) => state.progress.value);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState<boolean>(true);
    const [day, setDay] = useState('Day 1');
    const [workout, setWorkout] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const usersWorkoutPlan = session && JSON.parse(session?.user?.workoutPlan);

    const getWorkout = async () => {
        if (session?.user?.workoutPlan !== null) {
            return console.log('workout plan exist already')
        }
        const res = await fetch('/api/open', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({gender: session?.user.gender, age: session?.user.age, weight: session?.user.weight, activity: session?.user.activity})
          })
          const data = await res.json();
          console.log(data.workout)
          update({workoutPlan: data?.workout});
    }

    useEffect(() => {

        if(session?.user?.workoutPlan !== null) {
            setIsLoading(false)
            return console.log('user has a workout plan already')
        } else {
            getWorkout();
            setIsLoading(false)
           return console.log('user has no workout plan and get function should have ran by now')
        }
    
    }, [])

    console.log(usersWorkoutPlan)
   

    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']


  return (
    <div className="w-[48%] mt-4 mr-6 relative rounded-3xl h-[51rem]  flex flex-col justify-start items-start bg-slate-100">
        {isLoading && <div className="w-full absolute top-0 left-0 z-20 h-full rounded-3xl bg-slate-700">
        <div role="status" className="w-[95%] p-3 h-[100%] rounded-2xl flex flex-col justify-center item-center gap-5 animate-pulse">
                <div className="h-5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-3 bg-gray-700 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
            </div>}
        <div className="rounded-3xl absolute top-0 w-full h-16 bg-gradient-to-tr from-slate-600 via-slate-800 to-slate-400 flex justify-start p-2 items-center ">
            <h1 className="text-white text-center text-xl font-bold tracking-wider">Daily Workout Challenges</h1>
            
            <div className="w-[67%] bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${Math.round(progress)}%`}}> {Math.round(progress)}%</div>
            </div>

        </div>

        <div className="w-full h-44 bg-sky-100 flex justify-center items-end mt-10">
            {days.map((d, i) => {
                return <Day1 style={{backgroundColor: `${day === d ? '#475569' : '#94a3b8'}`, color: `${day === d ? 'white' : 'black'}`}} key={i} day={d} onClick={() => {
                    setDay(d);
                    setOpen(true);
                }} />
            })}
            
        </div>

        <div className="w-full h-[67%] overflow-scroll ">
            {open && day === 'Day 1' && <Day1Workout />}
            {open && day === 'Day 2' && <Day2Workout />}
            {open && day === 'Day 3' && <Day3Workout />}
            {open && day === 'Day 4' && <Day4Workout />}
            {open && day === 'Day 5' && <Day5Workout />}
            {open && day === 'Day 6' && <Day6Workout />}
            {open && day === 'Day 7' && <Day7Workout />}
        </div>

        <div className="w-full h-[21rem]">
            <ExerciseLine />
        </div>
    </div>
  )
}
