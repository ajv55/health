'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "@/app/store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { setActiveTab } from "@/app/slices/searchSlice";

const Staple = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foods, setFoods] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stapleFood, setStapleFood] = useState([]);
  const {data: sessoin} = useSession();
  const userIsActive = sessoin?.user?.isActive || false;

  const dispatch = useDispatch();


  useEffect(() => {
    fetchAllLogs();
    }, []);

  const fetchAllLogs = async () => {
    setLoading(true);
    try {
        await axios.get('/api/getStapleFoods').then((res) => {
            if(res.status === 201){
                setStapleFood(res.data)
            }
        })

    } catch (error) {
      console.error("Error fetching meal logs:", error);
    }
    setLoading(false);
  };


  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

  };

  const filteredFoods = stapleFood.filter((food: any) =>
    food.name.toLowerCase().includes(searchTerm)
  );
  const skeletonList = [1,2,3,4,5,6,7]

  return (
    <div className="min-h-screen lg:w-full p-4">
      <div className="max-w-6xl mx-auto ring-1 ring-indigo-400 bg-indigo-50 shadow-md rounded-lg p-6 relative">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <Link href='/dashboard/calories' className="text-indigo-600 font-semibold">
            ← BACK TO MEALS
          </Link>
          <button className="text-gray-500">SETTINGS</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Please enter food name, brand or restaurant name"
            className="w-full p-2 border rounded mb-4"
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="bg-white p-3 rounded-lg ring-2 ring-indigo-300 h-[23rem] overflow-scroll">
          <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
            Staple Foods
          </h2>
          {loading && <div className="w-full h-14 rounded-lg bg-indigo-400 animate-pulse"></div>}
          {!loading && filteredFoods.map((rf: any) => {
              console.log(rf)
              return (
                <Link href={{
                  pathname: `/dashboard/calories/search/${rf.name}`,
                  query: {
                    name: rf.name,
                    calories: rf.calories,
                    fat: rf.fat,
                    carbs: rf.carbs,
                    protein: rf.protein,
                    servingSize: rf.servingSize,
                    sodium: rf.sodium,
                    transFat: rf.transFat,
                    satFat: rf.satFat,
                    calcium: rf.calcium,
                    fiber: rf.fiber
                  }
                }} className="flex mt-3 hover:cursor-pointer hover:bg-white hover:ring-2 hover:ring-indigo-400 shadow-md hover:shadow-indigo-400 justify-between items-center bg-indigo-100 p-4 rounded" key={rf?.name}>
                  <span className="text-indigo-600  font-bold">{rf?.name}</span>
                  <span className="text-indigo-600 font-bold">{rf?.calories} Cals</span>
                </Link>
              )
            })}
        </div>
        <div className="mt-4 p-1 w-full flex justify-between gap-1 items-center">
          <Link href='/dashboard/calories/search/customFood' className="text-indigo-600 lg:text-xl text-[12px]  font-semibold">
            CREATE AND LOG CUSTOM FOOD
          </Link>
          <h2>{userIsActive === false ? <Link className="text-indigo-600 lg:text-sm text-[10px]" href='/pricing'>Become a premium user</Link> : ''}</h2>
        </div>
      </div>
    </div>
  );
};

export default Staple;