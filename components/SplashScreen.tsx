// components/SplashScreen.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <motion.div
      // Fade out when removed
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black"
    >
      <motion.div
        // "Breathing" animation
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Replace with your Logo Image */}
        <Image src={"/favicon.ico"} className="" width={100} height={100} alt=""/>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;