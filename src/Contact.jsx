import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailPin } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='text-[#ffffff] bg-[#151618]'>
        <div className='py-6'>
            <h1 className='text-center font-bold text-4xl'>GET IN TOUCH</h1>
            <p className='text-center italic font-bold text-blue-400 text-sm py-2'>Let's Work Together</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-4'>
            <div className='mb-12 text-center sm:text-center'>
                <p className='px-56 text-5xl sm:px-32 text-5xl'><FaPhoneVolume /></p>
                <p className='py-2 font-bold'>Phone & Mobile</p>
                <p>8340743487</p>
                <p>3274678837</p>
            </div>
            <div className='mb-12 text-center sm:text-center'>
                <p className='px-60 text-5xl sm:px-36 text-5xl'><TbMailPin /></p>
                <p className='py-2 ps-5  font-bold sm:py-2 ps-4 font-bold'>Email</p>
                <p>ui123t@gmail.com</p>
                <p>shashi9934@gmail.com</p>
            </div>

            <div className='mb-12 text-center sm:text-center'>
                <p className='px-60 text-5xl sm:px-36 text-5xl'><FiInstagram /></p>
                <p className='py-2 ps-5 font-bold'>Instagram</p>
                <p className='ps-4'>Shashikesh@123</p>
                <p className='ps-4'>shashi@122</p>
            </div>

            <div className='mb-12 text-center sm:text-center'>
                <p className='px-60 text-5xl sm:px-36 text-5xl'><FaMapMarkerAlt /></p>
                <p className='py-2 ps-5 font-bold'>Address</p>
                <p>Burdwan,West Bengal</p>
                <p>Pincode :- 713101</p>
            </div>
        </div>
        <div className='pt-6'>
            <p className='border pt-1 bg-blue-400 mx-12 rounded-md'></p>
            <p className='text-4xl text-center text-red-500 italic py-2'>Shashikesh Kumar Mishra</p>
            <p className='border pt-1 bg-blue-400 mx-12 rounded-md'></p>
            <p className='text-center font-semibold italic text-2xl py-10'>Portfolio 2024</p>
        </div>
    </div>
  )
}

export default Contact