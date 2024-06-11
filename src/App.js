import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './About'
import Education from './Education';
import Project from './Project';
import Contact from './Contact';

const App = () => {
  return (<>
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/education" element={<Education />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  </>
 
  )
}

export default App