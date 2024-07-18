'use client';

import { useSearchParams } from "next/navigation";
import { FaBaseballBall, FaBasketballBall, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater } from "react-icons/fa";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingUp } from "react-icons/gi";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";

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

export default function ExerciseInfo() {
  const searchParams = useSearchParams();
  

  const name = searchParams.get('name');
  const caloriesBurned = searchParams.get('caloriesBurned');
  const description = searchParams.get('description');
  const icon = searchParams.get('icon') as IconName || null;

  const IconComponent = icon ? iconMap[icon] : null;

  const [time, setTime] = useState(30); // default to 30 minutes
  const [unit, setUnit] = useState('min');
  const [calories, setCalories] = useState(caloriesBurned);

  useEffect(() => {
    calculateCalories();
  }, [time, unit]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseFloat(event.target.value));
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
  };

  const calculateCalories = () => {
    let totalCalories = 0;
    if (unit === 'min') {
      totalCalories = (time / 30) * Number(caloriesBurned);
    } else if (unit === 'hr') {
      totalCalories = (time * 60 / 30) * Number(caloriesBurned);
    }
    setCalories(totalCalories.toString());
  };


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full p-8 ring-2 ring-indigo-400 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-semibold text-center text-indigo-700">Exercise Entry</h1>
        <div className="mt-4">
          <label className="block text-xl font-medium text-gray-700">
            Exercise Type
          </label>
          <div className="flex items-center mt-1">
            {IconComponent && <IconComponent size={40} className="text-indigo-700 text-4xl mb-2" />}
            <span className="inline-block mr-2"></span>
            <span className="text-xl text-indigo-500">{name} ({description})</span>
          </div>
          <div className="flex items-center justify-start gap-3 mt-2 text-indigo-600">
            <span className="text-2xl">{Math.round(Number(calories)) || 0}</span>
            <span className="text-lg">cals</span>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Enter amount
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              className="block w-full pl-7 pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="0"
              value={time}
              onChange={handleTimeChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="min" className="sr-only">
                Minutes
              </label>
              <select
                id="min"
                name="min"
                className="h-full py-0 pl-2 pr-7 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={unit}
                onChange={handleUnitChange}
              >
                <option value='min'>min</option>
                <option value='hr'>hr</option>
                {/* Add more options here if needed */}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Day
          </label>
          <input
            type="date"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={3}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Log Entry
          </button>
        </div>

        <div className="mt-4 text-center">
          <button className="text-indigo-600 hover:underline">Back to Search</button>
        </div>
      </div>
    </div>
  );
}