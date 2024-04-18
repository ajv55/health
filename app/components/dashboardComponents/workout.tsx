'use client';
import { Suspense, useState } from "react";
import {useSession} from 'next-auth/react'


export default  function Workout() {
  const {data: session, status} = useSession();

  const [workoutPlan, setWorkoutPlan] = useState<any>(null);

  const getWorkout = async () => {
    const res = await fetch('/api/open', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({gender: session?.user.gender, age: session?.user.age, weight: session?.user.weight, activity: session?.user.activity})
    })
    const data = await res.json();
    setWorkoutPlan(data)

  }

  console.log(workoutPlan)



  return (
    <div className='w-full flex flex-col mt-28 rounded-xl shadow-lg shadow-blue-300 h-[23rem] bg-slate-200  justify-start items-center'>
        <h1 className='text-lg text-center mt-7'>workout plans goes here... using open ai </h1>
        <Suspense fallback={<p>loading data...</p>}>
           <p>{workoutPlan?.workout}</p>
        </Suspense>
        <button onClick={getWorkout}>getworkouts</button>
    </div>
  )
}
