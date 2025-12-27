"use client";

import { MdPlayCircleOutline } from 'react-icons/md'
import HomePage from '@/app/component/HomePageComponents/HomePage';


const Home = () => {
  return (
    <div className='min-h-screen bg-background bg-amb'>
      <HomePage />
      {/* <main>
        <section className='max-w-6xl mx-auto py-20 px-10'>
          <div className='mx-auto flex items-center justify-center flex-col gap-2'>
            <h1 className='text-3xl md:text-4xl font-semibold tracking-widest text-primary/95 text-center'>Pelumi Adeleke</h1>
            <p className='text-3xl text-p font-medium'>FaithFul</p>
            <p className='text-accent'>NEW SINGLE AVAILABLE NOW</p>
            <div>

            </div>
            <button className='text-lg flex gap-3  cursor-pointer items-center bg-primary hover:bg-primary/80 text-background px-6 py-2 rounded-md'>
            <MdPlayCircleOutline />
          <span>
          Listen now
            </span>              
            </button>
          </div>
        </section>
      </main> */}
      {/* <HomePage /> */}
    </div>
  )
}

export default Home