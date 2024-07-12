'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import style from '@/app/style.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';


const calculateFoodGrade = (transFat: number, satFat: number, sodium: number, sugar: number, fiber: number, carbs: number, protein: number, fat: number) => {
  let grade = 'A';
  const transFatThreshold = 0.5;
  const satFatThreshold = 3;
  const sodiumThreshold = 400;
  const sugarThreshold = 10;
  const fiberThreshold = 3;
  const carbsThreshold = 50;
  const proteinThreshold = 20;
  const fatThreshold = 30;

  if (transFat > transFatThreshold) {
    grade = 'F';
  } else if (satFat > satFatThreshold) {
    grade = 'D';
  } else if (sodium > sodiumThreshold) {
    grade = 'D';
  } else if (sugar > sugarThreshold) {
    grade = 'C';
  } else if (fiber < fiberThreshold) {
    grade = 'C';
  } else if (carbs > carbsThreshold) {
    grade = 'B';
  } else if (protein < proteinThreshold) {
    grade = 'B';
  } else if (fat > fatThreshold) {
    grade = 'B';
  }
  
  return grade;
};

const Page = () => {
  const [amount, setAmount] = useState<number>(1);
  const [mealType, setMealType] = useState<string>('Breakfast')
  const [foodGrade, setFoodGrade] = useState('A'); // Default to 'A'
  const searchParams = useSearchParams();
  const [unit, setUnit] = useState<string>("grams");
  const [nutrients, setNutrients] = useState<any>({}); 
  
  // Fetching values from searchParams
  const name = searchParams.get('name') || 'Unknown';
  const transFat = parseFloat(searchParams.get('transFat') || '0');
  const protein = parseFloat(searchParams.get('protein') || '0');
  const fat = parseFloat(searchParams.get('fat') || '0');
  const carbs = parseFloat(searchParams.get('carbs') || '0');
  const satFat = parseFloat(searchParams.get('satFat') || '0');
  const calcium = parseFloat(searchParams.get('calcium') || '0');
  const sodium = parseFloat(searchParams.get('sodium') || '0');
  const fiber = parseFloat(searchParams.get('fiber') || '0');
  const calories = parseFloat(searchParams.get('calories') || '0');
  const servingSize = searchParams.get('servingSize') ?? ''; // Adjust for your specific search param key

  const mealData = {
    name: name,
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



  // Calculate food grade
  useEffect(() => {
    const grade = calculateFoodGrade(transFat, satFat, sodium, carbs, fiber, carbs, protein, fat);
    setFoodGrade(grade);
  }, [transFat, satFat, sodium, carbs, fiber, protein, fat]);

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

const handlePostMealToLogs = async () => {
  await axios.post(`/api/post${mealType}`, mealData).then((res) => {
      console.log(res)
      if(res.status === 201){
          toast.success(`Successfully added a ${mealType} item`)
      }
  })
}

console.log(`/api/post${mealType}`)

useEffect(() => {
  calculateNutrients(amount, unit)
}, [])

console.log(servingSize)
console.log(calories)

const calculateNutrients = (amount: number, unit: string) => {

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
      "egg yolk": 18,
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
      calories: (calories * multiplier) || 0,
      fat: (fat * multiplier) || 0,
      carbs: (carbs * multiplier) || 0,
      protein: (protein * multiplier) || 0,
      sodium: (sodium * multiplier) || 0,
      transFat: (transFat * multiplier) || 0,
      satFat: (satFat * multiplier) || 0,
      calcium: (calcium * multiplier) || 0,
      fiber: (fiber * multiplier) || 0,
  };

  // Convert all calculated values to fixed decimals and ensure they are not NaN
  for (const key in calculatedNutrients) {
      calculatedNutrients[key] = isNaN(calculatedNutrients[key]) ? 0 : parseFloat(calculatedNutrients[key].toFixed(1));
  }

  setNutrients(calculatedNutrients); // Update state with calculated nutrients
};

console.log(nutrients)
console.log(unit)


  return (
    <div className={`${style.background} min-h-screen w-full bg-white flex flex-col items-center justify-start p-6`}>
      <div className='flex justify-start bg-transparent mb-8 items-start w-full'>
        <Link href='/dashboard/calories/search' className='flex justify-start items-center gap-4'><IoArrowBackOutline  size={30} color='black' /> Back to search</Link>
      </div>
      <div className="bg-indigo-50 ring-2 ring-indigo-500 shadow-lg rounded-lg p-8 max-w-5xl w-full">
        <div className="flex items-center mb-6">
          <h1 className="text-4xl text-indigo-600 font-bold">{name}</h1>
        </div>
        
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount eaten</label>
          <input 
            id="amount" 
            type="number" 
            value={amount}
            onChange={handleAmountChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
          <select
            className="block py-2 px-4 w-[36%] text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            required
            value={unit}
            onChange={handleUnitChange}
        >
            {servingSize.includes('medium') && <option value="medium">medium</option>}
            {servingSize.includes('slice') && <option value="slice">slice</option>}
            {servingSize.includes('cup') && <option value="cup">cup</option>}
            {servingSize.includes('tbsp') && <option value="tbsp">tbsp</option>}
            {servingSize.includes('egg') && <option value="egg">egg</option>}
            {servingSize.includes('tortilla') && <option value="tortilla">tortilla</option>}
            <option value="grams">grams</option>
            <option value="oz">oz</option>
        </select>
        </div>
        
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">{Math.round(nutrients?.calories)} cals</span>
          <button onClick={handlePostMealToLogs} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Log Food to {mealType}</button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-xl text-indigo-500 font-semibold">Protein</span>
            <span className="text-lg">{Math.round(nutrients?.protein)}g</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-indigo-500 font-semibold">Food Grade</span>
            <span className={`text-6xl ${foodGrade === 'A' ? 'text-green-600' : (foodGrade === 'F' ? 'text-red-500' : 'text-yellow-500')}`}>{foodGrade}</span>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <label htmlFor="meal" className="text-xl font-semibold text-indigo-500 mb-2">Meal</label>
            <select 
              id="meal" 
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className="text-lg p-2 border border-indigo-400 rounded-md w-[45%] focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
