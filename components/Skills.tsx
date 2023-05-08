import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { skills } from '@/_cloneApi/api'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.25
                }
            })
        }
        if (!inView) {
            animation.start({
                x: 100,
                opacity: 0
            })
        }
    }, [inView, animation])

    return (
        <motion.div className='w-full flex flex-col mb-36 mt-36 p-5' ref={ref}>
            <motion.h1
                animate={animation}
                whileHover={{
                    rotate: '360deg'
                }}
                className='text-black dark:text-white text-4xl font-bold mx-auto'>My Skills</motion.h1>
            <motion.div className="mt-10 mx-auto ">
                <motion.div
                    className='grid 2xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 mb-20'>
                    {
                        skills.map((data: any) => {
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.3 }}
                                    animate={animation}
                                    className="bg-white rounded-lg shadow-lg py-2 flex flex-col justify-center text-center hover:cursor-pointer items-center dark:border dark:bg-transparent dark:border-white p-4" key={data.id}>
                                    <motion.h2 className="text-xl font-medium  text-black dark:text-white flex-wrap">{data.title}</motion.h2>
                                    <motion.h1 className='dark:text-slate-300'>Basic</motion.h1>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Skills