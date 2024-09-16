'use client';
import { motion } from 'framer-motion';

// Define types for the workout plan and exercises
type Exercise = {
  name: string;
  description: string;
  sets: number;
  reps: number;
  target_muscle_groups: string[];
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8"
    >
      {/* Workout Plan Overview */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-2">Workout Plan</h2>
        <p className="text-gray-700 text-lg">
          This workout plan is created for a <span className="font-bold">{age}-year-old</span> individual, weighing{' '}
          <span className="font-bold">{weight} lbs</span> and measuring{' '}
          <span className="font-bold">{height} cm</span>. Their current activity level is{' '}
          <span className="font-bold">{activity_level}</span> with the goal of{' '}
          <span className="font-bold">{goal}</span>.
        </p>
        <p className="text-gray-700 text-lg">
          Workout Type: <span className="font-bold">{workout_type}</span>
        </p>
        <p className="text-gray-700 text-lg">
          Workout Frequency: <span className="font-bold">{days_per_week} days per week</span>
        </p>
        <p className="text-gray-700 text-lg">
          Session Duration: <span className="font-bold">{duration_per_session}</span> per session
        </p>
      </div>

      {/* Exercises List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {exercises.map((exercise, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-indigo-100 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{exercise?.name}</h3>
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
