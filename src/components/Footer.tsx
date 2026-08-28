/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Leaf, ArrowUp, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-brand-bg-dark text-white py-12 border-t border-brand-sage/10 relative select-none"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* SECCIÓN SUPERIOR — 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Columna 1 — Identidad */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <Leaf className="w-6 h-6 text-brand-sage" />
              <div>
                <span className="font-display font-semibold italic text-lg tracking-wide text-brand-cream block">
                  Lic. Ana Paris
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-body text-brand-sage block font-medium">
                  Psicóloga & Doula
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.google.com/maps/place/Subof+Ppal+Francisco+Tomas+Luna+%26+Pasaje+Privado+N%C3%BAmero+7,+X5003+C%C3%B3rdoba/@-31.3836762,-64.2723913,17z"
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-brand-cream/75 hover:text-brand-cream transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
                <span>Natania 19, Manzana 7, Casa 14, Barrio Don Bosco, Córdoba</span>
              </a>
              <a 
                href="https://wa.me/5493515557316" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2.5 text-xs sm:text-sm font-body text-brand-cream/75 hover:text-brand-cream transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-sage shrink-0" />
                <span>+54 9 3515 55-7316</span>
              </a>
              <a 
                href="mailto:licenciadaanaparis@gmail.com" 
                className="flex items-center gap-2.5 text-xs sm:text-sm font-body text-brand-cream/75 hover:text-brand-cream transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-sage shrink-0" />
                <span>licenciadaanaparis@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/licenciadaanaparis" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2.5 text-xs sm:text-sm font-body text-brand-cream/75 hover:text-brand-cream transition-colors"
              >
                <span className="w-4 h-4 rounded-full border border-brand-sage flex items-center justify-center text-[8px] font-bold text-brand-sage leading-none shrink-0">IG</span>
                <span>@licenciadaanaparis</span>
              </a>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-widest text-brand-sage mb-4 block font-semibold">
              Navegación
            </span>
            <div className="flex flex-col space-y-3">
              <a
                href="#sobre-mi"
                onClick={(e) => handleAnchorClick(e, '#sobre-mi')}
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#especialidades"
                onClick={(e) => handleAnchorClick(e, '#especialidades')}
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Especialidades
              </a>
              <Link
                to="/talleres"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Talleres
              </Link>
              <Link
                to="/recursos"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Recursos
              </Link>
              <a
                href="#galeria"
                onClick={(e) => handleAnchorClick(e, '#galeria')}
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Galería
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e, '#contacto')}
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Contacto
              </a>
              <a
                href="#faq"
                onClick={(e) => handleAnchorClick(e, '#faq')}
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Preguntas Frecuentes
              </a>
            </div>
          </div>

          {/* Columna 3 — Programas */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-widest text-brand-sage mb-4 block font-semibold">
              Programas
            </span>
            <div className="flex flex-col space-y-3 mb-6">
              <Link
                to="/talleres"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Programa Grupal — Consumo Problemático
              </Link>
              <Link
                to="/talleres"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                Acompañamiento Individual VIP
              </Link>
              <a
                href="https://wa.me/5493515557316?text=Hola%20Ana%2C%20quiero%20saber%20más%20sobre%20los%20programas."
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors flex items-center gap-1.5"
              >
                Primera sesión de claridad gratuita
                <ArrowRight className="w-3.5 h-3.5 inline text-brand-sage" />
              </a>
            </div>

            <span className="text-xs uppercase tracking-widest text-brand-sage mb-4 block font-semibold">
              Recursos Digitales
            </span>
            <div className="flex flex-col space-y-3">
              <a
                href="https://go.hotmart.com/V106250937W"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors flex items-center gap-1.5"
              >
                Pack E-Book
                <ArrowRight className="w-3.5 h-3.5 inline text-brand-sage" />
              </a>
              <a
                href="https://go.hotmart.com/R106296900H"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-body text-brand-cream/80 hover:text-brand-cream transition-colors flex items-center gap-1.5"
              >
                Pack Audiolibro
                <ArrowRight className="w-3.5 h-3.5 inline text-brand-sage" />
              </a>
            </div>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="w-full h-[0.5px] bg-brand-sage/20 mb-6" />

        {/* BARRA INFERIOR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Izquierda */}
          <p className="font-body text-xs text-brand-sage/75">
            © 2026 Lic. Ana Cristina Paris — Córdoba, Argentina
          </p>

          {/* Centro — créditos MafeTech */}
          <p className="font-body text-xs text-brand-sage/75">
            Sitio desarrollado por{' '}
            <a
              href="https://mafetech.net"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-sage/90 hover:text-brand-accent transition-colors"
            >
              MafeTech
            </a>
          </p>

          {/* Derecha — Volver arriba */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-body tracking-widest text-brand-sage hover:text-brand-cream transition-colors uppercase font-medium focus:outline-none cursor-pointer"
            aria-label="Volver arriba"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
