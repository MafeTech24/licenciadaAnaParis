/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Video } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';
import consultorioAni1 from '../../assets/consultorioAni1.png';
import ani2 from '../../assets/ani2.png';

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-brand-bg-sage border-y border-brand-sage/10 relative">
      {/* Decorative dots in background */}
      <div className="absolute top-[10%] left-[5%] w-1.5 h-1.5 rounded-full bg-brand-sage-dark/30 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-2.5 h-2.5 rounded-full bg-brand-accent/25 pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto px-6">
        
        {/* Gallery Title */}
        <div id="gallery-header" className="text-center max-w-xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest text-brand-sage-dark uppercase mb-3 block">
            Mi Consultorio
          </span>
          <h2 className="font-display font-medium text-4xl text-brand-text leading-tight mb-4">
            Un Refugio de Calma
          </h2>
          <p className="font-body font-light text-brand-text-muted text-sm sm:text-base leading-relaxed">
            Te invito a conocer el espacio físico y virtual diseñado exclusivamente para sostener tu proceso terapéutico.
          </p>
        </div>

        {/* Asymmetrical Grid of Photo Placeholders */}
        <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Large Left Photo Frame (7/12 cols) */}
          <motion.div
            className="md:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute -inset-1 bg-brand-accent/3 rounded-[12px_12px_12px_122px] blur-sm -rotate-1 pointer-events-none" />
              <PlaceholderImage
                id="gallery_large"
                label="Consultorio Principal"
                altText="Foto principal del consultorio de la Lic. Ana Paris en Córdoba, Argentina"
                organicClass="organic-gallery-shape-1"
                rotationClass="-rotate-1"
                aspectClass="aspect-[4/3] md:aspect-[5/4] lg:aspect-[6/5]"
                defaultSrc={consultorioAni1}
              />
            </div>
          </motion.div>

          {/* Two Stacked Right Photo Frames (5/12 cols) */}
          <div className="md:col-span-5 flex flex-col gap-8 justify-between">
            {/* Top Stacked Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="absolute -inset-1 bg-brand-sage/5 rounded-[122px_120px_12px_12px] blur-sm rotate-1 pointer-events-none" />
              <PlaceholderImage
                id="gallery_stacked_1"
                label="Acompañamiento Perinatal"
                altText="Detalle del consultorio, área de lactancia y Doula de Ana Paris"
                organicClass="organic-gallery-shape-2"
                rotationClass="rotate-1"
                aspectClass="aspect-[16/10] md:aspect-[3/2]"
                defaultSrc={ani2}
              />
            </motion.div>

            {/* Bottom Stacked Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-brand-accent/5 rounded-[12px_122px_12px_122px] blur-sm -rotate-1 pointer-events-none" />
              <PlaceholderImage
                id="gallery_stacked_2"
                label="Detalles y Libros"
                altText="Biblioteca y herramientas de fertilidad de la psicóloga"
                organicClass="organic-gallery-shape-3"
                rotationClass="-rotate-1"
                aspectClass="aspect-[16/10] md:aspect-[3/2]"
              />
            </motion.div>
          </div>
          
        </div>

        {/* Caption below with Icons */}
        <motion.div
          id="gallery-caption"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center text-sm md:text-base font-body font-light text-brand-text-muted mt-8 bg-brand-cream/80 border border-brand-sage/10 py-4 px-6 rounded-2xl w-fit mx-auto shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-sage/20 text-brand-sage-dark rounded-full">
              <MapPin className="w-4 h-4" />
            </span>
            <span>Consultorio presencial en Córdoba</span>
          </div>
          <span className="hidden sm:inline text-brand-sage/40 font-medium">|</span>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-accent/15 text-brand-accent rounded-full">
              <Video className="w-4 h-4" />
            </span>
            <span>Modalidad online disponible (Voz y Video)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
