"use client";

import React, { useEffect, useState, useRef } from "react";
import "./pixelTrail.css";

interface Pixel {
  id: number;
  x: number;
  y: number;
  color: string;
}

const PixelTrail: React.FC = () => {
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    // const glowColors = ["#a7e8ff", "#c9f2ff", "#e8fcff"];
    const glowColors = [
      "var(--navbar-title)",
      "var(--navbar-action)",
      "var(--navbar-highlight)",
    ];

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameRef.current!);

      frameRef.current = requestAnimationFrame(() => {
        const newPixel: Pixel = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          color: glowColors[Math.floor(Math.random() * glowColors.length)],
        };

        setPixels((prev) => [...prev.slice(-50), newPixel]);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frameRef.current!);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className="pixles"
          style={{
            left: pixel.x,
            top: pixel.y,
            backgroundColor: pixel.color,
            boxShadow: `0 0 8px 4px ${pixel.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default PixelTrail;
