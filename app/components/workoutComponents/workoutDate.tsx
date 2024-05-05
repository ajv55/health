'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

type MyDateTimePickerProps = {
  initialDate?: Date | null, // Rename selectedDate to initialDate
  onDateChange?:  (date: Date | null) => void,
};


const WorkoutDate = ({initialDate, onDateChange, }: MyDateTimePickerProps) => {


  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-start'>
         <h3 className='text-2xl text-white font-bold mb-1'>Select Date</h3>
        <DatePicker
        className='w-70 p-2.5 rounded-xl text-3xl text-black'
        selected={initialDate}
        onChange={onDateChange!}
        minDate={new Date()}
        showTimeSelect
        timeFormat='h:mm'
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa" 

          />
      </div>
    </div>
  );
};

export default WorkoutDate;