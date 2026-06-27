/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Leaf, ArrowUp, Phone, Mail, ArrowRight } from 'lucide-react';

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
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-brand-sage" />
              <div>
                <span className="font-display font-semibold italic text-base tracking-wide text-brand-cream block">
                  Lic. Ana Paris
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-body text-brand-sage block">
                  Psicóloga & Doula
                </span>
              </div>
            </div>
            
            <p className="font-body font-light text-xs text-brand-cream/70 leading-relaxed mb-6">
              Acompañamiento psicológico para familiar que atraviesa la problemática de adicción de un ser querido.
            </p>

            <div className="flex flex-col space-y-2.5">
              <a 
                href="https://wa.me/5493515557316" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-[11px] font-body text-brand-cream/60 hover:text-brand-cream transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-sage" />
                <span>+54 9 3515 55-7316</span>
              </a>
              <a 
                href="mailto:licenciadaanaparis@gmail.com" 
                className="flex items-center gap-2 text-[11px] font-body text-brand-cream/60 hover:text-brand-cream transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-sage" />
                <span>licenciadaanaparis@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/licenciadaanaparis" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-[11px] font-body text-brand-cream/60 hover:text-brand-cream transition-colors"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-brand-sage flex items-center justify-center text-[7px] font-bold text-brand-sage leading-none">IG</span>
                <span>@licenciadaanaparis</span>
              </a>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] uppercase tracking-widest text-brand-sage mb-4 block">
              Navegación
            </span>
            <div className="flex flex-col space-y-2.5">
              <a
                href="#sobre-mi"
                onClick={(e) => handleAnchorClick(e, '#sobre-mi')}
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Sobre mí
              </a>
              <a
                href="#especialidades"
                onClick={(e) => handleAnchorClick(e, '#especialidades')}
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Especialidades
              </a>
              <Link
                to="/talleres"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Talleres
              </Link>
              <Link
                to="/recursos"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Recursos
              </Link>
              <a
                href="#galeria"
                onClick={(e) => handleAnchorClick(e, '#galeria')}
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Galería
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e, '#contacto')}
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Contacto
              </a>
              <a
                href="#faq"
                onClick={(e) => handleAnchorClick(e, '#faq')}
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Preguntas Frecuentes
              </a>
            </div>
          </div>

          {/* Columna 3 — Programas */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] uppercase tracking-widest text-brand-sage mb-4 block">
              Programas
            </span>
            <div className="flex flex-col space-y-2.5 mb-6">
              <Link
                to="/talleres"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Programa Grupal — Consumo Problemático
              </Link>
              <Link
                to="/talleres"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors"
              >
                Acompañamiento Individual VIP
              </Link>
              <a
                href="https://wa.me/5493515557316?text=Hola%20Ana%2C%20quiero%20saber%20más%20sobre%20los%20programas."
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors flex items-center gap-1"
              >
                Primera sesión de claridad gratuita
                <ArrowRight className="w-3 h-3 inline text-brand-sage" />
              </a>
            </div>

            <span className="text-[10px] uppercase tracking-widest text-brand-sage mb-4 block">
              Recursos Digitales
            </span>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://go.hotmart.com/V106250937W"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors flex items-center gap-1"
              >
                Pack E-Book
                <ArrowRight className="w-3 h-3 inline text-brand-sage" />
              </a>
              <a
                href="https://go.hotmart.com/R106296900H"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-body text-brand-cream/70 hover:text-brand-cream transition-colors flex items-center gap-1"
              >
                Pack Audiolibro
                <ArrowRight className="w-3 h-3 inline text-brand-sage" />
              </a>
            </div>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="w-full h-[0.5px] bg-brand-sage/20 mb-6" />

        {/* BARRA INFERIOR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Izquierda */}
          <p className="font-body text-[10px] text-brand-sage/60">
            © 2026 Lic. Ana Cristina Paris — Córdoba, Argentina
          </p>

          {/* Centro — créditos MafeTech */}
          <p className="font-body text-[10px] text-brand-sage/60">
            Sitio desarrollado por{' '}
            <a
              href="https://mafetech.net"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-sage/85 hover:text-brand-accent transition-colors"
            >
              MafeTech
            </a>
          </p>

          {/* Derecha — Volver arriba */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[11px] font-body tracking-widest text-brand-sage hover:text-brand-cream transition-colors uppercase font-medium focus:outline-none cursor-pointer"
            aria-label="Volver arriba"
          >
            Volver arriba
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
