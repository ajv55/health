'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "@/app/store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foods, setFoods] = useState([]);
  const [allLogs, setAllLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllLogs();
  }, []);

  const fetchAllLogs = async () => {
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
    setFoods(allLogs);
  };

  const closeModal = () => {
    setShowModal(false);
    setFoods([]);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto ring-1 ring-indigo-400 bg-indigo-50 shadow-md rounded-lg p-6 relative">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <button className="text-indigo-600 font-semibold">
            ← BACK TO MEALS
          </button>
          <button className="text-gray-500">SETTINGS</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Please enter food name, brand or restaurant name"
            className="w-full p-2 border rounded mb-4"
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
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Dinner foods
          </h2>
          <div className="flex justify-between items-center bg-indigo-100 p-4 rounded">
            <span className="text-indigo-600 font-bold">99 Cals</span>
          </div>
        </div>
        <div className="mt-4">
          <button className="text-indigo-600 font-semibold">
            CREATE AND LOG CUSTOM FOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
