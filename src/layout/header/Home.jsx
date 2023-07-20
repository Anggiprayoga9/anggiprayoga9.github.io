import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import AnggiPrayoga from "../../assets/img/anggi.png"
import { FaDownload } from 'react-icons/fa';
import CV_AnggiPrayoga from '../../assets/pdf/CV-AnggiPrayoga.pdf'
import "./Home.css"
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div data-section id="section1">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                <section className='hero py-5 md:py-24 w-full' id='home'>
                    <div className="flex md:flex-row flex-col md:pt-24 md:mx-5 mx-5 items-center">
                        <div className="kiri w-full md:w-9/12 flex flex-col gap-3 md:pr-10 items-start">
                            <h4 className='text-sm sml:text-lg mdl:text-3xl'>WELCOME TO MY WEBSITE PORTOFOLIO</h4>
                            <h1 className='text-3xl sml:text-4xl mdl:text-7xl'>Hi, I'm <span className='text-[#ff4777]'>Anggi Prayoga</span></h1>
                            <h2 className='text-2xl sml:text-3xl mdl:text-5xl'>a <span className='text-[#ff4777]'>
                                <Typewriter
                                    words={['Web Developer', 'Mobile Developer', 'UI/UX Designer', 'System Analyst']}
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            </h2>
                            <p className='pt-5 md:pt-10'>Saya seorang mahasiswa yang memiliki ketertarikan di bidang programmer dan web designer,
                                dimana saya baru menyelesaikan jenjang D3 di Politeknik LP3I Tasikmalaya Program Studi Manajemen Informatika.
                                Saya adalah orang yang cukup cepat dalam mempelajari hal baru, dan disiplin dalam bekerja.
                                Selain dalam bidang tersebut, saya juga sangat tertarik dengan dunia fotografi.
                            </p>
                            <a href={CV_AnggiPrayoga} className='w-full md:w-[40%] btn_shadow flex justify-between my-6' download="CV-AnggiPrayoga.pdf">
                                <h6>Download CV</h6>
                                <i className='text-xl'><FaDownload /></i>
                            </a>
                        </div>
                        <div className="w-full md:w-3/12 flex justify-center kanan">
                            <img src={AnggiPrayoga} alt="" />
                        </div>
                    </div>
                </section>
        </motion.div>
            </div>
    )
}

export default Home