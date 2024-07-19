'use client';
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBaseballBall, FaBasketballBall, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaStepForward, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater, FaWeight } from "react-icons/fa";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingDown, GiWeightLiftingUp } from "react-icons/gi";
import { IconType } from "react-icons";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { format } from "date-fns";

type IconName =
  | 'FaRunning'
  | 'FaSwimmer'
  | 'FaBiking'
  | 'FaWalking'
  | 'FaBoxingGlove'
  | 'FaDumbbell'
  | 'FaHeartbeat'
  | 'FaMusic'
  | 'FaMountain'
  | 'FaGolfBall'
  | 'FaTableTennis'
  | 'FaBasketballBall'
  | 'FaFutbol'
  | 'FaVolleyballBall'
  | 'FaBaseballBall'
  | 'FaHockeyPuck'
  | 'FaFootballBall'
  | 'FaSkiingNordic'
  | 'FaSkiing'
  | 'FaSnowboarding'
  | 'FaSkating'
  | 'GiMountainClimbing'
  | 'GiBowArrow'
  | 'FaBullseye'
  | 'FaHorse'
  | 'FaSword'
  | 'GiMeditation'
  | 'GiJumpRope'
  | 'GiBoat'
  | 'GiJumpingRope'
  | 'GiMountainClimbing'
  | 'FaStep'
  | 'FaFistRaised'
  | 'FaCricket'
  | 'FaCompactDisc'
  | 'FaBowlingBall'
  | 'FaBowlingBall'
  | 'FaBowArrow'
  | 'FaWater'
  | 'FaFish'
  | 'FaSailboat'
  | 'FaDumbbell'
  | 'FaWeight'
  | 'FaBars'
  ;

const iconMap: { [key in IconName]: IconType } = {
  FaRunning: FaRunning,
  FaSwimmer: FaSwimmer,
  FaBiking: FaBiking,
  FaWalking: FaWalking,
  FaBoxingGlove: GiBoxingGlove,
  FaDumbbell: FaDumbbell,
  FaHeartbeat: FaHeartbeat,
  FaMusic: FaMusic,
  FaMountain: FaMountain,
  FaGolfBall: FaGolfBall,
  FaTableTennis: FaTableTennis,
  FaBasketballBall: FaBasketballBall,
  FaFutbol: FaFutbol,
  FaVolleyballBall: FaVolleyballBall,
  FaBaseballBall: FaBaseballBall,
  FaHockeyPuck: FaHockeyPuck,
  FaFootballBall: FaFootballBall,
  FaSkiingNordic: FaSkiingNordic,
  FaSkiing: FaSkiing,
  FaSnowboarding: FaSnowboarding,
  FaSkating: FaSkating,
  GiMountainClimbing: GiMountainClimbing,
  GiBowArrow: GiBowArrow,
  FaBullseye: FaBullseye,
  FaHorse: FaHorse,
  FaSword: GiBroadsword,
  GiMeditation: GiMeditation,
  GiJumpRope: GiJumpingRope,
  GiBoat: GiSpeedBoat,
  GiJumpingRope: GiJumpingRope,
  FaStep: GiFootsteps,
  FaFistRaised: MdOutlineSportsMartialArts,
  FaCricket: MdOutlineSportsCricket,
  FaCompactDisc: GiFrisbee,
  FaBowlingBall: FaBowlingBall,
  FaBowArrow: GiBowArrow,
  FaWater: FaWater,
  FaFish: FaFish,
  FaSailboat: FaSailboat,
  FaWeight: GiWeightLiftingUp,
  FaBars: FaDumbbell
};

interface ExerciseLogEntry {
  icon: IconName;
  name: string;
  caloriesBurned: number;
  notes: string;
  duration: string;
  sets: [],
  createdAt: Date

}

const removeDuplicates = (arr: any[]) => {
  const uniqueArray = arr.reduce((acc, current) => {
    const x = acc.find((item: any) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return uniqueArray;
};

export default function WorkoutSearch() {
  const [showModal, setShowModal] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [isExerciseLoading, setIsExerciseLoading] = useState(false);
  const [recentExercises, setRecentExercises] = useState<ExerciseLogEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchExerciseLogs = async () => {
    setLoading(true);
    const res = await axios.get('/api/getExerciseEntry');
    if (res.status === 201) {
      setRecentExercises(res.data.filter((exercise: any) => 
        new Date(exercise.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // last 7 days
      ));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchExerciseLogs();
  }, []);


  console.log(exercises);

  const fetchExercises = async () => {
    setIsExerciseLoading(true);
    await axios.get('/api/getExercises').then((res) => {
      if (res.status === 201) {
        const uniqueExercises = removeDuplicates(res.data);
        setExercises(uniqueExercises);
      }
    });
    setIsExerciseLoading(false);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleFocus = () => {
    setShowModal(true);
    if (exercises.length === 0) {
      fetchExercises();
    }
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Please enter exercise or workout"
        className="w-full p-2 border rounded mb-4"
        onFocus={handleFocus}
        onBlur={() => setShowModal(false)}
      />
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 w-full overflow-scroll h-[20rem] flex flex-col justify-start items-center mt-2 bg-white shadow-lg rounded-lg max-w-6xl mx-auto"
          >
            <button
              className="text-indigo-600 block w-full text-lg text-center py-2 bg-gray-100 rounded-b-lg hover:bg-gray-200"
            >
              Close
            </button>
            <ul className="divide-y w-full flex flex-col divide-gray-200">
              {exercises.map((exercise: any) => {
                const IconComponent = iconMap[exercise?.icon as IconName];
                return (
                  <Link
                    href={{
                      pathname: `/dashboard/workout/search/${exercise.name}`,
                      query: {
                        name: exercise.name,
                        caloriesBurned: exercise.caloriesBurned,
                        description: exercise.description,
                        icon: exercise.icon,
                      }
                    }}
                    key={exercise.name}
                    className="py-2 group w-full hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-indigo-100 hover:cursor-pointer px-4 flex items-center"
                  >
                    {IconComponent && <IconComponent size={20} className="text-indigo-500 mr-2" />}
                    <span className="text-xl group-hover:text-indigo-600">{exercise.name}</span>
                  </Link>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Recent Exercises</h2>
        <div>
          {recentExercises?.length === 0 && <h1 className="text-indigo-500">No recent exercises</h1>}
          {recentExercises.map((el, i) => {
            const IconComponent = el?.icon ? iconMap[el?.icon] : null;
            return (
              <div key={i} className="flex justify-between items-center p-2 border-b">
                <div className="flex justify-center items-center gap-5">
                  {IconComponent && <IconComponent size={24} className='text-indigo-500' />}
                  <div className="flex justify-start items-center gap-2">
                    <span>{el?.name}</span>
                    <span className="text-gray-500 text-xs">{el?.duration}</span>
                  </div>
                </div>
                <span>{Math.round(el?.caloriesBurned)}</span>
                <span>{format(new Date(el.createdAt), 'MMMM d yyyy')}</span>
                <span>{el.sets.length}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
