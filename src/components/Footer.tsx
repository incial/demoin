import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [heartClicks, setHeartClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleHeartClick = () => {
    setHeartClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 3000);
        return 0;
      }
      return next;
    });
  };

  return (
    <footer className="py-12 md:py-16 px-6 md:px-12 lg:px-24 border-t border-border/30 relative">
      {/* Secret message */}
      {showSecret && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 font-handwriting text-xl text-primary"
        >
          you're amazing! thanks for the love 💙
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo with hover effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <span className="text-2xl font-bold transition-all duration-300 group-hover:tracking-wider">
              incial<span className="text-primary group-hover:animate-pulse">.</span>
            </span>
          </motion.div>

          {/* Navigation with playful hovers */}
          <motion.nav 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground"
          >
            {["About", "Services", "Works", "Team", "Contact"].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} Incial. Made with 
            <button 
              onClick={handleHeartClick}
              className="text-primary hover:scale-125 transition-transform duration-200 cursor-pointer"
            >
              ♥
            </button>
          </p>
          <p className="font-handwriting text-lg opacity-60 hover:opacity-100 transition-opacity cursor-default">
            thanks for staying ✨
          </p>
        </motion.div>

        {/* Hidden message at very bottom */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500 cursor-default">
            psst... you scrolled all the way down. we appreciate you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
