import React from "react";
import myImage from './images/shashiImage.jpg'

function Home() {
  return (
    <>
      <div className=" text-[#ffffff] bg-[#151618] pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
          <div className="pt-12 ps-10 sm:pt-12 ps-20">
            <p className=" font-bold italic text-blue-500">Hello !!!</p>
            <h1 className="text-4xl font-bold">I'm Shashikesh</h1>
            <h1 className="text-4xl font-bold mb-2">Kumar Mishra</h1>
            <span className="text-sm font-bold bg-blue-500 px-2 py-1">
              Full Stack Web Developer
            </span>
            <p className="mt-2">
              Currently I am doing my Bachelor Degree from University Institute
              of Technology, Burdwan which is a District of West Bengal. I am a
              placement Coordinator of Batch 2021-25 in my College.
            </p>
            <p>
             <span className="text-green-500 font-bold">Skills I Have</span> :- C , C++ , Java ,DSA , HTML , CSS , JavaScript , React ,
              Node.js , ExpressJS , Mongoose , Tailwind CSS , Bootstrap , Git &
              GitHub , JIRA , Bitbucket , TypeScript ,
            </p>
          </div>
          <div className="text-center mx-1 px-2 mt-10 sm:text-center mx-20 px-24 mt-10">
            <img src={myImage} alt="not ofund" className=" rounded-md w-120 h-72 sm:h-64 w-80 rounded-md" />
            <p className="font-bold pt-2">Student at UIT, Burdwan</p>
            <p className="font-bold"><span className="text-green-400">Batch </span>:-<span className="text-red-500"> 2021-25</span></p>
          </div>
        </div>

        <div className="my-4 sm:mt-4 ">
          <p className="text-2xl italic text-center font-bold sm:text-end text-2xl italic px-24 font-bold pb-2">
            Portfolio-2024
          </p>
          <p className="border pt-1 bg-blue-400 mx-16 sm:border pt-1 bg-blue-400 ms-10 me-16 "></p>
        </div>
      </div>
    </>
  );
}

export default Home;
