import React from 'react'
import ResumeGeneratorImage from './images/christin-hume-hBuwVLcYTnA-unsplash.jpg'
import foodDeliveryAppImage from './images/frontpageImage.png'
import PortfolioImage from './images/joshua-aragon-BMnhuwFYr7w-unsplash.jpg'

const Project = () => {
  return (<>
  <div className='text-[#ffffff] bg-[#151618]'>
  <div><p className='text-center font-bold text-4xl italic pt-6 sm: text-center font-bold text-4xl italic '>Project 2024</p></div>
    <div className='grid grid-cols-1 sm:grid-cols-3 pt-1'>
        <div className='ps-20 pb-4 sm:p-4 '>
           
           <img src={ResumeGeneratorImage} className='h-60 w-100 my-6 rounded-md sm:h-60 w-80 mb-2 rounded-md'/>
           <p>Project Name: Resume Generator</p>
           <p>Github Link: Shashikesh131</p>
           <p className='my-2 pe-12 sm: mt-2'>Student can use it to store their carrier information and Create their Resume  according to the saved information.</p>
        </div>
        <div className='ps-20 pb-6 sm:p-4 '>
           
           <img src={foodDeliveryAppImage} className='h-60 w-100 my-6 rounded-md sm:h-60 w-80 mb-2 rounded-md'/>
           <p>Project Name: Food delivery</p>
           <p>Github Link: Shashikesh131</p>
           <p className='my-2 pe-12 sm: mt-2'>You can order Food on that website and you get the delivery under 20 min.</p>
        </div>
        <div className='ps-20 pb-6 sm:p-4 '>
           
           <img src={PortfolioImage} className='h-60 w-100 my-6 rounded-md sm:h-60 w-80 mb-2 rounded-md'/>
           <p>Project Name: My Portfolio</p>
           <p>Github Link: Shashikesh131</p>
           <p className='my-2 pe-12 sm: mt-2'>It is my-portfolio. You can check it on GitHub or LinkedIn</p>
        </div>
    </div>
  </div>
    </>)
}

export default Project



