import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  { year: "2019", text: "the idea began", note: "started with an idea" },
  { year: "2020", text: "first brand helped", note: "things started clicking" },
  { year: "2021", text: "team grew to 5", note: "more builders joined" },
  { year: "2022", text: "50+ brands transformed", note: "momentum building" },
  { year: "2023", text: "crossed borders", note: "global connections" },
  { year: "2024", text: "community of 20+", note: "still growing" },
  { year: "now", text: "still building", note: "keep scrolling" },
];

const Milestones = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="milestones" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-muted-foreground block mb-4">
            our journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Milestones that <span className="text-primary">matter</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                data-index={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={visibleItems.includes(index) ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-[0_0_20px_hsl(217_91%_60%_/_0.5)]"
                />

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={visibleItems.includes(index) ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <span className="text-primary font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2">{milestone.text}</h3>
                  <p className="font-handwriting text-xl text-muted-foreground mt-2 opacity-70">
                    {milestone.note}
                  </p>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
