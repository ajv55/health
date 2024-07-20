'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaBaseballBall, FaBasketballBall, FaBicycle, FaBiking, FaBowlingBall, FaBullseye, FaDumbbell, FaFish, FaFootballBall, FaFutbol, FaGolfBall, FaHeartbeat, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSnowboarding, FaStepForward, FaSwimmer, FaTableTennis, FaVolleyballBall, FaWalking, FaWater, FaWeight, FaYinYang } from "react-icons/fa";
import { GiJumpingRope, GiMeditation, GiMountainClimbing, GiSpeedBoat, GiBowArrow, GiBroadsword, GiBoxingGlove, GiFootsteps, GiFrisbee, GiWeightLiftingDown, GiWeightLiftingUp } from "react-icons/gi";
import { IconType } from "react-icons";
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

export default function CustomList() {

    const [custom, setCustom] = useState<ExerciseLogEntry[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchCustomList = async () => {
        setLoading(true)
        await axios.get('/api/getCustomExercise').then((res) => {
            setCustom(res.data)
        })
        setLoading(false)
    }

    useEffect(() => {
        fetchCustomList();
    }, [])

  return (
    <div className="mt-4 bg-white p-3 ring-2 ring-indigo-400 rounded-lg shadow-md">
        <h2 className="text-4xl text-indigo-600 font-bold mb-2">Custom Exercises</h2>
        <div>
        {loading && <div className="w-full h-10 rounded-lg bg-indigo-400 animate-pulse"></div>}
          {!loading && custom?.length === 0 && <h1 className="text-indigo-500">No custom exercises</h1>}
          {!loading && custom.map((el, i) => {
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
                    className="py-2 group w-full hover:bg-indigo-50 hover:cursor-pointer px-4 flex justify-between items-center"
                  >
                    <div className='flex justify-start gap-2 items-center'>
                      {IconComponent && <IconComponent size={20} className="text-indigo-500 mr-2" />}
                      <span className="text-xl group-hover:text-indigo-600">{el.name}</span>
                    </div>
                    <span className='text-2xl text-indigo-500 font-bold'>{el.caloriesBurned} cal</span>
                  </Link>
            );
          })}
        </div>
      </div>
  )
}
