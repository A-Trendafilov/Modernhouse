import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedText = () => {
  const phrases = ["Modern House", "Designing Homes"]; // Adjusted phrases for variety
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 6000); // Change phrase every 6 seconds to allow time for animation
    return () => clearInterval(interval);
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, x: 50 }, // Start from right
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Increased delay for more gradual letter appearance
        duration: 0.6, // Duration for letter appearance
        ease: "easeOut",
      },
    }),
    exit: (i) => ({
      opacity: 0,
      x: -20, // Exit to the left
      transition: {
        delay: i * 0.0, // Slightly faster exit delay for a smoother exit
        duration: 0.0, // Increased duration for smoother exit
        ease: "easeIn",
      },
    }),
  };

  const phraseAnimation = {
    hidden: { opacity: 0 }, // Entire phrase hidden
    visible: { opacity: 1 }, // Entire phrase visible
    exit: { opacity: 0, transition: { duration: 0 } }, // Fade out for entire phrase
  };

  return (
    <div style={{ display: "flex", fontSize: "1.5rem", color: "black" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentPhrase}
          variants={phraseAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "flex" }} // Ensure the entire phrase is displayed as a flex container
        >
          {phrases[currentPhrase].split("").map((letter, index) =>
            letter === " " ? (
              <span key={`space-${index}`} style={{ width: "0.5rem" }}></span> // Handle space with a unique key
            ) : (
              <motion.span
                key={`${currentPhrase}-${index}`} // Unique key for each letter
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
