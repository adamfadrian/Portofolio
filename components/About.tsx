import { motion } from 'framer-motion'
import React, { useState } from 'react'
import davekoz from '@/public/portologo.png'
import Image from 'next/image'
import { TbDownload } from 'react-icons/tb'
import Modal from './Modal'

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
const RESUME_FILE_PDF = 'http://localhost:3000/ATS.pdf'
const RESUM_CREATIVE_PDF = 'http://localhost:3000/CREATIVE.pdf'
const About = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

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
        <motion.div className='flex justify-center p-10 2xl:mb-20 ' id='About'>
            <Modal showModal={modalOpen} onClose={closeModal}>
                <div className='flex flex-col gap-8 '>
                    <h1 className='font-semibold mx-auto text-xl'>Choose Type of CV You need!</h1>
                    <h2>ATS Version is for CV which ATS friendly. And Creative version for creative CV with colors.</h2>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <button className="btn btn-outline btn-primary" onClick={() => downloadResume(RESUME_FILE_PDF)}>ATS version</button>
                        <button className="btn btn-outline btn-primary" onClick={() => downloadResume(RESUM_CREATIVE_PDF)}>Creative Version</button>
                    </div>
                </div>
            </Modal>
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
                    className='text-center 2xl:text-5xl text-3xl text-black font-bold dark:text-white'>Adam Fadrian</motion.h1>
                <motion.h1
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className='text-center 2xl:text-3xl text-black font-bold dark:text-white'>Frontend Engineer</motion.h1>
                <motion.button
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    onClick={openModal}
                    className="btn btn-md w-52 mx-auto bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 border-none "
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
                    className=' flex flex-col dark:text-white'>
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
                            scale: 1.2,
                            transition: { duration: 0.4 },
                        }}
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className='mt-5 mx-auto p-2 hover:cursor-pointer hover:mt-10 2xl:text-xl text-lg text-black dark:text-white '>I began learning HTML and JavaScript on my own through FreeCodeCamp in 2019. However,
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