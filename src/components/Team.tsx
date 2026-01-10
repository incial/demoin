import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  { name: "Alex", trait: "likes building things", initials: "A", secretTrait: "also loves coffee ☕" },
  { name: "Jordan", trait: "obsessed with pixels", initials: "J", secretTrait: "secretly a gamer 🎮" },
  { name: "Sam", trait: "tells good stories", initials: "S", secretTrait: "has too many plants 🌱" },
  { name: "Riley", trait: "makes numbers fun", initials: "R", secretTrait: "terrible at cooking 🍳" },
  { name: "Taylor", trait: "sees the big picture", initials: "T", secretTrait: "midnight snacker 🌙" },
  { name: "Morgan", trait: "connects the dots", initials: "M", secretTrait: "cat person 🐱" },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickCounts, setClickCounts] = useState<Record<number, number>>({});

  const handleAvatarClick = (index: number) => {
    setClickCounts((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  return (
    <section 
      id="team" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-gray-500 block mb-4">
            the humans
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            People, not <span className="text-incial-blue">titles</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Avatar placeholder with click easter egg */}
              <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-4">
                <motion.button
                  onClick={() => handleAvatarClick(index)}
                  animate={{ 
                    rotate: (clickCounts[index] || 0) >= 3 ? [0, 10, -10, 0] : 0,
                    scale: hoveredIndex === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-full bg-incial-blue/20 flex items-center justify-center text-3xl md:text-4xl font-bold text-incial-blue transition-all duration-300 group-hover:bg-incial-blue group-hover:text-background cursor-pointer"
                >
                  {(clickCounts[index] || 0) >= 5 ? "😄" : member.initials}
                </motion.button>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-incial-blue/0 group-hover:bg-incial-blue/20 blur-xl transition-all duration-300 pointer-events-none" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
              <p className="font-handwriting text-lg md:text-xl text-muted opacity-70 transition-all duration-300">
                {hoveredIndex === index && (clickCounts[index] || 0) >= 3 
                  ? member.secretTrait 
                  : member.trait}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-handwriting text-xl text-muted text-center mt-12 rotate-[1deg]"
        >
          and many more who make things happen
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
