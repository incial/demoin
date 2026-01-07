import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showHandwriting, setShowHandwriting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHandwriting(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Floating accent shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          We build{" "}
          <span className="text-primary">brand</span>,{" "}
          <span className="text-primary">business</span>,{" "}
          <br className="hidden md:block" />
          and <span className="text-primary">beyond</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Incial is a place where brands grow — creatively and strategically.
        </motion.p>

        {/* Handwritten note */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ 
            opacity: showHandwriting ? 0.7 : 0, 
            scale: showHandwriting ? 1 : 0.9,
            rotate: showHandwriting ? -2 : -5
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 font-handwriting text-2xl md:text-3xl text-muted-foreground"
        >
          built by people who love building
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#services" 
            className="btn-primary text-base md:text-lg"
          >
            See what we do
          </a>
          <a 
            href="#book" 
            className="btn-outline text-base md:text-lg"
          >
            Book a conversation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
