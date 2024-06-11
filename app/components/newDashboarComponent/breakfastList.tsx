'use cleint';
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { motion, AnimatePresence } from "framer-motion"; 
import axios from "axios";
import { IoCaretDownOutline } from "react-icons/io5";
import { setIsFocusedOn } from "@/app/slices/logSlice";
import { set } from "date-fns";



export default function BreakfastList() {

    const breakfastModal = useSelector((state: RootState) => state.log.breakfastModal);
    const isFocusedOn = useSelector((state: RootState) => state.log.isFocusedOn);
    const [focused, setFocused] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false); // State to control dropdown visibility
    const [foods, setFoods] = useState<any>([]); 
    const [option, setOption] = useState(false); 
    const [searchTerm, setSearchTerm] = useState<string>(""); 
    const dispatch = useDispatch();

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(breakfastModal === true){
            ref.current?.focus();
        } 
    }, [breakfastModal])

    // Fetch breakfast foods from backend (replace with your actual API call)
    const fetchBreakfastFoods = async () => {
        try {
            console.log('fetching....')
            await axios.get("/api/getBreakfast").then((res) => {
                console.log(res?.data)
                if(res.status === 201) {
                    setFoods(res?.data?.breakfast_items); // Update state with fetched foods
                    setShowDropdown(true); // Show dropdown after fetching data
                }
            });
            
        } catch (error) {
            console.error("Error fetching breakfast foods:", error);
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        setOption(true);
        fetchBreakfastFoods(); 

    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        setShowDropdown(false)
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // Update search term state
    };

    const filteredFoods = foods?.filter((food: any) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(showDropdown)


  return (
    <div  className='w-full h-20 flex justify-start gap-5 items-center bg-slate-100'>
        <div className='flex relative w-[30%] justify-center gap-3 p-1 items-center'>
           <FaPencilAlt className='text-indigo-500 mt-3' size={20} />
           <div className="relative z-0  w-full group">
                <input onBlur={handleBlur} onChange={handleInputChange} onFocus={handleFocus} ref={ref} type="text" name="breakfast" id="breakfast" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
                <label htmlFor="breakfast" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Please enter a food name</label>
            </div>
            <AnimatePresence>
                {showDropdown && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-12 left-0  z-50 w-[110%] h-[23rem] bg-white shadow-md border border-indigo-300 mt-1 overflow-scroll rounded-md "
                    >
                        {/* Render fetched foods */}
                        {filteredFoods.map((food: any, index: number) => (
                            <div key={index} className="p-2 w-full hover:bg-indigo-100 hover:text-indigo-600 hover:border-r-4 border-indigo-700 flex justify-between items-center cursor-pointer">
                                <h1 className="text-md font-medium tracking-wide">{food?.name}</h1>
                                <span>{food?.calories} cal</span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
        <AnimatePresence>
                {(focused) && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="p-1 flex justify-evenly items-center gap-6  mt-1 w-full"
                    >
                        {/* search button will take user to another page within the calories route to show the user a page for them to search up different foods from the database */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Search</button>
                        {/* same button will be used to log the same 2 breakfast foods as yesterday so make an api call to grab yesterday either last two breakfast items or first two breakfast items   */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Same</button>
                        {/* Recent button wiil be used to send the user to a page dedicated to show them there recent meals which  we will make an api call or endpoint to grab all of the user breakfast items and showcase the items to them on that page. we will go from most up to date items first and decsend from there */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Recent</button>
                        {/* my food button will first have a modal pop up and the modal will have links to the search page where their favorite foods, recent foods, and frequent foods */}
                        <button className="hover:bg-indigo-200 hover:text-indigo-800 flex justify-center items-center gap-1 text-indigo-500 px-3 py-2 rounded-md">My Foods<IoCaretDownOutline size={12} className="text-indigo-500" /></button>

                        <button  className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Cancel</button>
                    </motion.div>
                )}
            </AnimatePresence>
         
            
    </div>
  )
}
