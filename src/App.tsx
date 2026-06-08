/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="relative min-h-screen bg-brand-bg text-brand-text font-body selection:bg-brand-sage/30 selection:text-brand-text text-base antialiased">
      {/* Dynamic Navigation */}
      <Navbar scrolled={scrolled} />

      {/* Main Single Page Layout Sections */}
      <main id="main-content-flow" className="flex flex-col">
        {/* Section 1: Hero Header */}
        <Hero />

        {/* Section 2: Sobre mí / Bio */}
        <About />

        {/* Section 3: Clinical Specialties */}
        <Specialties />

        {/* Section 4: Immersive Philosophy Quote block */}
        <Philosophy />

        {/* Section 5: Organic Grid Gallery */}
        <Gallery />

        {/* Section 6: Secure Consultation Contact Form */}
        <Contact />
      </main>

      {/* Footer block */}
      <Footer />
    </div>
  );
}
