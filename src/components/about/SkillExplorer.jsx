import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES, SKILLS } from "../../data/aboutSkills";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const SkillExplorer = () => {
    const shouldReduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const visibleSkills =
        activeCategory === "all"
            ? SKILLS
            : SKILLS.filter((skill) => skill.category === activeCategory);

    return (
        <div className="flex flex-col gap-5 w-full">
            <div
                className="flex flex-row flex-wrap justify-center lg:justify-start gap-2"
                role="tablist"
                aria-label="Skill categories"
            >
                {SKILL_CATEGORIES.map((category) => {
                    const isActive = activeCategory === category.id;

                    return (
                        <button
                            key={category.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActiveCategory(category.id)}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-[var(--ease-out-quart)] ${FOCUS_RING} ${
                                isActive
                                    ? "bg-accent text-white"
                                    : "bg-black/50 text-white/70 hover:text-white hover:bg-black/70"
                            }`}
                        >
                            {category.label}
                        </button>
                    );
                })}
            </div>

            <div className="relative min-h-28">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeCategory}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: ENTRANCE_EASE }}
                        className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-4 lg:max-w-2xl"
                    >
                        {visibleSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                layout={!shouldReduceMotion}
                                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: shouldReduceMotion ? 0 : index * 0.03,
                                    ease: ENTRANCE_EASE,
                                }}
                                onHoverStart={() => setHoveredSkill(skill.name)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="relative"
                            >
                                <motion.img
                                    src={skill.icon}
                                    alt={skill.name}
                                    whileHover={shouldReduceMotion ? undefined : { scale: 1.15, y: -4 }}
                                    transition={{ duration: 0.2, ease: ENTRANCE_EASE }}
                                    className="w-12 lg:w-9 2xl:w-11 cursor-default drop-shadow-lg"
                                />
                                <AnimatePresence>
                                    {hoveredSkill === skill.name && (
                                        <motion.span
                                            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 4 }}
                                            transition={{ duration: 0.2, ease: ENTRANCE_EASE }}
                                            className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white"
                                        >
                                            {skill.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SkillExplorer;
