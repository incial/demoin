import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showHandwriting, setShowHandwriting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHandwriting(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 19308b3888556540f6b2a22611b4d18de69e28e4
        >
          <a 
            href="#services" 
<<<<<<< HEAD
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
=======
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
>>>>>>> 19308b3888556540f6b2a22611b4d18de69e28e4
      </motion.div>
    </section>
  );
};

export default Hero;
