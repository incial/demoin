import { useState, useEffect, useCallback } from "react";

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  trail: { x: number; y: number; id: number }[];
}

export const usePlayfulCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    trail: [],
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursor((prev) => {
      const newTrail = [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.trail.slice(0, 5),
      ];
      return {
        ...prev,
        x: e.clientX,
        y: e.clientY,
        trail: newTrail,
      };
    });
  }, []);

  const handleMouseDown = useCallback(() => {
    setCursor((prev) => ({ ...prev, isClicking: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setCursor((prev) => ({ ...prev, isClicking: false }));
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  return cursor;
};
