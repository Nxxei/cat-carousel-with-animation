import React from "react";
import { motion } from "motion/react";

const User = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0 )`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      //   i didnt understand this style at all
      className="bg-neutral-900  flex justify-center items-center h-screen"
    >
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 20,
        }}
        className="text-neutral-500 text-2xl border-2 px-8 py-4 bg-black border-black rounded-xl"
      >
        SUBSCRIBLE
      </motion.button>
    </div>
  );
};

export default User;
