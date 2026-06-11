/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-brand-bg-dark text-white py-12 border-t border-brand-sage/10 relative select-none"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Block - Brand Identity */}
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-brand-sage" />
            <div className="text-left">
              <span className="font-display font-semibold italic text-base tracking-wide text-brand-cream block">
                Lic. Ana Paris
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-body text-brand-sage block">
                Psicología & Acompañamiento Perinatal
              </span>
            </div>
          </div>

          {/* Center Block - Quick text copy */}
          <div className="text-center font-body text-xs text-brand-cream/80 tracking-wide font-light">
            © 2026 Córdoba, Argentina
          </div>

          {/* Right Block - Small Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[11px] font-body tracking-widest text-brand-sage hover:text-brand-cream transition-colors uppercase font-medium focus:outline-none cursor-pointer"
            aria-label="Volver arriba"
          >
            Volver arriba
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Divider line */}
        <div className="w-full h-[0.5px] bg-brand-sage/20 my-6" />

        {/* Studio attribution footer credits */}
        {/*<div className="flex flex-col sm:flex-row items-center justify-between font-body text-[10px] text-brand-sage/60 select-none">
          <p>Córdoba, Argentina. Matrícula Profesional en Psicología UNC.</p>
          <p className="mt-2 sm:mt-0">
            Sitio desarrollado por{' '}
            <span className="font-semibold text-brand-sage/85 hover:text-brand-accent transition-colors">
              MafeTech
            </span>
          </p>
        </div>*/}
      </div>
    </footer>
  );
}
