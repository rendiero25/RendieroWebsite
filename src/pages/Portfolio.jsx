import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const Portfolio = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [portfolio, setPortfolio] = useState([]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorXVelocity = useVelocity(cursorXSpring);
  const cursorYVelocity = useVelocity(cursorYSpring);
  const rotateX = useTransform(cursorYVelocity, [-2000, 2000], [10, -10]);
  const rotateY = useTransform(cursorXVelocity, [-2000, 2000], [-10, 10]);

  useEffect(() => {
    // Gunakan import langsung untuk data statis
    import('../data/portfolio.json')
      .then(module => setPortfolio(module.default))
      .catch(error => console.error('Error loading portfolio data:', error));

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.00,
          scaleMobile: 1.00,
          wingSpan: 15,
          backgorundColor: 0x20224,
          backgroundAlpha: 0
        }));
    }
      return () => {
        if (vantaEffect) {
          vantaEffect.destroy();
        }
      };
  },[vantaEffect]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={vantaRef} className="fixed inset-0 bg-[url(../bg.jpg)] bg-cover bg-center"></div>
      <div className="relative h-full overflow-y-auto scrollbar-hide">
        <div className="min-h-screen flex flex-col items-center pt-30 pb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-4xl px-4 space-y-4 flex flex-col justify-center items-start"
          >
            {portfolio.map((project, index) => (
              <div 
                key={project.id}
                className="relative flex flex-col justify-center items-start gap-5"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-5xl md:text-6xl lg:text-4xl font-bold py-4 relative z-10 flex gap-2 lg:gap-5 hover:text-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    x: hoveredIndex === index ? 20 : 0
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <span className="text-gray-500 font-light">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-white hover:text-blue-500">{project.title}</span>
                </motion.a>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="fixed left-1/2 top-1/2 transform -translate-y-1/2 ml-80 w-50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.1 }
                      }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-lg flex flex-col justify-center items-start gap-5">
                        <span className="text-white text-sm italic font-light">{project.type}</span>

                        <p className="text-white text-sm">{project.description}</p>

                        <div className="flex flex-wrap gap-4">
                          {project.techIcons.map((icon, i) => (
                            <img 
                              key={i} 
                              src={icon} 
                              alt="tech icon" 
                              className="w-5 h-5 object-contain"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;