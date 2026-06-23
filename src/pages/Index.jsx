import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useNavigate } from "react-router-dom";

import Rec1 from "../assets/Index/rec1.jpg";
import Rec3 from "../assets/Index/rec3.jpg";
import Rec4 from "../assets/Index/rec4.jpg";
import Rec5 from "../assets/Index/rec5.jpg";
import Rec6 from "../assets/Index/rec6.jpg";
import ArrowRight from "../assets/Index/arrow-right.png";
import Pic from "../assets/Index/pic.png";
import LinkedinIcon from "../assets/Index/linkedin.png";
import GithubIcon from "../assets/Index/github.png";
import InstagramIcon from "../assets/Index/instagram.png";
import ImageSection from "../components/ImageSection";
import LightRays from "../components/LightRays";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const CARD_HOVER =
    "transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-quart)] hover:scale-[1.02] hover:shadow-2xl";
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const entrance = (delay) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: ENTRANCE_EASE },
});

const Index = () => {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
    const [hoverDiscuss, setHoverDiscuss] = useState(false);
    const [hoverPortfolio, setHoverPortfolio] = useState(false);
    const [hoverAbout, setHoverAbout] = useState(false);

    const pulseAnimation = shouldReduceMotion
        ? { scale: 1, y: 0 }
        : { scale: [1, 1.03, 1], y: [0, -3, 0] };
    const pulseTransition = shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: ENTRANCE_EASE, repeat: Infinity, repeatDelay: 2 };
    const staticState = { scale: 1, y: 0 };

    const goToWhatsapp = () => {
        window.open(
            "https://wa.me/6281298790058?text=Halo,Saya%20tertarik%20dengan%20portfolio%20Anda,%20bisa%20berdiskusi%20lebih%20lanjut%20mengenai%20pembuatan%20website?",
            "_blank",
            "noopener,noreferrer"
        );
    };

    const goToGithub = () => {
        window.open("https://github.com/rendiero25", "_blank", "noopener,noreferrer");
    };

    const goToLinkedin = () => {
        window.open("https://linkedin.com/in/rendytomaluweng", "_blank", "noopener,noreferrer");
    };

    const goToInstagram = () => {
        window.open("https://instagram.com/rendiero25", "_blank", "noopener,noreferrer");
    };

    const goToMedium = () => {
        window.open("https://rendiero.medium.com/", "_blank", "noopener,noreferrer");
    };

    const goToAboutMe = () => {
        navigate("/about-me");
    };

    const goToPortfolio = () => {
        navigate("/portfolio");
    };

    return (
        <div className="relative bg-background w-full min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={1}
                    rayLength={9}
                    breakpoint={{
                        1280: { rayLength: 2, raysSpeed: 1.2 },
                    }}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            <main className="relative z-10 w-full min-h-screen" aria-label="Home">
            <div className="flex flex-col justify-between items-center">
                <div className="h-full lg:h-[45vh] w-full flex flex-col lg:flex-row justify-between items-stretch gap-8 px-8 pt-8 pb-4">
                    <ImageSection
                        as={motion.section}
                        {...entrance(0.1)}
                        src={Rec1}
                        position="top-right"
                        className={`w-full lg:w-[50%] h-auto lg:h-full px-6 sm:px-10 lg:px-15 2xl:pl-20 2xl:pr-40 py-8 rounded-3xl ${CARD_HOVER}`}
                        contentClassName="flex flex-col justify-center items-center gap-6"
                    >
                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl font-medium leading-tight text-center lg:text-left">
                            Your vision, my code. Let's build something that matters
                        </h1>

                        <motion.button
                            type="button"
                            onClick={goToWhatsapp}
                            animate={hoverDiscuss ? staticState : pulseAnimation}
                            transition={hoverDiscuss ? { duration: 0.2, ease: ENTRANCE_EASE } : pulseTransition}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                            onHoverStart={() => setHoverDiscuss(true)}
                            onHoverEnd={() => setHoverDiscuss(false)}
                            className={`cursor-pointer flex flex-row justify-between items-center bg-black rounded-full w-full p-2 min-h-14 ${FOCUS_RING}`}
                        >
                            <span className="text-white text-2xl font-normal pl-6 sm:pl-8">Let's Discuss</span>
                            <img src={ArrowRight} alt="" aria-hidden="true" className="w-15 shrink-0" />
                        </motion.button>
                    </ImageSection>

                    <motion.div
                        {...entrance(0.25)}
                        className={`relative overflow-hidden bg-elevated w-full lg:w-[30%] min-h-48 lg:min-h-0 lg:h-full rounded-3xl ${CARD_HOVER}`}
                    >
                        <img
                            src={Pic}
                            alt="Rendy Norman Tomaluweng"
                            className="h-full w-full object-contain object-bottom"
                        />
                    </motion.div>

                    <ImageSection
                        as={motion.section}
                        {...entrance(0.4)}
                        src={Rec3}
                        overlay="dark"
                        className={`w-full lg:w-[20%] h-auto lg:h-full px-10 lg:px-5 2xl:px-10 py-8 sm:py-20 md:py-35 lg:py-8 3xl:py-10 rounded-3xl font-secondary text-3xl sm:text-6xl lg:text-xl 2xl:text-3xl 3xl:text-4xl leading-tight ${CARD_HOVER}`}
                        contentClassName="flex flex-col justify-center items-start gap-6 md:gap-12 lg:gap-6"
                    >
                        <h2 className="text-white font-medium uppercase">
                            <span className="text-accent">Hi! I'm</span> Rendy Norman Tomaluweng
                        </h2>
                        <h2 className="text-accent font-medium uppercase">
                            <span className="text-white">A</span> Full Stack Web{" "}
                            <span className="text-white">developer</span>
                        </h2>
                        <h2 className="text-white font-medium uppercase">
                            <span className="text-accent">Based In</span> Indonesia
                        </h2>
                    </ImageSection>
                </div>

                <div className="h-full lg:h-[55vh] w-full flex flex-col lg:flex-row justify-between items-stretch gap-8 px-8 pb-8 pt-4">
                    <ImageSection
                        as={motion.button}
                        type="button"
                        onClick={goToPortfolio}
                        {...entrance(0.55)}
                        src={Rec4}
                        overlay="dark"
                        className={`${CARD_HOVER} ${FOCUS_RING} cursor-pointer text-left w-full lg:w-[45%] h-[48rem] lg:h-full px-10 lg:px-6 2xl:px-10 py-8 rounded-3xl`}
                        contentClassName="flex flex-col justify-between items-center gap-6"
                        aria-label="View portfolio"
                    >
                        <span className="font-secondary text-white text-6xl lg:text-4xl 2xl:text-5xl 3xl:text-5xl font-medium leading-tight uppercase self-start">
                            Portfolio
                        </span>

                        <motion.span
                            animate={hoverPortfolio ? staticState : pulseAnimation}
                            transition={hoverPortfolio ? { duration: 0.2, ease: ENTRANCE_EASE } : pulseTransition}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                            onHoverStart={() => setHoverPortfolio(true)}
                            onHoverEnd={() => setHoverPortfolio(false)}
                            className="flex flex-row justify-center items-center gap-4 lg:gap-2 2xl:gap-4 self-end group pointer-events-none"
                        >
                            <span className="text-white text-2xl lg:text-lg 2xl:text-xl font-normal pl-4 lg:pl-8 text-right">
                                Don't be shy,
                                <br />
                                there's more to see!
                            </span>
                            <img src={ArrowRight} alt="" aria-hidden="true" className="w-15 lg:w-10 2xl:w-15 shrink-0" />
                        </motion.span>
                    </ImageSection>

                    <div className="w-full lg:w-[20%] h-full">
                        <div className="flex flex-col justify-between items-center gap-8 h-full">
                            <ImageSection
                                as={motion.button}
                                type="button"
                                onClick={goToMedium}
                                {...entrance(0.7)}
                                src={Rec5}
                                className={`${CARD_HOVER} ${FOCUS_RING} cursor-pointer text-left w-full h-full p-10 py-10 lg:py-5 2xl:py-10 sm:pl-20 md:pl-30 lg:pl-5 xl:pl-10 3xl:pl-15 rounded-3xl`}
                                contentClassName="flex flex-col justify-center items-center gap-4"
                                aria-label="Read articles on Medium"
                            >
                                <span className="font-secondary text-black text-left text-5xl lg:text-2xl 2xl:text-4xl 3xl:text-4xl font-medium leading-tight uppercase self-start">
                                    Coding, Coffee, and Gaming
                                </span>
                                <span className="text-black text-3xl lg:text-sm 2xl:text-xl font-normal text-left leading-normal lg:leading-tight">
                                    A place where I share my thoughts, tips, and a little bit of dev-life rant
                                </span>
                            </ImageSection>

                            <motion.nav
                                {...entrance(0.85)}
                                aria-label="Social links"
                                className={`bg-surface ${CARD_HOVER} w-full lg:h-[30%] px-10 lg:px-8 xl:px-12 2xl:px-14 3xl:px-22 py-10 sm:py-20 lg:py-5 xl:py-10 rounded-3xl flex flex-row justify-center items-center gap-8 sm:gap-15 lg:gap-4 xl:gap-6`}
                            >
                                <button
                                    type="button"
                                    onClick={goToLinkedin}
                                    aria-label="LinkedIn profile"
                                    className={`cursor-pointer p-2 rounded-full transition-transform duration-300 ease-[var(--ease-out-quart)] hover:scale-110 active:scale-95 ${FOCUS_RING}`}
                                >
                                    <img src={LinkedinIcon} alt="" aria-hidden="true" className="w-16 sm:w-20" />
                                </button>

                                <button
                                    type="button"
                                    onClick={goToGithub}
                                    aria-label="GitHub profile"
                                    className={`cursor-pointer p-2 rounded-full transition-transform duration-300 ease-[var(--ease-out-quart)] hover:scale-110 active:scale-95 ${FOCUS_RING}`}
                                >
                                    <img src={GithubIcon} alt="" aria-hidden="true" className="w-16 sm:w-20" />
                                </button>

                                <button
                                    type="button"
                                    onClick={goToInstagram}
                                    aria-label="Instagram profile"
                                    className={`cursor-pointer p-2 rounded-full transition-transform duration-300 ease-[var(--ease-out-quart)] hover:scale-110 active:scale-95 ${FOCUS_RING}`}
                                >
                                    <img src={InstagramIcon} alt="" aria-hidden="true" className="w-16 sm:w-20" />
                                </button>
                            </motion.nav>
                        </div>
                    </div>

                    <ImageSection
                        as={motion.section}
                        {...entrance(1.0)}
                        src={Rec6}
                        overlay="dark"
                        className={`${CARD_HOVER} w-full lg:w-[35%] h-full px-10 lg:px-10 3xl:px-20 pt-15 py-15 sm:py-30 lg:py-15 rounded-3xl`}
                        contentClassName="flex flex-col gap-6"
                    >
                        <h2 className="font-secondary text-white text-7xl lg:text-4xl 2xl:text-5xl 3xl:text-5xl font-medium leading-tight uppercase self-start">
                            About Me
                        </h2>

                        <p className="text-white text-2xl sm:text-3xl lg:text-xs 2xl:text-xl 3xl:text-xl font-normal text-left leading-relaxed max-w-prose">
                            With an educational background in technology, I'm an experienced Full Stack Web
                            developer skilled in React, Next.js, Tailwind CSS, JavaScript, TypeScript, Node.js,
                            MongoDB, Supabase, GSAP, Motion, and Three.js. Proficient in API integration and UI/UX
                            design to create modern and responsive web applications.
                        </p>

                        <motion.button
                            type="button"
                            onClick={goToAboutMe}
                            animate={hoverAbout ? staticState : pulseAnimation}
                            transition={hoverAbout ? { duration: 0.2, ease: ENTRANCE_EASE } : pulseTransition}
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                            onHoverStart={() => setHoverAbout(true)}
                            onHoverEnd={() => setHoverAbout(false)}
                            className={`cursor-pointer flex flex-row justify-start items-center gap-4 lg:gap-2 2xl:gap-4 self-start min-h-11 ${FOCUS_RING}`}
                        >
                            <span className="text-white text-2xl lg:text-lg 2xl:text-xl font-normal">See more</span>
                            <img src={ArrowRight} alt="" aria-hidden="true" className="w-15 lg:w-10 2xl:w-15 shrink-0" />
                        </motion.button>
                    </ImageSection>
                </div>
            </div>
            </main>
        </div>
    );
};

export default Index;
