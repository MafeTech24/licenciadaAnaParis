/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Instagram, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    modality: 'presencial',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const whatsappNumber = '543516000000'; // Cordoba, Argentina fallback
  const fallbackEmail = 'lic.anaparis@gmail.com';
  const instagramUser = 'lic.anaparis';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Por favor, completa los campos requeridos (*).');
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical service secure receipt API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        modality: 'presencial',
        message: '',
      });
    }, 1200);
  };

  // Generate customized WhatsApp api message based on user intent
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Ana, vi tu sitio web profesional. Me gustaría agendar una primera consulta de orientación. Quedo al aguardo.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="contacto"
      className="relative py-24 bg-brand-bg paper-texture overflow-hidden select-none"
    >
      <div className="absolute top-[30%] right-[5%] w-64 h-64 rounded-full bg-brand-bg-sage opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-80 h-80 rounded-full bg-brand-cream opacity-50 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div
          id="contact-content-card"
          className="max-w-[750px] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Title */}
          <span className="font-body text-xs font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            Contacto & Turnos
          </span>
          <h2 className="font-display font-semibold italic text-4xl sm:text-[44px] text-brand-text mb-4 leading-tight">
            ¿Querés agendar una consulta?
          </h2>
          <p className="font-body font-light text-brand-text-muted text-base sm:text-lg mb-12">
            Presencial en Córdoba o por videollamada desde cualquier rincón del mundo.
          </p>

          {/* Grid: Columns of Fast Action Links & Interactive Form */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left items-stretch mb-12">
            
            {/* Left Box: Quick Channels */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <div className="bg-[#FAF6EE] p-7 rounded-[12px] border border-brand-sage/20 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display font-medium text-xl text-brand-bg-dark mb-3">
                    Canales Directos
                  </h3>
                  <p className="font-body font-light text-xs sm:text-sm text-brand-text-muted leading-relaxed mb-6">
                    Hacé clic en cualquiera de los siguientes medios de contacto para comunicarte conmigo de forma inmediata o ver mis publicaciones diarias sobre psicología y salud mental.
                  </p>
                </div>

                {/* Vertical Pill Buttons */}
                <div className="space-y-3.5">
                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    Enviar WhatsApp
                  </a>

                  {/* Mail */}
                  <a
                    href={`mailto:${fallbackEmail}?subject=Consulta%20Profesional%20-%20Lic.%20Ana%20Paris`}
                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    Enviar Enlace Email
                  </a>

                  {/* Instagram */}
                  <a
                    href={`https://instagram.com/${instagramUser}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Instagram className="w-4 h-4" />
                    Visitar Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right Box: Clinical Intake Form */}
            <div className="md:col-span-7">
              <div className="bg-[#FAF6EE] p-7 rounded-[12px] border border-brand-sage/20 shadow-sm h-full">
                <h3 className="font-display font-medium text-xl text-brand-bg-dark mb-4">
                  Formulario de Contacto Seguro
                </h3>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      id="form-success-overlay"
                      className="flex flex-col items-center justify-center py-8 text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-brand-sage-dark mb-4 animate-bounce" />
                      <h4 className="font-display font-medium text-lg text-brand-text mb-2">
                        Mensaje Recibido
                      </h4>
                      <p className="font-body font-light text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-[325px]">
                        Muchas gracias por escribirme. Voy a revisar tu mensaje con absoluta confidencialidad y me comunicaré con vos a la brevedad.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-xs font-medium text-brand-accent hover:text-brand-sage-dark hover:underline focus:outline-none"
                      >
                        Enviar otro mensaje
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      id="clinical-contact-form"
                      onSubmit={handleFormSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {errorMessage && (
                        <div className="flex items-center gap-2 text-xs bg-red-50 text-red-600 p-3 rounded-lg border border-red-200">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Name and Email side-by-side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-text-muted mb-1.5">
                            Tu Nombre *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Ej. María Belén"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full text-xs sm:text-sm bg-white border border-[#C8DCC4] rounded-lg px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-text-muted mb-1.5">
                            Correo Electrónico *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Ej. maria@correo.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full text-xs sm:text-sm bg-white border border-[#C8DCC4] rounded-lg px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone and Modality Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-text-muted mb-1.5">
                            Teléfono de contacto
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Ej. +54 351 123 4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full text-xs sm:text-sm bg-white border border-[#C8DCC4] rounded-lg px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-text-muted mb-1.5">
                            Preferencia de sesión
                          </label>
                          <select
                            name="modality"
                            value={formData.modality}
                            onChange={handleInputChange}
                            className="w-full text-xs sm:text-sm bg-white border border-[#C8DCC4] rounded-lg px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all cursor-pointer"
                          >
                            <option value="presencial">Presencial en Córdoba</option>
                            <option value="online">Videollamada (Online)</option>
                            <option value="indefinido">Consultar opciones</option>
                          </select>
                        </div>
                      </div>

                      {/* Message area */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-text-muted mb-1.5">
                          ¿Qué te acerca hoy al consultorio? *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          placeholder="Tu consulta o motivo de acompañamiento..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm bg-white border border-[#C8DCC4] rounded-lg px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-brand-accent hover:bg-[#A95A2F] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Enviando datos...
                          </>
                        ) : (
                          <>
                            Enviar mensaje confidencial
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Warm closing line */}
          <div id="contact-closing-line" className="mt-14 pb-4">
            <span className="w-12 h-[0.5px] bg-brand-sage/40 block mx-auto mb-4" />
            <p className="font-display italic text-lg sm:text-xl text-brand-text-muted">
              "El primer paso es el más importante."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
