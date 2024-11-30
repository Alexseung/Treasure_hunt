'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

// app/page.tsx → "/"
export default function HomePage() {
  const router = useRouter();
  const navigateToTreasureHunt = () => {
    router.push('/treasureHunt');
  };
  return (
    <>
      <ul className='text-center mt-10 text-lg'>
        How to
        <li>- Figure out what is saying that</li>
        <li>- think about where they are</li>
        <li>- There will be your Treasure</li>
      </ul>
      <div className='flex justify-center items-center mt-20 ml-72 border bg-red-500 p-2 h-16 w-60'>
        <button
          onClick={navigateToTreasureHunt}
          className='text-4xl font-bold text-white'
        >
          Start
        </button>
      </div>
    </>
  );
}
