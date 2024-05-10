'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

function Macro() {

    const {data: session} = useSession();

    const userWeight = session?.user?.weight;
    const userActivity = session?.user?.activity;
    const userCalories = session?.user?.calories;

    console.log(userWeight)

    return (
        <div className='w-[45%]  flex justify-center items-center'>
            <div className="w-full rounded-xl drop-shadow-xl mx-aut bg-gradient-to-bl text-white from-slate-900 via-slate-400 to-slate-600 shadow-md  p-6">
            <h2 className="text-3xl font-semibold mb-4">Macronutrient Recommendations</h2>
            <div className="flex flex-col space-y-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Protein</h3>
                    <p>
                        Protein is essential for muscle repair and growth. A general recommendation is to consume around <span className='text-xl font-bold'>0.8-1 gram</span> of protein per pound of body weight for active individuals.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Carbohydrates</h3>
                    <p>
                        Carbohydrates provide energy and should make up the remaining calories after protein and fat
                        requirements are met. The amount of carbohydrates varies based on activity level and preferences.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Fats</h3>
                    <p>
                        Healthy fats are important for overall health and should make up around <span className='text-xl font-bold'>20-35%</span> of total daily
                        calories. Focus on sources like avocados, nuts, seeds, and olive oil.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Macro;
