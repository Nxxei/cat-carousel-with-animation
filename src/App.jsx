import Try from "./Components/Try";
import CATS from "./Data/catData";
import { useState } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  const [showcat, setCat] = useState(0);
  return (
    <motion.div
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0 )`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="bg-neutral-900  flex flex-col justify-center items-center h-screen"
    >
      <motion.div
        whileHover={{
          rotateX: 20,
          rotateY: 20,
        }}
      >
        <Try cat={CATS[showcat]} />
      </motion.div>
      <div className="flex space-x-4">
        {showcat < CATS.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => setCat(showcat + 1)}
            className="mt-8 rounded-full p-4 px-10 bg-black text-white"
          >
            Next
          </motion.button>
        )}
        {showcat > 0 && (
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => setCat(showcat - 1)}
            className="mt-8 rounded-full p-4 px-10 bg-black text-white"
          >
            Previous
          </motion.button>
        )}
      </div>
      <Analytics />
    </motion.div>
  );
};

export default App;
