import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type MyDateTimePickerProps = {
  initialDate?: Date | null, // Rename selectedDate to initialDate
  onDateChange?:  (date: Date | null) => void, // Rename handleDateChange to onDateChange
};


const MyDateTimePicker = ({initialDate, onDateChange}: MyDateTimePickerProps) => {

  return (
    <div className=''>
      <h3 className='text-xl mb-1'>Select Date and Time</h3>
      <DatePicker
        className=' p-2 text-xl text-black'
        selected={initialDate}
        onChange={onDateChange!}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

export default MyDateTimePicker;