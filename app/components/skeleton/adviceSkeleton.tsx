import React from 'react'

export default function AdviceSkeleton() {
  return (
    <div className="animate-pulse flex justify-start items-start flex-col gap-6 space-x-4 w-full">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
    </div>
  )
}
