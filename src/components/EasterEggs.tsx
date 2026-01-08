import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSlowScroll } from "@/hooks/useSlowScroll";

const hiddenMessages = [
  "nice, you're curious 👀",
  "slow down, enjoy the view",
  "still here? we like you",
  "hidden things are the best",
  "you found a secret ✨",
  "patience is a virtue",
  "explorer vibes 🌟",
  "keep looking...",
];

const EasterEggs = () => {
  const { isSlowScrolling, slowScrollTime } = useSlowScroll(30);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [showKonamiReward, setShowKonamiReward] = useState(false);

  // Konami code: up up down down left right left right b a
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
  ];

  // Slow scroll easter egg
  useEffect(() => {
    if (isSlowScrolling && slowScrollTime > 2000) {
      setCurrentMessage(hiddenMessages[messageIndex % hiddenMessages.length]);
      setShowMessage(true);
      setMessageIndex((prev) => prev + 1);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [slowScrollTime > 2000 && isSlowScrolling, messageIndex, isSlowScrolling, slowScrollTime]);

  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiProgress]) {
        setKonamiProgress((prev) => prev + 1);

        if (konamiProgress + 1 === konamiCode.length) {
          setShowKonamiReward(true);
          setKonamiProgress(0);
          setTimeout(() => setShowKonamiReward(false), 5000);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiProgress]);

  return (
    <>
      {/* Slow scroll message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 pointer-events-none"
          >
            <div className="font-handwriting text-2xl md:text-3xl text-primary/80 bg-background/90 px-6 py-3 rounded-full backdrop-blur-sm border border-primary/20">
              {currentMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami code reward */}
      <AnimatePresence>
        {showKonamiReward && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-8xl mb-4"
              >
                🎉
              </motion.div>
              <p className="font-handwriting text-4xl text-primary">
                you found the secret code!
              </p>
              <p className="text-muted-foreground mt-2">
                (you're officially cool)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggs;
