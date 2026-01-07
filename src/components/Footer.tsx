import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-12 lg:px-24 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl font-bold">
              incial<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground"
          >
            <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-primary transition-colors duration-300">Services</a>
            <a href="#works" className="hover:text-primary transition-colors duration-300">Works</a>
            <a href="#team" className="hover:text-primary transition-colors duration-300">Team</a>
            <a href="#book" className="hover:text-primary transition-colors duration-300">Contact</a>
          </motion.nav>

          {/* Social */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Instagram
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Incial. All rights reserved.</p>
          <p className="font-handwriting text-lg opacity-60">
            thanks for staying ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
