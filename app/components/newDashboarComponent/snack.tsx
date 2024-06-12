'use client';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { setSnackModal } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';
import { useEffect, useState } from 'react';
import style from '@/app/style.module.css';

export default function Snack() {
    const dispatch = useDispatch();
    const snackModal = useSelector((state: RootState) => state.log.snackModal);
    const meal = useSelector((state: RootState) => state.log.meal);
    const amounts = ["0", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 %"];

    useEffect(() => {
        console.log(meal)
        if(meal === 'snack'){
            dispatch(setSnackModal(true));
        } 
    }, [meal, dispatch])

  return (
    <div className='w-full h-16 p-2 bg-indigo-200 flex justify-between items-center'>
                    <div className=' flex  w-[30%] justify-between items-center'>
                    {snackModal ? (
                            <IoIosArrowUp onClick={() => dispatch(setSnackModal(!snackModal))} size={25} className='text-gray-500 hover:bg-gray-500 hover:bg-opacity-20 p-1 w-8 h-8 cursor-pointer hover:rounded-full' />
                        ) : (
                            <IoIosArrowDown onClick={() => dispatch(setSnackModal(!snackModal))} size={25} className='text-gray-500 hover:bg-gray-500 hover:bg-opacity-20 p-1 w-8 h-8 cursor-pointer hover:rounded-full' />
                        )}
                        <h1 className='text-xl font-medium tracking-wider leading-5'>Snack</h1>
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