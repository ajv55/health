'use client';


import {  useEffect } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import LineGraph from '../components/dashboardComponents/lineGraph';

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

      <div className='border bg-slate-200 border-zinc-800 mt-28 ml-2 rounded-xl w-[47%] h-[25rem] p-1'>
        <ul className='list-inside'>
          <div className='flex justify-center items-center gap-2'>
            <li className='text-blue-600 text-2xl'>Low Tier :</li>
            <p>Caloric deficit of <span className='font-bold'>250</span> calories</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <li className='text-yellow-400 text-2xl'>Medium Tier :</li>
            <p>Caloric deficit of <span className='font-bold'>500</span> calories</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <li className='text-red-600 text-2xl'>High Tier :</li>
            <p>Caloric deficit of <span className='font-bold'>750</span> calories</p>
          </div>
          
        </ul>
        <LineGraph />
      </div>

      <div className='border border-zinc-800 mt-28 w-[46%] h-[21rem]'>
        this div will be used for show maybe workouts? the user can do maybe get AI to generate some workout based of age, gender, and weight
      </div>
      <div className='border border-zinc-800 ml-2 w-[46%] h-[21rem]'>
        this div will be used for showcase some nutrititons food we can maybe get from an API somewhere that has a lot of data on food and there nutrition facts.
      </div>
      <div className='border border-zinc-800 w-[46%] h-[21rem]'>
        this div can be used for maybe a leaderboard of some sorts? not completely sure yet 
      </div>


    </div>
  )
}
