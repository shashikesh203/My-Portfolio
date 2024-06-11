import React from 'react';
import profileImage from './images/profile.jpg'

function Home() {
  return (<>
  <div className=' text-[#ffffff] bg-[#3e403f] pb-24'>

  <div className='grid grid-cols-2 justify-between'>
      <div className=' pt-20 pl-20'>
         <p className=' font-bold italic text-blue-500'>Hello !!!</p>
         <h1 className='text-4xl font-bold'>I'm Shashikesh</h1>
         <h1 className='text-4xl font-bold mb-2'>Kumar Mishra</h1>
         <span className='text-sm font-bold bg-blue-500 px-2 py-1'>Full Stack Web Developer</span>
         <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
      <div className='mx-20 px-24 mt-12'>
       <img src={profileImage} alt='not ofund' className='h-64'/>
      </div>
    </div>
    
  <div className='mt-12 '>
    <p className='text-end text-2xl italic px-24 font-bold'>Portfolio-2024</p>
    <p className='border pt-1 bg-blue-400 mx-16 '></p>
    
  </div>
  </div>
    
    
    </> );
}

export default Home;