/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-[#FAF6EE] shadow-sm border-b-[0.5px] border-brand-sage/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a id="nav-logo" href="#" className="flex items-center gap-2 group cursor-pointer focus:outline-none">
          <Leaf className="w-5 h-5 text-brand-sage-dark transform group-hover:rotate-12 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-display font-semibold italic text-xl tracking-wide text-brand-text">
              Ana Paris
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] font-body text-brand-text-muted">
              Psicóloga & Doula
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div id="nav-desktop-links" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body tracking-wider text-brand-text hover:text-brand-sage-dark transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-xs tracking-widest uppercase font-semibold text-white bg-brand-sage-dark hover:bg-brand-bg-dark px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="nav-mobile-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-text hover:text-brand-sage-dark cursor-pointer transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden absolute top-full left-0 right-0 bg-[#FAF6EE] border-b border-brand-sage/20 shadow-lg py-6 px-6 flex flex-col gap-5 animate-fade-up z-40"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-body tracking-wider text-brand-text hover:text-brand-sage-dark transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center font-body text-xs tracking-widest uppercase font-semibold text-white bg-brand-sage-dark hover:bg-brand-bg-dark px-5 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer mt-2"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}
