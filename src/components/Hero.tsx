/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';
import ani1 from '../assets/ani1.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-bg flex items-center pt-24 pb-16 overflow-hidden select-none"
    >
      {/* Decorative Botanical Elements - CSS-only circles and ellipses for wellness branding */}
      <div className="absolute top-[20%] left-[8%] w-72 h-72 rounded-full bg-brand-bg-sage opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[12%] w-96 h-96 rounded-full bg-brand-cream opacity-60 blur-3xl pointer-events-none" />
      
      {/* Small design circle guidelines in sage line work */}
      <div className="absolute top-[35%] right-[45%] w-8 h-8 rounded-full border border-brand-sage/20 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] left-[5%] w-16 h-16 rounded-full border border-brand-accent/10 pointer-events-none" />
      <div className="absolute top-[12%] right-[5%] w-24 h-24 rounded-full border border-brand-sage/15 border-dashed pointer-events-none" />

      {/* Scattered botanical accent dots */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-brand-sage/30 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-3.5 h-3.5 rounded-full bg-brand-accent/20 pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] w-1.5 h-1.5 rounded-full bg-brand-sage-dark/25 pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            className="md:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#EDF2EC] text-[#3D6B38] border border-brand-sage/30 mb-6 shadow-sm font-body text-xs font-semibold tracking-wider uppercase"
            >
              <Leaf className="w-3 h-3" />
              Psicóloga en Córdoba Capital & Doula
            </div>

            {/* H1 Main Heading */}
            <h1
              id="hero-heading"
              className="font-display font-semibold italic text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-brand-text mb-6 tracking-wide"
            >
              Un espacio seguro para sanar, crecer y habitar tu vida con plenitud.
            </h1>

            {/* Body text */}
            <p
              id="hero-description"
              className="font-body font-light text-base sm:text-lg text-brand-text-muted mb-8 max-w-[520px] leading-relaxed"
            >
              Acompañamiento psicológico especializado en adicciones, consumo problemático y vínculos en <strong>Córdoba Capital</strong> (Barrio Don Bosco) y modalidad online.
            </p>

            {/* CTA Buttons */}
            <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-white bg-brand-sage-dark hover:bg-brand-bg-dark px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Solicitar Turno
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center justify-center text-xs font-semibold tracking-widest uppercase text-brand-text border border-brand-sage hover:bg-brand-bg-sage hover:text-brand-sage-dark px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
              >
                Conocé más
              </a>
            </div>
          </motion.div>

          {/* Right Image Placeholder Column */}
          <motion.div
            className="md:col-span-5 flex justify-center py-4 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Soft decorative shadow frame in background */}
            <div className="absolute -inset-1.5 bg-brand-sage/10 rounded-[202px_14px_14px_14px] blur-sm -z-10 transform -rotate-1 pointer-events-none" />

            <div className="w-[320px] xs:w-[350px] sm:w-[380px] md:w-[320px] lg:w-[380px]">
              <PlaceholderImage
                id="hero_profile"
                label="Lic. Ana Paris - Retrato"
                altText="Retrato profesional de la Lic. Ana Paris, psicóloga en Córdoba Capital egresada de la UNC"
                organicClass="organic-profile-shape"
                rotationClass=""
                aspectClass="aspect-[4/5.2]"
                defaultSrc={ani1}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
