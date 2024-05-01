'use client'; 
import {useSession} from 'next-auth/react';
import Image from 'next/image'
import Male from '@/public/malePlaceholder.jpg';
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { incrementDailyWater } from '@/app/slices/waterSlice';
import {setExercises, completedExercise} from '@/app/slices/exerciseSlice'
import toast from 'react-hot-toast';
import ExerciseCard from './exerciseCard';

export default function Welcome() {
    const [cal, setCal] = useState(0)
    const [done, setDone] = useState(0);

    const water = useSelector((state: RootState) => state.water.value);
    const exercisesList = useSelector((state: RootState) => state.exercise.exercises);
    const dispatch = useDispatch();

    const {data: session} = useSession();

    const usersCal = Number(session?.user?.calories);
    const recommend = usersCal - 500;
    const recommendWaterIntake = 3.5;

    //exercise challenge logic
    const challengeLeft = exercisesList.length

    const user = session?.user;
    const activityLevel = user?.activity;

    const getMeals = async () => {
      return await axios.get('/api/getMeal').then((res) => setCal(res?.data?.cal)).catch(() => setCal(0));
    }

    const getDailyWater = async () => {
        return await axios.get('/api/getWater').then((res) => dispatch(incrementDailyWater(res?.data?.addWater))).catch((error) => toast.error('No water intake yet', error) );
    }

    // const getDailyExcerise = async () => {
    //     return await axios.get('/api/getExercise').then((res: any) => dispatch(setExercises(res?.data?.data?.workouts))).catch(() => toast.error('Error occurred while trying to fetch daily exercises'))
    // }

    const getDailyChallenge = async () => {
        return await axios.get('/api/getDaily').then((res) => dispatch(setExercises(res?.data?.res))).catch(() => toast.error('Error occurred while trying to fetch daily exercises'))
    }

    const getExercise = async () => {
        await axios.get('/api/exercise').then((res) => console.log('resofexerciseapi: ' ,res))
    }

    if(exercisesList?.length === 0) {
        getExercise();
    }

    const percentage = (cal! / usersCal) * 100;
    const percentageForWater = (water / 3) * 100;
    const percentageForChanllenges = (done / challengeLeft) * 100;
    const perForChal = 100 - Math.round(percentageForChanllenges);
    console.log(percentageForChanllenges)

    useEffect(() => {
        try {
            
            getMeals();
            getDailyWater();
            getDailyChallenge();

        } catch (error) {
            console.error('Failed to fetch users meal', error)
        }
    }, [])

    const per = Math.round(percentage);

    console.log('exerciseList: ',exercisesList)


    const handleRemoveOfDailyChallenge = async (id: any) => {
       await axios.delete(`/api/deleteChallenge?id=${id}`).then(() => toast.success(`Completed A Challenge`)) 
       setDone(prev => prev + 1)
       getDailyChallenge();
    }


  return (
    <div className='w-[30%] h-screen rounded-2xl bg-slate-900 flex flex-col justify-start items-start'>
        {/* first heading where user image and name go with icon for settings options */}
        <div className='w-full h-28 flex  justify-between items-center'>
            <div className=' w-full flex p-2 gap-2'>
                <Image className='rounded-full' src={Male} alt='user-img' width={90} height={90}></Image>
                <div className='w-full text-white h-content p-2 flex justify-between items-start'>
                    <div className=' w-[75%]  h-full flex flex-col justify-center items-start '>
                        <h1 className='text-2xl font-bold tracking-wide'>Weclome, {user?.name.toUpperCase()}</h1>
                        <span className={`${activityLevel === 'Moderate-Exercise' && 'text-amber-400'}`} >{activityLevel === 'Moderate-Exercise' && 'Medium-Tier'}</span>
                    </div>
                    <div className='w-[15%]  h-14  flex justify-end items-start'>
                        <IoSettingsOutline className='cursor-pointer' size={26} color='white' />
                    </div>
                </div>
            </div>
        </div>

        {/* second section where the users age, height and weight will go */}
        <div className='w-full h-[6rem]  flex justify-between items-center'>
            <div className='w-[30%] h-32 gap-2 flex flex-col justify-center items-center'>
                <span className='text-2xl text-white font-bold tracking-wide'>{user?.weight} lbs</span>
                <h4 className='text-md text-zinc-400 font-light tracking-wide'>Weight</h4>
            </div>
            <div className='w-0.5 h-10 bg-slate-100'></div>
            <div className='w-[30%] h-32 gap-2 flex flex-col justify-center items-center'>
                <span className='text-2xl text-white font-bold tracking-wide'>{user?.height} inches</span>
                <h4 className='text-md text-zinc-400 font-light tracking-wide'>Height</h4>
            </div>
            <div className='w-0.5 h-10 bg-slate-100'></div>
            <div className='w-[30%] h-32 flex gap-2 flex-col justify-center items-center'>
                <span className='text-2xl text-white font-bold tracking-wide'>{user?.age} yrs</span>
                <h4 className='text-md text-zinc-400 font-light tracking-wide'>Age</h4>
            </div>

        </div>

        {/* third section this will be for the users daily goals like caloires inake, water intake */}
        <div className='w-full h-[17rem] border  flex flex-col justify-start items-start'>
            <h1 className='text-2xl text-white p-2 text-center font-bold tracking-wide'>Your Daily Goals</h1>
            <div className='w-full h-[17rem]  border-green-300 flex flex-col justify-evenly items-center'>
                <div className=' w-[95%] flex flex-col justify-start items-start'>
                    <div className='w-full flex justify-between items-center'>
                      <span className='text-xl font-light text-white tracking-wide'>Calorie Intake</span>
                      <span className='text-lg text-white font-light tracking-wide'>{cal}/{recommend} kcal</span>
                    </div>
                    <div className='w-[100%] h-5 rounded-3xl bg-slate-100 overflow-hidden '>
                        <motion.div initial={{width: '0%'}} animate={{ width: per < 100 ? `${per}%` : '100%' }} transition={{duration: 1, type: 'spring', stiffness: 100, damping: 10}} className={` h-5 rounded-3xl bg-indigo-700`}></motion.div>
                    </div>
                </div>
                <div className=' w-[95%] flex flex-col justify-start items-start'>
                    <div className=' w-full flex justify-between items-center'>
                       <span className='text-xl font-light text-white tracking-wide'>Water Intake</span>
                       <span className='text-lg text-white font-light tracking-wide'>{water}/{recommendWaterIntake} L</span>
                    </div>
                    <div className='w-full h-5 rounded-3xl bg-slate-100'>
                      <motion.div initial={{width: '0%'}} animate={{ width: percentageForWater < 100 ? `${Math.round(percentageForWater)}%` : '100%' }} transition={{duration: 1, type: 'spring', stiffness: 100, damping: 10}} className={` h-5 rounded-3xl bg-indigo-700`}></motion.div>
                    
                    </div>
                </div>
                <div className=' border w-[95%] flex flex-col justify-start items-start'>
                    <div className='w-full flex justify-between justify-items-center'>
                        <span className='text-lg font-light text-white tracking-wide'>Daily Workout Challenge</span>
                        <span className='text-lg text-white font-light tracking-wide'>Challenges Left: {challengeLeft}</span>
                    </div>
                    <div className='w-full h-5 rounded-3xl bg-slate-100'>
                    <motion.div initial={{width: `${perForChal}%`}} animate={{ width: `${perForChal}%`}} transition={{duration: 1, type: 'spring', stiffness: 100, damping: 10}} className={` h-5 rounded-3xl bg-indigo-700`}></motion.div>
                    </div>
                </div>
            </div>
        </div>

        {/* third section your daily task will go here maybe some workouts they can do daily ? */}
        <div className='w-full h-[23rem] border-2 flex flex-col justify-start items-center'>
            <h2 className='text-3xl text-white self-start p-1 tracking-wide font-bold'>Daily Workouts</h2>
            <div className='w-full h-[100%] border-2 border-red-600 overflow-scroll'>
                {exercisesList.map((el: any, i: number) => {
                    const cleanup = JSON.parse(el.challenges!);
                    
        
                    const exercise = cleanup?.Challenge?.exercise;
                    const workout = cleanup?.Challenge?.workout;
                    const sets = cleanup?.Challenge?.sets;
                    const reps = cleanup?.Challenge?.reps;
                    const instructions = cleanup?.Challenge?.instructions;
                    const duration = cleanup?.Challenge?.duration;
                    const totalCalories = cleanup?.Challenge?.totalCalories;
                    console.log(exercise)
                    
                    return <ExerciseCard key={i} completed={() => handleRemoveOfDailyChallenge(el?.id)} exercise={exercise} workout={workout} sets={sets} reps={reps} instructions={instructions} duration={duration} totalCalories={totalCalories} />
                })}
            </div>
        </div>

    </div>
  )
}
