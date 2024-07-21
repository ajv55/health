'use client';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setGrams } from '@/app/slices/logSlice';
import Main from '../newDashboarComponent/main';
import Personal from '../newDashboarComponent/personal';
import ProgressBar from '../newDashboarComponent/progressBar';
import MealGroup from '../newDashboarComponent/mealGroup';
import CarbProgress from '../newDashboarComponent/carbProgress';
import ProteinProgress from '../newDashboarComponent/proteinProgress';
import FatProgress from '../newDashboarComponent/fatProgress';
import DatePicker from '../tabComponents/datePicker';
import ProgressSkeleton from '../skeleton/progressSkeleton';

export default function Information() {
  const { data: session } = useSession();
  const userCalories = Number(session?.user?.calories);
  const dispatch = useDispatch();
  const grams = useSelector((state: RootState) => state?.log?.grams);
  const [updatingMacros, setUpdatingMacros] = useState(false);
  const isProgressLoading = useSelector((state: RootState) => state.log.isProgressLoading);

  const calculateMacros = useMemo(() => {
    return (maintenanceCalories: number) => {
      const proteinCalories = maintenanceCalories * 0.3;
      const carbCalories = maintenanceCalories * 0.4;
      const fatCalories = maintenanceCalories * 0.3;

      const proteinGrams = proteinCalories / 4;
      const carbGrams = carbCalories / 4;
      const fatGrams = fatCalories / 9;

      const satFatCalories = maintenanceCalories * 0.1;
      const satFatGrams = satFatCalories / 9;

      const transFatGrams = 0;  // Ideally zero
      const sodiumMg = 2300;
      const calciumMg = 1000;
      const fiberGrams = (25 + 38) / 2;

      const proteinPercent = (proteinCalories / maintenanceCalories) * 100;
      const carbPercent = (carbCalories / maintenanceCalories) * 100;
      const fatPercent = (fatCalories / maintenanceCalories) * 100;

      return {
        proteinGrams,
        carbGrams,
        fatGrams,
        satFatGrams,
        transFatGrams,
        sodiumMg,
        calciumMg,
        fiberGrams,
        proteinPercent,
        carbPercent,
        fatPercent,
      };
    };
  }, []);

  const createMarcos = async (macros: any) => {
    try {
      if (macros.proteinPercent !== 0) {
        const res = await axios.post('/api/postMacros', macros);
        console.log(res);
      } else {
        console.error('Protein percentage is zero. Skipping posting macros.');
      }
    } catch (error) {
      console.error('Failed to post macros:', error);
    }
  };

  
  useEffect(() => {
    // Ensure session and userCalories are defined before proceeding
    if (!session || !userCalories) {
      return;
    }

    // Ensure grams is defined and proteinGrams is not zero before proceeding
    if (grams && grams.proteinGrams !== 0) {
      return; // Exit early if grams are already set correctly
    }

    // Calculate macros and dispatch them only if necessary
    const calculateAndDispatch = async () => {
      const macros = calculateMacros(userCalories);
      dispatch(setGrams(macros));
      await createMarcos(macros);
      setUpdatingMacros(true);
    };

    // Check if grams need to be updated
    if (!grams || grams.proteinGrams === 0) {
      calculateAndDispatch();
    }
  }, [session, userCalories, grams, dispatch, calculateMacros]);
  

  console.log(isProgressLoading)

  return (
    <div className='lg:w-[53%] w-full h-[43rem]  relative drop-shadow-lg flex flex-col justify-evenly items-center rounded-lg bg-white'>
      {isProgressLoading &&  <ProgressSkeleton />}
      {!isProgressLoading && <Main />}

      {/* Exercise, water, steps tracking */}
      <div className={`w-full justify-evenly ${isProgressLoading ? 'hidden': 'flex'} lg:flex-row flex-wrap items-center h-[18rem]`}>
        <Personal />

        <div className='lg:w-[40%] w-[50%] h-full'>
          <ProgressBar />
        </div>

        <div className='w-[25%] h-full'>
          <MealGroup />
        </div>
      </div>

      {/* Carb, fat, and protein progress bars */}
      <div className={`w-full ${isProgressLoading ? 'hidden' : 'flex'} justify-evenly items-center h-[8rem]`}>
        <CarbProgress />
        <ProteinProgress />
        <FatProgress />
      </div>
      <div className='self-end'>
        <DatePicker />
      </div>
    </div>
  );
}
