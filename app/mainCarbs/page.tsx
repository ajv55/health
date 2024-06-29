import Head from 'next/head'
import React from 'react'
import style from '@/app/style.module.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Page() {
  return (
    <div className={`${style.background} `}>
      <Head>
        <title>Starch, Sugar, and Fiber - Carbohydrates Explained</title>
        <meta name="description" content="Understanding the three main types of carbohydrates and their impact on health." />
      </Head>

     <Nav />

      <header className=' h-[16rem]  py-6'>
        <div className=" flex h-full flex-col justify-end items-center mx-auto">
          <h1 className="text-7xl text-indigo-600 font-bold">Starch, Sugar, and Fiber</h1>
          <p className="mt-2 text-2xl text-gray-500">Understanding the three main types of carbohydrates and their impact on health.</p>
        </div>
      </header>

      <main className={`${style.background} container mx-auto p-6`}>
        <section className="bg-white hover:shadow-indigo-400 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Introduction</h2>
          <p className='text-lg'>
            Carbohydrates are a crucial part of a balanced diet. They provide the energy necessary for the body&#39;s daily functions. There are three main types of carbohydrates: starch, sugar, and fiber. Each type plays a unique role in our health.
          </p>
        </section>

        <section className="bg-white hover:shadow-indigo-400 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Starch</h2>
          <p className='text-lg'>
            Starches are complex carbohydrates found in foods such as potatoes, rice, and bread. They are long chains of glucose molecules that our bodies break down into sugar for energy. Starches are a significant source of sustained energy.
          </p>
        </section>

        <section className="bg-white hover:shadow-indigo-400 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Sugar</h2>
          <p className='text-lg'>
            Sugars are simple carbohydrates that can be naturally occurring or added to foods. They are quickly absorbed by the body and provide a rapid source of energy. However, excessive intake of added sugars can lead to health issues such as obesity and diabetes.
          </p>
        </section>

        <section className="bg-white hover:shadow-indigo-400 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Fiber</h2>
          <p className='text-lg'>
            Fiber is a type of carbohydrate that the body cannot digest. It is found in fruits, vegetables, whole grains, and legumes. Fiber aids in digestion, helps regulate blood sugar levels, and can lower cholesterol. It is essential for maintaining a healthy digestive system.
          </p>
        </section>

        <section className="bg-white hover:shadow-indigo-400 mb-8 shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Tracking Carbohydrates</h2>
          <p className='text-lg'>
            Understanding your carbohydrate intake is vital for managing your diet. Keeping track of the types of carbohydrates you consume can help you maintain a balanced diet and prevent health issues. Many apps and tools are available to help you monitor your intake.
          </p>
        </section>
      </main>
      <Footer />
    </div>

  )
}
