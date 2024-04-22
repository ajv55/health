'use client';
import Day1 from "./day1";
import Day2 from "./day2";
import { use, useEffect, useState } from "react";
import {useSession} from 'next-auth/react';
import Day1Workout from "./day1workout";
import Day2Workout from "./day2workout";


export default function Workout() {
    const [open, setOpen] = useState<boolean>(true);
    const [day, setDay] = useState('Day 1');
    const [workout, setWorkout] = useState({});



    const {data: session} = useSession();

    const usersWorkoutPlan = session && JSON.parse(session?.user?.workoutPlan);

    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']


  return (
    <div className="w-[45%] relative rounded-3xl h-[32rem] border-2 flex flex-col justify-start items-start bg-slate-100">
        <div className="rounded-3xl absolute top-0 w-full h-16 bg-gradient-to-tr from-slate-600 via-slate-800 to-slate-400 flex justify-start p-2 items-center ">
            <h1 className="text-white text-3xl font-bold tracking-wider">Daily Workout Challenges</h1>
        </div>

        <div className="w-full h-48 bg-sky-100 flex justify-center items-end mt-10">
            {days.map((d, i) => {
                return <Day1 key={i} day={d} onClick={() => {
                    setDay(d);
                    setOpen(true)
                }} />
            })}
            
        </div>

        <div className="w-full h-[67%] border border-purple-400">
            {open && day === 'Day 1' && <Day1Workout />}
            {open && day === 'Day 2' && <Day2Workout />}
            {open && day === 'Day 3' && <div>Day3 data goes here</div>}
            {open && day === 'Day 4' && <div>Day4 data goes here</div>}
            {open && day === 'Day 5' && <div>Day5 data goes here</div>}
            {open && day === 'Day 6' && <div>Day6 data goes here</div>}
            {open && day === 'Day 7' && <div>Day7 data goes here</div>}
        </div>
    </div>
  )
}
