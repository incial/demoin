import { useState, useEffect, useRef } from "react";

export const useSlowScroll = (threshold: number = 50) => {
  const [isSlowScrolling, setIsSlowScrolling] = useState(false);
  const [slowScrollTime, setSlowScrollTime] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const slowScrollTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime.current;
      const scrollDiff = Math.abs(currentY - lastScrollY.current);

      // Calculate scroll speed (pixels per 100ms)
      const scrollSpeed = timeDiff > 0 ? (scrollDiff / timeDiff) * 100 : 0;

      if (scrollSpeed < threshold && scrollSpeed > 0) {
        setIsSlowScrolling(true);
        setSlowScrollTime((prev) => prev + timeDiff);

        if (slowScrollTimer.current) {
          clearTimeout(slowScrollTimer.current);
        }
        slowScrollTimer.current = setTimeout(() => {
          setIsSlowScrolling(false);
        }, 500);
      } else if (scrollSpeed === 0) {
        // Not scrolling
      } else {
        setIsSlowScrolling(false);
        setSlowScrollTime(0);
      }

      lastScrollY.current = currentY;
      lastScrollTime.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (slowScrollTimer.current) {
        clearTimeout(slowScrollTimer.current);
      }
    };
  }, [threshold]);

  return { isSlowScrolling, slowScrollTime };
};
