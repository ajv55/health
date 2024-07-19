'use client';

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaAnchor, FaArrowAltCircleRight, FaArrowAltCircleUp, FaBaseballBall, FaBasketballBall, FaBicycle, FaCircle, FaDumbbell, FaFeatherAlt, FaFish, FaFistRaised, FaFootballBall, FaFutbol, FaGolfBall, FaHandRock, FaHiking, FaHockeyPuck, FaHorse, FaMountain, FaMusic, FaRunning, FaSkating, FaSkiing, FaSkiingNordic, FaSleigh, FaSnowboarding, FaSnowflake, FaSnowplow, FaSwimmer, FaTableTennis, FaTheaterMasks, FaVolleyballBall, FaWalking, FaWater, FaYinYang } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiBowArrow, GiBoxingGlove, GiMeditation, GiScooter } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { LuSwords } from "react-icons/lu";
import { TbStretching } from "react-icons/tb";

type IconName =
 | 'FaDumbbell'
 | 'FaRunning'
 | 'FaBicycle'
 | 'FaFistRaised'
 | 'GiYogaPants'
 | 'GiStretching'
 | 'FaMusic'
 | 'FaSwimmer'
 | 'FaWalking'
 | 'FaHiking'
 | 'FaWater'
 | 'GiMeditation'
 | 'FaSkiingNordic'
 | 'FaSkiing'
 | 'FaSnowboarding'
 | 'FaSkating'
 | 'FaMountain'
 | 'FaGolfBall'
 | 'FaTableTennis'
 | 'FaBasketballBall'
 | 'FaFutbol'
 | 'FaVolleyballBall'
 | 'FaBaseballBall'
 | 'FaHockeyPuck'
 | 'FaFootballBall'
 | 'FaTheaterMasks'
 | 'FaFeatherAlt'
 | 'FaAnchor'
 | 'FaFish'
 | 'FaHorse'
 | 'FaBowArrow'
 | 'FaSwords' 
 | 'FaArrowAltCircleUp'
 | 'FaCircle'
 | 'FaArrowAltCircleRight'
 | 'FaHelmetSafety'
 | 'FaHandRock'
 | 'FaBoxingGlove'
 | 'FaYinYang'
 | 'FaSleigh'
 | 'FaSnowflake'
 | 'FaScooter'
 | 'FaSnowplow'
  ;


 const iconMap: {[key in IconName]: IconType} = {
    FaDumbbell: FaDumbbell,
    FaRunning: FaRunning,
    FaBicycle: FaBicycle,
    FaFistRaised: FaFistRaised,
    GiYogaPants: GrYoga,
    GiStretching: TbStretching,
    FaMusic: FaMusic,
    FaSwimmer: FaSwimmer,
    FaWalking: FaWalking,
    FaHiking: FaHiking,
    FaWater: FaWater,
    GiMeditation: GiMeditation,
    FaSkiingNordic: FaSkiingNordic,
    FaSkiing: FaSkiing,
    FaSnowboarding: FaSnowboarding,
    FaSkating: FaSkating,
    FaMountain: FaMountain,
    FaGolfBall: FaGolfBall,
    FaTableTennis: FaTableTennis, 
    FaBasketballBall: FaBasketballBall,
    FaFutbol: FaFutbol,
    FaVolleyballBall: FaVolleyballBall,
    FaBaseballBall: FaBaseballBall,
    FaHockeyPuck: FaHockeyPuck,
    FaFootballBall: FaFootballBall,
    FaTheaterMasks: FaTheaterMasks,
    FaFeatherAlt: FaFeatherAlt,
    FaAnchor: FaAnchor,
    FaFish: FaFish,
    FaHorse: FaHorse,
    FaBowArrow: GiBowArrow,
    FaSwords: LuSwords,
    FaArrowAltCircleUp: FaArrowAltCircleUp,
    FaCircle: FaCircle,
    FaArrowAltCircleRight: FaArrowAltCircleRight,
    FaHelmetSafety: FaHelmetSafety,
    FaHandRock: FaHandRock,
    FaBoxingGlove: GiBoxingGlove,
    FaYinYang: FaYinYang,
    FaSleigh: FaSleigh,
    FaSnowflake: FaSnowflake,
    FaScooter: GiScooter,
    FaSnowplow: FaSnowplow
 };

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

export default function Catalog() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCatalog = async () => {
        setLoading(true)
        await axios.get('/api/getCatalog').then((res) =>{
            if(res.status === 201) {
                const uniqueExercises = removeDuplicates(res.data);
                setCatalog(uniqueExercises);
            }
        })
        setLoading(false)
    };

    useEffect(() => {
        fetchCatalog();
    }, []);

    console.log(catalog)

    const arr = [1,2,3,4,5,6,7, 8, 9, 10]

  return (
    <div className=" bg-white p-2 rounded-lg ring-2 ring-indigo-500">
        <h1 className="text-4xl text-indigo-500 mb-5">Exercise Catalog</h1>
        <ul className="divide-y w-full flex flex-col divide-gray-200">
        {loading && arr.map((a) => <div key={a} className="w-full h-10 mb-4 rounded-lg bg-indigo-400 animate-pulse"></div>)}
              {!loading && catalog.map((exercise: any, i: number) => {
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
                    key={i}
                    className="py-2 group w-full hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-indigo-100 hover:cursor-pointer px-4 flex justify-between items-center"
                  >
                    <div className="flex justify-start items-center gap-4">
                      {IconComponent && <IconComponent size={20} className="text-indigo-500 mr-2" />}
                      <span className="text-xl group-hover:text-indigo-600">{exercise.name}</span>
                    </div>
                    <span className="text-xl text-indigo-500 font-bold">{exercise?.caloriesBurned} cal</span>
                  </Link>
                );
              })}
            </ul>
    </div>
  )
}
