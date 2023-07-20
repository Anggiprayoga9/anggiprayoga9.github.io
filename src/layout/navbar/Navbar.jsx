import React, { useEffect, useRef, useState } from 'react'
import { BiHomeAlt, BiSolidCollection, BiSolidPhone, BiSolidUser } from "react-icons/bi";
import "./Navbar.css"
import aga from "../../assets/img/logo-aga.png"
// import { NavLink } from 'react-router-dom';


const Navbar = () => {

  // window.addEventListener("scroll", function () {
  //   const header = this.document.querySelector(".navbar")
  //   header.classList.toggle("active", window.scrollY > 50)
  // })

  const values = [
    { id: 1, i: <BiHomeAlt />, text: "Home", linkPage: "#home", sect: "section1" },
    { id: 2, i: <BiSolidUser />, text: "Resume", linkPage: "#resume", sect: "section2" },
    { id: 3, i: <BiSolidCollection />, text: "Portofolio", linkPage: "#portofolio", sect: "section3" },
    { id: 4, i: <BiSolidPhone />, text: "Contact", linkPage: "#contact", sect: "section4" }
  ];
  const [activeId, setActiveId] = useState();

  // const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveId(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className='navbar z-10 w-full fixed bottom-0 md:top-0 h-20 bg-[#444444] text-[#fefefe] flex justify-center md:justify-between items-center p-5 md:p-10'>
      <div className='logo hidden md:flex w-1/2'>
        <img src={aga} alt='' width="60px" />
      </div>
      <div className='w-full md:w-1/2'>
        <nav className='w-full navLink'>
          <ul className='list-none flex justify-evenly items-center md:justify-end md:gap-10'>
            {values.map((val, index) => (
              <li key={index} onClick={() => setActiveId(val.id)}>
                <a href={val.linkPage} className={activeId === val.sect ? 'active flex flex-col items-center' : 'flex flex-col items-center'}>
                  <i className='nav-icon md:hidden text-3xl'>{val.i}</i>
                  <span className='nav-name md:text-sm text-xs'>{val.text}</span>
                </a>
              </li>
            ))}
            {/* <li>
            //<NavLink to="/" className='flex flex-col items-center'>
            <a href="#home" className='flex flex-col items-center'>
              <i className='nav-icon md:hidden text-3xl'><BiHomeAlt /></i>
              <span className='nav-name md:text-sm text-xs'>Home</span>
            </a>
          </li>
          <li>
            <a href='#resume' className='flex flex-col items-center'>
              <i className='nav-icon md:hidden text-3xl'><BiSolidUser /></i>
              <span className='nav-name md:text-sm text-xs'>Resume</span>
            </a>
          </li>
          <li>
            <a href='#portofolio' className='flex flex-col items-center'>
              <i className='nav-icon md:hidden text-3xl'><BiSolidCollection /></i>
              <span className='nav-name md:text-sm text-xs'>Portofolio</span>
            </a>
          </li>
          <li>
            <a href='#contact'className='flex flex-col items-center'>
              <i className='nav-icon md:hidden text-3xl'><BiSolidPhone /></i>
              <span className='nav-name md:text-sm text-xs'>Contact</span>
            </a>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar