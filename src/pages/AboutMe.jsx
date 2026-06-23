import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import LightRays from "../components/LightRays";
import ProfilePanel from "../components/about/ProfilePanel";
import SkillExplorer from "../components/about/SkillExplorer";
import { BIO_SECTIONS, STATS } from "../data/aboutSkills";

import DownloadIcon from "../assets/AboutMe/download.png";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const cvPath = "/cvRendyT.pdf";
const cvName = "cvRendyT.pdf";

const AboutMe = () => {
    const shouldReduceMotion = useReducedMotion();
    const [activeBio, setActiveBio] = useState(BIO_SECTIONS[0].id);
    const activeBioContent = BIO_SECTIONS.find((section) => section.id === activeBio);

    return (
        <div className="relative bg-background w-full min-h-screen lg:min-h-0 lg:h-screen overflow-x-hidden">
            <div className="absolute inset-0 h-full w-full pointer-events-none">
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

            <main className="relative z-10 w-full min-h-screen lg:h-full flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 px-6 sm:px-8 py-28 lg:py-12 pb-16">
                <motion.aside
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: ENTRANCE_EASE }}
                    className="w-full lg:w-auto shrink-0"
                >
                    <ProfilePanel />
                </motion.aside>

                <motion.section
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: ENTRANCE_EASE }}
                    className="w-full max-w-3xl flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-3 text-center lg:text-left">
                        <p className="font-secondary text-accent text-2xl tracking-wide uppercase">
                            About Me
                        </p>
                        <h1 className="font-secondary text-white text-5xl sm:text-6xl lg:text-5xl 2xl:text-6xl leading-none uppercase">
                            Rendy Norman Tomaluweng
                        </h1>
                        <p className="text-white/70 text-lg lg:text-base 2xl:text-lg">
                            Full Stack Web Developer
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.45,
                                    delay: 0.15 + index * 0.08,
                                    ease: ENTRANCE_EASE,
                                }}
                                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                                className="rounded-2xl bg-black/45 px-3 py-4 text-center"
                            >
                                <p className="font-secondary text-accent text-3xl lg:text-2xl 2xl:text-3xl leading-none">
                                    {stat.value}
                                </p>
                                <p className="text-white/70 text-xs sm:text-sm mt-2 leading-snug">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            className="flex flex-row flex-wrap justify-center lg:justify-start gap-2"
                            role="tablist"
                            aria-label="Bio sections"
                        >
                            {BIO_SECTIONS.map((section) => {
                                const isActive = activeBio === section.id;

                                return (
                                    <button
                                        key={section.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveBio(section.id)}
                                        className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-[var(--ease-out-quart)] ${FOCUS_RING} ${
                                            isActive
                                                ? "bg-white text-background"
                                                : "bg-black/50 text-white/70 hover:text-white hover:bg-black/70"
                                        }`}
                                    >
                                        {section.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="relative min-h-32 rounded-2xl bg-black/35 px-5 py-5">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeBio}
                                    role="tabpanel"
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3, ease: ENTRANCE_EASE }}
                                    className="text-white text-lg lg:text-base 2xl:text-lg leading-relaxed"
                                >
                                    {activeBioContent?.content}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>

                    <SkillExplorer />

                    <motion.a
                        href={cvPath}
                        download={cvName}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.35, ease: ENTRANCE_EASE }}
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        className={`self-center lg:self-start cursor-pointer bg-accent px-6 py-3 rounded-xl flex flex-row justify-center items-center gap-3 transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/30 ${FOCUS_RING}`}
                    >
                        <span className="text-white font-medium text-xl">Download my CV</span>
                        <img src={DownloadIcon} alt="" aria-hidden="true" className="w-5" />
                    </motion.a>
                </motion.section>
            </main>
        </div>
    );
};

export default AboutMe;
