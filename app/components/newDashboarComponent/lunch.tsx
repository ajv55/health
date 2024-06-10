'use client';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { setLunchModal } from '@/app/slices/logSlice';
import { RootState } from '@/app/store';

export default function Lunch() {
    const dispatch = useDispatch();
    const lunchModal = useSelector((state: RootState) => state.log.lunchModal);
    const amounts = ["0", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 g", "0 %"]
  return (
    <div className='w-full h-16 p-2 bg-indigo-200 flex justify-between items-center'>
                    <div className=' flex  w-[30%] justify-between items-center'>
                        {lunchModal ? <IoIosArrowUp onClick={() => dispatch(setLunchModal(!lunchModal))} size={25} className='text-gray-500 hover:bg-gray-500 hover:bg-opacity-20 p-1 w-8 h-8 hover:rounded-full cursor-pointer' /> : <IoIosArrowDown onClick={() => dispatch(setLunchModal(!lunchModal))} size={25} className='text-gray-500 hover:bg-gray-500 hover:bg-opacity-20 p-1 w-8 h-8 hover:rounded-full cursor-pointer' />}
                        <h1 className='text-xl font-medium tracking-wider leading-5'>Lunch</h1>
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
