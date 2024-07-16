'use client';
import React, { useEffect, useState } from 'react';
import style from '@/app/style.module.css';
import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Page = () => {
  const {data: sessoin} = useSession();
  const userIsActive = sessoin?.user?.isActive || false;
  const router = useRouter();

  const [foodName, setFoodName] = useState('');
  const [servingName, setServingName] = useState('');
  const [servingWeight, setServingWeight] = useState('');
  const [calories, setCalories] = useState('');
  const [totalFats, setTotalFats] = useState('');
  const [saturatedFat, setSaturatedFat] = useState('');
  const [transFat, setTransFat] = useState('');
  const [fiber, setFiber] = useState('');
  const [carbs, setCarbs] = useState('');
  const [sugar, setSugar] = useState('');
  const [addedSugar, setAddedSugar] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [sodium, setSodium] = useState('');
  const [calcium, setCalcium] = useState('');
  const [potassium, setPotassium] = useState('');
  const [iron, setIron] = useState('');
  const [protein, setProtein] = useState('');


  const data = {
    foodName,
    servingName,
    servingWeight,
    calories,
    totalFats,
    saturatedFat,
    transFat,
    protein,
    carbs,
    fiber,
    sugar,
    addedSugar,
    potassium,
    calcium,
    sodium,
    cholesterol,
    iron
  }

  const postCustomFood = async () => {
    await axios.post('/api/postCustomFood', {data}).then((res) => {
        if(res.status === 201){
            toast.success('Successfully added custom food');
            router.push('/dashboard/calories/search?tab=custom')
        }
    })
  };


  const handlePostCustomFood = () => {
    postCustomFood();
  }

 

  return (
    <div className={`${style.background} w-full overflow-scroll h-screen`}>
        <div className='flex justify-start bg-transparent items-center h-12 w-full'>
            <Link href='/dashboard/calories/search' className='flex text-xl justify-start items-center gap-4'><IoArrowBackOutline  size={30} color='black' /> Back to search</Link>
        </div>
        <div className="w-[80%] mb-12 mx-auto p-6 bg-indigo-50 ring-2 ring-indigo-600 drop-shadow-xl shadow-md rounded-lg mt-5">
        <div className='w-full flex justify-between items-center'>
            <h2 className="text-5xl font-bold bg-gradient-to-br from-indigo-600 to-indigo-300 bg-clip-text text-transparent mb-4">Custom Food</h2>
            <button onClick={handlePostCustomFood} className="w-[15%] py-2 px-4 bg-gradient-to-bl from-indigo-500 to-indigo-400 hover:from-indigo-400 hover:to-indigo-600 text-lg text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
        </div>
        <form  className="space-y-4">
            <div>
            <label className="block text-gray-700">Food Name</label>
            <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Longer, detailed food names are recommended"
            />
            </div>
            <div>
            <label className="block text-gray-700">Serving Name & Number</label>
            <input
                type="text"
                value={servingName}
                onChange={(e) => setServingName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter serving size as printed on Nutrition Facts"
            />
            </div>
            <div>
            <label className="block text-gray-700">Serving Weight (g)</label>
            <input
                type="text"
                value={servingWeight}
                onChange={(e) => setServingWeight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Total weight of what is entered above"
            />
            </div>
            <div>
            <label className="block text-gray-700">Calories</label>
            <input
                type="text"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter calories"
            />
            </div>
            <div className='border-t-2 border-indigo-500'>
                <h3 className='text-2xl text-indigo-400 mb-4 mt-3'>Fat Components</h3>
            <label className="block text-gray-700">Total Fats (g)</label>
            <input
                type="text"
                value={totalFats}
                onChange={(e) => setTotalFats(e.target.value)}
                placeholder="Enter fat"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Saturated Fat (g)</label>
            <input
                type="text"
                value={saturatedFat}
                onChange={(e) => setSaturatedFat(e.target.value)}
                placeholder="Enter saturated fat"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Trans Fat (g)</label>
            <input
                type="text"
                value={transFat}
                placeholder="Enter trans fat"
                onChange={(e) => setTransFat(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div className='border-t-2 border-indigo-800'>
            <h3 className='text-2xl text-indigo-400 mb-4 mt-3'>Carbs related</h3>
            <label className="block text-gray-700">Total Carbs (g)</label>
            <input
                type="text"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                placeholder="Enter carbs"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Dietary Fiber (g)</label>
            <input
                type="text"
                value={fiber}
                onChange={(e) => setFiber(e.target.value)}
                placeholder="Enter fiber"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Total Sugar (g)</label>
            <input
                type="text"
                value={sugar}
                onChange={(e) => setSugar(e.target.value)}
                placeholder="Enter sugar"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Added Sugar (g)</label>
            <input
                type="text"
                value={addedSugar}
                placeholder="Enter added sugar"
                onChange={(e) => setAddedSugar(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div className='border-t-2  border-b-2 border-indigo-300'>
            <label className="block text-gray-700 mt-3">Protein (g)</label>
            <input
                type="text"
                value={protein}
                placeholder="Enter protein"
                onChange={(e) => setProtein(e.target.value)}
                className="w-full p-2 mb-7 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Cholesterol (g)</label>
            <input
                type="text"
                value={cholesterol}
                placeholder="Enter cholesterol"
                onChange={(e) => setCholesterol(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Sodium (mg)</label>
            <input
                type="text"
                value={sodium}
                placeholder="Enter sodium"
                onChange={(e) => setSodium(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Calcium (%)</label>
            <input
                type="text"
                value={calcium}
                placeholder="Enter calicum"
                onChange={(e) => setCalcium(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Potassium (mg)</label>
            <input
                type="text"
                value={potassium}
                placeholder="Enter potassium"
                onChange={(e) => setPotassium(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>
            <div>
            <label className="block text-gray-700">Iron (%)</label>
            <input
                type="text"
                value={iron}
                placeholder="Enter iron"
                onChange={(e) => setIron(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div> 
            <div className='w-full flex justify-end items-end'>
                <h2>{userIsActive === false ? <Link className="text-indigo-600 text-sm" href='/pricing'>Become a premium user!</Link> : ''}</h2>
            </div>
        </form>
        </div>
        
    </div>
  );
};

export default Page;

