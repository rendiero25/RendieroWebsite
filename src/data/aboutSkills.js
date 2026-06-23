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
import Supabase from "../assets/AboutMe/supabase.svg";
import Postman from "../assets/AboutMe/postman.png";
import Vercel from "../assets/AboutMe/vercel.png";
import Windsurf from "../assets/AboutMe/windsurf.png";
import Wordpress from "../assets/AboutMe/wordpress.png";
import Motion from "../assets/AboutMe/motion.png";

export const SKILL_CATEGORIES = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "tools", label: "Tools" },
];

export const SKILLS = [
    { name: "React", icon: Reactjs, category: "frontend" },
    { name: "Tailwind CSS", icon: Tailwindcss, category: "frontend" },
    { name: "JavaScript", icon: Javascript, category: "frontend" },
    { name: "TypeScript", icon: Typescript, category: "frontend" },
    { name: "Material UI", icon: Materialui, category: "frontend" },
    { name: "Next.js", icon: Nextjs, category: "frontend" },
    { name: "GSAP", icon: Gsap, category: "frontend" },
    { name: "Motion", icon: Motion, category: "frontend" },
    { name: "Three.js", icon: Threejs, category: "frontend" },
    { name: "Vite", icon: Vite, category: "frontend" },
    { name: "WordPress", icon: Wordpress, category: "frontend" },
    { name: "Node.js", icon: Nodejs, category: "backend" },
    { name: "MongoDB", icon: Mongodb, category: "backend" },
    { name: "Supabase", icon: Supabase, category: "backend" },
    { name: "Firebase", icon: Firebase, category: "backend" },
    { name: "Express", icon: Express, category: "backend" },
    { name: "Figma", icon: Figma, category: "design" },
    { name: "Affinity Designer", icon: Affinity, category: "design" },
    { name: "Canva", icon: Canva, category: "design" },
    { name: "Inkscape", icon: Inkscape, category: "design" },
    { name: "Windsurf", icon: Windsurf, category: "tools" },
    { name: "Firefox", icon: Firefox, category: "tools" },
    { name: "Claude", icon: Claude, category: "tools" },
    { name: "Postman", icon: Postman, category: "tools" },
    { name: "GitHub", icon: Github, category: "tools" },
    { name: "Git", icon: Git, category: "tools" },
    { name: "Vercel", icon: Vercel, category: "tools" },
];

export const BIO_SECTIONS = [
    {
        id: "build",
        label: "Build",
        content:
            "With a background in technology, I'm a passionate Full Stack Web Developer specializing in React, Next.js, Tailwind CSS, JavaScript, TypeScript, Node.js, MongoDB, Supabase, GSAP, Motion, and Three.js. I craft modern, responsive web applications through clean code, thoughtful design, and seamless API integration.",
    },
    {
        id: "secure",
        label: "Secure",
        content:
            "Beyond development, I'm an Offensive Security Enthusiast with a strong interest in web security and bug bounty. I explore vulnerabilities to help build safer, more resilient applications for real users.",
    },
    {
        id: "deliver",
        label: "Deliver",
        content:
            "I've completed 15+ projects with a 95% client satisfaction rate. My focus is building functional web applications that enhance user experiences and deliver real value to businesses.",
    },
];

export const STATS = [
    { value: "15+", label: "Projects shipped" },
    { value: "95%", label: "Client satisfaction" },
    { value: "3+", label: "Years building" },
];
