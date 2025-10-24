import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';

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

  return (
    <div className="bg-[url(../bg.jpg)] bg-no-repeat bg-cover bg-center min-h-screen text-white overflow-hidden flex justify-center items-ceter">
      <div className="container mx-auto px-4 py-20 flex justify-center items-ceter">
        <div className="space-y-4 flex flex-col justify-center items-start gap-3">
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
                className="block text-5xl md:text-6xl lg:text-4xl font-bold py-4 relative z-10 flex gap-2 lg:gap-5"
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
                <span className="">{project.title}</span>
              </motion.a>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute left-1/2 top-1/2 transform -translate-y-1/2 ml-80 w-96"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-lg">
                      <p className="text-white text-lg mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {project.techIcons.map((icon, i) => (
                          <img 
                            key={i} 
                            src={icon} 
                            alt="tech icon" 
                            className="w-8 h-8 object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;