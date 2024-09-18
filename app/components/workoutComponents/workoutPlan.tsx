'use client';
import { setExercisePlan } from '@/app/slices/workoutSlice';
import { RootState } from '@/app/store';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

// Define types for the workout plan and exercises
type Exercise = {
  name: string;
  description: string;
  sets: number;
  reps: number;
  target_muscle_groups: string[];
  completed: boolean
};

type WorkoutPlanProps = {
  workoutPlan: {
    age: number;
    weight: number;
    height: number;
    activity_level: string;
    workout_type: string;
    goal: string;
    days_per_week: number;
    duration_per_session: string;
    entireExercisesCompleted: boolean;
    exercises: Exercise[];
  };
};

const GeneratedPlan: React.FC<WorkoutPlanProps> = ({ workoutPlan }) => {
  const {
    age,
    weight,
    height,
    activity_level,
    workout_type,
    goal,
    days_per_week,
    duration_per_session,
    exercises,
  } = workoutPlan;

  const dispatch = useDispatch();
  const plan = useSelector((state: RootState) => state.workout.exercisePlan) as any;
  const planId = useSelector((state: RootState) => state.workout.exercisePlanId) as string;

  function markExerciseAsCompleted(plan: any, exerciseName: string) {
    const updatedExercises = plan?.exercises?.map((exercise: any) =>
      exercise?.name === exerciseName
        ? { ...exercise, completed: true }
        : exercise
    );
  
    // Check if all exercises are completed
    const allCompleted = updatedExercises.every((exercise: any) => exercise?.completed);
  
    return {
      ...plan,
      exercises: updatedExercises,
      entireExercisesCompleted: allCompleted, // Set to true if all exercises are completed
    };
  };

  const handleCompleteExercise = async (exerciseName: string) => {
    const updatedPlan = markExerciseAsCompleted(workoutPlan, exerciseName);
    dispatch(setExercisePlan(updatedPlan))
    await axios.post('/api/updateExercisePlan', {planId, updatedPlan}).then((res) => {
      console.log(res)
      if(res.status === 201){
        toast.success('Workout plan updated!')
      }    
    })
  };

  console.log(planId)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-white relative shadow-lg rounded-lg drop-shadow-lg"
    >
      {plan?.entireExercisesCompleted && <motion.span initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.4, stiffness: 80, type: 'spring', delay: 1}} className='absolute -top-6 -right-5'> <IoCheckmarkDoneCircle size={50} className='text-indigo-500' /></motion.span>}
      {/* Workout Plan Overview */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-indigo-600 mb-2">Workout Plan</h2>
        <p className="text-gray-700 text-lg">
          This workout plan is created for a <span className="font-bold text-indigo-600">{age}-year-old</span> individual, weighing{' '}
          <span className="font-bold text-indigo-600">{weight} lbs</span> and measuring{' '}
          <span className="font-bold text-indigo-600">{height} cm</span>. Their current activity level is{' '}
          <span className="font-bold text-indigo-600">{activity_level}</span> with the goal of{' '}
          <span className="font-bold text-indigo-600">{goal}</span>.
        </p>
        <p className="text-gray-700 text-lg">
          Workout Type: <span className="font-bold text-indigo-600">{workout_type}</span>
        </p>
        <p className="text-gray-700 text-lg">
          Workout Frequency: <span className="font-bold text-indigo-600">{days_per_week} days per week</span>
        </p>
        <p className="text-gray-700 text-lg">
          Session Duration: <span className="font-bold text-indigo-600">{duration_per_session}</span> per session
        </p>
      </div>

      {/* Exercises List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {exercises?.map((exercise, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            className="bg-indigo-100 relative p-4 drop-shadow-xl rounded-lg shadow-lg"
          >
            <div className='flex justify-between items-center '>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{exercise?.name}</h3>
            {!exercise.completed ? <button onClick={() => handleCompleteExercise(exercise.name)}>Completed</button> : <motion.span initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.4, stiffness: 80, type: 'spring'}} className='absolute -top-5 -right-4'> <IoCheckmarkDoneCircle size={40} className='text-indigo-500' /></motion.span>}
            </div>
            <p className="text-gray-700 mb-2">{exercise?.description}</p>
            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-bold">Sets:</span> {exercise?.sets}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Reps:</span> {exercise?.reps}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Target Muscle Groups:</span> {exercise?.target_muscle_groups?.join(', ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GeneratedPlan;
