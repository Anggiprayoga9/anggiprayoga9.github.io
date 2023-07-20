import React from 'react'
import { FaCss3Alt, FaFigma, } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import "./Skills.css"
import { BiLogoFlutter, BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';

const Skills = () => {
    return (
        <section className='skills w-full flex justify-center mt-10 mb-20'>
            <div className="flex flex-col items-center gap-3">
                {/* <h3 className='subTitle'>Skill Saya</h3>
                <h3 className='title'>MY SKILLS</h3> */}
                <div className="button grid grid-cols-2 sml:grid-cols-3 md:grid-cols-4 mdl:grid-cols-5 lg:grid-flow-col text-center md gap-4 pt-10">
                    <button className='box_shadow'>
                        <i><FaFigma /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><AiFillHtml5 /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><FaCss3Alt /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><BiLogoPhp /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><BiLogoJavascript /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><BiLogoReact /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><BiLogoTailwindCss /></i>
                    </button>
                    <button className='box_shadow'>
                        <i><BiLogoFlutter /></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Skills