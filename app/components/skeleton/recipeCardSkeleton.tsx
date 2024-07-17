import React from 'react'

export default function RecipeCardSkeleton() {
  return (
    <div className="p-4 rounded-lg w-full h-full bg-white">
      <div className="animate-pulse">
        <div className="h-64 bg-indigo-200 rounded mb-8"></div>
        <div className="h-4 bg-gray-300 rounded mb-8"></div>
        <div className="h-2 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  )
}
