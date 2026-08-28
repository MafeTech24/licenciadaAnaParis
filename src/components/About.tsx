/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Heart } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';
import ani2 from '../assets/ani2.png';

export default function About() {
  const credentials = [
    { label: 'Lic. en Psicología — UNC', desc: 'Universidad Nacional de Córdoba', icon: BookOpen },
    { label: 'Doula certificada', desc: 'Acompañamiento en embarazo, parto y posparto', icon: Heart },
    { label: 'Especialista en adicciones y vínculos', desc: 'Enfoque clínico en codependencia y apegos', icon: Award },
  ];

  return (
    <section
      id="sobre-mi"
      className="relative py-24 bg-brand-bg-sage border-y border-brand-sage/10 overflow-hidden"
    >
      <div className="w-full max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Organic & Slightly Rotated Photo Frame */}
          <motion.div
            className="md:col-span-5 flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-[280px] xs:w-[320px] md:w-[280px] lg:w-[340px] relative">
              {/* Soft rot-2 background shape to offset photo rotation */}
              <div className="absolute inset-0 bg-brand-accent/5 rounded-[12px_120px_12px_12px] transform rotate-1 pointer-events-none scale-102" />
              
              <PlaceholderImage
                id="about_profile_v2"
                label="Foto de Ana - Consultorio"
                altText="Lic. Ana Paris en su consultorio de psicología clínica en Barrio Don Bosco, Córdoba Capital"
                organicClass="organic-about-shape"
                rotationClass="-rotate-2"
                aspectClass="aspect-[4/5]"
                defaultSrc={ani2}
              />
            </div>
          </motion.div>

          {/* Right Column - Title & Narrative */}
          <motion.div
            className="md:col-span-7 flex flex-col items-start text-left order-1 md:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Small Badge */}
            <span className="font-body text-xs font-semibold tracking-widest text-brand-sage-dark uppercase mb-3 block">
              Psicóloga & Doula — Universidad Nacional de Córdoba (UNC)
            </span>

            {/* Main Title */}
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-bg-dark leading-tight mb-6">
              Sobre mí
            </h2>

            {/* Narrative text block & E-E-A-T */}
            <div id="about-bio-summary" className="space-y-4 font-body font-light text-brand-text/90 leading-relaxed text-sm sm:text-base">
              <p>
                Mi vocación nació de un legado familiar: hija de una médica psiquiatra y un abogado que fundaron la{' '}
                <strong className="font-semibold text-brand-sage-dark">
                  Fundación por un Mundo Mejor
                </strong>
                {' '}en Córdoba, crecí comprendiendo de cerca las adicciones, el dolor vincular y la resiliencia humana.
              </p>
              <p>
                Me gradué como <strong className="font-medium">Licenciada en Psicología</strong> en la{' '}
                <strong className="font-medium">Universidad Nacional de Córdoba (UNC)</strong> y me formé además como{' '}
                <strong className="font-medium">Doula</strong>, lo que me permite acompañar el bienestar desde la psicología clínica hasta el mundo perinatal: el parto, el puerperio y el deseo de concebir.
              </p>
              <p>
                Mi práctica clínica se centra en vínculos tóxicos, adicciones y codependencia. Trabajo con un enfoque empático y directivo para ayudar a familiares a recuperar la autoestima, establecer límites firmes y construir apegos seguros sin perder la propia identidad.
              </p>
            </div>

            {/* Local GEO & AEO Intent Paragraph */}
            <div id="geo-local-summary" className="mt-6 p-4.5 rounded-[12px] bg-brand-cream/80 border border-brand-sage/20 text-xs sm:text-sm font-body font-light text-brand-text/95 leading-relaxed">
              <p>
                <strong className="font-semibold text-brand-bg-dark">Atención Psicológica en Córdoba Capital:</strong> Brindo consultas presenciales en mi consultorio de <strong>Barrio Don Bosco</strong> (Natania 19, Manzana 7, Casa 14), con fácil acceso desde barrios del noroeste y centro de Córdoba, además de atención virtual por videollamada para Personas de toda Argentina y el exterior.
              </p>
            </div>

            {/* Credential Pills Section */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="group relative inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-brand-cream border border-brand-sage/20 shadow-sm hover:border-brand-sage-dark hover:scale-[1.02] transition-all duration-300 select-none cursor-help"
                >
                  <cred.icon className="w-4 h-4 text-brand-sage-dark group-hover:text-brand-accent transition-colors duration-300" />
                  <span className="text-xs font-medium tracking-wide text-brand-bg-dark font-body">
                    {cred.label}
                  </span>
                  
                  {/* Elegant floating description tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-brand-bg-dark text-brand-cream rounded-md shadow-md text-[10px] text-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30 leading-snug">
                    {cred.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
