"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ArrowDownScroll = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    showArrow && (
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
        y: {
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
        opacity: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
        className="absolute bottom-10 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    )
  );
};
