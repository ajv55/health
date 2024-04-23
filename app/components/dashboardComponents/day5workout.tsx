'use client'; 
import { useSession } from "next-auth/react";
import WorkTable from "./workTable";

export default function Day2Workout() {

    const {data: session} = useSession();

    const usersWorkoutPlan = session && JSON.parse(session?.user?.workoutPlan);

    const day5 = usersWorkoutPlan?.medium_intensity?.day5;

    const exercise1 = day5?.exercise[0];
    const exercise2 = day5?.exercise[1];
    const exercise3 = day5?.exercise[2];

    console.log(exercise2);

  return (
    <div className='w-full overflow-scroll h-full flex justify-center items-start p-2'>
        <WorkTable exercise3={exercise3?.name} exercise3reps={exercise3?.reps} exercise3sets={exercise3?.sets} exercise2reps={exercise2?.reps} exercise2sets={exercise2?.sets} exercise2={exercise2?.name} calories_burn={day5?.calories_burned} duration={day5?.duration} exercise={exercise1?.name as string} reps={exercise1?.reps as string} sets={exercise1?.sets as string}/>
    </div>
  )
}
