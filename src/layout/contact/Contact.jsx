import React from 'react'
import { BiLogoInstagram, BiPhoneCall, BiSolidEnvelope } from 'react-icons/bi'

const Contact = () => {
    return (
        <div data-section id="section4">
            <section className="w-full px-5 py-5 md:py-24 md:px-10 my-10 md:my-0" id='contact'>
                <div className='grid grid-flow-row justify-center'>
                    <div className="w-full flex flex-col">
                        <div className="w-full flex flex-col items-center gap-3 mb-4">
                            <h3 className='subTitle'>Kontak saya</h3>
                            <h3 className='title'>My Contact</h3>
                        </div>

                        <p className="my-5 md:my-10
                        font-light text-center 
                        text-gray-500 sm:text-xl">
                            Got a technical issue? Want to send feedback about this page? <br />
                            Need details about our Business plan? Let me know.
                        </p>
                        <form action="#" className='space-y-8'>
                            <div>
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-firstColor ">Your email
                                </label>
                                <input type="email" id="email"
                                    className="shadow-sm
                                bg-gray-50 border
                                border-gray-300
                                text-firstColor 
                                text-sm rounded-lg 
                                focus:ring-primary-500 
                                focus:border-primary-500 
                                block w-full p-2.5 "
                                    placeholder="name@yourmail.com"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="subject"
                                    className="block mb-2 text-sm font-medium text-firstColor ">Subject
                                </label>
                                <input type="text" id="subject"
                                    className="block p-3 w-full 
                            text-sm text-firstColor 
                            bg-gray-50 rounded-lg border 
                            border-gray-300 shadow-sm 
                            focus:ring-primary-500 
                            focus:border-primary-500"
                                    placeholder="Let us know how we can help you"
                                    required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-firstColor ">Your message
                                </label>
                                <textarea id="message" rows="6"
                                    className="block p-2.5 w-full text-sm
                                text-firstColor bg-gray-50 rounded-lg 
                                shadow-sm border border-gray-300
                                focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Leave a comment...">
                                </textarea>
                            </div>
                            <button type="submit"
                                className="py-3 px-5 
                            text-sm font-medium 
                            text-center bg-[#302f2f]
                            text-thirdColor hover:text-white 
                            rounded-lg bg-primary-700 sm:w-fit 
                            hover:bg-thirdColor focus:ring-4 
                            focus:outline-none focus:ring-primary-300 ">Send message
                            </button>
                        </form>

                    </div>

                    <div className="btnContact grid grid-cols-1 sml:grid-cols-3 gap-8 text-center pt-20">
                        <div className='flex flex-col gap-3 '>
                            <a href='#' className='box_shadow self-center'>
                                <i className='text-4xl'><BiSolidEnvelope /></i>
                            </a>
                            <span className='text-lg font-extrabold text-firstColor mb-4'>Email me to:</span>
                            <span className='text-sm font-light text-firstColor'>anggiprayoga45@gmail.com <br /> or <br /> anggiprayoga86@gmail.com</span>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <a href='#' className='box_shadow self-center'>
                                <i className='text-4xl'><BiPhoneCall /></i>
                            </a>
                            <span className='text-lg font-extrabold text-firstColor mb-4'>Call me to:</span>
                            <span className='text-sm font-light text-firstColor'>+62-8129-8514-800</span>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <a href='https://www.instagram.com/anggiprayoga9' target='_blank' className='box_shadow self-center'>
                                <i className='text-4xl'><BiLogoInstagram /></i>
                            </a>
                            <span className='text-lg font-extrabold text-firstColor mb-4'>Find me on:</span>
                            <span className='text-sm font-light text-firstColor'>@anggiprayoga9</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact