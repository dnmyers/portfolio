import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [submitStatus, setSubmitStatus] = useState("");

    // Name
    const handleNameInput = (e) => {
        setNameInput(e.target.value);
    };
    // End of Name


    // Phone
    const handlePhoneInput = ({ target }) => {
        const phoneNumber = target.value;

        if (phoneNumber.length <= 15) {
            setPhoneInput(target.value);
        }
    };
    // End of Phone

    // Message
    const handleMessageInput = (e) => {
        setMessageInput(e.target.value);
    };
    // End of Message

    // Email
    const handleEmailInput = ({ target }) => {
        setEmailInput(target.value);
    };

    // EmailJS
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (import.meta.env.DEV && import.meta.env.VITE_CONTACT_MODE !== "emailjs") {
            setSubmitStatus("Mock mode: this message was not sent.");
            return;
        }

        emailjs
        .sendForm(
            "gmail",
            "contact_form_template",
            refForm.current,
            "7s0WnF1S_phn1zQDn"
            )
            .then(
                () => {
                    setSubmitStatus("Message sent successfully.");
                },
                () => {
                    setSubmitStatus("Message could not be sent. Please try again.");
                }
            );
    };
    // End of EmailJS
    // End of Email

    // Framer Motion
    const ContactVariants = {
        show: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: "tween",
                ease: "circOut",
                duration: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            translateY: 300,
        },
    };
    // End of Framer Motion

    return (
        <main className='relative pt-10 bg-gray-900'>
            <motion.div
                animate='show'
                initial='hidden'
                variants={ContactVariants}
                className='relative z-10 container mx-auto pb-20 text-gray-600 sm:px-4 md:px-8'
            >
                <div className='max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0'>
                    <h1 className='text-cyan-400 text-2xl font-semibold'>
                        Contact Me
                    </h1>
                    <p className='text-white text-3xl font-semibold sm:text-4xl'>
                        Get in touch
                    </p>
                    <p className='text-gray-300'>
                        I&apos;d love to hear from you! Please fill out the form
                        below or email me at <a href="mailto:daniel.neil.myers@gmail.com" className="text-blue-1">daniel.neil.myers@gmail.com</a>.
                    </p>
                </div>
                <motion.div
                    animate='show'
                    initial='hidden'
                    variants={ContactVariants}
                    className='mt-12 mx-auto px-4 p-8 bg-blue-50 sm:max-w-lg sm:px-8 sm:rounded-xl'
                >
                    <form
                        onSubmit={sendEmail}
                        ref={refForm}
                        className='space-y-5'
                    >
                        <div>
                            <label htmlFor='contact-name' className='font-medium'>Full name</label>
                            <input
                                id='contact-name'
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={nameInput}
                                onChange={handleNameInput}
                                required
                                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-md rounded-lg placeholder-gray-500 focus:border-sky-800 focus:ring-1 focus:ring-sky-500'
                            />
                        </div>
                        <div>
                            <label htmlFor='contact-email' className='font-medium'>Email</label>
                            <input
                                id='contact-email'
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={handleEmailInput}
                                value={emailInput}
                                required
                                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-md rounded-lg placeholder-gray-500 focus:border-sky-800 focus:ring-1 focus:ring-sky-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-200 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-800 peer'
                            />
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter a valid email address
                            </span>
                        </div>
                        <div>
                            <label htmlFor='contact-phone' className='font-medium'>Phone number (optional)</label>
                            <div className='relative mt-2'>
                                <div className='absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2'>
                                    <select className='text-sm bg-transparent outline-none rounded-lg h-full'>
                                        <option value="1">US</option>
                                        <option value="1">CA</option>
                                        <option value="52">MX</option>
                                    </select>
                                </div>
                                <input
                                    id='contact-phone'
                                    type='tel'
                                    name='phone_number'
                                    placeholder='(555) 000-0000'
                                    onChange={handlePhoneInput}
                                    value={phoneInput}
                                    className='w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border placeholder-gray-500 shadow-md rounded-lg focus:border-sky-800 focus:ring-1 focus:ring-sky-500'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='contact-message' className='font-medium'>Message</label>
                            <textarea
                                id='contact-message'
                                required
                                name='message'
                                placeholder='Message...'
                                onChange={handleMessageInput}
                                value={messageInput}
                                className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border placeholder-gray-500 shadow-md rounded-lg focus:border-sky-800 focus:ring-1 focus:ring-sky-500'
                            ></textarea>
                            {submitStatus && <p role='status' aria-live='polite'>{submitStatus}</p>}
                        </div>
                        <motion.input
                            type='submit'
                            value='Submit'
                            initial={{
                                scale: 0,
                                opacity: 0
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            className='w-full px-4 py-2 text-white font-medium bg-blue-1 hover:bg-gray-700 active:bg-gray-900 shadow-md rounded-lg duration-150 focus:ring-1 focus:ring-sky-500'
                        />
                    </form>
                </motion.div>
            </motion.div>
            <div
                className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]'
                style={{
                    background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
            ></div>
        </main>
    );
};

export default Contact;
