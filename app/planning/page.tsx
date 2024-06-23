import React from "react";
import style from '@/app/style.module.css'
import Nav from "../components/nav";
import Footer from "../components/footer";

const Page = () => {
  return (
    <div className={`${style.background} w-full bg-gray-50 min-h-screen`}>
        <Nav />
        <div className="w-full h-[32rem] flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold mt-14 text-indigo-600 mb-4">
            How to Plan Your Calories for Weight Loss or Gains
          </h1>
          <p className="text-gray-700  w-[70%] text-center text-xl mb-6">
            Achieving your weight goals—whether it&#39;s losing weight or gaining muscle—requires a well-thought-out plan. One of the most important aspects of this plan is managing your caloric intake. This guide will help you understand how to calculate and plan your calories to meet your weight goals effectively.
          </p>
        </div>
      <div className="max-w-6xl mx-auto bg-white shadow-lg mb-16 rounded-lg p-8">

        <h2 className="text-5xl font-semibold text-indigo-600 mb-3">
          Understanding Calories
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Calories are units of energy that fuel your body. The number of calories you need each day depends on various factors such as age, gender, weight, height, and activity level. To manage your weight, it&#39;s essential to balance the number of calories you consume with the number of calories your body uses.
        </p>

        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">
          Calculating Your Daily Caloric Needs
        </h2>

        <h3 className="text-xl font-semibold text-indigo-500 mb-2">
          1. Determine Your Basal Metabolic Rate (BMR)
        </h3>
        <p className="text-gray-700 mb-6">
          Your BMR is the number of calories your body needs to maintain basic physiological functions like breathing, circulation, and cell production at rest. You can estimate your BMR using the Harris-Benedict Equation:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-gray-800"><strong>For men:</strong></p>
          <p className="text-gray-700">BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)</p>
          <p className="text-gray-800 mt-4"><strong>For women:</strong></p>
          <p className="text-gray-700">BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)</p>
        </div>

        <h3 className="text-xl font-semibold text-indigo-500 mb-2">
          2. Calculate Your Total Daily Energy Expenditure (TDEE)
        </h3>
        <p className="text-gray-700 mb-6">
          Your TDEE is the total number of calories you burn each day, including all activities. To find your TDEE, multiply your BMR by an activity factor:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <ul className="list-disc list-inside text-gray-700">
            <li>Sedentary (little or no exercise): BMR × 1.2</li>
            <li>Lightly active (light exercise/sports 1-3 days/week): BMR × 1.375</li>
            <li>Moderately active (moderate exercise/sports 3-5 days/week): BMR × 1.55</li>
            <li>Very active (hard exercise/sports 6-7 days a week): BMR × 1.725</li>
            <li>Super active (very hard exercise/physical job): BMR × 1.9</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">
          Setting Your Caloric Goals
        </h2>

        <h3 className="text-xl font-semibold text-indigo-500 mb-2">
          1. For Weight Loss
        </h3>
        <p className="text-gray-700 mb-6">
          To lose weight, you need to create a caloric deficit, meaning you consume fewer calories than your TDEE. A safe and sustainable rate of weight loss is about 0.5 to 1 kilogram (1 to 2 pounds) per week. To achieve this, aim for a daily calorie deficit of 500 to 1000 calories.
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Example:</strong> If your TDEE is 2500 calories, you should aim to consume between 1500 and 2000 calories per day for weight loss.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-indigo-500 mb-2">
          2. For Weight Gain
        </h3>
        <p className="text-gray-700 mb-6">
          To gain weight, you need a caloric surplus, meaning you consume more calories than your TDEE. Aiming for a gradual weight gain of about 0.25 to 0.5 kilograms (0.5 to 1 pound) per week is ideal. This requires a daily caloric surplus of 250 to 500 calories.
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-gray-700">
            <strong>Example:</strong> If your TDEE is 2500 calories, you should aim to consume between 2750 and 3000 calories per day for weight gain.
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">
          Macronutrient Breakdown
        </h2>
        <p className="text-gray-700 mb-6">
          In addition to tracking your calories, it&#39;s important to pay attention to the macronutrient composition of your diet. The three main macronutrients are carbohydrates, proteins, and fats, and they each play a crucial role in your body.
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Protein:</strong> Essential for muscle repair and growth. Aim for 10-35% of your daily calories from protein.</li>
            <li><strong>Carbohydrates:</strong> Your body&#39;s main source of energy. Aim for 45-65% of your daily calories from carbs.</li>
            <li><strong>Fats:</strong> Important for hormone production and nutrient absorption. Aim for 20-35% of your daily calories from fats.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">
          Tips for Effective Calorie Management
        </h2>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Track Your Intake:</strong> Use a food diary or a calorie-tracking app to log your meals and snacks. This helps you stay accountable and make informed choices.</li>
            <li><strong>Plan Your Meals:</strong> Preparing your meals in advance can help you control portions and avoid unhealthy choices.</li>
            <li><strong>Stay Hydrated:</strong> Sometimes thirst is mistaken for hunger. Drinking enough water can help manage your appetite.</li>
            <li><strong>Be Consistent:</strong> Consistency is key to achieving your weight goals. Stick to your plan and make adjustments as needed.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold text-indigo-600 mb-3">
          Conclusion
        </h2>
        <p className="text-gray-700 mb-6">
          Planning your calories for weight loss or gains requires understanding your daily caloric needs, setting realistic goals, and monitoring your intake. By following these steps and maintaining a balanced diet, you can achieve your desired weight and maintain a healthy lifestyle. Remember, it’s always best to consult with a healthcare provider or a nutritionist before making significant changes to your diet.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
