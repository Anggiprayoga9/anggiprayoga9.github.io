import React from 'react'
import logo from "../../assets/img/logo-aga.png"
import { BiLogoFacebook, BiLogoFacebookCircle, BiLogoGithub, BiLogoInstagramAlt } from 'react-icons/bi'

const Footer = () => {
    return (
        <div>

            <footer className="bg-secondColor pb-24 md:py-0 w-full">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" className="flex items-center">
                                <img src={logo} className="h-28 mr-3" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-thirdColor">AGADEV.</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-thirdColor uppercase">Resources</h2>
                                <ul className="text-firstColor font-medium">
                                    <li className="mb-2">
                                        <a href="https://www.npmjs.com/package/react-icons"
                                            className="hover:underline text-sm">React Icons</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/"
                                            className="hover:underline text-sm">Tailwind CSS</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://www.npmjs.com/package/react-simple-typewriter"
                                            className="hover:underline text-sm">Typewriter Animate</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://www.npmjs.com/package/react-simple-image-viewer"
                                            className="hover:underline text-sm">Image Viewer</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-thirdColor uppercase">Follow me</h2>
                                <ul className="text-firstColor font-medium">
                                    <li className="mb-2">
                                        <a href="https://www.instagram.com/anggiprayoga9"
                                            className="hover:underline text-sm ">Instagram</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://www.facebook.com/anggiprayoga99"
                                            className="hover:underline text-sm">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-thirdColor uppercase">Legal</h2>
                                <ul className="text-firstColor font-medium">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline text-sm">Privacy Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline text-sm">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-firstColor sm:text-center ">© 2023 <a href="https://www.instagram.com/anggiprayoga9" className="hover:underline">Anggiprayoga</a>.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" className="text-thirdColor hover:text-white">
                                <BiLogoFacebookCircle />
                            </a>
                            <a href="#" className="text-thirdColor hover:text-white">
                                <BiLogoInstagramAlt />
                            </a>
                            <a href="#" className="text-thirdColor hover:text-white">
                                <BiLogoGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer