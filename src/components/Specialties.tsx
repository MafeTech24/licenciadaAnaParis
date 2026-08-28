/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Baby, Unlock } from 'lucide-react';
import Philosophy from './Philosophy';

export default function Specialties() {
  const cards = [
    {
      id: 'clinica',
      icon: Heart,
      title: 'Psicología Clínica',
      desc: 'Acompañamiento en vínculos tóxicos, adicciones y codependencia. Gestión de emociones, transitando menopausia, abordaje en trastornos de ansiedad, duelos y separaciones vinculares.',
      badge: 'PROCESO INDIVIDUAL DE ADULTOS',
    },
    {
      id: 'perinatal',
      icon: Baby,
      title: 'Acompañamiento Perinatal',
      desc: 'Sostén emocional en el parto, puerperio y lactancia.',
      badge: 'GESTACIÓN, NACIMIENTO Y CRIANZA',
    },
    {
      id: 'dependientes',
      icon: Unlock,
      title: 'Relaciones Dependientes',
      desc: 'Herramientas y acompañamiento para superar la codependencia, sanar patrones vinculares y fortalecer tu autoestima.',
      badge: 'PROGRAMA PARA SALIR DE RELACIONES DEPENDIENTES',
    },
  ];

  return (
    <section
      id="especialidades"
      className="relative py-24 bg-brand-bg paper-texture overflow-hidden"
    >
      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div id="specialties-header" className="text-center max-w-xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            Especialidades Clínicas
          </span>
          <h2 className="font-display font-medium text-4xl text-brand-text leading-tight mb-4">
            Áreas de Acompañamiento
          </h2>
          <div className="w-12 h-1 bg-brand-sage/40 mx-auto rounded" />
        </div>

        {/* 3-Card Responsive Grid */}
        <div id="specialties-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                id={`card-${card.id}`}
                className="bg-[#FAF6EE] border border-[#C8DCC4] rounded-[16px] p-8 flex flex-col justify-between items-start text-left transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1.5 hover:border-brand-sage-dark group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              >
                <div>
                  {/* Sage-tinted Icon Area */}
                  <div className="w-12 h-12 bg-[#EDF2EC] rounded-full flex items-center justify-center border border-brand-sage/20 text-brand-sage-dark mb-6 group-hover:bg-brand-sage-dark group-hover:text-brand-cream group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Card category badge */}
                  <span className="block text-[10px] tracking-[0.14em] font-semibold text-brand-accent font-body mb-2 uppercase">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-2xl text-brand-text mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body font-light text-brand-text-muted leading-relaxed text-sm lg:text-base">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle dynamic leaf design accent line at bottom */}
                <div className="w-0 group-hover:w-1/3 h-[1.5px] bg-brand-accent mt-8 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Philosophy content directly at the end of specialties */}
      <div className="mt-20">
        <Philosophy />
      </div>
    </section>
  );
}
