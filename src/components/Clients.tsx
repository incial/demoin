import { motion } from "framer-motion";

const clients = [
  "TechFlow", "StartupHub", "GreenLeaf", "PixelPerfect", 
  "CloudNine", "BrightIdea", "FutureScale", "DataDriven"
];

const Clients = () => {
  return (
    <section 
      id="clients" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-muted-foreground block mb-4">
            trusted by
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            People who believe in <span className="text-primary">growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div 
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex items-center justify-center p-6 md:p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/50"
            >
              <span className="text-lg md:text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-handwriting text-xl text-muted-foreground text-center mt-12"
        >
          and counting
        </motion.p>
      </div>
    </section>
  );
};

export default Clients;
