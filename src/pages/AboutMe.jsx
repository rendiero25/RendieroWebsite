import { useHeaderContext } from "../context/HeaderContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
// import Aurora from "../components/Autora";
import LightRays from "../components/LightRays";

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
import Motion from "../assets/AboutMe/motion.png";

import DownloadIcon from "../assets/AboutMe/download.png";

import GithubSvg from "../assets/AboutMe/github.svg";
import LinkedinSvg from "../assets/AboutMe/linkedin.svg";
import InstagramSvg from "../assets/AboutMe/instagram.svg";
import MediumSvg from "../assets/AboutMe/medium.svg";
import MailSvg from "../assets/AboutMe/mail.svg";
import WhatsappSvg from "../assets/AboutMe/whatsapp.svg";

// import * as THREE from "three";
// import HALO from "vanta/dist/vanta.halo.min";

const AboutMe = () => {

    const { isOpen } = useHeaderContext();

    const cvPath = '/cvRendyNormanTomaluweng.pdf';
    const cvName = 'cvRendyNormanTomaluweng.pdf';

    const navigate = useNavigate();

    const goToWhatsapp = () => {
        window.open("https://wa.me/6281298790058?text=Halo,Saya%20tertarik%20dengan%20portfolio%20Anda,%20bisa%20berdiskusi%20lebih%20lanjut%20mengenai%20pembuatan%20website?", "_blank", "noopener,noreferrer");
    }

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

    const goToMail = () => {
        window.open("mailto:workspace.rendy@gmail.com", "_blank", "noopener,noreferrer");
    }

    // const [haloEffect, setHaloEffect] = useState(null);
    // const haloRef = useRef(null);

    // useEffect(() => {
    //     if (!haloEffect && haloRef.current) {
    //         try {
    //             const effect = HALO({
    //                 el: haloRef.current,
    //                 THREE: THREE, // Explicitly pass THREE
    //                 mouseControls: true,
    //                 touchControls: true,
    //                 gyroControls: false,
    //                 minHeight: 200.00,
    //                 minWidth: 200.00,
    //                 backgroundColor: 0x282C38,
    //                 backgroundAlpha: 0,
    //                 xOffset: -0.17
    //             });
    //             setHaloEffect(effect);
    //         } catch (error) {
    //             console.error("Error initializing Vanta effect:", error);
    //         }
    //     }

    //     // Cleanup function
    //     return () => {
    //         if (haloEffect) {
    //             haloEffect.destroy();
    //             setHaloEffect(null);
    //         }
    //     };
    // }, [haloEffect]);

    return (
        <div className="relative bg-background w-full min-h-screen lg:h-screen flex justify-center items-center">
            <div className="absolute h-full w-full">
                {/* <Aurora
                    colorStops={["#7cff67", "#b19eef", "#5227ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                /> */}

                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={1}
                    rayLength={9}
                    breakpoint={{
                        1280: { rayLength: 2, raysSpeed: 1.2 }
                    }}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            <div className="relative lg:absolute z-10 h-full flex flex-col lg:flex-row justify-center items-center gap-25 pb-15 lg:pb-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mt-23 lg:mt-0 flex flex-col justify-center items-center gap-8">
                        <img src={Pic} alt="pic" className="w-50 lg:w-30 xl:w-45 3xl:w-50 h-full drop-shadow-2xl" />

                        <div className="flex flex-row flex-wrap justify-center items-center gap-5 lg:gap-2 px-8">
                            <button className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <img src={GithubSvg} alt="GithubIcon" className="w-13 lg:w-10" onClick={goToGithub} />
                            </button>
                            <button className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <img src={LinkedinSvg} alt="LinkedinIcon" className="w-13 lg:w-10" onClick={goToLinkedin} />
                            </button>
                            <button className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <img src={InstagramSvg} alt="InstagramIcon" className="w-13 lg:w-10" onClick={goToInstagram} />
                            </button>
                            <button className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <img src={MediumSvg} alt="MediumIcon" className="w-13 lg:w-10" onClick={goToMedium} />
                            </button>
                            <button className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <img src={MailSvg} alt="MailSvg" className="w-13 lg:w-10" onClick={goToMail} />
                            </button>
                            <button className="cursor-pointer hover:scale-110 hover:shadow-2xl">
                                <img src={WhatsappSvg} alt="WhatsappSvg" className="w-13 lg:w-10" onClick={goToWhatsapp} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="flex flex-col justify-center items-center lg:items-start gap-15 px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-white text-2xl lg:text-lg 2xl:text-xl lg:max-w-2xl font-normal text-center lg:text-left leading-normal">
                            With a background in technology, I’m a passionate and
                            experienced Front-End Web and Mobile Developer specializing in React JS,
                            React Native,TailwindCSS, Nativewind,JavaScript, TypeScript, Mongodb, GSAP,
                            Motion, and Three JS. I focus on crafting modern, responsive, and user-friendly
                            interfaces through clean code, thoughtful design, and seamless
                            API integration. Beyond development, I’m also an Offensive Security
                            Enthusiast with a strong interest in web security and bug bounty,
                            exploring vulnerabilities to help build safer and more resilient
                            applications. <br /><br />

                            Successfully completed over 15 projects with a 95% client
                            satisfaction rate. I focus is on building functional web
                            applications that enhance user experiences and deliver real
                            value to businesses.
                        </p>
                    </motion.div>

                    <div className="flex flex-col justify-center items-start gap-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-5 lg:max-w-lg"
                        >
                            <img src={Reactjs} alt="Reactjs" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Tailwindcss} alt="Tailwindcss" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Nodejs} alt="Nodejs" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Mongodb} alt="Mongodb" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Firebase} alt="Firebase" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Express} alt="Express" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Javascript} alt="Javascript" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Typescript} alt="Typescript" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Materialui} alt="Materialui" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Nextjs} alt="Nextjs" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Gsap} alt="Gsap" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Motion} alt="Motion" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Wordpress} alt="Wordpress" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Threejs} alt="Threejs" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Git} alt="Git" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Vite} alt="Vite" className="w-15 lg:w-8 2xl:w-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-5 lg:max-w-lg"
                        >
                            <img src={Windsurf} alt="Windsurf" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Firefox} alt="Firefox" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Claude} alt="Claude" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Postman} alt="Postman" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Github} alt="Github" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Figma} alt="Figma" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Affinity} alt="Affinity" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Canva} alt="Canva" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Inkscape} alt="Inkscape" className="w-15 lg:w-8 2xl:w-10" />
                            <img src={Vercel} alt="Vercel" className="w-15 lg:w-8 2xl:w-10" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a
                            href={cvPath}
                            download={cvName}
                            className="cursor-pointer bg-gradient-to-r from-[#1873FE] to-[#0E4598] px-6 py-3 rounded-xl flex flex-row justify-center items-center gap-3 hover:scale-105 hover:shadow-2xl">
                            <span className="text-white font-medium text-xl">Download my CV</span>
                            <img src={DownloadIcon} alt="file download" className="w-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;