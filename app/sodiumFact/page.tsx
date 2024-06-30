import Head from 'next/head'
import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import style from '@/app/style.module.css';

export default function Page() {
  return (
    <div className={`${style.background} min-h-screen bg-white`}>
      <Head>
        <title>Expert Tips on Reducing Sodium Intake</title>
        <meta name="description" content="Learn expert tips on how to reduce sodium intake and track your progress." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <header className="py-10">
        <div className="container  mt-20 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-500">
            Expert Tips on Reducing Sodium Intake
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-500">
            Discover how to lower your sodium intake for better health
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-800 mb-6">
            Understanding Sodium and Its Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Sodium is an essential mineral that helps maintain fluid balance, transmit nerve impulses, and influence muscle contraction and relaxation. However, consuming too much sodium can lead to hypertension (high blood pressure), which increases the risk of heart disease and stroke. According to the American Heart Association, the recommended daily sodium intake is less than 2,300 milligrams, ideally aiming for 1,500 milligrams for most adults.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Here are some expert tips on how to reduce your sodium intake and track it effectively.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-800 mb-6">
            Tips for Reducing Sodium Intake
          </h2>
          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              1. Read Nutrition Labels
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Always check the nutrition labels on packaged foods to monitor the amount of sodium per serving. Aim for products with lower sodium content, and be cautious of serving sizes, which can affect the total sodium intake.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Look for products labeled &quot;low sodium,&quot; &quot;reduced sodium,&quot; or &quot;no salt added.&quot; These labels indicate products that contain less sodium than their regular counterparts.
            </p>
          </article>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              2. Cook at Home
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Preparing meals at home allows you to control the ingredients and their sodium content. Use fresh herbs, spices, and citrus fruits to enhance the flavor of your dishes without adding extra salt.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Experiment with salt substitutes like potassium chloride, but consult with your doctor before use, especially if you have kidney issues or are on medication.
            </p>
          </article>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              3. Choose Fresh and Whole Foods
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Fresh fruits, vegetables, lean meats, and whole grains are naturally low in sodium. Incorporate these foods into your diet and reduce reliance on processed foods, which are typically high in sodium.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              When buying canned or frozen vegetables, opt for those labeled &quot;no salt added&quot; or &quot;low sodium.&quot;
            </p>
          </article>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              4. Be Mindful When Dining Out
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Restaurants often add extra salt to enhance flavors. When dining out, ask for your meal to be prepared without added salt or request sauces and dressings on the side.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Choose dishes that are steamed, grilled, or baked instead of fried or breaded, as these cooking methods typically use less sodium.
            </p>
          </article>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-800 mb-6">
            Tracking Your Sodium Intake
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Monitoring your sodium intake can help you stay within recommended limits and identify areas where you can make healthier choices. Here are some strategies for tracking sodium:
          </p>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              1. Use a Food Diary
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Keeping a food diary can help you track everything you eat and drink, along with their sodium content. Apps like MyFitnessPal or Lose It! allow you to log your meals and provide nutritional information, including sodium.
            </p>
          </article>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              2. Check Nutrition Databases
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Utilize online nutrition databases, such as the USDA National Nutrient Database, to find sodium information for various foods. This can help you make informed decisions when grocery shopping or meal planning.
            </p>
          </article>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              3. Measure Portion Sizes
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Be mindful of portion sizes, as larger portions can contribute to higher sodium intake. Use measuring cups, spoons, and a kitchen scale to accurately measure your food.
            </p>
          </article>

          <article className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
              4. Educate Yourself
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Understanding which foods are high in sodium can help you make better choices. Common high-sodium foods include processed meats, canned soups, salty snacks, and fast food. Being aware of these can help you avoid them or find healthier alternatives.
            </p>
          </article>
        </section>
      </main> 

      <Footer />
    </div>
  )
}
