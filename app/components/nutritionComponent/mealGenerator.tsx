'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const MealGenerator = () => {
  const [goals, setGoals] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [preferences, setPreferences] = useState('');
  const [mealPlan, setMealPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {data: session} = useSession();

  
  const stripeCustomerId = session?.user?.stripeCustomerId;

  console.log(isActive)


  useEffect(() => {
    const updatedIsActive = async () => {
        try {
            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({stripeCustomerId: stripeCustomerId})
            });
            if (response.ok) {
                const data = await response.json();
                setIsActive(data.isUserActive);
                // Update isUserActive based on the updated status from the backend
            } else {
                console.error('Failed to update isUserActive:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating isUserActive:', error);
        }
    };

    updatedIsActive();
}, [stripeCustomerId]);


  const handleUser = () => {
    if(isActive){
      // here is where i will allow the user to have access to the ai generate meal plans
      console.log('youre a paid memeber now lets gooooo!!!!')
    } else {
      router.push('/pricing')
    }
  }
  

  return (
    <div className="  w-[45%] py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="bg-white h-[23rem] shadow-md shadow-zinc-900 rounded-lg p-8">
      <h2 className="text-5xl font-extrabold text-gray-900 text-center">Generate Your Meal Plan</h2>
      <div className="mt-8 space-y-6">
        <div>
          <label htmlFor="goals" className="block text-2xl font-medium text-gray-700">Macronutrient Goals</label>
          <input
            id="goals"
            name="goals"
            type="text"
            className="mt-1 block w-full placeholder:text-xl outline-violet-500 p-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            placeholder="e.g., 2000 calories, 150g protein"
          />
        </div>
        <div>
          <label htmlFor="preferences" className="block text-2xl font-medium text-gray-700">Dietary Preferences</label>
          <input
            id="preferences"
            name="preferences"
            type="text"
            className="mt-1 block w-full p-2 placeholder:text-xl outline-violet-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="e.g., vegan, gluten-free"
          />
        </div>
        <div>
          <button
            onClick={handleUser}
            className="w-full bg-gradient-to-br from-violet-800 via-violet-600 to-violet-300 hover:from-violet-300 hover:via-violet-500 hover:to-violet-300 drop-shadow-2xl text-white font-bold py-2 px-4 rounded-md text-2xl"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Meal Plan'}
          </button>
        </div>
      </div>
      {mealPlan && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900">Your Meal Plan</h3>
          <p className="mt-4 text-gray-700 whitespace-pre-wrap">{mealPlan}</p>
        </div>
      )}
    </div>
  </div>
  );
};

export default MealGenerator;
