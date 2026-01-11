import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showHandwriting, setShowHandwriting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHandwriting(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-background relative">
      {/* Main Content */}
      <div className="max-w-6xl">
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground leading-[0.95]"
        >
          We build
          <br />
          <span className="text-primary">brand</span>,{" "}
          <span className="text-primary">business</span>,
          <br />
          and <span className="text-primary">beyond</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 md:mt-10 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed"
        >
          Incial is a place where brands grow — creatively and strategically.
        </motion.p>

        {/* Handwritten note */}
        <motion.p 
          initial={{ opacity: 0, rotate: -3 }}
          animate={{ 
            opacity: showHandwriting ? 0.7 : 0, 
            rotate: -3 
          }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-handwriting text-xl md:text-2xl lg:text-3xl text-muted-foreground"
        >
          built by people who love building
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-wrap gap-4"
        >
          <a 
            href="#services" 
            className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-medium text-base md:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.4)]"
          >
            See what we do
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a 
            href="#book" 
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 border-2 border-foreground text-foreground rounded-full font-medium text-base md:text-lg transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Book a conversation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-24"
      >
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3"
        >
          <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
            <motion.div 
              className="w-1 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <span className="text-xs text-muted-foreground/50 font-handwriting">keep scrolling</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
