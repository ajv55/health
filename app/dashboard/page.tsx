'use client';

import {  Suspense, useEffect } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import LineGraph from '../components/dashboardComponents/lineGraph';
import { InvoiceSkeleton } from '../ui/skeletons';
import Workout from '../components/dashboardComponents/workout';
import LineChart from '../components/dashboardComponents/lineChart';
import Arc from '../components/arc';
import Bar from '../components/bar';
import Day from '../components/dashboardComponents/day';
import Profile from '../components/dashboardComponents/profile';
import Quote from '../components/dashboardComponents/quote';
import Table from '../components/dashboardComponents/table';
import Nutrition from '../components/dashboardComponents/nutrition';
import Welcome from '../components/dashboardComponents/welcome';
import Water from '../components/dashboardComponents/water';
import DashHeader from '../components/dashboardComponents/dashHeader';

export default  function Page() {

  const {data: session, status ,update} = useSession();
  const router = useRouter();


  if(status === 'unauthenticated') {

    router.push('/')
  } 

  useEffect(() => {

    if (session?.user.calories !== null ) {
     
      return  console.log('theres caloires existing alread')
    }

    if (session?.user?.gender === 'Male' && session.user.activity === 'No-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.2
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Male' && session.user.activity === 'Light-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.375
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Male' && session.user.activity === 'Moderate-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.55
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Male' && session.user.activity === 'Moderate-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.725
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Male' && session.user.activity === 'Strenuous-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.9
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }
    
    // if statements checking for female and physical activity level
    if (session?.user?.gender === 'Female' && session.user.activity === 'No-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.2
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Female' && session.user.activity === 'Light-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.375
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Female' && session.user.activity === 'Moderate-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.55
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Female' && session.user.activity === 'Moderate-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.725
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }

    if (session?.user?.gender === 'Female' && session.user.activity === 'Strenuous-Exercise') {
      const calories = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session.user.height)) - (6.8 * Number(session.user.age));
      const MainCal = calories * 1.9
      const calToString = Math.round(MainCal)
      update({calories: calToString.toString() }) 
    }


 


}, [session, update]);


  

  return (
    <div className='overflow-scroll w-full h-screen flex flex-wrap flex-grow  justify-between items-start'>
      <div className='w-[69%] border-4 border-blue-400'>
        <DashHeader />
        <Water />
      </div>
      <Welcome />
     
      {/* <Profile />
      <Workout /> */}
      <div className=' border-zinc-300 ml-2 w-full mt-20 flex justify-center items-center h-content'>
      <LineChart />
      {/* <Table /> */}
      </div>

      <div className='w-full mt-20 flex justify-evenly items-center h-content'>
        <Arc/>
        <Table />
      </div>
      <Nutrition />

    </div>
  )
}
