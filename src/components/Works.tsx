import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const works = [
  { 
    title: "TechFlow Brand Identity", 
    category: "Branding",
    year: "2024"
  },
  { 
    title: "GreenLeaf Digital Campaign", 
    category: "Marketing",
    year: "2024"
  },
  { 
    title: "StartupHub Website Redesign", 
    category: "UI/UX",
    year: "2023"
  },
  { 
    title: "CloudNine Product Launch", 
    category: "Media Production",
    year: "2023"
  },
  { 
    title: "DataDriven Visual Identity", 
    category: "Branding",
    year: "2023"
  },
];

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="works" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-muted-foreground block mb-4">
            selected work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Things we've <span className="text-primary">built</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative py-6 border-b border-border/50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-sm text-muted-foreground font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground hidden md:block">
                    {work.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {work.year}
                  </span>
                  <motion.span 
                    initial={{ x: 0 }}
                    animate={{ x: hoveredIndex === index ? 5 : 0 }}
                    className="text-primary"
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* Hover background */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 -mx-4 bg-secondary/50 rounded-lg -z-10"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="btn-outline">
            Download our work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
