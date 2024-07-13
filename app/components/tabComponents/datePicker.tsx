'use client';

import { useState } from 'react';
import { format, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '@/app/slices/weightSlice';
import { RootState } from '@/app/store';
import { FaArrowLeft, FaArrowRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const DatePicker = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector((state: RootState) => state.weight.currentDate) ?? new Date();
  const today = new Date();

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 });
  const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 0 });

  const handlePrevWeek = () => {
    dispatch(setCurrentDate(subWeeks(currentDate, 1)));
  };

  const handleNextWeek = () => {
    dispatch(setCurrentDate(addWeeks(currentDate, 1)));
  };

  const handlePrevDay = () => {
    dispatch(setCurrentDate(subDays(currentDate, 1)));
  };

  const handleNextDay = () => {
    dispatch(setCurrentDate(addDays(currentDate, 1)));
  };

  const handlePrevMonth = () => {
    dispatch(setCurrentDate(subMonths(currentDate, 1)));
  };

  const handleNextMonth = () => {
    dispatch(setCurrentDate(addMonths(currentDate, 1)));
  };

  const getWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(startOfCurrentWeek, i));
    }
    return days;
  };

  const handleDayClick = (day: Date) => {
    dispatch(setCurrentDate(day));
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg w-full">
  <div className="flex lg:flex-row items-center  justify-center space-x-2 ">
    <motion.button
      onClick={handlePrevMonth}
      className="text-indigo-500 hidden lg:block text-2xl"
      whileTap={{ scale: 0.9 }}
    >
      <FaAngleDoubleLeft />
    </motion.button>
    <motion.button
      onClick={handlePrevWeek}
      className="text-indigo-500 hidden lg:block text-2xl"
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowLeft />
    </motion.button>
    <motion.button
      onClick={handlePrevDay}
      className="text-indigo-500  text-2xl"
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowLeft />
    </motion.button>
    <div className="flex flex-wrap  items-center justify-center space-x-2 overflow-x-auto w-full">
      {getWeekDays().map((day) => (
        <motion.div
          key={day.toString()}
          onClick={() => handleDayClick(day)}
          className={`text-sm lg:text-lg text-indigo-400 font-semibold cursor-pointer px-2 py-1 rounded ${
            isSameDay(day, currentDate)
              ? 'bg-indigo-600 text-white'
              : isSameDay(day, today)
              ? 'bg-indigo-300 text-white'
              : 'text-gray-700'
          } mb-2`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {format(day, 'E dd MMM')}
        </motion.div>
      ))}
    </div>
    <motion.button
      onClick={handleNextDay}
      className="text-indigo-500 text-2xl"
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowRight />
    </motion.button>
    <motion.button
      onClick={handleNextWeek}
      className="text-indigo-500 hidden lg:block text-2xl"
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowRight />
    </motion.button>
    <motion.button
      onClick={handleNextMonth}
      className="text-indigo-500 hidden lg:block text-2xl"
      whileTap={{ scale: 0.9 }}
    >
      <FaAngleDoubleRight />
    </motion.button>
  </div>
</div>


  );
};

export default DatePicker;


