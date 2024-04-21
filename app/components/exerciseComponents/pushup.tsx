'use client';
import {useSession} from 'next-auth/react';

type PushupProps = {
    name: string
}

export default function PushUp({name}: PushupProps) {
    const {data: session} = useSession();

    const userWorkoutPlan = session && JSON.parse(session.user.workoutPlan);

    const Day1 = userWorkoutPlan?.medium_intensity?.day1;
  return (
    <div className='w-full rounded-3xl flex flex-col justify-evenly items-center p-1 h-full bg-cover bg-center' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("/pushup.gif")'}}>
        <h1 className='text-white text-5xl font-extrabold'>{name}</h1>
        <p className='text-center text-white text-2xl  font-light tracking-wide'>To perform push-ups correctly, <span className='font-extrabold text-3xl text-cyan-700'>start in a plank position</span> with your hands slightly <span className='font-extrabold text-3xl text-cyan-300'>wider than shoulder-width apart</span>, fingers pointing forward, and <span className='font-extrabold text-3xl text-cyan-700'>arms fully extended</span>. Engage your <span className='font-extrabold text-3xl text-cyan-600'>core</span> and maintain a <span className='font-extrabold text-3xl text-cyan-600'>straight line</span> from your head to your heels. Lower your body by <span className='font-extrabold text-3xl text-cyan-600'>bending your elbows</span> until your chest <span className='font-extrabold text-3xl text-cyan-700'>nearly touches the ground</span>, keeping your <span className='font-bold text-3xl text-cyan-700'>elbows close to your body</span>. Push back up to the <span className='font-extrabold text-3xl text-cyan-700'>starting position </span> by straightening your arms, <span className='text-red-400 text-3xl font-extrabold'>without</span> locking your elbows. Keep your body in a <span className='text-red-800 text-3xl font-bold'>straight line</span> throughout the movement and <span className='text-red-500 text-3xl font-extrabold'>avoid arching</span> or <span className='text-red-500 text-3xl font-extrabold'>sagging</span> your lower back. Aim for <span className='text-cyan-800 text-3xl font-extrabold'>controlled movements</span> and focus on maintaining <span className='font-extrabold text-3xl text-cyan-400'>proper form </span> to effectively target your chest, shoulders, and triceps.</p>
    </div>
  )
}
