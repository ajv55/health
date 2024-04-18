'use client';

import {  useEffect } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import LineGraph from '../components/dashboardComponents/lineGraph';
import { InvoiceSkeleton } from '../ui/skeletons';
import Workout from '../components/dashboardComponents/workout';
import LineChart from '../components/dashboardComponents/lineChart';
import Arc from '../components/arc';
import Bar from '../components/bar';

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
    <div className='bg-slate-900 overflow-scroll w-full h-screen gap-8 flex flex-wrap justify-start items-start'>
      <Arc/>
      <LineChart />
      <Workout />
      <div className='border border-zinc-300 ml-2 w-[46%] h-[21rem]'>
        this div will be used for showcase some nutrititons food we can maybe get from an API somewhere that has a lot of data on food and there nutrition facts.
      </div>


    </div>
  )
}
