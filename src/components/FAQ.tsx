/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: '¿Dónde atiende la psicóloga Ana Paris en Córdoba Capital?',
      answer: 'La Lic. Ana Paris atiende de forma presencial en su consultorio de Barrio Don Bosco (Natania 19, Manzana 7, Casa 14), en la zona noroeste de Córdoba Capital, y de manera virtual por videollamada para pacientes de toda Argentina, Latinoamérica y España.'
    },
    {
      question: '¿Para quién son los programas de acompañamiento familiar?',
      answer: 'Están dirigidos exclusivamente a familiares de personas con adicciones o consumo problemático (padres, parejas, hermanos, hijos). Si sentís que tu vida se detuvo, que pasás los días vigilando o necesitás herramientas clínicas para poner límites sin perder tu bienestar, este espacio es para vos.'
    },
    {
      question: '¿Cómo saber si necesito acompañamiento psicológico por la adicción de un ser querido?',
      answer: 'Necesitás acompañamiento si experimentás angustia constante, culpa, agotamiento físico o dificultad para poner límites al consumo de tu familiar. La terapia para familiares permite salir de la dinámica de codependencia y recuperar la propia estabilidad emocional.'
    },
    {
      question: '¿Cuál es la diferencia entre el Programa Grupal y el Individual VIP?',
      answer: 'El Programa Grupal es un taller virtual con cupo reducido (10 personas) de 12 encuentros durante 3 meses con dinámicas colectivas. El Individual VIP es un proceso 100% privado y personalizado con sesiones individuales de 60 minutos y soporte directo de lunes a viernes.'
    },
    {
      question: '¿La atención es particular o por obra social en Córdoba?',
      answer: 'La atención se brinda en forma particular para asegurar un seguimiento profundo y sin restricciones de sesiones. Se emiten recibos y comprobantes oficiales para que puedas gestionar eventuales reintegros ante tu obra social o prepaga.'
    },
    {
      question: '¿Ofrecen una primera consulta de orientación gratuita?',
      answer: 'Sí, antes de comenzar cualquier proceso se realiza una primera sesión de claridad gratuita de 20 minutos para evaluar tu situación familiar, responder inquietudes y definir el abordaje más adecuado.'
    },
    {
      question: '¿Se puede hacer el acompañamiento de forma virtual desde otra provincia o país?',
      answer: 'Sí. Tanto los programas grupales como el acompañamiento individual cuentan con modalidad 100% online por Google Meet para familiares en cualquier punto de Argentina, América Latina y España.'
    },
    {
      question: '¿Qué recursos digitales y libros están disponibles?',
      answer: 'En la sección Recursos encontrás el Pack E-Book y el Pack Audiolibro (libro Intervención familiar en adicciones, Guía práctica de respuestas y acciones, y Guía de mindfulness). Todos los materiales fueron elaborados por la Lic. Ana Paris y se descargan por Hotmart.'
    },
    {
      question: '¿Quién es Ana Paris y cuál es su trayectoria?',
      answer: 'Ana Cristina Paris es Licenciada en Psicología por la Universidad Nacional de Córdoba (UNC) y Doula certificada. Creció en una familia pionera en el abordaje de adicciones en Córdoba (Fundación por un Mundo Mejor) y cuenta con amplia experiencia clínica en codependencia y vínculos.'
    },
    {
      question: '¿Los programas reemplazan un tratamiento para la persona con consumo problemático?',
      answer: 'No. Los programas están diseñados para el familiar, no para la persona que consume. El objetivo es que vos recuperes tu tranquilidad, aprendas a intervenir eficazmente y dejes de sostener el caos sin descuidar tu propia salud.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-brand-bg paper-texture overflow-hidden">
      {/* Decorative subtle circles */}
      <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-brand-bg-sage opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 rounded-full bg-brand-cream opacity-50 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div id="faq-header" className="text-center max-w-xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-display font-medium text-4xl text-brand-text leading-tight mb-4">
            Todo lo que necesitás saber antes de empezar
          </h2>
          <p className="font-body font-light text-brand-text-muted leading-relaxed text-sm md:text-base mb-6">
            Resolvemos las dudas más comunes para que puedas tomar la decisión con claridad.
          </p>
          <div className="w-12 h-1 bg-brand-sage/40 mx-auto rounded" />
        </div>

        {/* FAQ Accordion List */}
        <div id="faq-list" className="flex flex-col gap-3 mb-16">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                id={`faq-item-${index}`}
                className={`bg-[#FAF6EE] border border-brand-sage/20 rounded-[12px] overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-l-2 border-brand-accent' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-sm text-brand-bg-dark pr-4">
                    {item.question}
                  </span>
                  <div className="text-brand-accent flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="font-body font-light text-sm text-brand-text-muted leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Block */}
        <motion.div
          id="faq-cta"
          className="bg-brand-bg-dark rounded-[16px] p-8 text-center text-brand-cream relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle background circles for CTA */}
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-brand-sage/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-brand-accent/10 blur-xl pointer-events-none" />

          <h3 className="font-display font-semibold text-2xl mb-2 text-brand-cream relative z-10">
            ¿Todavía tenés dudas?
          </h3>
          <p className="font-body font-light text-brand-cream/80 text-sm md:text-base max-w-md mx-auto mb-6 relative z-10">
            Escribime y te respondo a la brevedad.
          </p>
          <a
            href="https://wa.me/5493515557316?text=Hola%20Ana%2C%20tengo%20una%20consulta%20antes%20de%20comenzar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-bg-dark bg-brand-cream hover:bg-brand-bg-sage hover:text-brand-sage-dark px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative z-10"
          >
            <MessageCircle className="w-4 h-4" />
            Escribime tu Duda
          </a>
        </motion.div>

      </div>
    </section>
  );
}
