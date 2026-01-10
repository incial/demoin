import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Branding & Product Design",
    description: "We craft identities that resonate. From logos to complete brand systems, we help you stand out authentically."
  },
  {
    title: "Digital Marketing & SEO",
    description: "Strategic campaigns that actually reach people. We focus on growth that's sustainable, not just viral."
  },
  {
    title: "Media Production",
    description: "Stories told beautifully. Video, photography, and content that captures your essence."
  },
  {
    title: "Website & UI/UX",
    description: "Digital experiences that feel right. Clean, intuitive, and designed for real humans."
  },
  {
    title: "CGI & VFX",
    description: "Visual magic that makes the impossible tangible. Where imagination meets technical excellence."
  },
  {
    title: "Social Media & PR",
    description: "Building genuine connections. We help you show up where your audience already is."
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress through the section
      const startPoint = windowHeight * 0.5;
      const endPoint = -sectionHeight + windowHeight * 0.5;
      
      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        const progress = (startPoint - sectionTop) / (startPoint - endPoint);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
        
        // Calculate active service based on progress
        const newIndex = Math.floor(progress * services.length);
        setActiveIndex(Math.min(newIndex, services.length - 1));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="min-h-[200vh] relative"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-handwriting text-2xl text-muted-foreground block mb-4">
            what we do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Building <span className="text-primary">growth</span>, one step at a time
          </h2>
        </motion.div>

        {/* Rotating Service Strip */}
        <div className="relative w-full max-w-4xl h-64 perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, rotateX: -45, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 45, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                {services[activeIndex].title}
              </h3>
              <div className="h-1 w-24 bg-primary mb-6 rounded-full" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {services[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="mt-12 flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Navigation hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/50">
          scroll to explore • {activeIndex + 1} / {services.length}
        </div>
      </div>
    </section>
  );
};

export default Services;
