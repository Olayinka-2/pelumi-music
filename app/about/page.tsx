 import React from 'react'
import {FaArrowLeft} from "react-icons/fa"
import Image from 'next/image'
import pelumi from "../../assets/logo.png"

const AboutPage = () => {
  return (
    <section className='flex flex-col'>
      
      <div className='bg-card rounded-t-4xl relative mt-30 flex-1 px-5'>
        <div className='absolute  left-1/2 -translate-1/2'>
        <Image src="/image/pelumi.png" alt="" className="w-40 h-40 object-contain object-center" width={100} height={100}/>
        </div>
        <div className='mt-30 flex flex-col gap-3 mx-auto max-w-xl pb-20'>
          <p><span className='text-accents font-bold text-lg'>Pelumi Adeleke</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro aliquid molestias ullam vero nostrum rem velit provident impedit omnis!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga ea molestias quod veniam. Vitae, veritatis natus. Consequuntur reiciendis qui tempora culpa quibusdam architecto. Itaque laboriosam ipsum debitis iusto illo.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est fuga fugiat tenetur eaque illo, quod omnis voluptatibus eligendi! Nobis aspernatur a quae quisquam, unde facere repellat molestiae temporibus voluptatum fugit, perferendis eaque pariatur qui. Sit obcaecati quibusdam hic debitis quis!</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage