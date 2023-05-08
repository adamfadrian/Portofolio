import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { BsSend } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Loading from './Loading';

export const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const Contact = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { ref, inView } = useInView()
    const animation = useAnimation()
    const form: any = useRef();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.25
                }
            })
        } else {
            animation.start({
                x: -100,
                opacity: 0
            })
        }
    }, [inView, animation])

    const service: string = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId: string = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY!;


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(service, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                if (result) {
                    toast.success('Your message has been sent successfully!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
                setLoading(false)
                form.current.reset()
                document.querySelectorAll('input').forEach(input => (input.value = ''));
                document.querySelectorAll('textarea').forEach(textarea => (textarea.value = ''));
            }, (error) => {
                if (error) {
                    toast.error('There was an error sending your message. Please try again later.', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
                console.log(error.text);
            });
    };

    return (
        <>
            <ToastContainer
            />
            <motion.div className='flex flex-col mt-20 p-5'
                id='Contacts'>
                <motion.div className='flex flex-col items-center'
                    ref={ref}
                >
                    <motion.h1 className='flex text-4xl font-bold mx-auto mb-10 dark:text-white'
                        animate={animation}
                    >C O N T A C T </motion.h1>
                    <motion.div className='flex flex-col justify-center items-center gap-3 mb-10 dark:text-white'>
                        <motion.h1 className='text-xl font-semibold text-center'
                            animate={animation}
                        >I have got just what you need. Lets Talk.</motion.h1>
                        <motion.h1 className='flex text-center items-center gap-3 font-medium text-lg '
                            animate={animation}
                        ><FaPhoneAlt /> +6281399817946</motion.h1>
                        <motion.h1 className='flex text-center items-center gap-3 font-medium text-lg'
                            animate={animation}
                        ><IoMdMail /> adamfadrian12@gmail.com</motion.h1>
                        <motion.h1 className='flex text-center items-center gap-3 font-medium text-lg'
                            animate={animation}
                        ><ImLocation2 /> Jakarta, Indonesia</motion.h1>
                    </motion.div>
                    <motion.div animate={animation}>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col mx-auto 2xl:w-[600px] gap-5 mb-20 p-5 dark:border-white border-color1 border rounded-lg'>
                            <motion.h1 className='flex mx-auto text-2xl dark:text-white font-semibold 2xl:mb-10'>Contact Form</motion.h1>
                            <motion.div className='flex gap-2'>
                                <div>
                                <label className=' font-semibold text-lg text-black dark:text-white '>Your Name</label>
                                <input className='input input-bordered input-success w-full max-w-xl mt-1' required type="text" name="user_name" defaultValue='' placeholder='adam fadrian' />
                                </div>
                               <div>
                               <label className=' font-semibold text-lg text-black dark:text-white'>Company Name</label>
                                <input className='input input-bordered input-success w-full max-w-xl mt-1'  type="text" name="company_name" defaultValue='' placeholder='company name' />
                               </div>
                            </motion.div>
                            <motion.div>
                                <label className=' font-semibold text-lg text-black dark:text-white'>Your Email</label>
                                <input className='input input-bordered input-success w-full max-w-xl mt-1' required type="email" name="user_email" defaultValue='' placeholder='example@gmail.com' />
                            </motion.div>
                            <motion.div className='flex flex-col'>
                                <label className=' font-semibold text-lg text-black dark:text-white'>Message</label>
                                <textarea className="textarea textarea-bordered textarea-lg w-full textarea-accent mt-1" required name="message" defaultValue='' placeholder='hello adam, ...' />
                            </motion.div>
                            <button
                                disabled={loading}
                                type="submit"
                                value="Send"
                                className='btn bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 mx-auto text-white border-none btn-wide text-lg gap-2 mb-5 hover:border-none  hover:scale-110'>
                                {loading && <Loading />}
                                Send <BsSend />
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Contact