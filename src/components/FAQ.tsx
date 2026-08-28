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
    // ── General / Sobre Ana ──
    {
      question: '¿Quién es Ana Paris?',
      answer: 'Ana Cristina Paris es Licenciada en Psicología por la Universidad Nacional de Córdoba (UNC) y Doula certificada. Combina su formación clínica con el legado de su familia —fundadores de la Fundación por un Mundo Mejor en Córdoba— para acompañar procesos de transformación personal, vincular y perinatal con un enfoque empático, cálido y directivo.'
    },
    {
      question: '¿Para quién son los espacios de acompañamiento que ofrece?',
      answer: 'Están dirigidos a personas adultas que buscan terapia individual, a mujeres y familias en etapa perinatal, a quienes desean sanar relaciones de codependencia y a familiares de personas con consumo problemático. Cada área cuenta con un encuadre terapéutico específico, adaptado a si necesitás un proceso clínico individual, sostén como Doula o programas de intervención focalizados.'
    },

    // ── Psicología Clínica individual ──
    {
      question: '¿Qué temas se pueden trabajar en un proceso de psicología clínica individual?',
      answer: 'Se abordan problemáticas vinculares, dependencia emocional, trastornos de ansiedad, duelos, transiciones vitales como la menopausia y gestión de emociones. Es un espacio terapéutico confidencial de adultos orientado a desarmar patrones disfuncionales, fortalecer la autoestima y desarrollar recursos de afrontamiento saludables.'
    },
    {
      question: '¿Atiende casos de ansiedad, duelos o separaciones vinculares?',
      answer: 'Sí, el abordaje clínico de la ansiedad, el procesamiento de pérdidas y las rupturas de pareja es una de las áreas centrales de consulta. El trabajo terapéutico brinda herramientas prácticas de regulación emocional y comprensión profunda para transitar momentos de crisis, reorganizar la vida y reconstruir el bienestar.'
    },

    // ── Acompañamiento Perinatal ──
    {
      question: '¿En qué consiste el acompañamiento perinatal como Doula?',
      answer: 'Es un sostén emocional, físico e informativo integral durante el embarazo, el parto y el puerperio. Como Doula y psicóloga, acompaño a la persona gestante y su entorno a transitar la maternidad con tranquilidad, despejando temores, fortaleciendo la confianza en el propio cuerpo y brindando apoyo en lactancia y crianza temprana.'
    },
    {
      question: '¿En qué etapas se puede empezar el acompañamiento perinatal?',
      answer: 'Podés iniciar el acompañamiento en cualquier momento de la gestación, durante la preparación para el parto o en el posparto inmediato. También es un espacio propicio para abordar el deseo de concebir, la búsqueda de embarazo o el procesamiento emocional de experiencias previas de parto y puerperio.'
    },

    // ── Relaciones Dependientes ──
    {
      question: '¿Cómo saber si estoy en una relación de codependencia?',
      answer: 'Estás en una dinámica de codependencia si priorizás constantemente las necesidades del otro sobre las tuyas, sentís miedo extremo al abandono o justificás conductas dañinas. Otros signos frecuentes son la pérdida de identidad propia, la necesidad de controlar o rescatar a la pareja y la dificultad persistente para poner límites.'
    },
    {
      question: '¿En qué consiste el programa para salir de relaciones dependientes?',
      answer: 'Es un proceso terapéutico focalizado en desarticular apegos inseguros, reconstruir el amor propio y aprender a vincularse desde la autonomía. A través de sesiones estructuradas, se identifican las raíces de la dependencia vincular y se adquieren herramientas concretas para poner límites y construir relaciones sanas.'
    },

    // ── Adicciones familiares ──
    {
      question: '¿Para quién es el programa de acompañamiento a familiares de personas con consumo problemático?',
      answer: 'Está dirigido exclusivamente a familiares (padres, parejas, hermanos, hijos) de personas que atraviesan adicciones o consumo problemático. Su objetivo es brindar orientación clínica y herramientas prácticas para dejar de sostener el caos, manejar la culpa y proteger la salud emocional de la familia.'
    },
    {
      question: '¿Cuál es la diferencia entre el Programa Grupal y el Individual VIP en adicciones familiares?',
      answer: 'El Programa Grupal es un taller virtual de cupo reducido (10 familiares) con 12 encuentros durante 3 meses para compartir experiencias guiadas; el Individual VIP es un acompañamiento 100% privado y personalizado con sesiones individuales de 60 minutos y soporte directo de lunes a viernes ante situaciones de crisis.'
    },
    {
      question: '¿Los programas de adicciones reemplazan un tratamiento para la persona con consumo problemático?',
      answer: 'No, los programas están orientados específicamente al bienestar, claridad y cuidado del familiar, no al tratamiento médico o psiquiátrico del adicto. Permiten que la familia aprenda a intervenir con firmeza y amor sin descuidar su propia salud y equilibrio diario.'
    },

    // ── Modalidad y logística ──
    {
      question: '¿Se puede hacer el acompañamiento desde otro país?',
      answer: 'Sí, todas las especialidades y programas cuentan con modalidad virtual para personas de toda Argentina, América Latina y España. Las sesiones y talleres online se realizan mediante videollamada por Google Meet con la misma calidez y profundidad que la atención presencial en Córdoba.'
    },
    {
      question: '¿Cómo se abonan los procesos desde el exterior?',
      answer: 'Los pagos internacionales se gestionan de manera simple y segura a través de PayPal. Para residentes en Argentina, los abonos se realizan por transferencia bancaria o MercadoPago con valores en moneda local.'
    },
    {
      question: '¿Qué recursos digitales están disponibles?',
      answer: 'En la sección Recursos encontrás el Pack E-Book y el Pack Audiolibro, que incluyen el libro Intervención familiar en adicciones, la Guía práctica de respuestas y acciones y la Guía de mindfulness. Son herramientas de lectura y escucha creadas por la Lic. Ana Paris para acompañar en cualquier momento.'
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
