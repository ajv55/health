'use client';
import {useSession} from 'next-auth/react';

type WalkingLungesProps = {
    name?: string,
    duration?: string
}

export default function WalkingLunges({name, duration}: WalkingLungesProps) {

    const {data: session} = useSession();

    const userWorkoutPlan = session && JSON.parse(session.user.workoutPlan);

    const Day1 = userWorkoutPlan?.medium_intensity?.day1;

    console.log(Day1);

  return (
    <div className='w-full rounded-3xl flex flex-col justify-evenly items-center p-1  h-full bg-cover bg-center' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("/walkingLunges.gif")'}}>
        <h1 className='text-white text-5xl font-extrabold'>{name}</h1>
        <p className='text-center text-white text-2xl  font-light tracking-wide'>To perform walking lunges <span className='font-bold text-3xl text-amber-700 '>correctly</span>, start by standing tall with your <span className='font-extrabold text-amber-300 text-3xl'>feet hip-width apart</span> and your <span className='font-extrabold text-amber-700 text-3xl'>arms relaxed by your sides</span>. Take a step <span className='font-extrabold text-amber-300 text-3xl'>forward with one foot</span>, lowering your body until <span className='font-extrabold text-amber-700 text-3xl'>both knees are bent at a 90-degree angle</span>, with your front thigh parallel to the ground and your <span className='text-3xl text-amber-300 font-extrabold'>back knee hovering just above the floor</span>. Keep your torso upright and engage your <span className='text-3xl text-amber-700 font-extrabold'>core muscles for stability</span>. Push off the front foot to return to <span className='text-3xl text-amber-300 font-extrabold'>the starting position</span>, then repeat the movement <span className='text-3xl text-amber-300 font-extrabold'>with the opposite leg</span>. Continue <span className='text-3xl text-amber-500 font-extrabold'>alternating legs</span> as you walk forward, taking smooth and <span className='text-3xl text-amber-300 font-extrabold'>controlled steps</span>, and maintaining <span className='text-4xl text-amber-200 font-extrabold'>proper form</span> throughout the exercise. Remember to keep your chest lifted, <span className='text-3xl text-amber-500 font-extrabold'>shoulders back</span>, and gaze forward to maintain <span className='font-extrabold text-amber-300 text-3xl'>balance and alignment</span>.</p>
    </div>
  )
}
