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
      question: '¿Para quién son los programas de acompañamiento?',
      answer: 'Los programas están dirigidos exclusivamente a familiares — no a la persona con adicción. Si tenés un ser querido con consumo problemático y sentís que tu vida se detuvo, que pasás los días vigilando o que necesitás herramientas reales para acompañar sin perderte, este espacio es para vos.'
    },
    {
      question: '¿Cuál es la diferencia entre el Programa Grupal y el Individual VIP?',
      answer: 'El Programa Grupal es un taller virtual con cupo reducido de hasta 10 personas, que se reúne cada primer lunes del mes durante 3 meses (12 encuentros de 90 minutos). El Programa Individual VIP es un proceso 100% privado con encuentros semanales de 60 minutos y soporte directo de lunes a viernes. En el individual no hay dinámicas grupales: todo el espacio y la estrategia son exclusivamente para vos.'
    },
    {
      question: '¿Qué es la sesión de claridad gratuita?',
      answer: 'Antes de comenzar cualquier programa, ofrecemos una primera sesión de claridad de 20 minutos sin costo. En ese espacio identificamos tu situación, respondemos tus dudas y evaluamos juntos cuál es el camino más adecuado para vos. No hay compromiso de continuar.'
    },
    {
      question: '¿Se puede hacer el acompañamiento desde otro país?',
      answer: 'Sí. Ambos programas son 100% virtuales y están disponibles para toda América Latina y España. El Programa Grupal se realiza por Google Meet a las 19:15 hs (hora Argentina). El Individual VIP también puede hacerse por videollamada.'
    },
    {
      question: '¿Cómo se abonan los programas desde el exterior?',
      answer: 'Los pagos desde el exterior se realizan a través de PayPal. Los pagos desde Argentina se gestionan por MercadoPago o transferencia bancaria. Para conocer los valores actualizados, escribinos directamente por WhatsApp.'
    },
    {
      question: '¿Qué recursos digitales están disponibles?',
      answer: 'En la sección Recursos encontrás dos packs disponibles en Hotmart: el Pack E-Book (incluye el libro Intervención familiar en adicciones, la Guía práctica de respuestas y acciones, y la Guía de mindfulness) y el Pack Audiolibro (el libro completo en audio de aproximadamente 1h 40min, más las mismas guías). Todos los materiales fueron creados por la Lic. Ana Paris.'
    },
    {
      question: '¿Quién es Ana Paris?',
      answer: 'Ana Cristina Paris es Licenciada en Psicología por la Universidad Nacional de Córdoba (UNC) y Doula certificada. Nació en una familia con profundo compromiso en el tema: sus padres fundaron la Fundación por un Mundo Mejor en Córdoba, dedicada al abordaje de las adicciones. Su práctica clínica se centra en vínculos tóxicos, adicciones y codependencia.'
    },
    {
      question: '¿Los programas reemplazan un tratamiento para la persona con adicción?',
      answer: 'No. Los programas están diseñados para el familiar, no para quien tiene el consumo problemático. El objetivo es que vos puedas recuperar tu vida, establecer límites saludables y acompañar desde un lugar de mayor claridad y cuidado propio — no para que te conviertas en terapeuta de tu ser querido.'
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
            Escribinos y te respondemos antes de tu primera sesión de claridad.
          </p>
          <a
            href="https://wa.me/5493516985802?text=Hola%20Ana%2C%20tengo%20una%20consulta%20antes%20de%20comenzar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-bg-dark bg-brand-cream hover:bg-brand-bg-sage hover:text-brand-sage-dark px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative z-10"
          >
            <MessageCircle className="w-4 h-4" />
            Escribinos tu Duda
          </a>
        </motion.div>

      </div>
    </section>
  );
}
