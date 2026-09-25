"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export function TypewriterText({ text, delay = 0 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const startTyping = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed
      
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-6 bg-accent align-middle ml-1"
      />
    </span>
  );
}
