'use client';
import { Suspense, useState,useEffect } from "react";
import {useSession} from 'next-auth/react'
import Carido from "./carido";
import HIIT from "./HIIT";
import Strength from "./strength";
import WorkoutTable from "./workoutTable";


export default  function Workout() {
  const {data: session, status, update} = useSession();

  const [workoutPlan, setWorkoutPlan] = useState<any>({
    workoutType: ''
  });

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

  const userWorkoutPlan = session?.user.workoutPlan 

  const JsonWorkoutPlan = userWorkoutPlan && JSON.parse(session?.user?.workoutPlan)

  useEffect(() => {
    if (userWorkoutPlan !== null && userWorkoutPlan !== undefined){
      return console.log('this user has a workout plan')
    }

    getWorkout();

    return console.log('user has no workout plan')

  })


  const workoutTypeDay1 = JsonWorkoutPlan?.medium_intensity?.day1?.workout;
  const workoutTypeDay2 = JsonWorkoutPlan?.medium_intensity?.day2?.workout;
  const workoutTypeDay3 = JsonWorkoutPlan?.medium_intensity?.day3?.workout;
  const workoutTypeDay4 = JsonWorkoutPlan?.medium_intensity?.day4?.workout;
  const workoutTypeDay5 = JsonWorkoutPlan?.medium_intensity?.day5?.workout;
  const workoutTypeDay6 = JsonWorkoutPlan?.medium_intensity?.day6?.workout;
  const workoutTypeDay7 = JsonWorkoutPlan?.medium_intensity?.day7?.workout;

  const Day2Excerise2 = JsonWorkoutPlan?.medium_intensity?.day2?.exercise;
  const Day3Excerise3 = JsonWorkoutPlan?.medium_intensity?.day3?.exercise;
  const Day4Excerise4 = JsonWorkoutPlan?.medium_intensity?.day4?.exercise;
  const Day5Excerise5 = JsonWorkoutPlan?.medium_intensity?.day5?.exercise;
  const Day6Excerise6 = JsonWorkoutPlan?.medium_intensity?.day6?.exercise;
  const Day7Excerise7 = JsonWorkoutPlan?.medium_intensity?.day7?.exercise;

  const Day1 = JsonWorkoutPlan?.medium_intensity?.day1;



  console.log(JsonWorkoutPlan)
  console.log(Day1)


  return (
    <div className='w-full flex-wrap flex gap-5 justify-evenly items-center mt-28 rounded-xl shadow-lg shadow-blue-300 h-content bg-slate-600 '>
      <h1 className="w-full border text-5xl text-center text-white">Recommend Impact Path</h1>

      {/* day 1 card */}

      <WorkoutTable 
      day={'Day 1'} 
      exerciseName={Day1?.exercises[0].name}  
      exercise1reps={Day1?.exercises[0].reps} 
      exercise1sets={Day1.exercises[0].sets}
      exerciseName2={Day1?.exercises[1].name} 
      exercise2reps={Day1?.exercises[1].reps} 
      exercise2sets={Day1.exercises[1].sets}
      exercise3sets={Day1.exercises[2].sets}
      exercise3reps={Day1?.exercises[2].reps} 
      exerciseName3={Day1?.exercises[2].name} 
       />
    </div>
  )
}
