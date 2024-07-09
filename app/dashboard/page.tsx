'use client';

import {  useEffect, useRef } from 'react';
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
import { setRecommend } from '../slices/weightSlice';
import { s } from '@fullcalendar/core/internal-common';
import DatePicker from '../components/tabComponents/datePicker';
import WeighInModal from '../components/newDashboarComponent/weightModal';
import axios from 'axios';

export default  function Page() {

  const {data: session, status ,update} = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const stepsModal = useSelector((state: RootState) => state.log.stepsModal);
  const waterModal = useSelector((state: RootState) => state.water.waterModal);
  const weightModal = useSelector((state: RootState) => state.weight.weightModal);

  const weight = session?.user?.weight;
  const postWeightExecuted = useRef(false); 

  const postWeight =  async () => {
    await axios.post('/api/postToWeightLog', {weight}).then((res) => {
      if(res.status === 201){
        console.log(res)
      }
    })
  }

  const calculateAndUpdateCalories = (gender: string, activity: string) => {
    const bmr = 66 + (6.23 * Number(session?.user?.weight)) + (12.7 * Number(session?.user?.height)) - (6.8 * Number(session?.user?.age));
    const activityMultiplier = {
      'No-Exercise': 1.2,
      'Light-Exercise': 1.375,
      'Moderate-Exercise': 1.55,
      'Heavy-Exercise': 1.725,
      'Strenuous-Exercise': 1.9
    } as any;
    const calorieReduction = {
      'No-Exercise': 200,
      'Light-Exercise': 250,
      'Moderate-Exercise': 350,
      'Heavy-Exercise': 400,
      'Strenuous-Exercise': 500
    } as any;
    const mainCalories = bmr * activityMultiplier[activity];
    const calToString = Math.round(mainCalories);
    const recommend = calToString - calorieReduction[activity];
    update({ calories: calToString.toString(), recommend: recommend });
  };


  useEffect(() => {
    if (status === 'unauthenticated') {
      return router.push('/');
    }

    if (session?.user.calories !== null) {
      return console.log('There are existing calories already');
    }

    if (!session?.user?.calories) {
      if (session?.user?.weight && !postWeightExecuted.current) {
        calculateAndUpdateCalories(session.user.gender, session.user.activity);
        postWeight();
        postWeightExecuted.current = true; // Set flag to true after executing postWeight()
      }
    }
  }, [session, status, router]);

useEffect(() => {
  dispatch(resetModals());
}, []);




  

  return (
    <div className='overflow-scroll w-full relative  h-screen flex flex-wrap lg:flex-row justify-start p-3 items-start'>
      <Information />
      <WeightTracker />
      <AnimatePresence>
        {stepsModal && <LogDailySteps />}
        {waterModal && <Water />}
        {weightModal && <WeighInModal />}
        </AnimatePresence>
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
