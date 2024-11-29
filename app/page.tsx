import React from 'react';

// app/page.tsx → "/"
export default function HomePage() {
  return (
    <>
      <ul className='text-center mt-10 text-lg'>
        How to
        <li>- Figure out what is saying that</li>
        <li>- think about where they are</li>
        <li>- There will be your Treasure</li>
      </ul>
      <div className='flex flex-col ml-40 mt-10 pr-10'>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Do you love baking?
          You do? you will need me then.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Is that dirty clothes?
          Okay, I can take it.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> I know you should use
          me, but I sometimes hurt your legs..
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> gray, red, black.. the
          thicker the better. right?
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> 가영 lost my
          partner... It happened when your family was in Korea.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Would you like a
          cuppa?
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Will you eat that
          붕어빵? I can heat it up.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> It is freezing cold in
          here.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Are you going
          something tomorrow? Okay, I will take your 3 hours then.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> I spend more than 10
          per day hours with your baby.
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> 1 scoop? 2 scoops? I
          don't think I can handle 4...
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Hello, Alexis. You
          haven't spent much time with me. You've put me in this dark place. I
          want to play a game
        </label>
        <label className='p-3'>
          <input type='checkbox' className='scale-150' /> Keyaira loves me. I
          don't know why though.
        </label>
      </div>
    </>
  );
}
