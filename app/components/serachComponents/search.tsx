'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "@/app/store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foods, setFoods] = useState([]);
  const [allLogs, setAllLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentFood, setRecentFood] = useState([]);
  const [popularFood, setPopularFood] = useState([]);
  const [isRecentFoodLoading, setIsRecentFoodLoading] = useState(false);
  const [isPopularFoodLoading, setIsPopularFoodLoading] = useState(false);
  const {data: sessoin} = useSession();
  const userIsActive = sessoin?.user?.isActive || false;


  const fetchRecentFoods = async () => {
    setIsRecentFoodLoading(true)
    await axios.get('/api/getRecentFood').then((res) => {
      if(res.status === 201){
        setRecentFood(res?.data)
      }
    }).finally(() => {
      setIsRecentFoodLoading(false)
    })
  };

  const fetchPopularFoods = async () => {
    setIsPopularFoodLoading(true)
    await axios.get('/api/getPopularFood').then((res) => {
      if(res.status === 201){
        console.log(res)
        setPopularFood(res?.data)
      }
    }).finally(() => {
      setIsPopularFoodLoading(false)
    })
  }

  useEffect(() => {
    fetchAllLogs();
    fetchRecentFoods();
    fetchPopularFoods();
    }, []);

  const fetchAllLogs = async () => {
    setLoading(true);
    try {
      const [breakfastRes, lunchRes, dinnerRes, snackRes] = await Promise.all([
        axios.get('/api/getBreakfast'),
        axios.get('/api/getLunch'),
        axios.get('/api/getDinner'),
        axios.get('/api/getSnack')
      ]);

      if (breakfastRes.status === 201 && lunchRes.status === 201 && dinnerRes.status === 201 && snackRes.status === 201) {
        const combinedLogs = [
          ...breakfastRes.data.breakfast_items,
          ...lunchRes.data,
          ...dinnerRes.data,
          ...snackRes.data
        ];

        const uniqueLogs = removeDuplicates(combinedLogs);
        setAllLogs(uniqueLogs);
      }
    } catch (error) {
      console.error("Error fetching meal logs:", error);
    }
    setLoading(false);
  };

  const removeDuplicates = (foodsArray: any) => {
    const seen = new Set();
    return foodsArray.filter((food: any) => {
      const duplicate = seen.has(food.name);
      seen.add(food.name);
      return !duplicate;
    });
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredFoods = allLogs.filter((food: any) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  const openModal = () => {
    setShowModal(true);
    if (allLogs.length === 0) {
      fetchAllLogs();
    } else {
      setFoods(allLogs);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFoods([]);
    setSearchTerm("");
  };

  const filterList = popularFood.slice(0, 7);
  const skeletonList = [1,2,3,4,5,6,7]

  return (
    <div className="min-h-screen w-full p-4">
      <div className=" w-full  mx-auto ring-1 ring-indigo-400 bg-indigo-50 shadow-md rounded-lg p-6 relative">
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
            className="w-full p-2 border outline-indigo-500 rounded mb-4"
            onChange={handleSearchInputChange}
            onFocus={openModal}
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
                  onClick={closeModal}
                >
                  Close
                </button>
                <ul className="divide-y w-full flex flex-col divide-gray-200">
                  {foods.map((food: any) => (
                    <Link
                      href={{
                        pathname: `/dashboard/calories/search/${food.name}`,
                        query: {
                          name: food.name,
                          calories: food.calories,
                          fat: food.fat,
                          carbs: food.carbs,
                          protein: food.protein,
                          servingSize: food.servingSize,
                          sodium: food.sodium,
                          transFat: food['trans fat'],
                          satFat: food['sat fat'],
                          calcium: food.calcium,
                          fiber: food.fiber
                        }
                      }}
                      key={food.name}
                      className="py-2 group w-full hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-indigo-100 hover:cursor-pointer px-4"
                    >
                      <span className="text-xl group-hover:text-indigo-600">{food.name}</span>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="bg-white p-3 ring-2 shadow-md rounded-lg overflow-scroll ring-indigo-300">
          <h2 className="text-xl font-semibold text-indigo-500 mb-4">
            Recent Foods
          </h2>
          {isRecentFoodLoading && <div className="w-full h-14 rounded-lg bg-indigo-400 animate-pulse"></div>}
          {!isRecentFoodLoading && recentFood.map((rf: any) => {
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
                }} className="flex mt-3 hover:cursor-pointer hover:bg-white hover:ring-2 hover:ring-indigo-400 justify-between items-center bg-indigo-100 p-4 rounded" key={rf?.name}>
                  <span className="text-indigo-600  font-bold">{rf?.name}</span>
                  <span className="text-indigo-600 font-bold">{rf?.calories} Cals</span>
                </Link>
              )
            })}
        </div>
        <div className="bg-white overflow-scroll shadow-md mt-5 rounded-lg p-3 ring-2 ring-indigo-300">
          <h2 className="text-xl font-semibold text-indigo-500 mb-4">
            Popular Foods
          </h2>
          {isPopularFoodLoading && <div className="flex flex-col justify-start animate-pulse items-center w-full gap-2">
            {skeletonList.map((s, i) => (
              <div key={i} className="w-full h-14 rounded-lg bg-indigo-400 "></div>
            ))}
            </div>}
          {!isPopularFoodLoading && filterList.map((rf: any) => {
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
                }} className="flex mt-2 hover:cursor-pointer hover:bg-white hover:ring-2 hover:ring-indigo-400 justify-between items-center bg-indigo-100 p-4 rounded" key={rf?.name}>
                  <span className="text-indigo-600 font-bold">{rf?.name}</span>
                  <span className="text-indigo-600 font-bold">{rf?.calories} Cals</span>
                </Link>
              )
            })}
        </div>
        <div className="mt-4 flex justify-between items-center w-full">
          <Link href='/dashboard/calories/search/customFood' className="text-indigo-600 lg:text-xl text-sm font-semibold">
            CREATE AND LOG CUSTOM FOOD
          </Link>
          <h2>{userIsActive === false ? <Link className="text-indigo-600 text-sm" href='/pricing'>Become a premium user!</Link> : ''}</h2>
        </div>
      </div>
    </div>
  );
};

export default Search;
