'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  number?: number;
  title?: string;
  description?: string;
  delay?: number;
}

const FeatureForWeight: React.FC<FeatureProps> = ({ number, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeInOut', delay }} 
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg  hover:shadow-indigo-300 shadow-lg w-full"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
    </motion.div>
  );
};

export default FeatureForWeight;