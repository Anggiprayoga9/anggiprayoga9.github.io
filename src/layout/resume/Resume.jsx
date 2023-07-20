import React, { useState } from 'react'
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"
import "./Resume.css"

export const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);

    return (
        <div data-section id="section2">
            <section className='resume w-full px-5 py-5 md:py-24 md:px-10' id='resume'>
                <div className="w-full flex justify-center">
                    <div className="w-full flex flex-col items-center gap-3">
                        <h3 className='subTitle'>resume saya</h3>
                        <h3 className='title'>my resume</h3>

                        <ul className="w-full grid grid-cols-3 md:grid-cols-3 md:w-[80%] py-10 text-center rounded-lg">
                            <li
                                onClick={() =>
                                    setEducationData(true) &
                                    setSkillData(false) &
                                    setExperienceData(false)
                                }
                                className={`${educationData
                                    ? "border-[#ff4777] rounded-lg text-xs font-bold md:text-xl"
                                    : "border-transparent text-xs md:text-xl"
                                    } resumeLi`}
                            >
                                Education
                            </li>
                            <li
                                onClick={() =>
                                    setEducationData(false) &
                                    setSkillData(true) &
                                    setExperienceData(false)
                                }
                                className={`${skillData
                                    ? "border-[#ff4777] rounded-lg text-xs font-bold md:text-xl"
                                    : "border-transparent text-xs md:text-xl"
                                    } resumeLi`}
                            >
                                Professional Skills
                            </li>
                            <li
                                onClick={() =>
                                    setEducationData(false) &
                                    setSkillData(false) &
                                    setExperienceData(true)
                                }
                                className={`${experienceData
                                    ? "border-[#ff4777] rounded-lg font-bold text-xs md:text-xl"
                                    : "border-transparent text-xs md:text-xl"
                                    } resumeLi`}
                            >
                                Experience
                            </li>
                        </ul>
                        {educationData && <Education />}
                        {skillData && <Skills />}
                        {experienceData && <Experience />}
                    </div>
                </div>
            </section>
        </div>
    )
}
