'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Search from './search';
import Recent from './recent';
import Staple from './staple';
import Favorite from './favorite';
import Custom from './custom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setActiveTab } from '@/app/slices/searchSlice';
import Recipe from './recipe';


const SearchTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.search.activeTab);

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  console.log(tab);

  useEffect(() => {
    if(tab === 'recentMeals'){
      dispatch(setActiveTab('recentMeals'))
    }
    if(tab === 'custom'){
      dispatch(setActiveTab('custom'))
    }
    if(tab === 'recipes'){
      dispatch(setActiveTab('recipes'))
    }
    
  }, [tab])

  const tabs = [
    { name: 'Summary & Foods', key: 'summary' },
    { name: 'Staple Foods', key: 'stapleFoods' },
    { name: 'Recent Meals', key: 'recentMeals' },
    { name: 'Favorite', key: 'favorite' },
    { name: 'Custom', key: 'custom' },
    { name: 'Recipes', key: 'recipes' },
  ];

  return (
    <div className=' '>
      <div className="flex overflow-x-scroll w-full border-b border-indigo-500">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 ${activeTab === tab.key ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
            onClick={() => dispatch(setActiveTab(tab.key))}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="lg:p-4 p-0 w-full    h-[40rem] flex justify-center items-start  overflow-scroll ">
        {activeTab === 'summary' && <Search />}
        {activeTab === 'stapleFoods' && <Staple />}
        {activeTab === 'recentMeals' && <Recent />}
        {activeTab === 'favorite' && <Favorite />}
        {activeTab === 'custom' && <Custom />}
        {activeTab === 'recipes' && <Recipe />}
      </div>
    </div>
  );
};

export default SearchTab;
