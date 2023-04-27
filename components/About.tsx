import { motion } from 'framer-motion'
import React from 'react'
import davekoz from '@/public/portologo.png'
import Image from 'next/image'
import { TbDownload } from 'react-icons/tb'

export const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const BOUNCING_ANIMATION_VARIANTS = {
    animate: {
        y: [-2, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0.25,
        },
    },
};
const RESUME_FILE_PDF = 'http://localhost:3000/Resume.pdf'

const About = () => {

    const downloadResume = (url: any) => {
        const file = url.split('/').pop()
        const download = document.createElement('a');
        download.href = url
        download.setAttribute('download', file);
        document.body.appendChild(download);
        download.click();
        document.body.removeChild(download);
    }

    return (
        <motion.div className='flex justify-center p-20 2xl:mb-20 ' id='About'>
            <motion.div
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className='flex flex-col gap-5 my-auto w-96 2xl:w-[1000px] md:w-[700px]' >
                <motion.h1
                    whileHover={{
                        scale: 1.4,
                        transition: { duration: 0.3 },

                    }}
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='text-center 2xl:text-5xl text-black font-bold dark:text-white'>Adam Fadrian</motion.h1>
                <motion.h1
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='text-center 2xl:text-3xl text-black font-bold dark:text-white'>Frontend Engineer</motion.h1>
                <motion.button
                    onClick={() => downloadResume(RESUME_FILE_PDF)}
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    whileHover={{
                        scale: 1.2
                    }}
                    className="btn btn-md w-52 mx-auto bg-color1 hover:bg-color1 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 border-none "
                >
                    <h1 className="dark:text-white text-lg flex items-center gap-2 ">
                        <span className="inline-block">
                            <motion.span
                                variants={BOUNCING_ANIMATION_VARIANTS}
                                initial="initial"
                                animate="animate"
                                style={{ display: "inline-block", marginTop: '5px' }}
                            >
                                <TbDownload size={20} />
                            </motion.span>
                        </span>
                        Resume
                    </h1>
                </motion.button>
                <motion.div
                    className='mt-10 flex flex-col dark:text-white'>
                    <motion.div
                        drag
                        whileDrag={{ scale: 2 }}
                        dragSnapToOrigin
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        data-te-toggle="tooltip"
                        data-te-placement="top"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        data-te-delay="0"
                        title="Drag Me!"
                        className='flex mb-5 relative mx-auto rounded-full w-80 h-80 p-5 bg-gradient-b from-teal-500 hover:cursor-pointer'>
                        <Image
                            className='mx-auto rounded-full w-96' src={davekoz} alt="Adam Fadrian" />
                    </motion.div>
                    <motion.h1
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className='text-4xl font-semibold mx-auto mt-5 text-black dark:text-white'> About Me</motion.h1>
                    <motion.p
                        whileHover={{
                            scale: 1.4,
                            transition: { duration: 0.4 },
                        }}
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className='mt-5 mx-auto p-2 hover:scale-110 hover:cursor-pointer hover:mt-10 2xl:text-2xl text-lg text-black dark:text-white '>I began learning HTML and JavaScript on my own through FreeCodeCamp in 2019. However,
                        I faced many obstacles along the way and found myself getting stuck frequently. Despite these
                        challenges, I continued to learn through self-teaching and practice until I joined Alterra
                        Academy&apos;s bootcamp. where I learned React and TypeScript in addition to HTML and
                        JavaScript. During my time there, my skills grew rapidly, and I worked on several individual
                        and collaborative projects that further honed my abilities. Currently, I am seeking a Frontend
                        Engineer position with a company where I can utilize my skills and continue to develop both
                        professionally and personally.</motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About