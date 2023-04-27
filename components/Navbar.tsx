
import { motion } from 'framer-motion'
import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link';

interface Props {
    themes?: React.MouseEventHandler<HTMLElement>
}

const Navbar: FC<Props> = ({ themes }) => {
    const [theme, setTheme] = useState<string>("light")
    const [scrollY, setScrollY] = useState<boolean>(false)

    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    const handleSwitchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem("theme", theme);
    }, [theme])


    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="  z-50 items-center sticky top-0 dark:from-gray-800 dark:to-gray-800 bg-gradient-to-r from-blue-300 to-cyan-200  dark:border-b-2">
            <motion.div
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20">
                <a href="" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">Adam Fadrian</span>
                </a>
                <motion.div
                    className="flex items-center md:order-2 ">
                    <div className='flex  h-12 w-12 items-center my-auto '>
                        <label className="swap swap-rotate  mx-auto">
                            <input type="checkbox" onClick={handleSwitchTheme} />
                            <svg
                                className="swap-on fill-current -mr-5 w-10 h-8 text-black dark:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            <svg
                                className="swap-off fill-current w-10 h-7 my-auto text-black dark:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                </motion.div>
                <motion.div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">

                        <li>
                            <a href="#About" className="block py-2 pl-3 pr-4 text-gray-900 rounded dark:text-white hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:scale-125 font-medium text-lg ">About</a>
                        </li>
                        <li>
                            <a href="#Projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded dark:text-white hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:scale-125 font-medium text-lg ">Projects</a>
                        </li>

                        <li>
                            <a href="#Contacts" className="block py-2 pl-3 pr-4 text-gray-900 rounded dark:text-white hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:scale-125 font-medium text-lg ">Contact</a>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default Navbar