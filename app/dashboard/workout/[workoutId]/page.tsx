'use client';
import { RootState } from "@/app/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });



export default function Page() {

  const isLoading = useSelector((state: RootState) => state.searchWorkout.isLoading);

    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const description = searchParams.get('description');
    const video = searchParams.get('video')
    console.log(video)

  return (
    <div className="w-full h-screen text-4xl flex flex-col justify-start items-center">
        <div className="w-full h-[8rem] border flex flex-col gap-3 justify-start items-start p-2">
          <h1 className="text-4xl font-bold tracking-wider ">{name}</h1>
          <p className="text-center font-medium tracking-wider">{description}</p>
        </div>
        {!isLoading && video && (
                <ReactPlayer url={video} width='100%' height='100%' controls />
            )}
        {isLoading && <p>Loading...</p>}
        {!video && <p>No video available</p>}
    </div>
  )
}
