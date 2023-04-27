import Link from 'next/link';
import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            {/* <!--Footer container--> */}
            <footer className="footer footer-center mt-36 p-10 bg-base-200 dark:border-t-2 text-base-content rounded dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-800 bg-gradient-to-r from-blue-400 to-cyan-300">
                <div>
                    <div className="grid grid-flow-col gap-10 dark:text-white">
                        <Link href={'https://www.instagram.com/adamfadrian/'} className='hover:scale-125' >
                            <BsInstagram size={30} />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/adam-fadrian-311000227/'} className='hover:scale-125'>
                            <BsLinkedin size={30} />
                        </Link>
                        <Link href={'https://github.com/adamfadrian/'} className='hover:scale-125'>
                            <BsGithub size={30} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-4 ">
                    <h1 className='font-medium 2xl:text-lg dark:text-white'> Built with Typescript, React, Framer-Motion, daisyUI</h1>
                </div>
                <div>
                    <p className='font-medium dark:text-white 2xl:text-xl'>Copyright © 2023 - All right reserved by Adam Fadrian</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer