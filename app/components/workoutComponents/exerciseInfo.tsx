'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { FaBaseballBall, FaBasketballBall, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRegTrashAlt, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater } from "react-icons/fa";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingUp } from "react-icons/gi";
import { useEffect, useState } from "react";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";


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

const iconMap: { [key in IconName]: any } = {
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

  const [sets, setSets] = useState([{ reps: 0, weight: 0 }]);
  const [notes, setNotes] = useState("");

  const router = useRouter();

  useEffect(() => {
    calculateCalories();
  }, [time, unit]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseFloat(event.target.value));
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
  };

  const handleRepsChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSets = sets.slice();
    newSets[index].reps = parseInt(event.target.value);
    setSets(newSets);
  };

  const handleWeightChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSets = sets.slice();
    newSets[index].weight = parseInt(event.target.value);
    setSets(newSets);
  };

  const addSet = () => {
    setSets([...sets, { reps: 0, weight: 0 }]);
  };

  const removeSet = (index: number) => {
    const newSets = sets.slice();
    newSets.splice(index, 1);
    setSets(newSets);
  };


  const handlePostExercise = async () => {
    await axios.post('/api/postExercise', {name: name, duration: `${time} ${unit}`, caloriesBurned: calories, note: notes, sets: sets, icon: icon  }).then((res) => {
      if(res.status === 201){
        toast.success('Added a exercise entry');
        router.push('/dashboard/workout');
      }
    })
  }

  console.log(description)


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
    <div className="flex  flex-col items-center justify-center">
      <div className="w-full  p-6 ring-2 ring-indigo-400  shadow-lg rounded-lg">
        <h1 className="text-5xl font-semibold text-center text-indigo-700">Exercise Entry</h1>
        <div className="mt-4 ">
          <label className="block text-2xl font-medium text-gray-700">
            Exercise Type
          </label>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 mt-4 space-x-4">
              {IconComponent && <IconComponent size={40} className="text-indigo-700 text-4xl mb-2" />}
              <span className="text-4xl text-indigo-500">{name} <span className="text-gray-500 text-lg">{description}</span></span>
            </div>
            <div className="flex items-center justify-start text-4xl text-center gap-3 mt-2 text-indigo-600">
              <span >{Math.round(Number(calories)) || 0}</span>
              <span >cals</span>
            </div>
          </div>
        </div>


        <div className="mt-4">
          <label className="block text-lg font-medium text-gray-500">
            Enter amount
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              className="block w-full pl-7 p-2.5 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
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
                className="h-full py-0 pl-2 pr-7 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                value={unit}
                onChange={handleUnitChange}
              >
                <option value='min'>min</option>
                <option value='hr'>hr</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Log Sets and Reps</h2>
          {sets.map((set, index) => (
            <div key={index} className=" flex justify-between items-center mt-3 gap-5">
              <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col gap-3">
                <label htmlFor="reps" className="">
                  Reps
                </label>
                <input
                  id="reps"
                  type="number"
                  className="block w-20 p-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 "
                  placeholder="Reps"
                  value={set.reps}
                  onChange={(e) => handleRepsChange(index, e)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="weight" className="">
                    Weight
                </label>
                <input
                  id='weight'
                  type="number"
                  className="block w-20 p-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 "
                  placeholder="Weight"
                  value={set.weight}
                  onChange={(e) => handleWeightChange(index, e)}
                />
              </div>
              </div>
              <FaRegTrashAlt onClick={() => removeSet(index)} size={30} className="text-indigo-500 hover:cursor-pointer" />
            </div>
          ))}
          <button
            type="button"
            className="mt-4 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            onClick={addSet}
          >
            Add Set
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={3}
            placeholder="Enter your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center items-center">
        <button
            type="button"
            className="mt-4 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            onClick={handlePostExercise}
          >
            Log Entry
          </button>
        </div>
      </div>
      
    </div>
  );
}
