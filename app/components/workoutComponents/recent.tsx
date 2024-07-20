'use client';
import { RootState } from '@/app/store';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { FaBaseballBall, FaBasketballBall, FaBicycle, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaStepForward, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater, FaWeight, FaYinYang } from "react-icons/fa";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingDown, GiWeightLiftingUp } from "react-icons/gi";
import { IconType } from "react-icons";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import Link from 'next/link';

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
  | 'FaBicycle'
  | 'FaYingYang'
  | 'FaJumpRope'
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
  FaBars: FaDumbbell,
  FaBicycle: FaBiking,
  FaYingYang: FaYinYang,
  FaJumpRope: GiJumpingRope
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

export default function Recent() {

    const [recentExercises, setRecentExercises] = useState<ExerciseLogEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');

    const fetchExerciseLogs = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`/api/getExerciseEntry?currentDate=${currentDate}`);
          if (res.status === 201) {
            setRecentExercises(res.data);
          }
        } catch (error) {
          console.error('Failed to fetch exercise logs:', error);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchExerciseLogs();
      }, []);

  return (
    <div className="mt-4 bg-white p-3 ring-2 ring-indigo-400 rounded-lg shadow-md">
    <h2 className="text-2xl text-indigo-600 font-bold mb-2">Recent Exercises</h2>
    <div>
    {loading && <div className="flex items-center justify-center w-full h-full rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex items-center mt-6 justify-center' role="status">
                            <svg aria-hidden="true" className="lg:w-24 lg:h-24 w-[30%] h-[30%]  text-gray-200 animate-spin dark:text-gray-600 fill-indigo-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
      {!loading && recentExercises?.length === 0 && <h1 className="text-indigo-500">No recent exercises</h1>}
      {!loading && recentExercises.map((el, i) => {
        const IconComponent = el?.icon ? iconMap[el?.icon] : null;
        return (
          <Link
                href={{
                  pathname: `/dashboard/workout/search/${el.name}`,
                  query: {
                    name: el.name,
                    caloriesBurned: el.caloriesBurned,
                    icon: el.icon,
                  }
                }}
                key={el.name}
                className="py-2 group w-full hover:bg-indigo-50 hover:cursor-pointer px-4 flex items-center"
              >
                {IconComponent && <IconComponent size={20} className="text-indigo-500 mr-2" />}
                <span className="text-xl group-hover:text-indigo-600">{el.name}</span>
              </Link>
        );
      })}
    </div>
  </div>
  )
}
