'use client';

import { useState } from 'react';
import { format, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 });
  const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 0 });

  const handlePrevWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const handlePrevDay = () => {
    setCurrentDate(subDays(currentDate, 1));
  };

  const handleNextDay = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const getWeekDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(startOfCurrentWeek, i));
    }
    return days;
  };

  const handleDayClick = (day: any) => {
    setCurrentDate(day);
    console.log(day?.toDateString())
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <motion.button
        onClick={handlePrevMonth}
        className="text-indigo-500 text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        &lt;&lt;
      </motion.button>
      <motion.button
        onClick={handlePrevWeek}
        className="text-indigo-500 text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        &lt;
      </motion.button>
      <motion.button
        onClick={handlePrevDay}
        className="text-indigo-500 text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        &lt;-
      </motion.button>
      <div className="flex space-x-4">
        {getWeekDays().map((day) => (
          <motion.div
            key={day.toString()}
            onClick={() => handleDayClick(day)}
            className={`text-lg font-semibold cursor-pointer ${
              isSameDay(day, currentDate) ? 'text-indigo-600' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Format day to display 'Mon 01 Jan' */}
            {format(day, 'E dd MMM')}
          </motion.div>
        ))}
      </div>
      <motion.button
        onClick={handleNextDay}
        className="text-indigo-500 text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        -&gt;
      </motion.button>
      <motion.button
        onClick={handleNextWeek}
        className="text-indigo-500 text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        &gt;
      </motion.button>
      <motion.button
        onClick={handleNextMonth}
        className="text-indigo-500 text-2xl"
        whileTap={{ scale: 0.9 }}
      >
        &gt;&gt;
      </motion.button>
    </div>
  );
};

export default DatePicker;
