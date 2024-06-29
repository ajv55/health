import Head from 'next/head'
import React from 'react'
import style from '@/app/style.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function page() {
  return (
    <div className="min-h-screen bg-indigo-50">
    <Head>
      <title>Fat Facts</title>
      <meta name="description" content="What you need to know about the 4 types of fats in foods" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={`${style.background} py-20`}>
        <Nav />
      {/* Hero Section */}
      <section className={`  py-20`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-indigo-500 mb-4">Fat Facts</h1>
          <p className="text-xl md:text-3xl text-gray-500">What you need to know about the 4 types of fats in foods</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800">Types of Fats</h2>
            <p className="text-lg md:text-xl mt-2 text-indigo-600">Understanding the different types of fats and their impact on your health</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Saturated Fats */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Saturated Fats</h3>
              <p className="text-indigo-700">Saturated fats are typically solid at room temperature. They are found in animal products and some plant oils. While they can be part of a healthy diet, it is important to consume them in moderation.</p>
            </div>

            {/* Trans Fats */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Trans Fats</h3>
              <p className="text-indigo-700">Trans fats are created by adding hydrogen to liquid vegetable oils to make them more solid. They are found in many processed foods. It is best to avoid trans fats as they are linked to an increased risk of heart disease.</p>
            </div>

            {/* Monounsaturated Fats */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Monounsaturated Fats</h3>
              <p className="text-indigo-700">Monounsaturated fats are found in various foods and oils. They are considered healthy fats and can help reduce bad cholesterol levels and lower your risk of heart disease and stroke.</p>
            </div>

            {/* Polyunsaturated Fats */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Polyunsaturated Fats</h3>
              <p className="text-indigo-700">Polyunsaturated fats include omega-3 and omega-6 fatty acids, which are essential for the body. They are found in fish, flaxseeds, walnuts, and some vegetable oils. These fats can help improve cholesterol levels and reduce inflammation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/> 
  </div>
  )
}
