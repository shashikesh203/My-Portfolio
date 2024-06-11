import React from 'react'
import image from './images/pexels-moh-adbelghaffar-771742.jpg'
const Project = () => {
  return (<>
  <div className='text-[#ffffff] bg-[#3e403f]'>
  <div><p className='text-center font-bold text-4xl italic'>Project 2024</p></div>
    <div className='grid grid-cols-3'>
        <div className='p-12 '>
           
           <img src={image} className='h-60 w-80 mb-2'/>
           <p>Project Name: Resume Generator</p>
           <p>Github Link: Shashikesh131</p>
           <p className='my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='p-12 '>
           
           <img src={image} className='h-60 w-80 mb-2'/>
           <p>Project Name: Resume Generator</p>
           <p>Github Link: Shashikesh131</p>
           <p className='my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='p-12 '>
           
           <img src={image} className='h-60 w-80 mb-2'/>
           <p>Project Name: Resume Generator</p>
           <p>Github Link: Shashikesh131</p>
           <p className='my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
  </div>
    </>)
}

export default Project