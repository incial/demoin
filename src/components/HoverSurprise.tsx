import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverSurpriseProps {
  children: React.ReactNode;
  message: string;
  className?: string;
}

const HoverSurprise = ({ children, message, className = "" }: HoverSurpriseProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoverCount((prev) => prev + 1);
  };

  const messages = [
    message,
    "you're still here!",
    "persistent, aren't you?",
    "okay, we get it 😄",
    "last one, promise...",
    "jk, there's more",
  ];

  const currentMessage = messages[Math.min(hoverCount, messages.length - 1)];

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-50"
          >
            <div className="font-handwriting text-lg text-primary bg-background/95 px-4 py-2 rounded-lg border border-primary/20 shadow-lg">
              {currentMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverSurprise;
