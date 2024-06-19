'use client';

import {  useEffect } from 'react';
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import LineChart from '../components/dashboardComponents/lineChart';
import Welcome from '../components/dashboardComponents/welcome';
import Water from '../components/dashboardComponents/water';
import DashHeader from '../components/dashboardComponents/dashHeader';
import Maintenance from '../components/dashboardComponents/maintenance';
import Information from '../components/dashboardComponents/infomation';
import { useDispatch, useSelector } from 'react-redux';
import { resetModals } from '../slices/logSlice';
import LogDailySteps from '../components/newDashboarComponent/loggingSteps';
import { RootState } from '../store';
import { AnimatePresence } from 'framer-motion';
import WeightTracker from '../components/newDashboarComponent/weightTracker';

export default  function Page() {

  const {data: session, status ,update} = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const stepsModal = useSelector((state: RootState) => state.log.stepsModal);


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

    if (session?.user?.gender === 'Male' && session.user.activity === 'Heavy-Exercise') {
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

    if (session?.user?.gender === 'Female' && session.user.activity === 'Heavy-Exercise') {
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

useEffect(() => {
  dispatch(resetModals());
}, []);




  

  return (
    <div className='overflow-scroll w-full  h-screen flex lg:flex-row justify-start p-3 items-start'>
      <Information />
      <WeightTracker />
      <AnimatePresence>{stepsModal && <LogDailySteps />}</AnimatePresence>
      {/* <div className='flex lg:flex-row flex-col justify-between items-center'>
        <Welcome />
        <div className='lg:w-[69%] w-full mt-10 lg:mt-0 flex gap-5 lg:h-screen h-content flex-wrap  justify-evenly items-start'>
          <DashHeader />
          <Water />
          <Maintenance />
        </div>
        
      </div> */}
     
      {/* <div className=' lg:ml-2 ml-0 w-full mt-20 flex justify-center items-center h-content'>
      <LineChart />
      <Table />
      </div> */}

      {/* <div className='w-full mt-20 flex justify-evenly items-center h-content'>
        <Arc/>
        <Table />
      </div> */}

    </div>
  )
}
