import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import aboutMeItems from './AboutMeItems.jsx';

const About = () => {
    // Fade in 'About Me' section when inView
    const aboutMeVariants = {
        initial: {
            opacity: 0,
            scale: 0,
            y: -300
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const gridItemVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            x: 300
        },
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    // Animate my name
    const firstNameLetters = "Daniel".split('');
    const lastNameLetters = "Myers".split('');

    const letterVariants = {
        bounce: {
            scale: 1.1,
            translateY: [0,-10, 10, 0],
            color: 'yellow',
            transition: {
                duration: 0.5
            }
        },
    };


    return (
        <section className="relative py-10 bg-gray-900">
            <div className="container relative z-10 mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <motion.div
                    variants={aboutMeVariants}
                    initial="initial"
                    animate="animate"
                    className="max-w-sm"
                >
                    <h3 className="text-white text-3xl text-center md:text-left font-semibold sm:text-4xl">
                        About Me
                    </h3>
                    <p className="mt-3">
                        Hello, and welcome to my portfolio website! <br />My name is&nbsp;
                        <span>
                            {
                                firstNameLetters.map((letter, index) => (
                                    <motion.span
                                        style={{ display: 'inline-block' }}
                                        key={index}
                                        variants={letterVariants}
                                        whileHover="bounce"
                                        className="text-blue-1"
                                    >
                                        {letter}
                                    </motion.span>
                                ))
                            }
                        </span>
                        &nbsp;
                        <span>
                            {
                                lastNameLetters.map((letter, index) => (
                                    <motion.span
                                        style={{ display: 'inline-block' }}
                                        key={index}
                                        variants={letterVariants}
                                        whileHover="bounce"
                                        className="text-blue-1"
                                    >
                                        {letter}
                                    </motion.span>
                                ))
                            }
                        </span>, and I&apos;m an Applications Developer with a passion for building high-quality software solutions. With around 3 years of experience in the industry, I&apos;ve been able to expand my skills in a variety of programming languages, libraries, and systems, including HTML, CSS/SCSS, JavaScript, React, .NET, ASP.NET, C#, VB.NET, Razor Pages, MVC, Web Forms, SQL, T-SQL, MS SQL Server, Windows, Windows Server, Linux, and ServiceNow.
                    </p>
                    <p className="mt-3">I graduated from the University of Texas at Arlington with a B.S. degree in Business Information Systems, and since then I&apos;ve had the opportunity to work with a number of great companies, including The Shams Group, Leapforce, Invoice Cloud, and WellMed Medical Management, Inc. Each of these experiences has taught me something valuable, and I&apos;m always looking for new challenges to help me grow as a developer.</p>
                    <p className="mt-3">When I&apos;m not working on software projects, you can usually find me spending time with my Golden Retriever, Link, or playing video games. I believe that a healthy work-life balance is essential for staying productive and motivated, and I always strive to maintain that balance in my own life.</p>
                    <p className="mt-3">Thank you for taking the time to visit my website, and I hope that you&apos;ll find something here that interests you. Please check out some of my projects on my <Link to="/projects" className="text-blue-1">Projects</Link> page, or my GitHub repos on <a href="https://github.com/dnmyers" className="text-blue-1" rel="noreferrer" target="_blank">GitHub</a>. If you have any questions or would like to learn more about my work, please don&apos;t hesitate to get in touch!  My email address is <a href="mailto:daniel.neil.myers@gmail.com" className="text-blue-1">daniel.neil.myers@gmail.com</a>, or you can message me from my <Link to="/contact">Contact</Link> page.</p>
                </motion.div>
                <div className="mt-10 md:mt-12">
                    <ul className="grid gap-14">
                        {
                            aboutMeItems.map((item, i) => (
                                <motion.li
                                    variants={gridItemVariants}
                                    initial="initial"
                                    animate="animate"
                                    key={i}
                                    className="flex gap-x-1"
                                >
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold ml-5 mt-2">
                                            {item.title}
                                        </h4>
                                        <div className="mt-3 ml-5 block justify-start items-start">
                                            {item.desc}
                                        </div>
                                    </div>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div> */}
            <div
                className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]'
                style={{
                    background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
            ></div>
        </section>
    )
}

export default About;