import React from "react";
import { motion } from "framer-motion";

const ToggleBtn = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {/* Menu */}

      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <rect width="23" height="23" fill="none" />
        <motion.line
          stroke="black"
          stroke-linecap="round"
          variants={{
            closed: {
              x1: "1.5",
              y1: "1.5",
              x2: "26.5",
              y2: "1.5",
              strokeWidth: "3",
            },
            open: {
              x1: "1.5",
              y1: "17.5",
              x2: "26.5",
              y2: "0.5",
              strokeWidth: "3",
            },
          }}
        />
        <motion.line
          x1="1.5"
          y1="8.5"
          x2="26.5"
          y2="8.5"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, strokeWidth: "3" },
            open: { opacity: 0 },
          }}
        />
        <motion.line
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
          variants={{
            closed: {
              x1: "1.5",
              y1: "15.5",
              x2: "26.5",
              y2: "15.5",
              strokeWidth: "3",
            },
            open: {
              x1: "1.5",
              y1: "2.5",
              x2: "26.5",
              y2: "19.5",
              strokeWidth: "3",
            },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleBtn;
