import React from 'react'

const Education = () => {
  return (
    <div className=' text-[#ffffff] bg-[#3e403f] pt-5'>
        <div className='grid grid-cols-2'>
        <div className='px-12 py-32'>
           <h1 className='text-4xl font-bold mb-4'>EDUCATION</h1>
           <p className='border py-1 bg-blue-900 mr-52 mb-4'></p>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='py-16 pl-16'>
           <div>
           <p className='font-bold'>Secondary Education</p>
            <p >School Name: Mahatma Gandhi Sikshan Sansthan</p>
            <p>Marks: 76.2%</p>
            <p>Batch: 2018</p>
           </div>
           <div>
            <p className='font-bold mt-6'>Intermediate Education</p>
            <p >College Name: A.N College, Patna</p>
            <p>Marks: 72.8%</p>
            <p>Batch: 2018-20</p>
           </div>
           <div>
            <p className='font-bold mt-6'>Bachelor Degree</p>
            <p>From University Institute of Technology, Burdwan </p>
            <p>Marks: 7.82 cgpa</p>
            <p>Batch: 2021-25</p>
           </div>

            
        </div>
    </div>
    </div>
   
  )
}

export default Education