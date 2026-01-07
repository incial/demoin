import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with Incial felt less like hiring an agency and more like gaining collaborators who genuinely cared about our vision.",
    author: "Sarah M.",
    role: "Founder, TechFlow"
  },
  {
    quote: "They didn't just deliver a brand — they helped us understand who we really are. That changed everything.",
    author: "Marcus K.",
    role: "CEO, GreenLeaf"
  },
  {
    quote: "The most refreshing part? No corporate speak. Just honest conversations and brilliant work.",
    author: "Priya R.",
    role: "Director, StartupHub"
  }
];

const Testimonials = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-muted-foreground block mb-4">
            kind words
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            What they <span className="text-primary">say</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 md:p-12 rounded-2xl bg-card border border-border/50"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">
                "
              </div>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-handwriting text-xl text-muted-foreground text-center mt-12"
        >
          feels like reading messages, not reviews
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;
