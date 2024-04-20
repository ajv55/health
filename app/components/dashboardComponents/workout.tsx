'use client';
import { Suspense, useState,useEffect } from "react";
import {useSession} from 'next-auth/react'
import Carido from "./carido";
import HIIT from "./HIIT";
import Strength from "./strength";
import WorkoutTable from "./workoutTable";
import DurationDoughnut from "./durationDoughnut";
import BarDuration from "./barDuration";
import InfoTable from "./infoTable";


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
  const Day2 = JsonWorkoutPlan?.medium_intensity?.day2;
  const Day3 = JsonWorkoutPlan?.medium_intensity?.day3;
  const Day4 = JsonWorkoutPlan?.medium_intensity?.day4;
  const Day5 = JsonWorkoutPlan?.medium_intensity?.day5;
  const Day6 = JsonWorkoutPlan?.medium_intensity?.day6;
  const Day7 = JsonWorkoutPlan?.medium_intensity?.day7;



  console.log(JsonWorkoutPlan)
  console.log(Day2)


  return (
    <div className='w-full flex-wrap mt-5 flex gap-7 justify-evenly items-center rounded-xl shadow-lg shadow-blue-300 h-content  '>
      <h1 className="w-full text-8xl mb-20  text-center text-white">Recommend Impact Path</h1>

      {/* day 1 card */}

      <div className="w-[38%] ">
      <WorkoutTable 
      day={'Day 1'} 
      exerciseName={Day1?.exercises[0].name}  
      exercise1reps={Day1?.exercises[0].reps} 
      exercise1sets={Day1?.exercises[0].sets}
      exerciseName2={Day1?.exercises[1].name} 
      exercise2reps={Day1?.exercises[1].reps} 
      exercise2sets={Day1?.exercises[1].sets}
      exercise3sets={Day1?.exercises[2].sets}
      exercise3reps={Day1?.exercises[2].reps} 
      exerciseName3={Day1?.exercises[2].name} 
       />
       <InfoTable 
       duration={Day1?.duration}
       calories_burn={Day1?.calories_burned}
        />
      </div>


       {/* day 2 card or table */}
       <div className="w-[38%]">
        <WorkoutTable 
        day={'Day 2'} 
        exerciseName={Day2?.exercises[0].name}  
        exercise1reps={Day2?.exercises[0].reps} 
        exercise1sets={Day2?.exercises[0].sets}
        exerciseName2={Day2?.exercises[1].name} 
        exercise2reps={Day2?.exercises[1].reps} 
        exercise2sets={Day2?.exercises[1].sets}
        exercise3sets={Day2?.exercises[2].sets}
        exercise3reps={Day2?.exercises[2].reps} 
        exerciseName3={Day2?.exercises[2].name} 
        />
        <InfoTable 
       duration={Day2?.duration}
       calories_burn={Day2?.calories_burned}
        />
       </div>

       {/* day 3 card or table */}
       <div className="w-[38%]">
          <WorkoutTable 
        day={'Day 3'} 
        exerciseName={Day3?.exercises[0].name}  
        exercise1reps={Day3?.exercises[0].reps} 
        exercise1sets={Day3?.exercises[0].sets}
        exerciseName2={Day3?.exercises[1].name} 
        exercise2reps={Day3?.exercises[1].reps} 
        exercise2sets={Day3?.exercises[1].sets}
        exercise3sets={Day3?.exercises[2].sets}
        exercise3reps={Day3?.exercises[2].reps} 
        exerciseName3={Day3?.exercises[2].name} 
        />
        <InfoTable 
       duration={Day3?.duration}
       calories_burn={Day3?.calories_burned}
        />
       </div>
       {/* day 3 card or table */}
       <div className="w-[38%]">
        <WorkoutTable 
        day={'Day 4'} 
        exerciseName={Day4?.exercises[0].name}  
        exercise1reps={Day4?.exercises[0].reps} 
        exercise1sets={Day4?.exercises[0].sets}
        exerciseName2={Day4?.exercises[1].name} 
        exercise2reps={Day4?.exercises[1].reps} 
        exercise2sets={Day4?.exercises[1].sets}
        exercise3sets={Day4?.exercises[2].sets}
        exercise3reps={Day4?.exercises[2].reps} 
        exerciseName3={Day4?.exercises[2].name} 
        />
        <InfoTable 
       duration={Day4?.duration}
       calories_burn={Day4?.calories_burned}
        />
       </div>
       {/* day 5 card or table */}
      <div className="w-[38%]">
        <WorkoutTable 
        day={'Day 5'} 
        exerciseName={Day5?.exercises[0].name}  
        exercise1reps={Day5?.exercises[0].reps} 
        exercise1sets={Day5?.exercises[0].sets}
        exerciseName2={Day5?.exercises[1].name} 
        exercise2reps={Day5?.exercises[1].reps} 
        exercise2sets={Day5?.exercises[1].sets}
        exercise3sets={Day5?.exercises[2].sets}
        exercise3reps={Day5?.exercises[2].reps} 
        exerciseName3={Day5?.exercises[2].name} 
        />
        <InfoTable 
       duration={Day5?.duration}
       calories_burn={Day5?.calories_burned}
        />
      </div>
       {/* day 6 card or table */}
       <div className="w-[38%]">
        <WorkoutTable 
        day={'Day 6'} 
        exerciseName={Day6?.exercises[0].name}  
        exercise1reps={Day6?.exercises[0].reps} 
        exercise1sets={Day6?.exercises[0].sets}
        exerciseName2={Day6?.exercises[1].name} 
        exercise2reps={Day6?.exercises[1].reps} 
        exercise2sets={Day6?.exercises[1].sets}
        exercise3sets={Day6?.exercises[2].sets}
        exercise3reps={Day6?.exercises[2].reps} 
        exerciseName3={Day6?.exercises[2].name} 
        />
        <InfoTable 
       duration={Day6?.duration}
       calories_burn={Day6?.calories_burned}
        />
       </div>
       {/* day 7 card or table */}
       <div className="w-[38%]">
        <WorkoutTable 
        day={'Day 7'} 
        exerciseName={Day7?.exercises[0].name}  
        exercise1reps={Day7?.exercises[0].reps} 
        exercise1sets={Day7?.exercises[0].sets}
        exerciseName2={Day7?.exercises[1].name} 
        exercise2reps={Day7?.exercises[1].reps} 
        exercise2sets={Day7?.exercises[1].sets}
        exercise3sets={Day7?.exercises[2].sets}
        exercise3reps={Day7?.exercises[2].reps} 
        exerciseName3={Day7?.exercises[2].name} 
        />
        <InfoTable 
       duration={Day7?.duration}
       calories_burn={Day7?.calories_burned}
        />
       </div>
    </div>
  )
}
