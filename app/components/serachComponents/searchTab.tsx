'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Search from './search';
import Recent from './recent';
import Staple from './staple';
import Favorite from './favorite';


const SearchTab = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  console.log(tab);

  useEffect(() => {
    if(tab === 'recentFoods'){
      setActiveTab('recentFoods')
    }
    
  }, [tab])

  const tabs = [
    { name: 'Summary & Foods', key: 'summary' },
    { name: 'Staple Foods', key: 'stapleFoods' },
    { name: 'Recent Foods', key: 'recentFoods' },
    { name: 'Favorite', key: 'favorite' },
    { name: 'My Advice', key: 'advice' },
    { name: 'Step Analysis', key: 'stepAnalysis' },
    { name: 'Water Analysis', key: 'waterAnalysis' },
  ];

  return (
    <div className=' '>
      <div className="flex  w-full border-b border-indigo-500">
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
      <div className="p-4  h-[40rem]  overflow-scroll ">
        {activeTab === 'summary' && <Search />}
        {activeTab === 'stapleFoods' && <Staple />}
        {activeTab === 'recentFoods' && <Recent />}
        {activeTab === 'favorite' && <Favorite />}
        <div className=''>
          {activeTab === 'advice' && <div>serach</div>}
        </div>
        {activeTab === 'stepAnalysis' && <div>serach</div>}
        {activeTab === 'waterAnalysis' && <div>serach</div>}
      </div>
    </div>
  );
};

export default SearchTab;
