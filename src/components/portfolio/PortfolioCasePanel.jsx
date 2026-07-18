import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];

const CASE_FIELDS = [
    { key: "challenge", label: "Challenge" },
    { key: "approach", label: "Approach" },
    { key: "techStack", label: "Tech stack" },
    { key: "innovation", label: "Innovation" },
    { key: "impact", label: "Impact" },
];

const PortfolioCasePanel = ({ project, onClose, titleId }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {project ? (
                    <motion.article
                        key={project.id}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: ENTRANCE_EASE }}
                        className="relative rounded-2xl border border-white/10 bg-black/55 backdrop-blur-sm p-6 flex flex-col gap-5"
                        aria-live="polite"
                    >
                        {onClose ? (
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Tutup"
                                className="absolute top-4 right-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors duration-300 ease-[var(--ease-out-quart)] hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 3L13 13M13 3L3 13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        ) : null}

                        <div className={`flex flex-col gap-2 ${onClose ? "pr-10" : ""}`}>
                            <span className="text-accent text-xs font-medium uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h2
                                id={titleId}
                                className="font-secondary text-white text-3xl uppercase leading-none"
                            >
                                {project.title}
                            </h2>
                            <p className="text-white/60 text-sm">{project.type}</p>
                        </div>

                        {project.description ? (
                            <div className="flex flex-col gap-2">
                                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                                    Project overview
                                </p>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        ) : null}

                        <div className="flex flex-col gap-4">
                            <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                                Case solved
                            </p>
                            {CASE_FIELDS.filter((field) => project.caseSolved?.[field.key]).map((field, index) => (
                                <motion.div
                                    key={field.key}
                                    initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: shouldReduceMotion ? 0 : index * 0.06,
                                        ease: ENTRANCE_EASE,
                                    }}
                                    className="flex flex-col gap-1"
                                >
                                    <span className="text-accent text-xs font-medium uppercase">
                                        {field.label}
                                    </span>
                                    <p className="text-white/85 text-sm leading-relaxed">
                                        {project.caseSolved[field.key]}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-1">
                            {project.techIcons.map((icon) => (
                                <img
                                    key={icon}
                                    src={icon}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-6 h-6 object-contain opacity-90"
                                />
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 ease-[var(--ease-out-quart)] hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            Visit project
                            <span aria-hidden="true">→</span>
                        </a>
                    </motion.article>
                ) : (
                    <motion.div
                        key="empty"
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                        className="rounded-2xl border border-dashed border-white/15 bg-black/30 p-8 text-center"
                    >
                        <p className="text-white/50 text-sm leading-relaxed">
                            Hover or select a project to see the developer case behind it.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioCasePanel;
