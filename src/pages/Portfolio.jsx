import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import LightRays from "../components/LightRays";
import PortfolioCaseModal from "../components/portfolio/PortfolioCaseModal";
import PortfolioCasePanel from "../components/portfolio/PortfolioCasePanel";
import PortfolioProjectRow from "../components/portfolio/PortfolioProjectRow";

const CATEGORY_ORDER = ["Company Profile", "E-Commerce", "Platform", "Community"];
const ENTRANCE_EASE = [0.16, 1, 0.3, 1];
const FOCUS_RING =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const Portfolio = () => {
    const shouldReduceMotion = useReducedMotion();
    const [portfolio, setPortfolio] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [displayedProjectId, setDisplayedProjectId] = useState(null);
    const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
    const [panelTop, setPanelTop] = useState(0);

    const gridRef = useRef(null);
    const panelRef = useRef(null);
    const rowRefs = useRef(new Map());
    const scrollRef = useRef(null);

    useEffect(() => {
        import("../data/portfolio.json")
            .then((module) => setPortfolio(module.default))
            .catch((error) => console.error("Error loading portfolio data:", error));
    }, []);

    const categories = useMemo(
        () => ["All", ...CATEGORY_ORDER.filter((cat) => portfolio.some((p) => p.category === cat))],
        [portfolio]
    );

    const filtered = useMemo(
        () =>
            activeCategory === "All"
                ? portfolio
                : portfolio.filter((project) => project.category === activeCategory),
        [portfolio, activeCategory]
    );

    const activeProject = filtered.find((project) => project.id === displayedProjectId) ?? null;

    useEffect(() => {
        if (!filtered.length) {
            setDisplayedProjectId(null);
            setIsCaseModalOpen(false);
            return;
        }

        setDisplayedProjectId(filtered[0].id);
    }, [filtered]);

    useEffect(() => {
        setIsCaseModalOpen(false);
    }, [activeCategory]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleChange = (event) => {
            if (event.matches) setIsCaseModalOpen(false);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const handleProjectActivate = useCallback((projectId) => {
        setDisplayedProjectId(projectId);

        if (!window.matchMedia("(min-width: 1024px)").matches) {
            setIsCaseModalOpen(true);
        }
    }, []);

    const handleCaseModalClose = useCallback(() => {
        setIsCaseModalOpen(false);
    }, []);

    const updatePanelPosition = useCallback(() => {
        if (!displayedProjectId || !gridRef.current) return;

        const rowEl = rowRefs.current.get(displayedProjectId);
        const panelEl = panelRef.current;
        if (!rowEl) return;

        const gridRect = gridRef.current.getBoundingClientRect();
        const rowRect = rowEl.getBoundingClientRect();
        const panelHeight = panelEl?.offsetHeight ?? 0;
        const maxTop = Math.max(0, gridRef.current.offsetHeight - panelHeight);

        let nextTop = rowRect.top - gridRect.top + rowRect.height / 2 - panelHeight / 2;
        nextTop = Math.min(Math.max(0, nextTop), maxTop);

        setPanelTop(nextTop);
    }, [displayedProjectId]);

    useLayoutEffect(() => {
        updatePanelPosition();
    }, [updatePanelPosition, filtered, activeCategory]);

    useEffect(() => {
        const scrollEl = scrollRef.current;
        window.addEventListener("resize", updatePanelPosition);
        scrollEl?.addEventListener("scroll", updatePanelPosition, { passive: true });

        return () => {
            window.removeEventListener("resize", updatePanelPosition);
            scrollEl?.removeEventListener("scroll", updatePanelPosition);
        };
    }, [updatePanelPosition]);

    useEffect(() => {
        const panelEl = panelRef.current;
        if (!panelEl) return;

        const observer = new ResizeObserver(() => updatePanelPosition());
        observer.observe(panelEl);

        return () => observer.disconnect();
    }, [updatePanelPosition, activeProject?.id]);

    const setRowRef = useCallback((projectId, node) => {
        if (node) {
            rowRefs.current.set(projectId, node);
        } else {
            rowRefs.current.delete(projectId);
        }
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
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
                />
            </div>

            <main ref={scrollRef} className="relative z-10 min-h-screen overflow-y-auto scrollbar-hide">
                <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-28 lg:px-8 lg:pt-32 2xl:max-w-7xl">
                    <motion.header
                        initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: ENTRANCE_EASE }}
                        className="mb-8 flex flex-col gap-4 lg:mb-10"
                    >
                        <p className="font-secondary text-accent text-xl uppercase tracking-wide">
                            Portfolio
                        </p>
                        <h1 className="font-secondary text-white text-5xl sm:text-6xl uppercase leading-none">
                            Selected work
                        </h1>
                        <p className="max-w-2xl text-white/65 text-base leading-relaxed">
                            Explore projects by category. Each case shows the problem I solved as the
                            developer behind the build.
                        </p>
                    </motion.header>

                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1, ease: ENTRANCE_EASE }}
                        className="mb-10 flex flex-wrap gap-2"
                        role="tablist"
                        aria-label="Project categories"
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setActiveCategory(category)}
                                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-[var(--ease-out-quart)] ${FOCUS_RING} ${
                                        isActive
                                            ? "bg-accent text-white"
                                            : "bg-black/50 text-white/60 hover:bg-black/70 hover:text-white"
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </motion.div>

                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-12 2xl:grid-cols-[minmax(0,1fr)_minmax(440px,520px)]"
                    >
                        <section aria-label="Project list" className="min-w-0">
                            {filtered.map((project, index) => (
                                <PortfolioProjectRow
                                    key={project.id}
                                    ref={(node) => setRowRef(project.id, node)}
                                    project={project}
                                    index={index}
                                    isActive={displayedProjectId === project.id}
                                    onActivate={handleProjectActivate}
                                    onHoverStart={() => setDisplayedProjectId(project.id)}
                                />
                            ))}
                        </section>

                        <div className="relative hidden lg:block self-stretch z-20 pointer-events-none">
                            <motion.div
                                ref={panelRef}
                                className="absolute left-0 right-0 w-full pointer-events-auto"
                                animate={{ top: panelTop }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.35,
                                    ease: ENTRANCE_EASE,
                                }}
                            >
                                <PortfolioCasePanel project={activeProject} />
                            </motion.div>
                        </div>
                    </div>

                    <PortfolioCaseModal
                        project={activeProject}
                        isOpen={isCaseModalOpen}
                        onClose={handleCaseModalClose}
                    />
                </div>
            </main>
        </div>
    );
};

export default Portfolio;
