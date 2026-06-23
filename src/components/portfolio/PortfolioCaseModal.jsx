import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import PortfolioCasePanel from "./PortfolioCasePanel";

const ENTRANCE_EASE = [0.16, 1, 0.3, 1];

const PortfolioCaseModal = ({ project, isOpen, onClose }) => {
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && project ? (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="portfolio-case-modal-title"
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.25, ease: ENTRANCE_EASE }}
                >
                    <motion.button
                        type="button"
                        aria-label="Tutup panel"
                        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
                        onClick={onClose}
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                        transition={{ duration: 0.25, ease: ENTRANCE_EASE }}
                    />

                    <motion.div
                        className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide"
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: ENTRANCE_EASE }}
                    >
                        <PortfolioCasePanel
                            project={project}
                            onClose={onClose}
                            titleId="portfolio-case-modal-title"
                        />
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default PortfolioCaseModal;
