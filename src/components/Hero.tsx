import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const [showHandwriting, setShowHandwriting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(smoothMouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-2, 2]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHandwriting(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const words = ["brand", "business", "beyond"];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(217 91% 60% / 0.15), transparent 40%)`,
          }}
        />
      </div>
      
      {/* Floating accent shapes with parallax */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        style={{ x: useTransform(smoothMouseX, [-300, 300], [20, -20]), y: useTransform(smoothMouseY, [-300, 300], [20, -20]) }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-56 h-56 rounded-full bg-primary/15 blur-2xl"
        style={{ x: useTransform(smoothMouseX, [-300, 300], [-15, 15]), y: useTransform(smoothMouseY, [-300, 300], [-15, 15]) }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-xl"
        style={{ x: useTransform(smoothMouseX, [-300, 300], [30, -30]), y: useTransform(smoothMouseY, [-300, 300], [30, -30]) }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
      >
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Creative Studio
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="block">We build</span>
          <span className="block mt-2">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="inline-block"
              >
                <motion.span
                  className="text-primary inline-block cursor-default"
                  whileHover={{ 
                    scale: 1.05, 
                    textShadow: "0 0 30px hsl(217 91% 60% / 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 && (
                  <span className="text-muted-foreground mx-1 md:mx-2">{index === words.length - 2 ? " &" : ","}</span>
                )}
              </motion.span>
            ))}
            <span className="text-primary">.</span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          A place where brands grow — creatively and strategically.
        </motion.p>

        {/* Handwritten note with floating animation */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: showHandwriting ? 0.7 : 0, 
            scale: showHandwriting ? 1 : 0.9,
            y: showHandwriting ? [0, -5, 0] : 0,
          }}
          transition={{ 
            opacity: { duration: 0.6 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mt-6 font-handwriting text-2xl md:text-3xl text-muted-foreground rotate-[-2deg]"
        >
          built by people who love building
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="#services" 
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              See what we do
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
          <motion.a 
            href="#book" 
            className="group px-8 py-4 border-2 border-foreground text-foreground rounded-full font-medium relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              Book a conversation
            </span>
            <motion.div 
              className="absolute inset-0 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stats or trust indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-32 left-0 right-0 flex justify-center gap-8 md:gap-16 text-center"
      >
        {[
          { value: "50+", label: "Projects" },
          { value: "3+", label: "Years" },
          { value: "100%", label: "Passion" },
        ].map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            className="group cursor-default"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/50 font-handwriting">scroll down</span>
          <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
