'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { GiNotebook } from 'react-icons/gi';
import { IoMdAnalytics } from 'react-icons/io';
import Cal from '@/public/calories.svg';
import Nut from '@/public/nutrition.svg';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  image?: StaticImageData;
  icon?: React.ReactNode;
  items: string[];
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, image, icon, items, delay }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      initial={{ scale: 0, opacity: 0, translateX: '-50%' }} 
      viewport={{ once: true }} 
      whileInView={{ scale: 1, opacity: 1, translateX: '0%' }} 
      transition={{ duration: 0.6, ease: 'easeInOut', delay }} 
      className="bg-gradient-to-br from-orange-600 via-orange-400 to-orange-300 rounded-xl drop-shadow-xl lg:w-[40%] w-[96%] lg:h-[40rem] h-content px-8 py-12 flex flex-col justify-center items-center"
    >
      {image && <Image className='lg:w-[9rem] lg:h-[9rem]' src={image} alt={title} width={70} height={70} />}
      {icon && icon}
      <h1 className='lg:text-3xl text-2xl mt-4 text-center font-bold tracking-wider text-white'>{title}</h1>
      <ul className='lg:text-lg text-base text-white flex flex-col justify-center items-start gap-4 mt-6 lg:w-[82%]'>
        {items.map((item, index) => (
          <li key={index} className='list-disc'>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <div id='features' className='w-full bg-slate-100 h-content flex flex-col gap-14 justify-start items-center py-12'>
      <h1 className='lg:text-6xl text-4xl font-bold tracking-widest text-gray-900'>Features</h1>
      <p className='lg:text-2xl text-xl text-center font-light tracking-wider text-gray-700'>
        Everything you need to <span className='font-bold bg-gradient-to-br from-orange-600 via-orange-400 to-orange-300 bg-clip-text text-transparent'>reach your goals</span>.
      </p>
      <div className='w-full h-content flex flex-col lg:flex-row lg:flex-wrap gap-12 justify-center items-center'>
        <FeatureCard 
          title="Precision Calorie Tracking"
          image={Cal}
          items={[
            "Easily track your daily calorie intake with our intuitive interface.",
            "Set personalized calorie goals based on your weight loss targets and activity level.",
            "Get real-time feedback and insights to optimize your diet for maximum results."
          ]}
          delay={0.4}
        />
        <FeatureCard 
          title="Customized Workout Plans"
          icon={<GiNotebook color='white' size={90} />}
          items={[
            "Access a variety of tailored workout plans designed by fitness experts.",
            "Choose from different workout styles, durations, and intensity levels to suit your preferences.",
            "Track your progress and stay motivated with built-in performance metrics and achievements."
          ]}
          delay={0.6}
        />
        <FeatureCard 
          title="Expert Nutrition Guidance"
          image={Nut}
          items={[
            "Explore our comprehensive nutrition food guide curated by nutritionists and dietitians.",
            "Discover healthy recipes, meal plans, and dietary tips to support your weight loss journey.",
            "Learn about the science behind nutrition and make informed choices for long-term success."
          ]}
          delay={0.8}
        />
        <FeatureCard 
          title="Progress Tracking and Analytics"
          icon={<IoMdAnalytics color='white' size={90} />}
          items={[
            "Monitor your weight loss progress with detailed charts and graphs.",
            "Analyze trends, identify patterns, and make data-driven decisions to stay on track.",
            "Set milestones, celebrate achievements, and share your success with our community."
          ]}
          delay={1.0}
        />
      </div>
    </div>
  );
};

export default Features;
