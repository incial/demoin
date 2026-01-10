import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl text-gray-500 block mb-8 font-bold tracking-wide font-handwriting"
        >
          Who we are
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          We're not an agency.
          <br />
          <span className="text-incial-blue">We're a community.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-background/80">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Incial started with a simple belief: great brands aren't built in boardrooms — 
              they're built by people who genuinely care about what they're creating.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We're a collective of designers, strategists, storytellers, and builders who 
              came together because we love making things that matter.
            </motion.p>
          </div>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-background/80">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              No corporate jargon. No stuffy meetings. Just honest conversations and meaningful work.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Whether you're a startup finding your voice or an established business ready 
              to evolve — we're here to grow with you, not just work for you.
            </motion.p>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, rotate: 0 }}
          animate={isVisible ? { opacity: 0.5, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-handwriting text-2xl text-muted mt-12"
        >
          still figuring things out — and that's okay
        </motion.p>
      </div>
    </section>
  );
};

export default About;
