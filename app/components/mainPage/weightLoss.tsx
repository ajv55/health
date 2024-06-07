
// WeightLossSuccess.tsx
import React from 'react';
import FeatureForWeight from './featureForWeight';

const features = [
  {
    number: 1,
    title: 'Science-Backed Approach',
    description: 'At WeightTrack, we prioritize science and evidence-based methods to help you achieve your weight loss goals. Our approach is rooted in research, ensuring that every feature and recommendation is backed by scientific principles. Trust us to provide you with reliable information and effective strategies for sustainable weight loss.',
    delay: 0.2,
  },
  {
    number: 2,
    title: 'Personalized Experience',
    description: 'We understand that everyone\'s weight loss journey is unique. That\'s why we offer a personalized experience tailored to your individual needs and preferences. From customized calorie targets to personalized workout plans, we empower you to make choices that align with your goals and lifestyle. With WeightTrack, you\'re not just a number - you\'re a valued member of our community.',
    delay: 0.4,
  },
  {
    number: 3,
    title: 'Comprehensive Support',
    description: 'Weight loss can be challenging, but you don\'t have to go it alone. With WeightTrack, you\'ll have access to comprehensive support every step of the way. Whether you have questions about nutrition, need motivation to stick to your workout routine, or simply want to connect with like-minded individuals, our team and community are here to support you. We\'re committed to your success and will do whatever it takes to help you reach your goals.',
    delay: 0.6,
  },
  {
    number: 4,
    title: 'User-Friendly Interface',
    description: 'We believe that simplicity is key to success. That\'s why we\'ve designed our platform with a user-friendly interface that makes it easy to track your progress, access resources, and stay motivated. Whether you\'re a tech-savvy fitness enthusiast or a beginner looking to make healthier choices, our intuitive interface ensures that you can navigate our platform with ease and confidence.',
    delay: 0.8,
  },
  {
    number: 5,
    title: 'Positive Results',
    description: 'At the end of the day, what matters most is results. And with WeightTrack, you can expect nothing less than positive, tangible results. Countless users have achieved their weight loss goals with our program, experiencing improved health, increased energy, and greater confidence. Join the thousands of satisfied customers who have transformed their lives with WeightTrack, and discover what\'s possible for you.',
    delay: 1.0,
  },
];

const WeightLossSuccess: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-12 flex flex-col items-center">
      <h1 className="lg:text-6xl text-4xl font-bold text-center text-indigo-600 lg:mb-20 mb-8">Unlocking Your Weight Loss Success: Here&#39;s How!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 lg:px-24">
        {features.map((feature) => (
          <FeatureForWeight
            key={feature.number}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default WeightLossSuccess;
