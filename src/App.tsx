/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoCover from './components/VideoCover';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Talleres from './pages/Talleres';
import Recursos from './pages/Recursos';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-brand-bg text-brand-text font-body selection:bg-brand-sage/30 selection:text-brand-text text-base antialiased">
        {/* Dynamic Navigation */}
        <Navbar scrolled={scrolled} />

        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <main id="main-content-flow" className="flex flex-col">
              {/* Section 0: Video Cover Portada */}
              <VideoCover />

              {/* Section 1: Hero Header */}
              <Hero />

              {/* Section 2: Sobre mí / Bio */}
              <About />

              {/* Section 3: Clinical Specialties */}
              <Specialties />

              {/* Section 4: FAQ Accordion */}
              <FAQ />

              {/* Section 5: Organic Grid Gallery */}
              <Gallery />

              {/* Section 6: Secure Consultation Contact Form */}
              <Contact />
            </main>
          } />

          {/* Talleres Route */}
          <Route path="/talleres" element={<Talleres />} />

          {/* Recursos Route */}
          <Route path="/recursos" element={<Recursos />} />
        </Routes>

        {/* Footer block */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
}
