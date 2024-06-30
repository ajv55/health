'use client';
import { useState } from 'react';
import Summary from './summary';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = [
    { name: 'Summary & Foods', key: 'summary' },
    { name: 'Weight Loss', key: 'weightLoss' },
    { name: 'Meal Analysis', key: 'mealAnalysis' },
    { name: 'Cals from Nutrients', key: 'calsFromNutrients' },
  ];

  return (
    <div>
      <div className="flex border-b border-indigo-500">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 ${activeTab === tab.key ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 'summary' && <Summary />}
        {activeTab === 'weightLoss' && <div>Weight Loss Content</div>}
        {activeTab === 'mealAnalysis' && <div>Meal Analysis Content</div>}
        {activeTab === 'calsFromNutrients' && <div>Cals from Nutrients Content</div>}
      </div>
    </div>
  );
};

export default Tabs;
