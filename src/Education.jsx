import React from 'react'

const Education = () => {
  return (
    <div className=' text-[#ffffff] bg-[#151618] py-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-1'>
        <div className='pt-0 my-0 ps-10 pe-4 sm: ps-20 pt-28 my-20'>
        <h1 className='text-4xl font-bold mb-4 text-[#eb8f34]'>EDUCATION</h1>
        <p className='border py-1 bg-blue-900 mr-28 mb-4  sm:border py-1 bg-blue-900 mr-52 mb-4'></p>
           <p>I had done my Secondary Education from Mahatma Gandhi Sikshan Sansthan which is affliated by Central Board of Secondary Education with a aggregate marks of 76.2%  in the year 2018 then after I had done my Intermediate from A.N College, Patna which is affliated by Bihar School Examination Board with a aggregate marks 72.8% in the year 2020 and Currently I am pursing Bachelor Degree in Computer Science Engineering from University Institute of Technology, Burdwan.  </p>

        </div>
        <div className='py-1 ps-10 sm:py-10 ps-16'>
           <div>
           <p className='font-bold text-[#e534eb]'>Secondary Education</p>
            <p >School Name: Mahatma Gandhi Sikshan Sansthan</p>
            <p>Marks: 76.2%</p>
            <p>Batch: 2018</p>
           </div>
           <div>
            <p className='font-bold mt-6 text-[#e534eb]'>Intermediate Education</p>
            <p >College Name: A.N College, Patna</p>
            <p>Stream: PCM</p>
            <p>Marks: 72.8%</p>
            <p>Batch: 2018-20</p>
           </div>
           <div>
            <p className='font-bold mt-6 text-[#e534eb]'>Bachelor Degree</p>
            <p>From University Institute of Technology, Burdwan </p>
            <p>Stream: CSE</p>
            <p>Marks: 7.82 cgpa</p>
            <p>Batch: 2021-25</p>
           </div>

            
        </div>
    </div>
    </div>
   
  )
}

export default Education