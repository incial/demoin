import { motion } from "framer-motion";

const BookConversation = () => {
  return (
    <section 
      id="book" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-handwriting text-2xl text-muted block mb-4"
        >
          ready?
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
        >
          Have something in mind?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-background/70 mb-12 max-w-xl mx-auto"
        >
          Let's have a conversation. No pressure, no pitch — just an honest chat about what you're building.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="mailto:hello@incial.com" 
            className="inline-block bg-incial-blue text-background px-10 py-5 rounded-full text-lg md:text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(217_91%_60%_/_0.5)]"
          >
            Let's talk
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-handwriting text-xl text-muted mt-12"
        >
          we usually reply within a day
        </motion.p>
      </div>
    </section>
  );
};

export default BookConversation;
