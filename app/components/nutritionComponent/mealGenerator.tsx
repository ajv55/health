'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const MealGenerator = () => {
  const [goals, setGoals] = useState('');
  const [preferences, setPreferences] = useState('');
  const [mealPlan, setMealPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {data: session} = useSession();

  console.log(session?.user?.isActive)
  const isUserActive = session?.user?.isActive;

  const handleUser = () => {
    if(isUserActive){
      // here is where i will allow the user to have access to the ai generate meal plans
      console.log('youre a paid memeber now lets gooooo!!!!')
    } else {
      router.push('/pricing')
    }
  }
  

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Generate Your Meal Plan</h2>
        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-gray-700">Macronutrient Goals</label>
            <input
              id="goals"
              name="goals"
              type="text"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g., 2000 calories, 150g protein"
            />
          </div>
          <div>
            <label htmlFor="preferences" className="block text-sm font-medium text-gray-700">Dietary Preferences</label>
            <input
              id="preferences"
              name="preferences"
              type="text"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="e.g., vegan, gluten-free"
            />
          </div>
          <div>
            <button
              onClick={handleUser}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
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
