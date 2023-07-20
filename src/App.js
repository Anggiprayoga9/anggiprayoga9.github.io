import React from 'react'
import Navbar from './layout/navbar/Navbar'
import Home from './layout/header/Home'
import Skills from './layout/skill/Skills'
import { Resume } from './layout/resume/Resume'
import Portofolio from './layout/portofolio/Portofolio'
import Footer from './layout/footer/Footer'
import Contact from './layout/contact/Contact'
// import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";


const App = () => {

  return (
    // <Router>
    <div className="w-full h-auto">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <Skills />
        <Resume />
        <Portofolio />
        <Contact />
        {/* <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/resume" element={<Resume/>} />
          </Routes> */}
      </div>
      <Footer />
    </div>
    // </Router>
  )
}

export default App