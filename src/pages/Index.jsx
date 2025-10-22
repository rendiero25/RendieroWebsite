import { motion } from "motion/react";

import Rec1 from "../assets/Index/Rec1.jpg";
import Rec3 from "../assets/Index/Rec3.jpg";
import Rec4 from "../assets/Index/Rec4.jpg";
import Rec5 from "../assets/Index/Rec5.jpg";
import Rec6 from "../assets/Index/Rec6.jpg";
import ArrowRight from "../assets/Index/arrow-right.png";
import Pic from "../assets/Index/Pic.jpg";
import LinkedinIcon from "../assets/Index/linkedin.png";
import GithubIcon from "../assets/Index/github.png";
import InstagramIcon from "../assets/Index/instagram.png";

const Index = () => {

    const goToGithub = () => {
        window.open("https://github.com/rendiero25", "_blank", "noopener,noreferrer");
    }

    const goToLinkedin = () => {
        window.open("https://linkedin.com/in/rendytomaluweng", "_blank", "noopener,noreferrer");
    }

    const goToInstagram = () => {
        window.open("https://instagram.com/rendiero25", "_blank", "noopener,noreferrer");
    }

    const goToMedium = () => {
        window.open("https://rendiero.medium.com/", "_blank", "noopener,noreferrer");
    }

    return (
        <div className="bg-background w-full h-full lg:min-h-screen">
            <div className="flex flex-col justify-between items-center">
                <div className="h-full lg:h-[45vh] w-full flex flex-col lg:flex-row justify-between items-start gap-8 px-8 pt-8 pb-4">
                    {/* REC 1 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-[50%] h-auto lg:h-full px-6 sm:px-10 lg:px-15 2xl:pl-20 2xl:pr-40 py-8 rounded-3xl flex flex-col justify-center items-center gap-6"
                        style={{backgroundImage: `url(${Rec1})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-3xl 2xl:text-5xl font-medium leading-tight">Your vision, My code. Let’s built something that matters</h1>        
                       
                        <button className="cursor-pointer flex flex-row justify-between items-center bg-black rounded-full w-full p-2 hover:scale-110 hover:shadow-2xl">
                            <span className="text-white text-2xl font-normal pl-8">Let's Discuss</span>
                            <img src={ArrowRight} alt="ArrowRight" className="w-15"/>
                        </button>                
                    </motion.div>

                    {/* REC 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-[30%] h-full px-6 lg:px-20 py-35 sm:py-60 lg:py-8 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Pic})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >              
                    </motion.div>
                        
                    {/* REC 3 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="w-full lg:w-[20%] h-auto lg:h-full px-10 lg:px-5 2xl:px-10 py-8 sm:py-20 md:py-35 lg:py-8 rounded-3xl font-secondary text-3xl sm:text-6xl lg:text-xl 2xl:text-3xl leading-tight flex flex-col justify-center items-start gap-6 md:gap-12 lg:gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Rec3})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h2 className="text-white font-medium uppercase"><span className="text-[#1772FE]">Hi! I'm</span> Rendy Norman Tomaluweng</h2>
                        <h2 className="text-white font-medium uppercase"><span className="text-[#1772FE]">A</span> Front End Web Developer <span className="text-[#1772FE]">and</span> Offensive Security Enthusiast</h2>
                        <h2 className="text-white font-medium uppercase"><span className="text-[#1772FE]">Based In</span> Indonesia</h2>                      
                    </motion.div>                    
                </div>

                <div className="h-full lg:h-[55vh] w-full flex flex-col lg:flex-row justify-between items-start gap-8 px-8 pb-8 pt-4">
                    {/* REC 4 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-[45%] h-[48rem] lg:h-full px-10 lg:px-6 2xl:px-10 py-8 rounded-3xl flex flex-col justify-between items-center gap-6"
                        style={{backgroundImage: `url(${Rec4})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >
                        <h1 className="font-secondary text-white text-6xl lg:text-4xl 2xl:text-5xl font-medium leading-tight uppercase self-start">Portfolio</h1>        
                       
                        <div className="cursor-pointer flex flex-row justify-center items-center gap-4 lg:gap-2 2xl:gap-4 self-end hover:scale-110 hover:shadow-2xl">
                            <span className="text-white text-2xl lg:text-lg 2xl:text-xl font-normal pl-8 text-right">Don’t be shy, <br />there’s more to see!</span>
                            <img src={ArrowRight} alt="ArrowRight" className="w-15 lg:w-10 2xl:w-15"/>
                        </div>                
                    </motion.div>

                    {/* REC 5 & REC 6 */}
                    <div className="w-full lg:w-[20%] h-full">
                        <div className="flex flex-col justify-between items-center gap-8 h-full bg-blue-500">
                            {/* REC 5 */}
                            <button onClick={() => goToMedium()} className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full p-10 py-10 lg:py-5 2xl:py-10 sm:pl-20 md:pl-30 lg:pl-5 2xl:pl-20 rounded-3xl flex flex-col justify-center items-center gap-4"
                                style={{backgroundImage: `url(${Rec5})`, backgroundSize: "cover", backgroundPosition: "center"}}
                                >
                                    <h2 className="font-secondary text-black text-left text-5xl lg:text-2xl font-medium leading-tight uppercase self-start">CODING, COFFEE, AND PENTEST</h2>              
                                    <p className="text-black text-3xl lg:text-sm font-normal text-left leading-normal lg:leading-tight">A place where I share my thoughts, tips, and a little bit of dev-life and pentest rant</p>
                                </motion.div> 
                            </button>
                              
                                
                            {/* REC 6 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="bg-[#4D4D4D] w-full lg:h-[30%] px-10 lg:px-5 py-10 sm:py-20 lg:py-5 xl:py-10 rounded-3xl flex flex-row justify-center items-center gap-8 sm:gap-15 lg:gap-8 "
                            >
                                <button onClick={() => goToLinkedin()} className="cursor-pointer hover:scale-120 hover:shadow-2xl">
                                    <img src={LinkedinIcon} alt="LinkedinIcon" className="w-20 lg:w-30 xl:w-20"/>
                                </button>
                                
                                <button onClick={() => goToGithub()} className="cursor-pointer hover:scale-120 hover:shadow-2xl">
                                    <img src={GithubIcon} alt="GithubIcon" className="w-20 lg:w-30 xl:w-20"/>
                                </button>

                                <button onClick={() => goToInstagram()} className="cursor-pointer hover:scale-120 hover:shadow-2xl">
                                    <img src={InstagramIcon} alt="InstagramIcon" className="w-20 lg:w-30 xl:w-20"/>
                                </button>
                            </motion.div>  
                        </div>
                    </div>
                    

                    {/* REC 7 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-[35%] h-full px-10 lg:px-10 pt-15 py-15 sm:py-30 lg:py-15 rounded-3xl flex flex-col gap-6 hover:scale-105 hover:shadow-2xl"
                        style={{backgroundImage: `url(${Rec6})`, backgroundSize: "cover", backgroundPosition: "center"}}
                    >        
                        <h2 className="font-secondary text-white text-7xl lg:text-4xl font-medium leading-tight uppercase self-start">About Us</h2>              
                        <p className="text-white text-2xl sm:text-3xl lg:text-sm font-normal text-left leading-normal">With an educational background in technology, 
                            I'm an experienced Front-End Web Developer 
                            skilled in HTML, CSS, TailwindCSS, JavaScript, 
                            Typescript, React JS, GSAP and Three JS. 
                            Proficient in API integration and UI/UX design 
                            to create modern and responsive interfaces.</p>                                  
                    </motion.div>             
                </div>
            </div>
        </div>
    );
};

export default Index;
