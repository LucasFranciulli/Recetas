"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = "" }) => {
  return (
    <motion.div
      initial={{ scaleX: 0.5, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.15, 0.1, 0.15, 1] }}
      className="origin-center relative w-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <Input
        type="text"
        placeholder={placeholder}
        className="pl-12 pr-4 focus-visible:ring-0 "
      />
    </motion.div>
  );
};
