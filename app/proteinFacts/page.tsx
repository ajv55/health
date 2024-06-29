import Head from 'next/head'
import React from 'react'
import style from '@/app/style.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Page() {
  return (
    <div className={`${style.background} bg-indigo-50 min-h-screen`}>
      <Head>
        <title>Benefits of Eating Protein for Weight Loss</title>
        <meta name="description" content="Learn about the benefits of eating protein for healthy and achievable weight loss, plus how to track them." />
      </Head>

      <Nav />

      <header className="   py-6">
        <div className="container mt-28 flex justify-center items-center mx-auto ">
          <h1 className="text-6xl text-center text-gray-500 font-bold">The Benefits of <span className=' bg-gradient-to-br from-indigo-700 via-indigo-500 to-indigo-600 text-transparent bg-clip-text'>Eating Protein</span> for Healthy Weight Loss</h1>
        </div>
      </header>

      <main className={`${style.background} container mx-auto px-4 py-10`}>
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Why Protein is Essential for Weight Loss</h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-4">
            Protein is a crucial macronutrient that plays a vital role in building and repairing tissues, producing enzymes and hormones, and maintaining healthy skin, hair, and nails. When it comes to weight loss, protein can help in several ways:
          </p>
          <ul className="list-disc text-lg list-inside text-gray-700 mb-4">
            <li><strong>Increases Satiety:</strong> Protein-rich foods can make you feel fuller for longer, reducing overall calorie intake.</li>
            <li><strong>Boosts Metabolism:</strong> The thermic effect of food (TEF) is higher for protein than for carbs or fats, meaning your body burns more calories digesting protein.</li>
            <li><strong>Preserves Muscle Mass:</strong> During weight loss, it&#39;s important to retain muscle mass, and protein helps prevent muscle loss while promoting fat loss.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            In addition to these benefits, protein can help regulate blood sugar levels, improve bone health, and support overall body function.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Tracking Your Protein Intake</h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-4">
            To ensure you&#39;re getting enough protein for weight loss, it&#39;s important to track your intake. Here are some tips on how to do that effectively:
          </p>
          <ul className="list-disc text-lg list-inside text-gray-700 mb-4">
            <li><strong>Use a Food Diary or App:</strong> Apps like MyFitnessPal or Cronometer can help you log your food intake and monitor your protein consumption.</li>
            <li><strong>Read Nutrition Labels:</strong> Pay attention to the protein content on food labels to make informed choices.</li>
            <li><strong>Plan Your Meals:</strong> Include a source of protein in every meal and snack to meet your daily requirements.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            The recommended dietary allowance (RDA) for protein is 46 grams per day for women and 56 grams per day for men, but your needs may vary based on your weight, activity level, and health goals.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
