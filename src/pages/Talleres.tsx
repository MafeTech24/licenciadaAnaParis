/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Laptop, 
  Users, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  BookMarked,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Talleres() {
  // Ensure we start at the top of the page when navigating to workshops
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const whatsappNumber = '5493515557316';

  const getWhatsAppLink = (type: 'inscripcion_grupo' | 'consulta_grupo' | 'entrevista_vip') => {
    let text = '';
    if (type === 'inscripcion_grupo') {
      text = 'Hola Ana, vi tu sitio web profesional. Me interesa inscribirme en el Programa Familiar de Consumo Problemático. Quedo a la espera.';
    } else if (type === 'consulta_grupo') {
      text = 'Hola Ana, vi tu sitio web profesional. Tengo una consulta sobre el Programa Familiar de Consumo Problemático. Quedo a la espera.';
    } else if (type === 'entrevista_vip') {
      text = 'Hola Ana, vi tu sitio web profesional. Me gustaría solicitar una entrevista de admisión para el Acompañamiento Individual VIP. Quedo a la espera.';
    }
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const groupDetails = [
    { icon: Calendar, text: 'Nueva cohorte cada primer lunes del mes' },
    { icon: Clock, text: '19:15 hs (Argentina)' },
    { icon: Laptop, text: 'Virtual — Google Meet' },
    { icon: Users, text: 'Cupo limitado.' },
    { icon: Clock, text: '90 minutos por encuentro' },
    { icon: BookOpen, text: 'Material de trabajo incluido' },
  ];

  const groupForWhom = [
    '¿Tenés un familiar con consumo problemático y sentís que tu vida se detuvo?',
    '¿Pasás los días vigilando, controlando y esperando lo peor?',
    '¿Querés ayudarlo pero no sabés dónde termina tu responsabilidad?',
    '¿Estás agotado/a y necesitás herramientas reales, no solo contención?',
  ];

  const vipIncludes = [
    'Encuentros semanales individuales de 60 minutos durante 3 meses',
    'Soporte directo de lunes a viernes ante crisis o consultas urgentes',
    'Plan de trabajo personalizado según tu dinámica familiar',
    'Material y recursos adaptados a tu caso específico',
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen text-brand-text select-none">
      <SEOHead
        title="Programas y Talleres para Familias | Lic. Ana Paris Psicóloga Córdoba"
        description="Programa grupal y acompañamiento individual VIP para familiares que atraviesan la adicción de un ser querido. Primera sesión de claridad gratuita con la Lic. Ana Paris."
        canonicalUrl="https://licenciadaanaparis.com/talleres"
        keywords="programa familiar adicciones, taller grupal adicciones Córdoba, acompañamiento individual VIP adicciones, psicóloga adicciones Córdoba, Ana Paris talleres"
      />

      {/* Decorative Ellipses in background */}
      <div className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full bg-brand-bg-sage opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-brand-cream opacity-60 blur-3xl pointer-events-none" />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Programas y Talleres' }]} />

      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            Programas
          </span>
          <h1 className="font-display font-semibold italic text-4xl sm:text-[44px] leading-tight text-brand-text mb-6">
            Programa de Acompañamiento para Familiar que atraviesa la Problemática de Adicción
          </h1>
          <p className="font-body font-light text-brand-text-muted text-base leading-relaxed text-left sm:text-center">
            Soy Ana Paris, Licenciada en Psicología (UNC) y Doula. Crecí dentro de una familia dedicada al abordaje de las adicciones — mis padres fundaron la <strong>Fundación por un Mundo Mejor</strong> en Córdoba. Hoy combino ese legado con años de práctica clínica para acompañar a familias que atraviesan el desafío del consumo problemático.
          </p>
        </motion.div>

        {/* Main Grid for Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: Programa Grupal */}
          <motion.div
            className="lg:col-span-6 bg-[#FAF6EE] rounded-[16px] border border-brand-sage/20 shadow-sm overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Header / Badge */}
            <div className="p-7 border-b border-brand-sage/10 bg-brand-bg-sage/40">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDF2EC] text-[#3D6B38] border border-brand-sage/20 mb-3 text-xs font-semibold tracking-wider uppercase">
                Programa Grupal
              </span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-bg-dark mb-2">
                Acompañamiento Grupal para Familiar de Persona con Consumo Problemático
              </h2>
              <p className="font-body font-light text-sm text-brand-text-muted leading-relaxed">
                Taller grupal con cupo reducido para garantizar la interacción personalizada de familiares que atraviesan la problemática de adicción de un ser querido y necesitan orientación, herramientas y acompañamiento profesional. En algunos módulos participan profesionales invitados de otras áreas.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-7 flex-grow flex flex-col gap-6">
              
              {/* Para quién es */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  ¿Para quién es?
                </h3>
                <ul className="space-y-2.5">
                  {groupForWhom.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm font-body font-light text-brand-text/95 leading-snug">
                      <span className="p-0.5 bg-brand-sage/20 text-[#3D6B38] rounded-full mt-0.5 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-t border-brand-sage/10" />

              {/* Contenido (Mes a Mes) */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  Contenido — 3 meses, 12 encuentros
                </h3>
                <div className="space-y-4">
                  {/* Mes 1 */}
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-brand-bg-dark text-white text-xs font-bold flex items-center justify-center">1</span>
                      <span className="w-[1px] h-full bg-brand-sage/30 mt-1" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-bg-dark">Mes 1 — Conciencia de enfermedad</h4>
                      <p className="text-xs sm:text-sm font-body font-light text-brand-text-muted mt-0.5 leading-relaxed">
                        Entender cómo opera la adicción, desarmar la culpa y salir de la negación.
                      </p>
                    </div>
                  </div>
                  {/* Mes 2 */}
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-brand-bg-dark text-white text-xs font-bold flex items-center justify-center">2</span>
                      <span className="w-[1px] h-full bg-brand-sage/30 mt-1" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-bg-dark">Mes 2 — Separación psicológica y autonomía</h4>
                      <p className="text-xs sm:text-sm font-body font-light text-brand-text-muted mt-0.5 leading-relaxed">
                        Recuperar tu vida, tu rutina y tu proyecto personal.
                      </p>
                    </div>
                  </div>
                  {/* Mes 3 */}
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-brand-bg-dark text-white text-xs font-bold flex items-center justify-center">3</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-bg-dark">Mes 3 — Límites personales</h4>
                      <p className="text-xs sm:text-sm font-body font-light text-brand-text-muted mt-0.5 leading-relaxed">
                        Aprender a decir no con firmeza y proteger tu salud emocional y financiera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-t border-brand-sage/10" />

              {/* Detalles */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  Detalles del Programa
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {groupDetails.map((detail, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-xs sm:text-sm font-body font-light text-brand-text/90">
                      <detail.icon className="w-4 h-4 text-brand-sage-dark shrink-0" />
                      <span>{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-t border-brand-sage/10" />

              {/* Importante */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  IMPORTANTE
                </h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-brand-bg-dark">
                    Primera Sesión de claridad <b>GRATUITA</b>.</p>
                  <p className="text-xs sm:text-sm font-body font-light text-brand-text-muted leading-relaxed">
                    Antes de sumarte al programa, te invitamos a tener la primera sesión de claridad de 20 minutos gratuita para identificar tu necesidad, para conocer tu situación, responder tus dudas y evaluar si este espacio es adecuado para vos.
                  </p>
                  <p className="text-xs font-body text-brand-text-muted italic">
                    Tocá el botón y coordinamos una primera conversación.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Buttons */}
            <div className="p-7 pt-0 border-t border-brand-sage/5 flex flex-col gap-3">
              <a
                href={getWhatsAppLink('consulta_grupo')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center"
              >
                Hablemos
              </a>
            </div>
          </motion.div>

          {/* Card 2: Programa VIP Individual */}
          <motion.div
            className="lg:col-span-6 bg-[#FAF6EE] rounded-[16px] border border-brand-accent/20 shadow-md overflow-hidden flex flex-col h-full relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Elegant highlight border decoration for VIP */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent" />

            {/* Header / Badge */}
            <div className="p-7 border-b border-brand-sage/10 bg-brand-cream/80">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/20 mb-3 text-xs font-semibold tracking-wider uppercase">
                Programa Individual
              </span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-bg-dark mb-2">
                Acompañamiento Individual VIP
              </h2>
              <p className="font-body font-light text-sm text-brand-text-muted leading-relaxed">
                Programa individual y personalizado, dirigido a familiares que atraviesan la problemática de adicción de un ser querido y necesitan un espacio privado, profundo y adaptado a su historia familiar.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-7 flex-grow flex flex-col gap-6">
              
              {/* Para quién es */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  ¿Para quién es?
                </h3>
                <ul className="space-y-2.5">
                  {groupForWhom.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm font-body font-light text-brand-text/95 leading-snug">
                      <span className="p-0.5 bg-brand-sage/20 text-[#3D6B38] rounded-full mt-0.5 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-t border-brand-sage/10" />

              {/* Qué incluye */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  ¿Qué incluye?
                </h3>
                <ul className="space-y-3">
                  {vipIncludes.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm font-body font-light text-brand-text/95 leading-snug">
                      <span className="p-0.5 bg-brand-accent/10 text-brand-accent rounded-full mt-0.5 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-t border-brand-sage/10" />

              {/* Diferenciador Quote */}
              <div className="bg-[#F5F0E8]/60 p-5 rounded-xl border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute -top-4 -right-2 text-brand-accent/5 font-display text-[120px] font-bold pointer-events-none select-none">
                  “
                </div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-brand-sage-dark mb-1.5 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  Estrategia Exclusiva
                </h3>
                <p className="font-display font-light text-brand-bg-dark italic text-lg leading-relaxed relative z-10">
                  "En el programa VIP no hay turnos para hablar ni dinámicas grupales. Todo el espacio, el tiempo y la estrategia están pensados exclusivamente para vos y tu situación familiar."
                </p>
              </div>

              <hr className="border-t border-brand-sage/10" />

              {/* Importante */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-accent mb-3">
                  IMPORTANTE
                </h3>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-brand-bg-dark">
                    Primera Sesión de claridad <b>GRATUITA</b>.
                  </p>
                  <p className="text-xs sm:text-sm font-body font-light text-brand-text-muted leading-relaxed">
                    El acompañamiento individual comienza con una primera sesión de claridad de 20 minutos gratuita, pensada para conocer tu historia familiar, entender qué necesitás y evaluar juntos el mejor camino de trabajo.
                  </p>
                  <p className="text-xs sm:text-sm font-body italic text-brand-accent leading-relaxed">
                    Este espacio es privado, personalizado y diseñado especialmente para tu situación.
                  </p>
                  <p className="text-xs font-body text-brand-text-muted italic">
                    Tocá el botón y coordinamos una primera conversación.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Buttons */}
            <div className="p-7 pt-0 border-t border-brand-sage/5 flex flex-col gap-3">
              <a
                href={getWhatsAppLink('entrevista_vip')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 rounded-full bg-brand-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A95A2F] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center"
              >
                Hablemos
              </a>
            </div>
          </motion.div>

        </div>

        {/* Cross-linking navigation section */}
        <div className="mt-16 bg-[#FAF6EE] p-8 rounded-[16px] border border-brand-sage/20 shadow-sm text-center">
          <h3 className="font-display font-medium text-xl text-brand-bg-dark mb-2">
            ¿Buscás material de lectura o atención presencial en Córdoba?
          </h3>
          <p className="font-body font-light text-xs sm:text-sm text-brand-text-muted max-w-xl mx-auto mb-6">
            Complementá tu proceso con nuestros libros y guías de intervención, o coordiná una consulta presencial en nuestro consultorio de Barrio Don Bosco.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/recursos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark transition-all duration-300 shadow-sm"
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Ver E-books y Guías Digitales</span>
            </Link>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-sage text-brand-text hover:bg-brand-bg-sage hover:text-brand-sage-dark text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-sage-dark" />
              <span>Consultorio en Córdoba Capital</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
