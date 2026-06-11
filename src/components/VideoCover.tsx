/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import presentacionVideo from '../../assets/presentacion.mp4';

export default function VideoCover() {
  const scrollToContent = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="video-cover"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-bg-dark"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src={presentacionVideo} type="video/mp4" />
      </video>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-[#2D4A2A]/20 z-10 pointer-events-none" />

      {/* Bouncing scroll indicator at bottom */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-cream/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-body font-semibold">
          Ver presentación
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 stroke-[1.5]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
