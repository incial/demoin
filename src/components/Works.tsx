import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Work {
  title: string;
  category: string;
  year: string;
  hook?: string;
  story?: string[];
  results?: string[];
  offer?: string;
}

const works: Work[] = [
  { 
    title: "Funfee: Kids Park, Restocafé & Event Space", 
    category: "Social Media Growth",
    year: "2024",
    hook: "How do you turn a newly launched kids' park, restocafé, and event space into the most talked-about destination in town — with 18K followers in just three weeks? That's exactly what we achieved with Funfee Kanjirapally.",
    story: [
      "When Funfee approached us, it was a brand-new venture — a unique combination of a kids' park, restocafé, and event space located in Kanjirapally. The challenge? No one knew it yet. The goal was simple but ambitious: create buzz, curiosity, and a loyal local following — fast.",
      "We started from scratch:",
      "• Curiosity Campaigns – launched a series of teaser posters and trending reels designed to spark interest and conversation before the official reveal.",
      "• Introducing Funfee – once the curiosity peaked, we rolled out high-energy reels and posters showcasing what Funfee really is — a place for families, kids, and young crowds to unwind, play, and connect.",
      "• Targeted Growth Campaign – instead of chasing random numbers, we focused on building a local audience in Kanjirapally — the people most likely to visit Funfee.",
      "The turning point came when one viral reel brought in 16K followers, and within three weeks of launch, the page organically grew to 18K+ followers — all from the local community we aimed to reach."
    ],
    results: [
      "18K organic followers in just 3 weeks",
      "Built a strong, engaged local audience in Kanjirapally",
      "Created massive brand visibility and community buzz",
      "Established Funfee as the go-to family destination — combining fun, food, and events"
    ],
    offer: "At Incial, we don't just grow social media pages — we build movements. Whether you're launching a new venue, café, or experience, we'll create the curiosity, content, and community that turn your brand into a local sensation."
  },
  { 
    title: "Homescape: E-commerce Transformation", 
    category: "E-commerce & Branding",
    year: "2024",
    hook: "How do you take a traditional offline home décor seller and turn them into a premium online brand? For Homescape, we built their digital presence from scratch — and opened the doors to e-commerce success.",
    story: [
      "Homescape was a home décor brand with beautiful products — tablecloths, door hangers, premium bedsheets, curtains, cushion covers, and more. The challenge? All their sales were offline. Without an online presence, they were missing out on scale, convenience, and a wider customer base.",
      "Here's how we solved it:",
      "• E-commerce Transformation – we built a sleek, user-friendly Shopify website to bring their entire product range online.",
      "• Instagram Presence – we created and grew an Instagram page for Homescape, showcasing their products in a visually appealing and engaging way.",
      "• Strong Digital Identity – we gave Homescape not just an online store, but a brand story and identity that connected with modern, design-conscious customers."
    ],
    results: [
      "Homescape moved from being an offline-only seller to a full-fledged e-commerce brand",
      "Streamlined sales and inventory management through Shopify",
      "A strong social media presence that attracts, engages, and converts"
    ],
    offer: "At Incial, we specialize in turning offline businesses into thriving digital brands. If your products deserve a bigger audience, we'll build the platforms, presence, and strategies to get you there."
  },
  { 
    title: "DataLabs Corporation: AI Brand Identity", 
    category: "Brand Identity",
    year: "2024",
    hook: "What happens when an AI company is making big moves in the U.S. market — but doesn't have a brand identity to match its innovation? That's where Incial stepped in for DataLabs Corporation.",
    story: [
      "DataLabs Corporation, a U.S.-based AI company, was already established in the industry with strong partnerships and innovative solutions. But there was one gap: their branding didn't reflect their impact.",
      "They had no strong logo, no unified design language, and no clear story. In a space as competitive as AI, this meant they risked being overlooked despite their achievements.",
      "Here's how we transformed them:",
      "• Brand Identity Creation – we designed a modern, powerful logo and full visual identity system that speaks for the brand.",
      "• Brand Storytelling – we crafted a narrative that positioned DataLabs as not just an AI player, but a visionary in automation, partnerships, and enterprise solutions.",
      "• Naming & Design Language – we coined brand names, key messaging points, and built a design system that gave DataLabs a cohesive and recognizable presence."
    ],
    results: [
      "DataLabs secured high-value collaborations, including partnerships with BUD and automation ventures",
      "Their digital presence now reflects their global ambition",
      "Created a brand identity that speaks as strongly as their technology"
    ],
    offer: "At Incial, we don't just design logos — we build identities that open doors. If your brand is ready to scale but lacks a strong presence, we'll give you the story, design, and digital presence that set you apart."
  },
  { 
    title: "Livelong Wealth Pala: Financial Community Building", 
    category: "Wealth Management Marketing",
    year: "2024",
    hook: "How do you build awareness around wealth management and algo trading in a three-tier city — when you yourself are new to the financial world? That's the challenge we took on with Livelong Wealth Pala. The result? A community of engaged investors, a successful flagship event, and AUM that grew from ₹1.8 CR to ₹4 CR in just four months.",
    story: [
      "When Livelong Wealth Pala approached us, we were stepping into unfamiliar territory. Wealth management, algo trading, investments — none of it was our comfort zone. But that was the challenge we embraced.",
      "We faced two key hurdles:",
      "1. A new industry – understanding and translating complex financial concepts into content the local audience could relate to.",
      "2. A three-tier city – building awareness and trust for investing in a market that had limited exposure to structured wealth management.",
      "Here's how we solved it:",
      "• Educating first – we created posters, carousels, and reels designed to simplify financial concepts and educate the local audience.",
      "• Community building – together with Livelong Wealth, we organized TradersConnect Pala, their first-ever investor event. The response? Over 300 attendees — a full house of curious and motivated people.",
      "• Relatable content – we introduced finance-themed memes to build connection and break the barrier of 'finance is boring.'",
      "• Reels with impact – consistent reels around wealth management, algo trading, and financial awareness helped the brand feel both authoritative and approachable."
    ],
    results: [
      "Assets Under Management skyrocketed from ₹1.8 CR to ₹4 CR in just 4 months",
      "A strong investor community in Pala that's actively engaging with wealth management",
      "Livelong Wealth Pala is now seen as a trusted, modern wealth management partner"
    ],
    offer: "At Incial, we take on challenges outside our comfort zone — and turn them into growth stories. If your brand is in a complex industry, we'll make sure your message reaches, educates, and converts the right audience."
  },
  { 
    title: "InternHub: Student-Industry Platform", 
    category: "Web Development",
    year: "2023",
    hook: "How do you bridge the gap between bright students and real-world industry challenges? That's exactly what we achieved with InternHub — a digital platform we built for Amal Jyothi College of Engineering in partnership with Startups Valley TBI.",
    story: [
      "At Amal Jyothi College of Engineering, innovation isn't just a value — it's a pillar. The college constantly pushes students to go beyond textbooks and explore hands-on learning. However, there was a gap: students needed direct exposure to real industry problems and a platform that connects them with companies looking for fresh ideas.",
      "That's where InternHub was born.",
      "We conceptualized and built InternHub, a dedicated platform that acts as a bridge between students and industries.",
      "Here's how it works:",
      "• Industries can list their real-world problem statements and projects.",
      "• Students can browse these challenges, collaborate with peers, and build innovative solutions.",
      "• The result: students gain internship opportunities while industries get practical, fresh perspectives.",
      "Our team at Incial designed and developed the entire digital ecosystem — from UI/UX to development — ensuring it was simple, fast, and accessible for both students and companies."
    ],
    results: [
      "A fully functional platform that connects education with enterprise",
      "Dozens of students now exploring internships through real industry problem statements",
      "Strengthened Amal Jyothi's position as a hub of innovation and practical learning"
    ],
    offer: "At Incial, we build digital platforms that create real impact. Whether it's connecting students, empowering businesses, or enabling communities — we don't just create websites; we create ecosystems that work."
  },
  { 
    title: "Blaupunkt EV Website", 
    category: "Web Development",
    year: "2024",
    hook: "When one of the world's most recognized electronics brands — Blaupunkt — approached us to design their EV (Electric Vehicle) website, we knew we were stepping into something big. It was an honor, a challenge, and a milestone for Incial.",
    story: [
      "Blaupunkt, a legacy German electronics brand known globally for innovation and quality, was expanding its presence into the EV (Electric Vehicle) sector. Their goal was clear — create a digital experience that reflects Blaupunkt's heritage, innovation, and trust, while showcasing their EV lineup with modern precision.",
      "When Blaupunkt reached out to us, we were genuinely excited — and a little in awe. We knew the scale and reputation of the brand. Our challenge was to design and develop a dedicated EV website section that seamlessly matched Blaupunkt's existing brand identity while introducing a fresh, tech-forward digital experience.",
      "Here's what we did:",
      "• Aligned with Global Brand Guidelines – Ensured every design element followed Blaupunkt's signature look and feel, maintaining global consistency.",
      "• Developed the EV Website Section – Crafted a sleek, responsive, and future-focused interface to highlight their electric vehicle range and innovation.",
      "• Blended Tradition with Modernity – Balanced Blaupunkt's heritage with a futuristic design language suited for the EV market."
    ],
    results: [
      "A dedicated EV website that complements Blaupunkt's global ecosystem",
      "Consistent with their visual and brand identity across platforms",
      "A proud collaboration that added Incial's creative fingerprint to a global legacy brand"
    ],
    offer: "At Incial, we don't just build websites — we craft digital experiences that match the weight of the brands we work with. Whether you're a startup or a global name, we'll ensure your online presence reflects your vision, precision, and impact."
  },
];

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section 
        id="works" 
        className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
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
              selected work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Things we've <span className="text-primary">built</span>
            </h2>
          </motion.div>

          <div className="space-y-1">
            {works.map((work, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleWorkClick(work)}
                className="group relative py-6 border-b border-border/50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className="text-sm text-muted-foreground font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {work.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground hidden md:block">
                      {work.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {work.year}
                    </span>
                    <motion.span 
                      initial={{ x: 0 }}
                      animate={{ x: hoveredIndex === index ? 5 : 0 }}
                      className="text-primary"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Hover background */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 -mx-4 bg-secondary/50 rounded-lg -z-10"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="btn-outline">
              Download our work
            </button>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedWork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                  {selectedWork.title}
                </DialogTitle>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{selectedWork.category}</span>
                  <span>•</span>
                  <span>{selectedWork.year}</span>
                </div>
              </DialogHeader>
              
              <DialogDescription className="space-y-6 text-foreground">
                {/* Hook */}
                {selectedWork.hook && (
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-base md:text-lg font-medium italic">
                      {selectedWork.hook}
                    </p>
                  </div>
                )}

                {/* Story */}
                {selectedWork.story && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">The Story</h3>
                    {selectedWork.story.map((paragraph, idx) => (
                      <p key={idx} className="text-sm md:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Results */}
                {selectedWork.results && selectedWork.results.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">The Results</h3>
                    <ul className="space-y-2">
                      {selectedWork.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary text-xl">✓</span>
                          <span className="text-sm md:text-base">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Offer */}
                {selectedWork.offer && (
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm md:text-base leading-relaxed">
                      {selectedWork.offer}
                    </p>
                  </div>
                )}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Works;
