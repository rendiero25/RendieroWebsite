import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import LightRays from "../components/LightRays";
import MailSvg from "../assets/AboutMe/mail.svg";
import WhatsappSvg from "../assets/AboutMe/whatsapp.svg";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const WHATSAPP_NUMBER = "6281298790058";
const EMAIL = "workspace.rendy@gmail.com";

const CONTACT_TOPICS = [
    {
        id: "project",
        label: "New project",
        preview: "Discussing a new website or product build.",
        whatsappText:
            "Halo, saya tertarik mendiskusikan proyek website baru. Bisa kita ngobrol lebih lanjut?",
        emailSubject: "New project inquiry",
        emailBody:
            "Hi Rendy,\n\nI'm interested in discussing a new website project. Here are a few details:\n\n",
    },
    {
        id: "collab",
        label: "Collaboration",
        preview: "Creative collaboration or joint venture.",
        whatsappText:
            "Halo, saya ingin berkolaborasi pada proyek kreatif. Apakah Anda available untuk diskusi?",
        emailSubject: "Collaboration opportunity",
        emailBody: "Hi Rendy,\n\nI'd love to explore a creative collaboration:\n\n",
    },
    {
        id: "freelance",
        label: "Freelance",
        preview: "Short-term or contract front-end work.",
        whatsappText:
            "Halo, saya mencari front-end developer freelance. Bisa berdiskusi lebih lanjut?",
        emailSubject: "Freelance inquiry",
        emailBody: "Hi Rendy,\n\nI'm looking for a freelance front-end developer:\n\n",
    },
    {
        id: "general",
        label: "General",
        preview: "General questions about services and availability.",
        whatsappText: "Halo, saya ingin menghubungi Anda terkait portfolio dan layanan development Anda.",
        emailSubject: "General inquiry",
        emailBody: "Hi Rendy,\n\nI'd like to get in touch regarding your portfolio and services.\n\n",
    },
];

const CONTACT_CHANNELS = [
    {
        id: "whatsapp",
        label: "WhatsApp",
        title: "Quick chat",
        description: "Best for fast replies and informal project discussions.",
        responseTime: "Usually within a few hours",
        icon: WhatsappSvg,
    },
    {
        id: "email",
        label: "Email",
        title: "Send an email",
        description: "Ideal for detailed briefs, files, and formal proposals.",
        responseTime: "Within 1 business day",
        icon: MailSvg,
    },
];

const Contact = () => {
    const shouldReduceMotion = useReducedMotion();
    const [activeTopicId, setActiveTopicId] = useState(CONTACT_TOPICS[0].id);
    const [hoveredChannel, setHoveredChannel] = useState(null);

    const activeTopic = CONTACT_TOPICS.find((topic) => topic.id === activeTopicId) ?? CONTACT_TOPICS[0];

    const channelLinks = useMemo(
        () => ({
            whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeTopic.whatsappText)}`,
            email: `mailto:${EMAIL}?subject=${encodeURIComponent(activeTopic.emailSubject)}&body=${encodeURIComponent(activeTopic.emailBody)}`,
        }),
        [activeTopic]
    );

    return (
        <div className="relative bg-background w-full min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={1}
                    rayLength={9}
                    breakpoint={{ 1280: { rayLength: 2, raysSpeed: 1.2 } }}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                />
            </div>

            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-28 sm:px-8">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: ENTRANCE_EASE }}
                    className="w-full max-w-3xl flex flex-col items-center gap-10 text-center"
                >
                    <div className="flex flex-col gap-3">
                        <p className="font-secondary text-accent text-xl uppercase tracking-wide">Contact</p>
                        <h1 className="font-secondary text-white text-5xl sm:text-6xl uppercase leading-none">
                            Let's talk
                        </h1>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                            Whether you need a web developer for a new idea or want to collaborate on
                            something creative, pick a topic and reach out through your preferred channel.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                            What is this about?
                        </p>
                        <div
                            className="flex flex-row flex-wrap justify-center gap-2"
                            role="tablist"
                            aria-label="Contact topics"
                        >
                            {CONTACT_TOPICS.map((topic) => {
                                const isActive = activeTopicId === topic.id;

                                return (
                                    <button
                                        key={topic.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveTopicId(topic.id)}
                                        className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-[var(--ease-out-quart)] ${FOCUS_RING} ${
                                            isActive
                                                ? "bg-accent text-white"
                                                : "bg-black/50 text-white/70 hover:bg-black/70 hover:text-white"
                                        }`}
                                    >
                                        {topic.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <motion.div
                        key={activeTopicId}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: ENTRANCE_EASE }}
                        className="rounded-2xl bg-black/35 px-5 py-4 max-w-xl"
                        role="tabpanel"
                    >
                        <p className="text-white/80 text-sm leading-relaxed">{activeTopic.preview}</p>
                    </motion.div>

                    <div
                        className="grid w-full max-w-2xl grid-cols-1 sm:grid-cols-2 gap-4"
                        onMouseLeave={() => setHoveredChannel(null)}
                    >
                        {CONTACT_CHANNELS.map((channel, index) => (
                            <motion.a
                                key={channel.id}
                                href={channelLinks[channel.id]}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredChannel(channel.id)}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.45,
                                    delay: 0.2 + index * 0.1,
                                    ease: ENTRANCE_EASE,
                                }}
                                whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
                                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                                className={`group flex flex-col gap-5 rounded-2xl p-6 text-left transition-colors duration-300 ${FOCUS_RING} ${
                                    hoveredChannel === channel.id || hoveredChannel === null
                                        ? "bg-black/45 hover:bg-black/60"
                                        : "bg-black/30 opacity-80"
                                } ${hoveredChannel === channel.id ? "ring-2 ring-accent/50 bg-accent/15" : ""}`}
                                aria-label={`Contact via ${channel.label}`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-accent text-xs font-medium uppercase tracking-wider">
                                            {channel.label}
                                        </span>
                                        <h2 className="font-secondary text-white text-3xl uppercase leading-none">
                                            {channel.title}
                                        </h2>
                                    </div>
                                    <img
                                        src={channel.icon}
                                        alt=""
                                        aria-hidden="true"
                                        className="w-14 shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-white/75 text-sm leading-relaxed">{channel.description}</p>
                                <div className="flex items-center justify-between gap-4 pt-1">
                                    <span className="text-white/45 text-xs">{channel.responseTime}</span>
                                    <span className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-300">
                                        Open {channel.label} →
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Contact;
