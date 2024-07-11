'use cleint';
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { motion, AnimatePresence } from "framer-motion"; 
import axios from "axios";
import { IoCaretDownOutline } from "react-icons/io5";
import { resetModals, setBreakfastModal, setIsFocusedOn, setUserMealLogs } from "@/app/slices/logSlice"
import { usePathname } from 'next/navigation'
import toast from "react-hot-toast";



export default function BreakfastList() {

    const breakfastModal = useSelector((state: RootState) => state.log.breakfastModal);
    const meal = useSelector((state: RootState) => state.log.meal);
    const [focused, setFocused] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false); // State to control dropdown visibility
    const [foods, setFoods] = useState<any>([]); 
    const [selectedFood, setSelectedFood] = useState<any>(null); // State to manage selected food
    const [searchTerm, setSearchTerm] = useState<string>(""); 
    const [amount, setAmount] = useState<number>(0); // State to manage amount input
    const [unit, setUnit] = useState<string>("grams"); // State to manage selected unit
    const [nutrients, setNutrients] = useState<any>({}); 
    const dispatch = useDispatch();
    const pathname = usePathname();


    const ref = useRef<HTMLInputElement>(null);


    useEffect(() => {
        console.log(meal)
        if(meal === 'breakfast'){
            ref.current?.focus();
        }
    }, [meal])

    

    // Fetch breakfast foods from backend (replace with your actual API call)
    const fetchBreakfastFoods = async () => {
        try {
            console.log('fetching....')
            await axios.get("/api/getBreakfast").then((res) => {
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
        setSelectedFood(null)
        fetchBreakfastFoods();

    };

    const handleFoodSelect = (food: any) => {
        setSelectedFood(food);
        setNutrients(food); 
        setSearchTerm(food.name);
        setAmount(0); 
        setShowDropdown(false);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        setShowDropdown(false)
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // Update search term state
    };


    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if(event.target.value === '') {
            setAmount(0)
        }
        setAmount(value);
        calculateNutrients(value, unit);
    };

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setUnit(value);
        calculateNutrients(amount, value);
    };

    const calculateNutrients = (amount: number, unit: string) => {
        if (!selectedFood) return;
    
        const servingSize = selectedFood.servingSize;
        let servingSizeInGrams: number | undefined;
    
        // Regular expressions to match serving size formats
        const regexGrams = /\((\d+(\.\d+)?)g\)/; // Matches "(number.g)"
        const regexOunces = /(\d+(\.\d+)?)\s*oz/; // Matches "number oz"
        const regexCup = /(\d+(\.\d+)?)\s*cup/; // Matches "number cup"
        const regexMedium = /(\d+(\.\d+)?)\s*medium/; // Matches "number medium"
        const regexSlice = /(\d+(\.\d+)?)\s*slice/; // Matches "number slice"
        const regexTablespoon = /(\d+(\.\d+)?)\s*tbsp/; // Matches "number tbsp"
        const regexCustom = /(\d+(\.\d+)?)\s*([a-zA-Z]+)\s*\((\d+(\.\d+)?)g\)/; // Matches "number custom_unit (number.g)"
    
        // Unit to gram conversion map
        const unitToGramMap: { [key: string]: number } = {
            "cup": 128,
            "medium": 131,
            "slice": 25,
            "tbsp": 14.3,
            "egg": 50,
            "patty": 25,
            "link": 45,
            "container": 170,
            "pancake": 35,
            "bagel": 105,
            "muffin": 57,
            "croissant": 67,
            "avocado": 100,
            "waffle": 35,
            "tablespoon": 16,
            "egg white": 33,
            "egg yolk": 18
            // Add more custom units here as needed
        };
    
        // Attempt to match different serving size formats and assign serving size in grams
        if (regexGrams.test(servingSize)) {
            servingSizeInGrams = parseFloat(servingSize.match(regexGrams)![1]);
        } else if (regexOunces.test(servingSize)) {
            const ounces = parseFloat(servingSize.match(regexOunces)![1]);
            servingSizeInGrams = ounces * 28.35; // Convert ounces to grams
        } else if (regexCup.test(servingSize)) {
            const cups = parseFloat(servingSize.match(regexCup)![1]);
            servingSizeInGrams = cups * unitToGramMap["cup"];
        } else if (regexMedium.test(servingSize)) {
            const medium = parseFloat(servingSize.match(regexMedium)![1]);
            servingSizeInGrams = medium * unitToGramMap["medium"];
        } else if (regexSlice.test(servingSize)) {
            const slice = parseFloat(servingSize.match(regexSlice)![1]);
            servingSizeInGrams = slice * unitToGramMap["slice"];
        } else if (regexTablespoon.test(servingSize)) {
            const tbsp = parseFloat(servingSize.match(regexTablespoon)![1]);
            servingSizeInGrams = tbsp * unitToGramMap["tbsp"];
        } else if (regexCustom.test(servingSize)) {
            const match = servingSize.match(regexCustom);
            if (match) {
                servingSizeInGrams = parseFloat(match[4]);
            }
        } else {
            console.error("Serving size format is invalid:", servingSize);
            return; // Handle the error case here if needed
        }
    
        // Calculate multiplier based on selected unit
        let multiplier: number;
        if (unit === "grams") {
            multiplier = amount / servingSizeInGrams!;
        } else if (unit === "oz") {
            multiplier = amount * 28.35 / servingSizeInGrams!; // Convert amount to grams and calculate
        } else if (unitToGramMap[unit]) {
            multiplier = amount * unitToGramMap[unit] / servingSizeInGrams!; // Use the map to get the gram value
        } else {
            console.error("Selected unit is not recognized:", unit);
            return; // Handle the error case here if needed
        }
    
        // Calculate nutrients based on the multiplier
        const calculatedNutrients: any = {
            calories: (selectedFood.calories * multiplier) || 0,
            fat: (selectedFood.fat * multiplier) || 0,
            carbs: (selectedFood.carbs * multiplier) || 0,
            protein: (selectedFood.protein * multiplier) || 0,
            sodium: (selectedFood.sodium * multiplier) || 0,
            transFat: (selectedFood.transFat * multiplier) || 0,
            satFat: (selectedFood.satFat * multiplier) || 0,
            calcium: (selectedFood.calcium * multiplier) || 0,
            fiber: (selectedFood.fiber * multiplier) || 0,
        };
    
        // Convert all calculated values to fixed decimals and ensure they are not NaN
        for (const key in calculatedNutrients) {
            calculatedNutrients[key] = isNaN(calculatedNutrients[key]) ? 0 : parseFloat(calculatedNutrients[key].toFixed(1));
        }
    
        setNutrients(calculatedNutrients); // Update state with calculated nutrients
    };
    
    

    const fetchMealLogs = async () => {
        await axios.get('/api/getMealLogs').then((res: any) => {
            if(res.status === 201) {
                dispatch(setUserMealLogs(res.data))
            }
        })
    };

    const mealData = {
        name: selectedFood?.name,
        calories: nutrients?.calories,
        fat: nutrients?.fat,
        carbs: nutrients?.carbs,
        protein: nutrients?.protein,
        sodium: nutrients?.sodium,
        transFat: nutrients?.transFat,
        satFat: nutrients?.satFat,
        calcium: nutrients?.calcium,
        fiber: nutrients?.fiber,
      };

      const postMealLog = async () => {
        await axios.post('/api/postBreakfast', mealData).then((res) => {
            console.log(res)
            if(res.status === 201){
                toast.success('Successfully added a breakfast item')
                setSelectedFood(null);
                setSearchTerm('');
                fetchMealLogs();
            }
        })
      }

    const filteredFoods = foods?.filter((food: any) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div  className='w-full h-20 flex justify-start gap-5 items-center bg-slate-100'>
        <div className='flex relative w-[30%] justify-center gap-3 p-1 items-center'>
           <FaPencilAlt className='text-indigo-500 mt-3' size={20} />
           <div className="relative z-0  w-full group">
                <input onBlur={handleBlur} value={searchTerm} onChange={handleInputChange} onFocus={handleFocus} ref={ref} type="text" name="breakfast" id="breakfast" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" placeholder=" " required />
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
                            <div onClick={() => handleFoodSelect(food)} key={index} className="p-2 w-full hover:bg-indigo-100 hover:text-indigo-600 hover:border-r-4 border-indigo-700 flex justify-between items-center cursor-pointer">
                                <h1 className="text-md font-medium tracking-wide">{food?.name}</h1>
                                <span>{food?.calories} cal</span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        <AnimatePresence>
                {selectedFood && selectedFood !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex w-full justify-start items-center gap-3 mt-5"
                    >
                        <div className="flex w-[45%]  justify-start items-center gap-3">
                            <input
                                type="number"
                                className="block py-2 px-4 w-[36%] text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                                placeholder="Amount"
                                required
                                onChange={handleAmountChange}
                            />
                            <select
                                className="block py-2 px-4 w-[36%] text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                                required
                                value={unit}
                                onChange={handleUnitChange}
                            >
                                {selectedFood && selectedFood.servingSize.includes('medium') && <option value="medium">medium</option>}
                                {selectedFood && selectedFood.servingSize.includes('slice') && <option value="slice">slice</option>}
                                {selectedFood && selectedFood.servingSize.includes('cup') && <option value="cup">cup</option>}
                                {selectedFood && selectedFood.servingSize.includes('egg') && <option value="egg">egg</option>}
                                {selectedFood && selectedFood.servingSize.includes('patty') && <option value="patty">patty</option>}
                                {selectedFood && selectedFood.servingSize.includes('link') && <option value="link">link</option>}
                                {selectedFood && selectedFood.servingSize.includes('container') && <option value="container">container</option>}
                                {selectedFood && selectedFood.servingSize.includes('pancake') && <option value="pancake">pancake</option>}
                                {selectedFood && selectedFood.servingSize.includes('begel') && <option value="begel">begel</option>}
                                {selectedFood && selectedFood.servingSize.includes('muffin') && <option value="muffin">muffin</option>}
                                {selectedFood && selectedFood.servingSize.includes('croissant') && <option value="croissant">croissant</option>}
                                {selectedFood && selectedFood.servingSize.includes('avocado') && <option value="avocado">avocado</option>}
                                {selectedFood && selectedFood.servingSize.includes('waffle') && <option value="waffle">waffle</option>}
                                {selectedFood && selectedFood.servingSize.includes('tablespoon') && <option value="tablespoon">tablespoon</option>}
                                {selectedFood && selectedFood.servingSize.includes('egg white') && <option value="egg white">egg white</option>}
                                {selectedFood && selectedFood.servingSize.includes('egg yolk') && <option value="egg yolk">egg yolk</option>}
                                <option value="grams">grams</option>
                                <option value="oz">oz</option>
                            </select>
                            <span>{nutrients.calories} cal</span>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <button onClick={postMealLog} className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Add</button>
                            <button onClick={() => setSelectedFood(null)} className="hover:bg-indigo-200 hover:text-indigo-800 text-indigo-500 px-3 py-2 rounded-md">Cancel</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        
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
