/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative bg-brand-bg-dark py-28 px-6 text-center text-white overflow-hidden"
    >
      {/* Decorative organic leaf pattern overlay on sides */}
      <div className="absolute top-0 right-0 w-80 h-full opacity-[0.03] select-none pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-cream" fill="currentColor">
          <path d="M100,0 C80,30, 40,50, 0,100" />
          <path d="M100,20 C85,45, 60,60, 20,100" />
        </svg>
      </div>

      {/* Giant Quotation Mark Behind Text (Absoluted & Centered) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-[0.06] select-none pointer-events-none z-0">
        <Quote className="w-80 h-80 text-[#FAF6EE]" strokeWidth={0.5} />
      </div>

      {/* Decorative guiding circles */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full border border-brand-sage/10 pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-48 h-48 rounded-full border border-brand-sage/10 pointer-events-none" />

      {/* Content Container */}
      <div className="w-full max-w-[800px] mx-auto relative z-10">
        <motion.div
          id="philosophy-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtle icon separator */}
          <div className="mb-8 p-3 bg-brand-sage-dark/30 rounded-full border border-brand-sage/20 text-brand-sage inline-flex items-center justify-center">
            <Quote className="w-5 h-5 flip-horizontal" />
          </div>

          {/* Section heading */}
          <span className="font-body text-xs font-semibold tracking-widest text-brand-sage uppercase mb-5 block">
            Mi Enfoque Terapéutico
          </span>

          {/* Core Quote Block */}
          <blockquote>
            <p className="font-display font-light italic text-2xl sm:text-3xl lg:text-[36px] leading-[1.4] text-[#FAF6EE] tracking-wide mb-8">
              "Un espacio seguro donde el dolor se procesa, los bloqueos se resuelven y los vínculos se
              sanan para dar paso a una vida libre, consciente y plena."
            </p>
            <footer className="flex flex-col items-center">
              <span className="w-6 h-[1px] bg-brand-sage/40 mb-3" />
              <cite className="font-body font-light text-base text-[#FAF6EE]/80 not-italic tracking-[0.1em] uppercase">
                Lic. Ana Paris
              </cite>
              <span className="text-xs font-body text-brand-sage tracking-wider mt-1.5 uppercase font-medium">
                Psicóloga Clínico & Doula (UNC)
              </span>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
