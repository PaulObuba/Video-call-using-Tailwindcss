import React, { useEffect, useState } from 'react'

import ImageOne from './images/paul.jpg';
import Imagetwo from './images/boy.jpg';
import ImageThree from './images/girl.webp';
import ImageFour from './images/michael.jpg';

function App() {
  const [date, setDate] = useState('');

  const currentDate = () => {
    const date = new Date();
    setDate(date.toLocaleTimeString('en-IT', { hour12: false }))
  }
 useEffect(() => {
  setInterval(currentDate, 1000)
 })

  return (
    <div className='flex justify-center items-center text-white bg-gray-500 h-screen'>
      <div className='flex flex-row justify-between w-auto h-5/6 p-4 my-10 shadow-2xl rounded-3xl bg-stone-900 overflow-hidden'>

        <div className='flex flex-col justify-between w-1/3 p-4 h-full overflow-hidden rounded-2xl bg-stone-800 break-words'>
          <h1 className='text-4xl text-center font-mono'>zuddi</h1>
          <div className='my-3'>
            <button className='flex flex-row justify-start p-2 my-2'>
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2} d="M4 8h16M4 16h16"
                />
              </svg>
              Room
            </button>
            <button className='flex flex-row justify-start p-2 my-2 text-orange-600 bg-orange-400 rounded-xl'>
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                /></svg>
              Stage
            </button>
            <button className='flex flex-row justify-start p-2 my-2'>
              <svg
                className="w-6 h-6 mr-2"
                fill="none" stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
              Networking
            </button>
            <button className='flex flex-row justify-start p-2 my-2'>
              <svg className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Schedule
            </button>
            <button className='flex flex-row justify-start p-2 my-2'>
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                /></svg>Expo
            </button>
            <button className='flex flex-row justify-start p-2 my-2'>
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              Lobby
            </button>
            <button className='flex flex-row justify-start p-2 my-2'>
              <svg
                className="w-6 h-6 mr-2"
                fill="none" stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ><path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notification
            </button>
          </div>
          <div className='flex flex-row justify-between items-center w-full mt-0 overflow-hidden hover:overflow-visible'>
            <img src={ImageOne} alt='' className='object-cover w-10 mr-5 h-10 rounded-xl' />
            <div className='flex flex-col w-fit'>
              <h3>Paul</h3>
              <p className='text-xs'>paulobuba26@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between w-full h-full p-5 ml-4 rounded-2xl bg-stone-800 overflow-hidden'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-xl font-mono'>Video call with loved ones</h1>
            <div className='flex flex-row items-center justify-around py-1 px-7 border-2 border-stone-500 rounded-xl'>
              <span className='w-4 h-4 mr-2 bg-red-600 px-1 rounded-full shadow-2xl shadow-red-600'></span>{date}
            </div>
          </div>
          <img src={ImageThree} alt='imae' className=' object-cover  h-1/2 w-full mt-2 rounded-3xl' />
          <div className='flex flex-row justify-between h-1/4 w-full my-3'>
            <img src={ImageOne} alt='ima' className='w-1/3 h-full rounded-3xl' />
            <img src={ImageFour} alt='man' className='w-1/4 h-full mx-1 rounded-3xl' />
            <img src={Imagetwo} alt='san' className='w-1/3 h-full rounded-3xl' />
          </div>
          <div className='flex flex-row justify-between items-center w-full px-2 py-1 text-white bg-stone-900 rounded-xl'>
            <div className='flex justify-center items-center w-10 h-10 p-2 border-2 border-stone-500 bg-black rounded-xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div className='flex justify-center items-center w-10 h-10 p-2 border-2 border-stone-500 bg-black rounded-xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
            <div className='flex justify-center items-center w-10 h-10 p-2 border-2 border-stone-500 bg-black rounded-xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <div className='flex justify-center items-center cursor-pointer w-14 h-14 p-2 border-2 border-red-700 bg-red-700 rounded-xl'>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className='flex justify-center items-center w-10 h-10 p-2 border-2 border-stone-500 bg-black rounded-xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
            </div>
            <div className='flex justify-center items-center w-10 h-10 p-2 border-2 border-stone-500 bg-black rounded-xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            </div>
            <div className='flex justify-center items-center w-10 h-10 p-2 border-2 border-stone-500 bg-black rounded-xl'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
