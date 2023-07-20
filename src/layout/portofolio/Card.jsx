import React, { useState } from 'react'
import { AiFillEye, AiOutlineClose, AiOutlineCloseSquare } from 'react-icons/ai'
import { ImageViewer } from "react-image-viewer-dv"

const Card = (props) => {

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className='w-full'>
            <div className="box_shadow2 grid grid-flow-row">
                <div className='w-[100%] h-[270px]'>
                    <img src={props.image} alt="" onClick={toggleModal} className='object-contain w-full h-60' />
                </div>
                <span className='text-xs font-light' onClick={toggleModal}>{props.category}</span>
                <span className='text-base font-bold mb-5' onClick={toggleModal}>{props.title}</span>
                {/* <a href="#popup" className='arrow' onClick={toggleModal}>
                    <i className='fas fa-arrow-right'></i>
                </a> */}
            </div>

            {/* POPUP MODAL */}
            {modal && (
                <div className="modal mx-auto flex">
                    <div onClick={toggleModal} className="overlay -z-10"></div>
                    <div className="modal-body w-full items-center flex justify-center">
                        <div className="modal-content shadow-xl absolute rounded-lg lg:h-80 h-[80%] overflow-y-scroll md:overflow-hidden">
                            <div className='w-full flex flex-col lg:flex-row gap-6 '>
                                <div className='w-full lg:w-7/12 flex justify-start'>
                                    <div className="w-full">
                                        <ImageViewer>
                                            <img src={props.image} alt="" className='object-contain w-full h-44 md:h-72' />
                                        </ImageViewer>
                                    </div>
                                </div>
                                <div className='w-full lg:w-5/12'>
                                    <div className="w-full grid grid-flow-row gap-3">
                                        <h6>Detail Project</h6>
                                        <h1 className='text-xl md:text-3xl'>{props.title}</h1>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, modi! Similique neque, consectetur ea corporis dolorem illum vel libero dolor sint illo quo reprehenderit? Esse possimus nisi rerum in natus!</p>
                                        {/* <div className="flex flex-row gap-4">
                                            <button className='box_shadow2 w-[35%] md:w-[25%] flex flex-row items-center justify-evenly gap-3'>
                                                <h6 className='text-sm'> View</h6>
                                                <i><AiFillEye /></i>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='w-[5%]'>
                                    <button className='top-[5%] right-[10px] sm:top-[5%] sm:right-[3%] md:top-[96px] md:right-[50px] lg:top-[30%] lg:right-[6%] w-24 btn_close' onClick={toggleModal}>
                                        <i className='flex justify-center font-bold text-4xl'><AiOutlineCloseSquare /></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Card