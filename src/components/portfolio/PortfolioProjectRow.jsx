import { forwardRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const PortfolioProjectRow = forwardRef(function PortfolioProjectRow(
    {
        project,
        index,
        isActive,
        onActivate,
        onHoverStart,
    },
    ref
) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.button
            ref={ref}
            type="button"
            onClick={() => onActivate(project.id)}
            onMouseEnter={onHoverStart}
            onFocus={onHoverStart}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                x: isActive && !shouldReduceMotion ? 12 : 0,
            }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: ENTRANCE_EASE }}
            className={`group w-full text-left cursor-pointer px-4 py-4 sm:px-5 rounded-xl transition-colors duration-300 ${FOCUS_RING} ${
                isActive ? "bg-white/5" : "hover:bg-white/5"
            }`}
            aria-pressed={isActive}
        >
            <div className="flex items-baseline gap-4 lg:gap-6">
                <span
                    className={`font-light text-lg tabular-nums transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-white/35 group-hover:text-white/55"
                    }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                    <span
                        className={`font-secondary text-4xl sm:text-5xl lg:text-4xl 2xl:text-5xl uppercase leading-none transition-colors duration-300 ${
                            isActive ? "text-accent" : "text-white group-hover:text-white"
                        }`}
                    >
                        {project.title}
                    </span>
                    <span className="text-white/45 text-sm">{project.category}</span>
                </div>
                <span
                    aria-hidden="true"
                    className={`ml-auto text-2xl transition-all duration-300 ease-[var(--ease-out-quart)] ${
                        isActive
                            ? "opacity-100 translate-x-0 text-accent"
                            : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-white"
                    }`}
                >
                    →
                </span>
            </div>
        </motion.button>
    );
});

export default PortfolioProjectRow;
