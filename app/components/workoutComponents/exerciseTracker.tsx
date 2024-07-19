'use client';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus, FaBaseballBall, FaBasketballBall, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRegTrashAlt, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingUp } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { format } from 'date-fns';
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import DatePicker from "../tabComponents/datePicker";
import ExercisePdf from "./exercisePdf";
import { GrCatalog } from "react-icons/gr";

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
  | 'FaStep'
  | 'FaFistRaised'
  | 'FaCricket'
  | 'FaCompactDisc'
  | 'FaBowlingBall'
  | 'FaBowArrow'
  | 'FaWater'
  | 'FaFish'
  | 'FaSailboat'
  | 'FaWeight'
  | 'FaBars';

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

interface ExerciseLogEntry {
  icon: IconName;
  name: string;
  caloriesBurned: number;
  notes: string;
  duration: string;
  sets: [],
  createdAt: Date

}

const ExerciseTracker = () => {
  const [isOver, setIsOver] = useState(false);
  const [isOverSearch, setIsOverSearch] = useState(false);
  const [isCatalogSearch, setIsCatalogSearch] = useState(false);
  const [exerciseLog, setExerciseLog] = useState<ExerciseLogEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [recentExercises, setRecentExercises] = useState([]);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');

  const fetchExerciseLogs = async () => {
    setLoading(true)
    const res = await axios.get(`/api/getExerciseEntry?currentDate=${currentDate}`);
    if (res.status === 201) {
      setExerciseLog(res.data);
      setRecentExercises(res.data.filter((exercise: any) => 
        new Date(exercise.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // last 7 days
      ));
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchExerciseLogs();
  }, [currentDate]);

  const totalCalories = exerciseLog?.reduce((acc, curr) => Number(acc) + Number(curr.caloriesBurned), 0);



  return (
    <div className="w-[89%]  relative mx-auto bg-white rounded-lg shadow-md mt-9 p-6">
       <h2 className="text-4xl bg-gradient-to-br from-indigo-500 mb-5 to-indigo-300 bg-clip-text text-transparent">Exercise Tracker</h2>
      {isOver && <div className='w-[20%] absolute top-8 -left-16 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Click here to start logging</p></div>}
      {isOverSearch && <div className='w-[10%] absolute top-32 -left-1 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Find Exercise</p></div>}
      {isCatalogSearch && <div className='w-[10%] absolute top-32 left-9 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Search Catalog</p></div>}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-2">
          <Link href='/dashboard/workout/search?tab=search' onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)} className="bg-indigo-500 absolute flex justify-center items-center -top-6 -left-7 drop-shadow-xl text-white h-14 w-14 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
            <FaPlus size={24} color='white' />
          </Link>
          <Link onMouseOver={() => setIsOverSearch(true)} onMouseLeave={() => setIsOverSearch(false)} href='/dashboard/workout/search?tab=search'><IoSearchOutline size={26} color="black" /></Link>
          <Link onMouseOver={() => setIsCatalogSearch(true)} onMouseLeave={() => setIsCatalogSearch(false)} href='/dashboard/workout/search?tab=exerciseCatalog'><GrCatalog size={26} color="black" /></Link>
        </div>
        <div className="flex space-x-4">
          <Link href='/dashboard/workout/search?tab=search' className="text-indigo-600 hover:underline">Find & Log</Link>
          <button className="text-indigo-600 hover:underline">Quick Log</button>
          <button className="text-indigo-600 hover:underline">Log Custom</button>
          <button className="text-indigo-600 hover:underline">Create Custom</button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
          <span className="text-indigo-500 text-2xl  w-[35%]">Name</span>
          <span className="text-indigo-500 text-2xl  w-[15%] flex justify-start">Calories</span>
          <span className="text-indigo-500 text-2xl   w-[9%]">Date</span>
          <span className="text-indigo-500 text-2xl  w-[9%]">Sets</span>
        </div>
        <div>
          {loading && <div className="w-full h-10 rounded-lg bg-indigo-400 animate-pulse"></div>}
          {!loading && exerciseLog.length === 0 && <h1 className="mt-6 text-xl text-indigo-500">No exercise entry on {formattedDate}</h1>}
          {!loading && exerciseLog.map((el, i) => {
            console.log(el)
            const IconComponent = el?.icon ? iconMap[el?.icon] : null;
            return (
              <div key={i} className="flex bg-indigo-50 justify-between items-center p-2 border-b">
                <div className="flex  w-[35%] justify-start items-center gap-5">
                  {IconComponent && <IconComponent size={24} className='text-indigo-500' />}
                  <div className="flex justify-start items-center gap-2">
                    <span>{el?.name}</span>
                    <span className="text-gray-500 text-xs">{el?.duration}</span>
                  </div>
                </div>
                <span className=" w-[15%] flex justify-start">{Math.round(el?.caloriesBurned)}</span>
                <span className=" w-[9%]">{format(new Date(el.createdAt), 'MMMM d yyyy')}</span>
                <span className=" w-[9%]">{el.sets.length}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-indigo-600">
        <span className="text-2xl font-bold">Total Calories: {Math.round(totalCalories)}</span>
      </div>

      <div className="flex justify-between mt-4 text-indigo-600">
        <ExercisePdf exerciseLog={exerciseLog} />
        <Link href='/dashboard/workout/search?tab=exerciseAnalytic' className="hover:underline">Daily Analysis</Link>
      </div>
      <DatePicker />
    </div>
  );
};

export default ExerciseTracker;

