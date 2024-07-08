'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { AnyARecord } from 'dns';
import { setWeightLogs, setWeightModal } from '@/app/slices/weightSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import { addDays, isValid } from 'date-fns';
import { useSession } from 'next-auth/react';

const WeighInModal = () => {
  const { data: session } = useSession();
    const weightModal = useSelector((state: RootState) => state.weight.weightModal);
  const router = useRouter();
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);

  const userWeight = Number(session?.user?.weight) ?? 0;
  const goal = Number(session?.user?.goal ) ?? 0;
  const maintenanceCalories = Number(session?.user?.calories) ?? 0;
  const recommend = maintenanceCalories - 300;

  const calculateEstimatedEndDate = (
    currentWeight: number,
    goalWeight: number,
    deficitPerDay: number
  ) => {
    if (
      isNaN(currentWeight) ||
      isNaN(goalWeight) ||
      currentWeight <= goalWeight ||
      deficitPerDay <= 0
    ) {
      console.error('Invalid input values', { currentWeight, goalWeight, deficitPerDay });
      return {
        endDate: 'Invalid date',
        totalDays: 'Invalid days',
      };
    }

    const calorieDeficitPerWeek = deficitPerDay * 7;
    const poundsLostPerWeek = calorieDeficitPerWeek / 3500;
    const weeksToLoseWeight = (currentWeight - goalWeight) / poundsLostPerWeek;

    if (isNaN(weeksToLoseWeight) || weeksToLoseWeight < 0) {
      console.error('Invalid weeksToLoseWeight calculation', {
        weeksToLoseWeight,
        currentWeight,
        goalWeight,
        calorieDeficitPerWeek,
      });
      return {
        endDate: 'Invalid date',
        totalDays: 'Invalid days',
      };
    }

    const totalDays = Math.ceil(weeksToLoseWeight * 7);
    const estimatedEndDate = addDays(new Date(), totalDays);

    if (!isValid(estimatedEndDate)) {
      console.error('Invalid estimatedEndDate', { estimatedEndDate });
      return {
        endDate: 'Invalid date',
        totalDays: 'Invalid days',
      };
    }

    return {
      endDate: estimatedEndDate,
      totalDays: totalDays,
    };
  };

  const fetchWeightLogs = async () => {
    try {
      const response = await axios.get('/api/getWeightLog');
      if (response.status === 201) {
        const updatedLogs = [...response.data];
        const recommend = maintenanceCalories - 300;
        const { endDate } = calculateEstimatedEndDate(userWeight, goal, recommend);
        if (endDate && isValid(new Date(endDate))) {
          updatedLogs.push({ createdAt: new Date(endDate).toISOString(), newWeight: goal });
        }
        dispatch(setWeightLogs(updatedLogs));
      }
    } catch (error) {
      console.error('Error fetching weight logs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post('/api/postToWeightLog', {weight}).then((res) => {
      console.log(res)
      if(res.status === 201){
        toast.success('Weigh-In successfully!!')
        dispatch(setWeightModal(false))
        setWeight(0);
        fetchWeightLogs();
      }
    })

    
   

};

  const variants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: '0' },
    exit: { opacity: 0, y: '-100%' },
  };

  return weightModal ? (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div  initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants} transition={{duration: 1, type: 'spring', stiffness: 100}} className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Weigh In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="weight">Weight (lb)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e: any) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => dispatch(setWeightModal(false))}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  ) : null;
};

export default WeighInModal;
