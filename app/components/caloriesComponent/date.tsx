import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

type MyDateTimePickerProps = {
  initialDate?: Date | null, // Rename selectedDate to initialDate
  onDateChange?:  (date: Date | null) => void,
  onTimeChange?: (time: any) => void,
  timeValue?: string // Rename handleDateChange to onDateChange
};


const MyDateTimePicker = ({initialDate, onDateChange, onTimeChange}: MyDateTimePickerProps) => {
  const [timeValue, setTimeValue ] = useState<string>('10:00');

  // const handleTimeChange = (militaryTime: any) => {
  //   const [hour, minute] = militaryTime.split(':');
  //   let formattedHour = parseInt(hour, 10) % 12; // Convert hour to 12-hour format
  //   formattedHour = formattedHour === 0 ? 12 : formattedHour; // Handle 12-hour format for midnight
  //   const period = parseInt(hour, 10) >= 12 ? 'PM' : 'AM'; // Determine AM/PM
  //   const newTime =`${formattedHour}:${minute} ${period}`;
  //   setTimeValue(newTime);
  // };

  console.log('value', timeValue)
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-start'>
         <h3 className='lg:text-2xl text-md mb-1'>Select Date</h3>
        <DatePicker
        className='w-70 p-2 lg:text-3xl text-md text-black'
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

export default MyDateTimePicker;