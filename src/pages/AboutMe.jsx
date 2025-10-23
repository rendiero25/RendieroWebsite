import { useHeaderContext } from "../context/HeaderContext";
import { motion } from "motion/react";

import Bg from "../assets/AboutMe/bg.jpg";
import Pic from "../assets/AboutMe/pic.png";
import Affinity from "../assets/AboutMe/affinitydesigner.png";
import Github from "../assets/AboutMe/github.png";
import Canva from "../assets/AboutMe/canva.png";
import Claude from "../assets/AboutMe/claude.png";
import Express from "../assets/AboutMe/expressjs.png";
import Figma from "../assets/AboutMe/figma.png";
import Firebase from "../assets/AboutMe/firebase.png";
import Firefox from "../assets/AboutMe/firefox.png";
import Git from "../assets/AboutMe/git.png";
import Gsap from "../assets/AboutMe/gsap.png";
import Inkscape from "../assets/AboutMe/inkscape.png";
import Javascript from "../assets/AboutMe/javascript.png";
import Materialui from "../assets/AboutMe/materialui.png";
import Nextjs from "../assets/AboutMe/nextjs.png";
import Nodejs from "../assets/AboutMe/nodejs.png";
import Reactjs from "../assets/AboutMe/reactjs.png";
import Tailwindcss from "../assets/AboutMe/tailwindcss.png";
import Threejs from "../assets/AboutMe/threejs.png";
import Typescript from "../assets/AboutMe/typescript.png";
import Vite from "../assets/AboutMe/vite.png";
import Mongodb from "../assets/AboutMe/mongodb.png";
import Postman from "../assets/AboutMe/postman.png";
import Vercel from "../assets/AboutMe/vercel.png";
import Windsurf from "../assets/AboutMe/windsurf.png";
import Wordpress from "../assets/AboutMe/wordpress.png";

import DownloadIcon from "../assets/AboutMe/download.png";

const AboutMe = () => {

    const { isOpen } = useHeaderContext();

    return (
        <div 
            className="relative w-full min-h-screen"
            style={{backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundPosition: "center"}}
        >          
            <div className="absolute pt-70 sm:pt-0 w-full h-full flex flex-col lg:flex-row justify-center items-center gap-15">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={Pic} alt="pic" className="w-50 lg:w-30 xl:w-45 3xl:w-50 h-full drop-shadow-2xl"/>
                </motion.div>

                <div className="flex flex-col justify-center items-start gap-15 px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        delay={3}
                    >
                        <p className="text-white text-2xl lg:text-xl lg:max-w-xl font-normal text-left leading-normal">With an educational background in technology, I'm an 
                            experienced Front-End Web Developer skilled in HTML, 
                            CSS, TailwindCSS, JavaScript, Typescript, React JS, GSAP 
                            and Three JS. Proficient in API integration and UI/UX 
                            design to create modern and responsive interfaces. <br /><br />

                            Successfully completed over 13 projects with a 95% client 
                            satisfaction rate. I focus is on building functional web 
                            applications that enhance user experiences and deliver real 
                            value to businesses.
                        </p>
                    </motion.div>

                    <div className="flex flex-col justify-center items-start gap-10">
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        delay={5}
                        className="flex flex-row flex-wrap justify-start items-center gap-5 lg:max-w-lg"
                        >
                            <img src={Reactjs} alt="Reactjs" className="w-15 lg:w-10"/>
                            <img src={Tailwindcss} alt="Tailwindcss" className="w-15 lg:w-10"/>
                            <img src={Nodejs} alt="Nodejs" className="w-15 lg:w-10"/> 
                            <img src={Mongodb} alt="Mongodb" className="w-15 lg:w-10"/>   
                            <img src={Firebase} alt="Firebase" className="w-15 lg:w-10"/> 
                            <img src={Express} alt="Express" className="w-15 lg:w-10"/>
                            <img src={Javascript} alt="Javascript" className="w-15 lg:w-10"/> 
                            <img src={Typescript} alt="Typescript" className="w-15 lg:w-10"/> 
                            <img src={Materialui} alt="Materialui" className="w-15 lg:w-10"/> 
                            <img src={Nextjs} alt="Nextjs" className="w-15 lg:w-10"/>   
                            <img src={Gsap} alt="Gsap" className="w-15 lg:w-10"/>            
                            <img src={Wordpress} alt="Wordpress" className="w-15 lg:w-10"/>
                            <img src={Threejs} alt="Threejs" className="w-15 lg:w-10"/>  
                            <img src={Git} alt="Git" className="w-15 lg:w-10"/>      
                            <img src={Vite} alt="Vite" className="w-15 lg:w-10"/>    
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 4 }}
                            delay={6}
                            className="flex flex-row flex-wrap justify-start items-center gap-5 lg:max-w-lg"
                        >
                            <img src={Windsurf} alt="Windsurf" className="w-15 lg:w-10"/>
                            <img src={Firefox} alt="Firefox" className="w-15 lg:w-10"/>
                            <img src={Claude} alt="Claude" className="w-15 lg:w-10"/> 
                            <img src={Postman} alt="Postman" className="w-15 lg:w-10"/>   
                            <img src={Github} alt="Github" className="w-15 lg:w-10"/> 
                            <img src={Figma} alt="Figma" className="w-15 lg:w-10"/>
                            <img src={Affinity} alt="Affinity" className="w-15 lg:w-10"/> 
                            <img src={Canva} alt="Canva" className="w-15 lg:w-10"/> 
                            <img src={Inkscape} alt="Inkscape" className="w-15 lg:w-10"/> 
                            <img src={Vercel} alt="Vercel" className="w-15 lg:w-10"/>  
                        </motion.div>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 5 }}
                        delay={8}
                        >
                            <button
                                className="cursor-pointer bg-gradient-to-r from-[#1873FE] to-[#0E4598] px-6 py-3 rounded-xl flex flex-row justify-center items-center gap-3 hover:scale-105 hover:shadow-2xl">
                                    <span className="text-white font-medium text-xl">Download my CV</span>
                                    <img src={DownloadIcon} alt="file download" className="w-5"/>
                            </button>
                    </motion.div>
                </div>
            </div>   
        </div>
    );
};

export default AboutMe;