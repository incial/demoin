import { motion } from "framer-motion";
import { usePlayfulCursor } from "@/hooks/usePlayfulCursor";
import { useEffect, useState } from "react";

const PlayfulCursor = () => {
  const cursor = usePlayfulCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<{ x: number; y: number; id: number }[]>([]);

  // Only show custom cursor on desktop
  useEffect(() => {
    const checkDevice = () => {
      setIsVisible(window.innerWidth > 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Add sparkles on click
  useEffect(() => {
    if (cursor.isClicking) {
      const newSparkles = Array.from({ length: 6 }, (_, i) => ({
        x: cursor.x + (Math.random() - 0.5) * 40,
        y: cursor.y + (Math.random() - 0.5) * 40,
        id: Date.now() + i,
      }));
      setSparkles((prev) => [...prev, ...newSparkles]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id)));
      }, 600);
    }
  }, [cursor.isClicking, cursor.x, cursor.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-primary/20 blur-sm"
        animate={{
          x: cursor.x - 16,
          y: cursor.y - 16,
          scale: cursor.isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Cursor trail */}
      {cursor.trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            x: point.x - 4,
            y: point.y - 4,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.5, delay: index * 0.03 }}
        />
      ))}

      {/* Click sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary"
          initial={{ opacity: 1, scale: 1, x: sparkle.x, y: sparkle.y }}
          animate={{
            opacity: 0,
            scale: 0,
            x: sparkle.x + (Math.random() - 0.5) * 60,
            y: sparkle.y + (Math.random() - 0.5) * 60,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default PlayfulCursor;
