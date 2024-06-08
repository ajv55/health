'use client';
import { useState } from 'react';
import faqs from './faq';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-3xl font-medium">{faq.question}</h3>
            <span className="text-3xl text-indigo-600">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="py-2 text-indigo-400 tracking-wide font-light text-xl">{faq.answer}</div>}
        </div>
      ))}
    </div>

  );
};

export default FaqSection;
