'use client';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus, FaBaseballBall, FaBasketballBall, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRegTrashAlt, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater, FaYinYang } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingUp } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineSportsCricket, MdOutlineSportsMartialArts } from "react-icons/md";
import { format } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import DatePicker from "../tabComponents/datePicker";
import ExercisePdf from "./exercisePdf";
import { GrCatalog } from "react-icons/gr";
import QuickLog from "./quickLog";
import { setExerciseLog } from "@/app/slices/searchSlice";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { BsMenuUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { setTotalCalories } from "@/app/slices/workoutSlice";

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
  | 'FaBars'
  | 'FaBicycle'
  | 'FaYingYang'
  | 'FaJumpRope';

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

const ExerciseTracker = () => {
  const [isOver, setIsOver] = useState(false);
  const [isOverSearch, setIsOverSearch] = useState(false);
  const [isCatalogSearch, setIsCatalogSearch] = useState(false);
  // const [exerciseLog, setExerciseLog] = useState<ExerciseLogEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [quickLogIsDone, setQuickLogIsDone] = useState(false)
  const [recentExercises, setRecentExercises] = useState([]);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');
  const [quickLog, setQuickLog] = useState(false);
  const [openOption, setOpenOption] = useState(false)

  const exerciseLog = useSelector((state: RootState) => state?.search.exerciseLog);
  const dispatch = useDispatch();

  const fetchExerciseLogs = async () => {
    setLoading(true)
    const res = await axios.get(`/api/getExerciseEntry?currentDate=${currentDate}`);
    if (res.status === 201) {
      dispatch(setExerciseLog(res.data))
      setRecentExercises(res.data.filter((exercise: any) => 
        new Date(exercise.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // last 7 days
      ));
    }
    setLoading(false)
  };

  const handleDelete = async (id: any) => {
    await axios.delete(`/api/deleteExercise?id=${id}`).then((res) => {
      if(res.status === 201){
        toast.success('Deleted exercise log');
        fetchExerciseLogs();
      }
    })
  }

  useEffect(() => {
    fetchExerciseLogs();
  }, [currentDate]);

  const totalCalories = exerciseLog?.reduce((acc, curr) => Number(acc) + Number(curr.caloriesBurned), 0);


  console.log(totalCalories)

  return (
    <div className="w-[89%] mb-8  relative mx-auto bg-white rounded-lg shadow-md mt-9 p-6">
      {quickLog && <QuickLog isDone={quickLogIsDone} setIsDone={setQuickLogIsDone} onClose={() => setQuickLog(false)} />}
       <div className="w-full flex justify-between items-center">
         <h2 className="text-4xl bg-gradient-to-br from-indigo-500 mb-5 to-indigo-300 bg-clip-text text-transparent">Exercise Tracker</h2>
         <Link className="text-xl bg-gradient-to-br from-indigo-500 mb-5 to-indigo-300 bg-clip-text text-transparent" href='/dashboard/workout/exercisePlan'>Exercise Plan</Link>
       </div>
      {isOver && <div className='w-[20%] absolute top-8 -left-16 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Click here to start logging</p></div>}
      {isOverSearch && <div className='w-[10%] absolute top-32 -left-1 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Find Exercise</p></div>}
      {isCatalogSearch && <div className='w-[10%] absolute top-32 left-9 h-4 rounded-md bg-black bg-opacity-30 flex p-0.5 justify-center items-center'><p className='text-[14px] text-white font-extrabold'>Search Catalog</p></div>}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-2">
          <Link href='/dashboard/workout/search?tab=search' onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)} className="bg-indigo-500 absolute flex justify-center items-center -top-6 lg:-left-7 -left-4 drop-shadow-xl text-white lg:h-14 lg:w-14 h-12 w-12 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
            <FaPlus size={24} color='white' />
          </Link>
          <Link onMouseOver={() => setIsOverSearch(true)} onMouseLeave={() => setIsOverSearch(false)} href='/dashboard/workout/search?tab=search'><IoSearchOutline size={26} className="text-indigo-500" /></Link>
          <Link onMouseOver={() => setIsCatalogSearch(true)} onMouseLeave={() => setIsCatalogSearch(false)} href='/dashboard/workout/search?tab=exerciseCatalog'><GrCatalog size={26} className="text-indigo-500" /></Link>
        </div>
        <div className="flex lg:hidden">
        <AnimatePresence>
        {openOption && (
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 80 }}
            className="absolute top-28 right-0 w-[40%] bg-white ring-2 ring-indigo-400 rounded-md drop-shadow-xl p-4 z-50"
          >
            <div className="flex flex-col justify-start items-start space-y-4">
              <Link href='/dashboard/workout/search?tab=search' className="text-indigo-600 hover:underline">Find & Log</Link>
              <button onClick={() => {setQuickLog(true); setOpenOption(!openOption)}} className="text-indigo-600 hover:underline">Quick Log</button>
              <Link href='/dashboard/workout/search?tab=customExercises' className="text-indigo-600 hover:underline">Log Custom</Link>
              <Link href='/dashboard/workout/search/customExercise' className="text-indigo-600 hover:underline">Create Custom</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
          <motion.div onClick={() => setOpenOption(!openOption)} whileTap={{scale: 1.4}}>
            <BsMenuUp size={25} className="text-indigo-500" />
          </motion.div>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link href='/dashboard/workout/search?tab=search' className="text-indigo-600 hover:underline">Find & Log</Link>
          <button onClick={() => setQuickLog(true)} className="text-indigo-600 hover:underline">Quick Log</button>
          <Link href='/dashboard/workout/search?tab=customExercises' className="text-indigo-600 hover:underline">Log Custom</Link>
          <Link href='/dashboard/workout/search/customExercise' className="text-indigo-600 hover:underline">Create Custom</Link>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
          <span className="text-indigo-500 lg:text-2xl text-lg  w-[35%]">Name</span>
          <span className="text-indigo-500 lg:text-2xl text-lg  w-[15%] flex justify-start">Calories</span>
          <span className="text-indigo-500 lg:text-2xl text-lg   w-[9%]">Date</span>
          <span className="text-indigo-500 lg:text-2xl text-lg  w-[9%]">Sets</span>
        </div>
        <div>
          {loading && <div className="w-full h-10 rounded-lg bg-indigo-400 animate-pulse"></div>}
          {!loading && exerciseLog?.length === 0 && <h1 className="mt-6 text-xl text-indigo-500">No exercise entry on {formattedDate}</h1>}
          {!loading && exerciseLog?.map((el, i) => {
            console.log(el)
            const IconComponent = el?.icon ? iconMap[el?.icon] : null;
            return (
              <div key={i} className="flex bg-indigo-50 justify-between items-center p-2 border-b">
                <div className="flex  w-[35%] justify-start items-center gap-5">
                  {IconComponent && <IconComponent size={24} className='text-indigo-500' />}
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-xs lg:text-xl">{el?.name}</span>
                    <span className="text-gray-500 lg:text-xs text-[9px]">{el?.duration}</span>
                  </div>
                </div>
                <span className=" w-[15%] text-[14px] lg:text-xl flex justify-start">{Math.round(el?.caloriesBurned)}</span>
                <span className=" w-[9%] text-[9px] lg:text-xl">{format(new Date(el.createdAt), 'MMMM d yyyy')}</span>
                <div className="flex justify-between items-center w-[9%]">
                  <span className="text-[14px] lg:text-xl">{el.sets.length}</span>
                  <FaTrash onClick={() => handleDelete(el?.id)} size={10} className="text-indigo-600 lg:w-5 lg:h-5 cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-indigo-600">
        <span className="text-2xl font-bold">Total Calories: {Math.round(totalCalories!)}</span>
      </div>

      <div className="flex justify-between items-center mt-4 text-indigo-600">
        <ExercisePdf exerciseLog={exerciseLog} />
        <Link href='/dashboard/workout/search?tab=exerciseAnalytic' className="hover:underline">Daily Analysis</Link>
      </div>
      <DatePicker />
    </div>
  );
};

export default ExerciseTracker;

