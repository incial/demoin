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
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-black">
      {/* Forge head effect - bright glowing sphere at top */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/40 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-400/50 blur-2xl"
        animate={{ 
          scale: [1.1, 0.95, 1.1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-white/20 blur-xl"
        animate={{ 
          scale: [0.9, 1.05, 0.9],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle gradient background - mostly black with blue accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900/50" />
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(217 91% 60% / 0.15), transparent 60%)`,
          }}
        />
      </div>

      {/* Geometric accent elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-blue-500/30 rotate-45"
        style={{ x: useTransform(smoothMouseX, [-300, 300], [30, -30]), y: useTransform(smoothMouseY, [-300, 300], [30, -30]) }}
        animate={{ rotate: 45, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 0 }, scale: { duration: 6, repeat: Infinity } }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full border border-blue-400/20"
        style={{ x: useTransform(smoothMouseX, [-300, 300], [-20, 20]), y: useTransform(smoothMouseY, [-300, 300], [-20, 20]) }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/6 w-96 h-1 bg-gradient-to-r from-blue-500/50 to-transparent"
        style={{ x: useTransform(smoothMouseX, [-300, 300], [20, -20]) }}
      />

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
      >
        {/* Main heading - professional and clean */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-white mb-6" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            We build
          </h1>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="inline-block mx-2"
              >
                <motion.span
                  className="inline-block text-blue-400 cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 && (
                  <span className="text-white mx-1">•</span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          We build brands that lead, grow — strategically and endure.
        </motion.p>

        {/* CTA Buttons - professional style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-40 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a 
            href="#services" 
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Our Work
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a 
            href="#book" 
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Consultation
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stats section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-32 left-0 right-0 flex justify-center gap-16 md:gap-24 text-center"
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
            transition={{ delay: 1.2 + index * 0.1 }}
            className="group cursor-default"
          >
            <p className="text-3xl md:text-4xl font-bold text-blue-500" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-gray-400 mt-2 font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
