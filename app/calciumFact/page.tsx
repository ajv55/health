import Head from 'next/head'
import React from 'react'
import style from '@/app/style.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Page() {
  return (
    <div className={`${style.background}`}>
    <Head>
      <title>Getting Enough Calcium for Strong Bones</title>
    </Head>

    <Nav />

    {/* Hero Section */}
    <section className="  py-20">
      <div className="container mt-20 mx-auto text-center">
        <h1 className="text-6xl text-indigo-500 font-bold mb-4">Getting Enough Calcium for Strong Bones</h1>
        <p className="text-2xl text-gray-500">Discover the best ways to ensure optimal calcium intake and maintain strong bones.</p>
      </div>
    </section>

    {/* Information Section */}
    <section className="bg-gray-100 mb-20 p-3 max-w-6xl mx-auto rounded-lg drop-shadow-xl py-10">
      <div className="container mx-auto">
        <div className="">
          {/* Section 1: Understanding Calcium Needs */}
          <h2 className="text-4xl text-indigo-500 font-bold mb-8">Understanding Calcium Needs</h2>
          <p className="text-lg mb-6">
            Calcium is crucial for maintaining strong bones and overall health. It&#39;s recommended that adults aged 19-50 consume
            1,000 mg of calcium per day. This requirement increases to 1,200 mg per day for adults over 50.
          </p>
          <p className="text-lg mb-6">
            Sources of calcium include dairy products like milk, cheese, and yogurt, as well as leafy greens like kale and
            broccoli. Fortified foods such as certain cereals and juices also contribute to calcium intake.
          </p>

          {/* Section 2: Best Sources of Calcium */}
          <h2 className="text-3xl text-indigo-500 font-bold mb-8">Best Sources of Calcium</h2>
          <p className="text-lg mb-6">
            The most bioavailable sources of calcium are often dairy products due to their high calcium content and
            bioavailability. However, for individuals who are lactose intolerant or prefer non-dairy options, fortified plant
            milks, tofu, and certain vegetables are excellent alternatives.
          </p>

          {/* Section 3: Benefits of Calcium */}
          <h2 className="text-3xl text-indigo-500 font-bold mb-8">Benefits of Calcium</h2>
          <p className="text-lg mb-6">
            In addition to bone health, calcium plays a crucial role in muscle function, nerve transmission, and hormone
            secretion. Adequate calcium intake is essential throughout all stages of life to support these vital functions.
          </p>

          {/* Section 4: Calcium Supplements */}
          <h2 className="text-3xl text-indigo-500 font-bold mb-8">Calcium Supplements</h2>
          <p className="text-lg mb-6">
            Some individuals may require calcium supplements to meet daily requirements, especially if dietary intake is
            insufficient. It&#39;s important to consult with a healthcare provider before starting any supplementation regimen.
          </p>

          {/* Section 5: Tracking Calcium Intake */}
          <h2 className="text-3xl text-indigo-500 font-bold mb-8">Tracking Calcium Intake</h2>
          <p className="text-lg mb-6">
            Tracking calcium intake can be done using various apps and tools that calculate nutritional content. It&#39;s essential
            to ensure you&#39;re meeting daily requirements, especially if you have specific health concerns or dietary
            restrictions.
          </p>

          {/* Section 6: Conclusion */}
          <h2 className="text-3xl text-indigo-500 font-bold mb-8">Conclusion</h2>
          <p className="text-lg mb-6">
            Ensuring adequate calcium intake is vital for maintaining strong bones and overall health. By incorporating
            calcium-rich foods into your diet and monitoring intake, you can support optimal bone health and enjoy the many
            benefits of calcium.
          </p>

        </div>
      </div>
    </section>

    <Footer />
  </div>
  )
}
