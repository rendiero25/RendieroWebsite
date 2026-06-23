import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

import Pic from "../../assets/AboutMe/pic.png";
import GithubSvg from "../../assets/AboutMe/github.svg";
import LinkedinSvg from "../../assets/AboutMe/linkedin.svg";
import InstagramSvg from "../../assets/AboutMe/instagram.svg";
import MediumSvg from "../../assets/AboutMe/medium.svg";
import MailSvg from "../../assets/AboutMe/mail.svg";
import WhatsappSvg from "../../assets/AboutMe/whatsapp.svg";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const SOCIAL_LINKS = [
    { label: "GitHub", icon: GithubSvg, href: "https://github.com/rendiero25" },
    { label: "LinkedIn", icon: LinkedinSvg, href: "https://linkedin.com/in/rendytomaluweng" },
    { label: "Instagram", icon: InstagramSvg, href: "https://instagram.com/rendiero25" },
    { label: "Medium", icon: MediumSvg, href: "https://rendiero.medium.com/" },
    { label: "Email", icon: MailSvg, href: "mailto:workspace.rendy@gmail.com" },
    {
        label: "WhatsApp",
        icon: WhatsappSvg,
        href: "https://wa.me/6281298790058?text=Halo,Saya%20tertarik%20dengan%20portfolio%20Anda,%20bisa%20berdiskusi%20lebih%20lanjut%20mengenai%20pembuatan%20website?",
    },
];

const ProfilePanel = () => {
    const shouldReduceMotion = useReducedMotion();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const springX = useSpring(pointerX, { stiffness: 180, damping: 22 });
    const springY = useSpring(pointerY, { stiffness: 180, damping: 22 });
    const rotateX = useTransform(springY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [7, -7]);
    const rotateY = useTransform(springX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-7, 7]);

    const handlePointerMove = (event) => {
        if (shouldReduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    const handlePointerLeave = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <motion.div
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                style={{ rotateX, rotateY, transformPerspective: 900 }}
                className="relative"
            >
                <motion.img
                    src={Pic}
                    alt="Rendy Norman Tomaluweng"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: ENTRANCE_EASE }}
                    className="w-48 lg:w-36 xl:w-44 3xl:w-52 drop-shadow-2xl"
                />
            </motion.div>

            <motion.nav
                aria-label="Social links"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: ENTRANCE_EASE }}
                className="flex flex-row flex-wrap justify-center items-center gap-3 px-4"
            >
                {SOCIAL_LINKS.map((link, index) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.35,
                            delay: 0.2 + index * 0.05,
                            ease: ENTRANCE_EASE,
                        }}
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -2 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                        className={`rounded-full p-2 bg-black/40 transition-colors duration-300 hover:bg-black/60 ${FOCUS_RING}`}
                    >
                        <img src={link.icon} alt="" aria-hidden="true" className="w-10 lg:w-8" />
                    </motion.a>
                ))}
            </motion.nav>
        </div>
    );
};

export default ProfilePanel;
