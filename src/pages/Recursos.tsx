/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FileText, 
  Volume2, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag, 
  Sparkles,
  ArrowRight,
  Book
} from 'lucide-react';
import portadaImg from '../../assets/portada.jpg';
import portadaGuiaPractica from '../../assets/portadaGuiaPractica.png';
import portadaMindfulness from '../../assets/portadaMindfulness.png';

export default function Recursos() {
  const [indexOpen, setIndexOpen] = useState(false);

  // Ensure scroll is at the top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const ebookIndex = [
    'Introducción: Esto también te está pasando a vos',
    'Cap. 1: Cómo la adicción empieza a vivir en toda la familia',
    'Cap. 2: Cuando ayudar se convierte en sostener el problema',
    'Cap. 3: El punto de quiebre — cuándo y cómo intervenir',
    'Cap. 4: Comunicarte sin culpa, miedo ni ataques',
    'Cap. 5: Acompañar sin desaparecer — cómo cuidarte en medio del caos',
  ];

  const mindfulnessTechniques = [
    'Técnica de anclaje 5-4-3-2-1 para la crisis aguda',
    'Práctica de la Pausa Sagrada',
    'Autocompasión Radical — método RAIN',
    'La técnica de La Montaña para la estabilidad',
    'Escaneo Corporal de Tensión y Suelte',
    'Visualización del Observador en la Orilla',
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen text-brand-text select-none relative">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[12%] right-[5%] w-72 h-72 rounded-full bg-brand-bg-sage opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[25%] left-[5%] w-80 h-80 rounded-full bg-brand-cream opacity-55 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            Recursos
          </span>
          <h1 className="font-display font-semibold italic text-4xl sm:text-[44px] leading-tight text-brand-text mb-6">
            Herramientas y Materiales
          </h1>
          <p className="font-body font-light text-brand-text-muted text-base sm:text-lg leading-relaxed">
            Herramientas concretas para acompañar sin perderte en el intento. Materiales creados desde la práctica clínica, para que tengas claridad cuando más la necesitás.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* PRODUCTO 1 — E-BOOK */}
          <motion.div
            className="md:col-span-6 lg:col-span-3 bg-[#FAF6EE] rounded-[16px] border border-brand-sage/20 shadow-sm overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div>
              {/* Cover Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg-sage/40 flex items-center justify-center border-b border-brand-sage/10 p-6">
                <img 
                  src={portadaImg} 
                  alt="Portada del E-book: Intervención familiar en adicciones" 
                  className="h-full object-contain rounded shadow-md transform hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Header */}
              <div className="p-6 pb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EDF2EC] text-[#3D6B38] border border-brand-sage/20 text-[10px] font-semibold uppercase tracking-wider mb-3">
                  📘 E-Book
                </span>
                <h2 className="font-display font-semibold text-xl text-brand-bg-dark leading-snug mb-1">
                  Intervención familiar en adicciones
                </h2>
                <h3 className="text-xs font-body font-medium text-brand-accent mb-1">
                  Cómo dejar de sostener el caos sin perderte en el intento
                </h3>
                <span className="text-[10px] text-brand-text-muted/80 uppercase font-semibold tracking-wider font-body block mb-3">
                  Por { 'Lic. Ana Cristina Paris' }
                </span>
                <p className="text-xs font-body font-light text-brand-text-muted leading-relaxed">
                  Una guía de 5 capítulos para familiares que acompañan situaciones de consumo problemático. Desde entender cómo la adicción impacta en toda la familia, hasta aprender a comunicarse sin culpa, poner límites reales y cuidarse en el proceso. No hay fórmulas mágicas — hay claridad.
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              {/* Collapsible Index Accordion */}
              <div className="mb-4">
                <button
                  onClick={() => setIndexOpen(!indexOpen)}
                  className="flex items-center justify-between w-full py-2 text-xs font-semibold text-brand-sage-dark hover:text-brand-bg-dark transition-colors border-t border-b border-brand-sage/10 focus:outline-none cursor-pointer"
                >
                  <span>{indexOpen ? 'Ocultar índice completo' : 'Ver índice completo'}</span>
                  {indexOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                <AnimatePresence>
                  {indexOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="py-2.5 space-y-2 text-[11px] font-body font-light text-brand-text/90">
                        {ebookIndex.map((chapter, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                            <span>{chapter}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <a
                href="PLACEHOLDER_HOTMART_EBOOK"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Adquirir
              </a>
            </div>
          </motion.div>

          {/* PRODUCTO 2 — GUÍA PRÁCTICA */}
          <motion.div
            className="md:col-span-6 lg:col-span-3 bg-[#FAF6EE] rounded-[16px] border border-brand-sage/20 shadow-sm overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div>
              {/* Cover Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg-sage/40 flex items-center justify-center border-b border-brand-sage/10 p-6">
                <img 
                  src={portadaGuiaPractica} 
                  alt="Portada de la Guía Práctica: Respuestas y acciones en adicciones" 
                  className="h-full object-contain rounded shadow-md transform hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Header */}
              <div className="p-6 pb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-cream text-brand-accent border border-brand-accent/20 text-[10px] font-semibold uppercase tracking-wider mb-3">
                  📋 Guía Práctica
                </span>
                <h2 className="font-display font-semibold text-xl text-brand-bg-dark leading-snug mb-1">
                  Guía práctica de respuestas y acciones en adicciones
                </h2>
                <h3 className="text-xs font-body font-medium text-brand-accent mb-1">
                  Intervenir desde el amor sin sostener la adicción
                </h3>
                <span className="text-[10px] text-brand-text-muted/80 uppercase font-semibold tracking-wider font-body block mb-3">
                  Por { 'Lic. Ana Cristina Paris' }
                </span>
                <p className="text-xs font-body font-light text-brand-text-muted leading-relaxed">
                  Una guía de acción inmediata para saber exactamente qué decir y qué hacer en los momentos más difíciles. Frases manipuladoras, extorsiones, chantajes, presiones — con respuestas concretas y claves emocionales para cada situación.
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* CTA Button */}
              <a
                href="PLACEHOLDER_HOTMART_GUIA"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Adquirir
              </a>
            </div>
          </motion.div>

          {/* PRODUCTO 3 — AUDIOLIBRO */}
          <motion.div
            className="md:col-span-6 lg:col-span-3 bg-[#FAF6EE] rounded-[16px] border border-brand-sage/20 shadow-sm overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div>
              {/* Cover Image Wrapper with Headphone overlay icon */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg-sage/40 flex items-center justify-center border-b border-brand-sage/10 p-6">
                <div className="relative h-full">
                  <img 
                    src={portadaImg} 
                    alt="Portada del Audiolibro: Intervención familiar en adicciones" 
                    className="h-full object-contain rounded shadow-md transform hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle headphone badge in corner of image */}
                  <span className="absolute bottom-2 right-2 p-1.5 bg-brand-accent/90 text-white rounded-full shadow">
                    <Volume2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Header */}
              <div className="p-6 pb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EDF2EC] text-[#3D6B38] border border-brand-sage/20 text-[10px] font-semibold uppercase tracking-wider mb-3">
                  🎧 Audiolibro
                </span>
                <h2 className="font-display font-semibold text-xl text-brand-bg-dark leading-snug mb-1">
                  Intervención familiar en adicciones
                </h2>
                <h3 className="text-xs font-body font-medium text-brand-accent mb-1">
                  Versión audio — escuchá el libro completo
                </h3>
                <span className="text-[10px] text-brand-text-muted/80 uppercase font-semibold tracking-wider font-body block mb-3">
                  Por { 'Lic. Ana Cristina Paris' }
                </span>
                <p className="text-xs font-body font-light text-brand-text-muted leading-relaxed">
                  El contenido completo del e-book en formato audio. Para escucharlo en el auto, mientras caminás o en cualquier momento que necesites acompañamiento sin tener que leer.
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* CTA Button */}
              <a
                href="PLACEHOLDER_HOTMART_AUDIO"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Adquirir
              </a>
            </div>
          </motion.div>

          {/* PRODUCTO 4 — GUÍA MINDFULNESS */}
          <motion.div
            className="md:col-span-6 lg:col-span-3 bg-[#FAF6EE] rounded-[16px] border border-brand-sage/20 shadow-sm overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div>
              {/* Cover Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg-sage/40 flex items-center justify-center border-b border-brand-sage/10 p-6">
                <img 
                  src={portadaMindfulness} 
                  alt="Portada de la Guía de Mindfulness: Mindfulness para superar el bloqueo y la extorsión" 
                  className="h-full object-contain rounded shadow-md transform hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Header */}
              <div className="p-6 pb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-cream text-brand-accent border border-brand-accent/20 text-[10px] font-semibold uppercase tracking-wider mb-3">
                  🧘 Guía de Mindfulness
                </span>
                <h2 className="font-display font-semibold text-xl text-brand-bg-dark leading-snug mb-1">
                  Mindfulness para superar el bloqueo y la extorsión
                </h2>
                <h3 className="text-xs font-body font-medium text-brand-accent mb-1">
                  Herramientas de regulación emocional para familiares en situaciones de consumo problemático
                </h3>
                <span className="text-[10px] text-brand-text-muted/80 uppercase font-semibold tracking-wider font-body block mb-3">
                  Por { 'Lic. Ana Cristina Paris' }
                </span>
                <p className="text-xs font-body font-light text-brand-text-muted leading-relaxed mb-4">
                  No se trata de relajarte — se trata de desacoplar la reacción emocional automática para que puedas tomar decisiones desde la seguridad y no desde el pánico. Técnicas concretas para los momentos más difíciles: la crisis aguda, la extorsión, el miedo que paraliza.
                </p>

                {/* Techniques list */}
                <div className="border-t border-brand-sage/10 pt-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-accent block mb-2">
                    Técnicas incluidas
                  </span>
                  <ul className="space-y-1.5 text-[11px] font-body font-light text-brand-text/90">
                    {mindfulnessTechniques.map((tech, idx) => (
                      <li key={idx} className="flex gap-2 items-start leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-sage mt-1.5 shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* CTA Button */}
              <a
                href="PLACEHOLDER_HOTMART_MINDFULNESS"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Adquirir
              </a>
            </div>
          </motion.div>

        </div>

        {/* SECCIÓN PACK COMPLETO */}
        <motion.div
          className="bg-brand-bg-dark text-brand-cream rounded-[20px] p-8 sm:p-10 relative overflow-hidden border border-brand-sage/10 shadow-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Subtle gold circles in background */}
          <div className="absolute top-[-20%] right-[-10%] w-60 h-60 rounded-full border border-brand-accent/10 pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-40 h-40 rounded-full border border-brand-sage/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/30 text-[10px] font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3 h-3" />
                Colección Completa
              </span>
              <h2 className="font-display font-semibold italic text-3xl leading-tight text-brand-cream mb-3">
                Pack Completo
              </h2>
              <p className="font-body font-light text-brand-cream/80 text-sm sm:text-base leading-relaxed max-w-[550px]">
                Todos los recursos juntos con un descuento especial. Obtené el E-book, la Guía Práctica y la versión en Audiolibro en un solo paquete y con acceso inmediato.
              </p>
            </div>
            
            <a
              href="PLACEHOLDER_HOTMART_PACK"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4.5 rounded-full bg-brand-accent text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#A95A2F] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              Ver Pack
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
