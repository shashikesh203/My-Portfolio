import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className='text-[#ffffff] bg-[#3e403f]'>
        <div className='py-6'>
            <h1 className='text-center font-bold text-4xl'>GET IN TOUCH</h1>
            <p className='text-center italic font-bold text-blue-400 text-sm py-2'>Let's Work Together</p>
        </div>
        <div className='grid grid-cols-4'>
            <div className='text-center'>
                <p className='px-32 text-5xl'><FaPhoneVolume /></p>
                <p className='py-2 font-bold'>Phone & Mobile</p>
                <p>546565658979</p>
                <p>6784563894897</p>
            </div>
            <div className='text-center'>
                <p className='px-32 text-5xl'><FaPhoneVolume /></p>
                <p className='py-2 font-bold'>Phone & Mobile</p>
                <p>546565658979</p>
                <p>6784563894897</p>
            </div>

            <div className='text-center'>
                <p className='px-32 text-5xl'><FaPhoneVolume /></p>
                <p className='py-2 font-bold'>Phone & Mobile</p>
                <p>546565658979</p>
                <p>6784563894897</p>
            </div>

            <div className='text-center'>
                <p className='px-32 text-5xl'><FaPhoneVolume /></p>
                <p className='py-2 font-bold'>Phone & Mobile</p>
                <p>546565658979</p>
                <p>6784563894897</p>
            </div>
        </div>
        <div className='pt-12'>
            <p className='border pt-1 bg-blue-400 mx-12 rounded-md'></p>
            <p className='text-4xl text-center text-red-500 italic py-2'>Shashikesh Kumar Mishra</p>
            <p className='border pt-1 bg-blue-400 mx-12 rounded-md'></p>
            <p className='text-center font-semibold italic text-2xl py-10'>Portfolio 2024</p>
        </div>
    </div>
  )
}

export default Contact