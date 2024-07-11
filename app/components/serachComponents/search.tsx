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
  const [breakfastFood, setBreakfastFood] = useState([]);
  const [luncFood, setLunchFood] = useState([])
  const [dinnerFood, setDinnerFood] = useState([])
  const [snackFood, setSnackFood] = useState([])
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMealLogs();
    fetchLunchLogs();
    fetchDinnerLogs();
    fetchSnackLogs();
  }, []);

  const fetchMealLogs = async () => {
    await axios.get('/api/getBreakfast').then((res: any) => {
      if (res.status === 201) {
        console.log(res.data)
        setBreakfastFood(res?.data?.breakfast_items)
      }
    });
  };

  const fetchLunchLogs = async () => {
    await axios.get('/api/getLunch').then((res: any) => {
      if (res.status === 201) {
        setLunchFood(res.data);
      }
    });
  };

  const fetchDinnerLogs = async () => {
    await axios.get('/api/getDinner').then((res: any) => {
      if (res.status === 201) {
        setDinnerFood(res.data);
      }
    });
  };

  const fetchSnackLogs = async () => {
    await axios.get('/api/getSnack').then((res: any) => {
      if (res.status === 201) {
        setSnackFood(res.data);
      }
    });
  };

  // Combine all logs into one array
  const allLogs = [...breakfastFood!, ...luncFood!, ...dinnerFood!, ...snackFood!];

  // Function to handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter foods based on searchTerm
    const filteredFoods = allLogs.filter((food: any) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  console.log(allLogs)

  // Function to handle modal open
  const openModal = () => {
    setShowModal(true);
    // Initially show all foods
    setFoods(allLogs);
  };

  // Function to handle modal close
  const closeModal = () => {
    setShowModal(false);
    setFoods([]); // Clear foods when modal is closed
    setSearchTerm(""); // Clear search term when modal is closed
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
                className="absolute  left-0 right-0 w-full overflow-scroll h-[20rem] flex flex-col justify-between items-center mt-2 bg-white shadow-lg rounded-lg max-w-6xl mx-auto"
              >
                 <button
                  className="text-indigo-600 block w-full text-lg text-center py-2  bg-gray-100 rounded-b-lg hover:bg-gray-200"
                  onClick={closeModal}
                >
                  Close
                </button>
                <ul className="divide-y w-full  flex flex-col divide-gray-200">
                  {foods.map((food: any) => (
                    <Link href={{
                        pathname: `/dashboard/calories/search/${food.name}`,
                        query: {
                            name: food?.name,
                            calories: food?.calories,
                            fat: food?.fat,
                            carbs: food?.carbs,
                            protein: food?.protein,
                            servingSize: food?.servingSize,
                            sodium: food?.sodium,
                            transFat: food?.['trans fat'],
                            satFat: food?.['sat fat'],
                            calcium: food?.calcium,
                            fiber: food?.fiber

                            
                        }
                    }} key={food?.name} className="py-2 group w-full  hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-indigo-100 hover:cursor-pointer  px-4">
                      <span className="text-xl  group-hover:text-indigo-600">{food?.name}</span>
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
