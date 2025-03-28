import React from 'react'
import { motion } from "framer-motion";
export default function SliderContent({currentidx}) {
    const features = [
        {
          title: "All Your Information in One Place",
          description: "Simplify Management with a Unified Data Platform."
        },
        {
          title: "Access Anytime, Anywhere",
          description: "Empowering You with Data on Demand Across Devices."
        },
        {
          title: "Lower Costs, Higher Value",
          description: "Offering Premium Features at a Fraction of the Price."
        }
      ];

  return (
    <motion.div className="text-white text-center "   
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 }}>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{features[currentidx].title}</h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2">{features[currentidx].description}</p>
    </motion.div>
  )
}
