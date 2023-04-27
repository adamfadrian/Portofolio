import React, { useEffect } from 'react'
import { data } from '@/_cloneApi/api'
import { Variants, motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { AiFillGithub } from 'react-icons/ai'
import { BsBrowserChrome } from 'react-icons/bs'



const Projects = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.25
                }
            })
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }
    }, [inView, animation])


    return (
        <motion.div className='flex flex-col mb-36' id='Projects'>
            <motion.div className='flex w-full justify-center items-center mb-10' >
                <motion.h1
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1, ease: 'easeOut' },
                    }}
                    className='font-semibold text-4xl  dark:text-white text-black'>My Projects</motion.h1>
            </motion.div>
            <motion.div className='flex w-full'>
                <motion.div
                    ref={ref}
                    className='grid 2xl:grid-cols-4 md:grid-cols-2 gap-20 mx-auto' >
                    {
                        data.map((item: any, i: number) => {
                            return (
                                <motion.div
                                    animate={animation}
                                    className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500 2xl:mb-20 p-5" key={i}>
                                    <motion.a href="#">
                                        <Image
                                            className="rounded-t-lg max-h-52 w-full object-fit" src={item.image} alt="" />
                                    </motion.a>
                                    <motion.div
                                        className="p-5">
                                        <motion.a href="#">
                                            <motion.h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</motion.h5>
                                        </motion.a>
                                        <motion.p
                                            className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}
                                        </motion.p>
                                        <motion.div className='flex mt-5 justify-evenly'>
                                            <motion.a href={item.github} target='_blank' className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white hover:scale-110 bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                                <AiFillGithub size={20} /> Github
                                            </motion.a>
                                            <motion.a href={item.url} target='_blank' className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white hover:scale-110 bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                                <BsBrowserChrome size={20} /> web
                                            </motion.a>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Projects