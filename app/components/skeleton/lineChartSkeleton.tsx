import React from 'react';

const LineChartSkeleton = () => {
  return (
    <div className="p-4 rounded-lg absolute top-0 left-0 w-full h-full bg-white">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-10"></div>
        <div className="h-64 bg-indigo-200 rounded mb-8"></div>
        <div className="h-10 bg-gray-300 rounded mb-8"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default LineChartSkeleton;
