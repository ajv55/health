'use client';
import React, { useState } from 'react';
import {
  FaBaseballBall, FaBasketballBall, FaBicycle, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol,
  FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding,
  FaStepForward, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater, FaWeight, FaYinYang
} from "react-icons/fa";
import {
  GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee,
  GiWeightLiftingDown, GiWeightLiftingUp
} from "react-icons/gi";
import { IconType } from "react-icons";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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
  | 'GiBroadsword'
  | 'GiMeditation'
  | 'GiJumpingRope'
  | 'GiSpeedBoat'
  | 'GiJumpingRope'
  | 'FaStepForward'
  | 'MdOutlineSportsMartialArts'
  | 'MdOutlineSportsCricket'
  | 'GiFrisbee'
  | 'FaBowlingBall'
  | 'GiBowArrow'
  | 'FaWater'
  | 'FaFish'
  | 'FaSailboat'
  | 'GiWeightLiftingUp'
  | 'FaBars'
  | 'FaYinYang';

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
  GiBroadsword: GiBroadsword,
  GiMeditation: GiMeditation,
  GiJumpingRope: GiJumpingRope,
  GiSpeedBoat: GiSpeedBoat,
  FaStepForward: FaStepForward,
  MdOutlineSportsMartialArts: MdOutlineSportsMartialArts,
  MdOutlineSportsCricket: MdOutlineSportsCricket,
  GiFrisbee: GiFrisbee,
  FaBowlingBall: FaBowlingBall,
  FaWater: FaWater,
  FaFish: FaFish,
  FaSailboat: FaSailboat,
  GiWeightLiftingUp: GiWeightLiftingUp,
  FaBars: FaDumbbell,
  FaYinYang: FaYinYang
};

const CustomExercise = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconName>('FaWalking');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [expenditure, setExpenditure] = useState('');
  const [unit, setUnit] = useState('')
  const router = useRouter()

  const handleIconClick = (icon: IconName) => {
    setSelectedIcon(icon);
    setIsModalOpen(false);
  };

  const postCustomExercise = async () => {
    await axios.post('/api/postCustomExercise',{name: activityName, icon: selectedIcon, calories: expenditure}).then((res) => {
        if(res.status === 201){
          toast.success('Created Custom Exercise');
          router.push('/dashboard/workout/search?tab=customExercises')
        }
    })
  }


  console.log(selectedIcon, expenditure, activityName)

  return (
    <div className="w-full  mx-auto p-4">
      <h1 className="text-4xl text-indigo-500 font-bold mb-4">Custom Exercise</h1>
      <form className="bg-white ring-2 ring-indigo-500 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-indigo-600 text-lg font-bold mb-2" htmlFor="activity-name">
            Activity Name
          </label>
          <input
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-indigo-600 focus:shadow-outline"
            id="activity-name"
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Activity Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-indigo-600 text-lg font-bold mb-2" htmlFor="calories">
            Energy Expenditure
          </label>
          <input
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 focus:shadow-outline"
            id="calories"
            type="number"
            placeholder="Calories burned in approximately 30 mins "
            value={expenditure}
            onChange={(e) => setExpenditure(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-indigo-600 text-lg font-bold mb-2" htmlFor="unit">
            Unit
          </label>
          <input
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 focus:shadow-outline"
            id="unit"
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="optional, e.g., 'set'"
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsModalOpen(true)}
          >
            Choose Icon
          </button>
          {isModalOpen && (
            <div className="fixed -inset-32 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white w-[40%] mx-auto p-4 rounded shadow-lg">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 text-white px-2 py-1 rounded absolute top-2 right-2"
                >
                  X
                </button>
                <div className="grid grid-cols-4 gap-4">
                  {Object.keys(iconMap).map((iconName) => {
                    const IconComponent = iconMap[iconName as IconName];
                    return (
                      <div
                        key={iconName}
                        onClick={() => handleIconClick(iconName as IconName)}
                        className="p-2 border flex justify-center items-center rounded-md cursor-pointer hover:bg-indigo-100"
                      >
                        <IconComponent className="text-2xl text-indigo-600 " />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-start items-center gap-6">
            <span>Selected Icon: </span>
            <div className="inline-block">
              {React.createElement(iconMap[selectedIcon], { className: "text-4xl text-indigo-600" })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={postCustomExercise}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomExercise;

