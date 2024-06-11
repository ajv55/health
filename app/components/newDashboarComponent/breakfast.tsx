'use client';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { TbChefHat } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux';
import { setBreakfastModal } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import { useState } from 'react';

export default function Breakfast() {

    const breakfastModal = useSelector((state: RootState) => state.log.breakfastModal);
    const dispatch = useDispatch();
    const [pressed, setPressed] = useState<boolean>(false);

    const amounts = ["0", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 %"];

    const handleButtonClick = () => {
        setPressed(true);
        dispatch(setBreakfastModal(!breakfastModal));
        setTimeout(() => {
            setPressed(false);
        }, 300); // Set timeout to reset the button after the animation duration
    };

  return (
    
<div className='w-full h-16 p-2 bg-indigo-200 flex justify-between items-center'>
                
                <div className=' flex w-[30%] justify-between  items-center'>
                    {breakfastModal ? (
                    <IoIosArrowUp
                        onClick={handleButtonClick}
                        size={25}
                        className={`text-gray-500 hover:bg-gray-500 hover:bg-opacity-15 p-1 w-8 h-8 rounded-full cursor-pointer ${pressed ? 'pressed' : ''}`}
                    />
                ) : (
                    <IoIosArrowDown
                        onClick={handleButtonClick}
                        size={25}
                        className={`text-gray-500 hover:bg-gray-500 hover:bg-opacity-15 p-1 w-8 h-8 rounded-full cursor-pointer ${pressed ? 'pressed' : ''}`}
                    />
                )}
                    <h1 className='text-xl font-medium tracking-wider leading-5'>Breakfast</h1>
                    <button className='text-indigo-600 self-end text-lg tracking-wide font-bold'>ADD</button>
                </div>
                <div className='w-[67%]  flex justify-evenly items-center'>
                    {amounts.map((value, index) => (
                        <span key={index} className='text-md hover:text-indigo-600 hover:cursor-pointer text-indigo-400 font-bold'>{value}</span>
                    ))}
                </div>
            </div>
            
  )
}


