import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material"; // Import Box from MUI

const AnimatedText = () => {
  const phrases = ["Modern House", "Designing Homes"];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    exit: (i) => ({
      opacity: 0,
      x: -20,
      transition: {
        delay: i * 0.0,
        duration: 0.0,
        ease: "easeIn",
      },
    }),
  };

  const phraseAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0 } },
  };

  return (
    <Box
      sx={{
        display: "flex",
        fontSize: {
          xs: "1rem", // Font size for extra small devices
          sm: "1.5rem", // Font size for small devices
          md: "2rem", // Font size for medium devices
          lg: "2.5rem", // Font size for large devices
        },
        color: "black",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentPhrase}
          variants={phraseAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "flex" }}
        >
          {phrases[currentPhrase].split("").map((letter, index) =>
            letter === " " ? (
              <span key={`space-${index}`} style={{ width: "0.5rem" }}></span>
            ) : (
              <motion.span
                key={`${currentPhrase}-${index}`}
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
    </Box>
  );
};

export default AnimatedText;
