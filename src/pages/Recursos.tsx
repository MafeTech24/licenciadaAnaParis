/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag, X, Volume2, ChevronDown, ChevronUp, ArrowRight, Sparkles, Users, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import portadaImg from '../assets/portada.png';
import portadaGuiaPractica from '../assets/portadaGuiaPracticaRespuestas.png';
import portadaMindfulness from '../assets/portadaMindfulness.png';

// ─── Tipos ───────────────────────────────────────────────────────────────────

type ProductId = 'ebook' | 'guia' | 'audio' | 'mindfulness';

interface Product {
  id: ProductId;
  badge: string;
  badgeStyle: 'green' | 'gold';
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string;
  extras?: { label: string; items: string[] };
}

interface Pack {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  hotmartUrl: string;
  items: ProductId[];
}

// ─── Datos ───────────────────────────────────────────────────────────────────

const PRODUCTS: Record<ProductId, Product> = {
  ebook: {
    id: 'ebook',
    badge: '📘 E-Book',
    badgeStyle: 'green',
    title: 'Intervención familiar en adicciones',
    subtitle: 'Cómo dejar de sostener el caos sin perderte en el intento',
    image: portadaImg,
    imageAlt: 'Portada del E-book Intervención familiar en adicciones escrito por Lic. Ana Paris',
    description:
      'Una guía de 5 capítulos para familiares que acompañan situaciones de consumo problemático. Desde entender cómo la adicción impacta en toda la familia, hasta aprender a comunicarse sin culpa, poner límites reales y cuidarse en el proceso. No hay fórmulas mágicas — hay claridad.',
    extras: {
      label: 'Índice',
      items: [
        'Introducción: Esto también te está pasando a vos',
        'Cap. 1: Cómo la adicción empieza a vivir en toda la familia',
        'Cap. 2: Cuando ayudar se convierte en sostener el problema',
        'Cap. 3: El punto de quiebre — cuándo y cómo intervenir',
        'Cap. 4: Comunicarte sin culpa, miedo ni ataques',
        'Cap. 5: Acompañar sin desaparecer — cómo cuidarte en medio del caos',
      ],
    },
  },
  guia: {
    id: 'guia',
    badge: '📋 Guía Práctica',
    badgeStyle: 'gold',
    title: 'Guía práctica de respuestas y acciones en adicciones',
    subtitle: 'Intervenir desde el amor sin sostener la adicción',
    image: portadaGuiaPractica,
    imageAlt: 'Portada de la Guía práctica de respuestas y acciones en adicciones por Lic. Ana Paris',
    description:
      'Una guía de acción inmediata para saber exactamente qué decir y qué hacer en los momentos más difíciles. Frases manipuladoras, extorsiones, chantajes, presiones — con respuestas concretas y claves emocionales para cada situación.',
  },
  audio: {
    id: 'audio',
    badge: '🎧 Audiolibro',
    badgeStyle: 'green',
    title: 'Intervención familiar en adicciones',
    subtitle: 'Versión audio — escuchá el libro completo',
    image: portadaImg,
    imageAlt: 'Portada del Audiolibro Intervención familiar en adicciones narrado por Lic. Ana Paris',
    description:
      'El contenido completo del e-book en formato audio. Aproximadamente 1h 40min narrados por la autora. Para escucharlo en el auto, mientras caminás o en cualquier momento que necesitás acompañamiento sin tener que leer.',
  },
  mindfulness: {
    id: 'mindfulness',
    badge: '🧘 Mindfulness',
    badgeStyle: 'gold',
    title: 'Mindfulness para superar el bloqueo y la extorsión',
    subtitle: 'Herramientas de regulación emocional para familiares',
    image: portadaMindfulness,
    imageAlt: 'Portada de la Guía de Mindfulness para familiares en adicciones por Lic. Ana Paris',
    description:
      'No se trata de relajarte — se trata de desacoplar la reacción emocional automática para que puedas tomar decisiones desde la seguridad y no desde el pánico. Técnicas concretas para los momentos más difíciles: la crisis aguda, la extorsión, el miedo que paraliza.',
    extras: {
      label: 'Técnicas incluidas',
      items: [
        'Técnica de anclaje 5-4-3-2-1 para la crisis aguda',
        'Práctica de la Pausa Sagrada',
        'Autocompasión Radical — método RAIN',
        'La técnica de La Montaña para la estabilidad',
        'Escaneo Corporal de Tensión y Suelte',
        'Visualización del Observador en la Orilla',
      ],
    },
  },
};

const PACKS: Pack[] = [
  {
    id: 'pack-ebook',
    badge: '✦ Pack E-Book',
    title: 'Pack E-Book + Guías',
    subtitle:
      'Todo lo que necesitás leer para acompañar desde la claridad y el cuidado propio.',
    hotmartUrl: 'https://go.hotmart.com/V106250937W',
    items: ['ebook', 'guia', 'mindfulness'],
  },
  {
    id: 'pack-audio',
    badge: '✦ Pack Audiolibro',
    title: 'Pack Audiolibro + Guías',
    subtitle:
      'Para escuchar en el auto, caminando o cuando necesitás acompañamiento sin tener que leer.',
    hotmartUrl: 'https://go.hotmart.com/R106296900H',
    items: ['audio', 'guia', 'mindfulness'],
  },
];

// ─── Componente Modal ─────────────────────────────────────────────────────────

function ProductModal({
  product,
  packCtaLabel,
  packCtaUrl,
  onClose,
}: {
  product: Product;
  packCtaLabel: string;
  packCtaUrl: string;
  onClose: () => void;
}) {
  const [extrasOpen, setExtrasOpen] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const badgeClass =
    product.badgeStyle === 'green'
      ? 'bg-[#EDF2EC] text-[#3D6B38] border border-brand-sage/20'
      : 'bg-brand-cream text-brand-accent border border-brand-accent/20';

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-brand-bg-dark/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 bg-brand-bg rounded-[20px] shadow-2xl w-full max-w-[560px] max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-bg-dark/10 hover:bg-brand-bg-dark/20 text-brand-text transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Imagen */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-[20px] bg-brand-bg-sage/40 flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="h-full object-contain drop-shadow-md"
            />
            {product.id === 'audio' && (
              <span className="absolute bottom-4 right-4 p-2 bg-brand-accent/90 text-white rounded-full shadow">
                <Volume2 className="w-4 h-4" />
              </span>
            )}
          </div>

          {/* Contenido */}
          <div className="p-6 sm:p-8">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${badgeClass}`}>
              {product.badge}
            </span>

            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-bg-dark leading-snug mb-1">
              {product.title}
            </h2>
            <p className="text-sm font-body font-medium text-brand-accent mb-4">
              {product.subtitle}
            </p>
            <p className="text-sm sm:text-base font-body font-light text-brand-text-muted leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Extras colapsables (índice / técnicas) */}
            {product.extras && (
              <div className="mb-6">
                <button
                  onClick={() => setExtrasOpen(!extrasOpen)}
                  className="flex items-center justify-between w-full py-2.5 text-xs sm:text-sm font-semibold text-brand-sage-dark hover:text-brand-bg-dark transition-colors border-t border-b border-brand-sage/15 focus:outline-none cursor-pointer"
                >
                  <span>{extrasOpen ? `Ocultar ${product.extras.label.toLowerCase()}` : `Ver ${product.extras.label.toLowerCase()}`}</span>
                  {extrasOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {extrasOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden py-3 space-y-2.5"
                    >
                      {product.extras.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm font-body font-light text-brand-text/90 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* CTA — lleva al pack */}
            <a
              href={packCtaUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-dark hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              {packCtaLabel}
            </a>
            <p className="text-center text-xs text-brand-text-muted/80 mt-2.5">
              Este material se adquiere como parte de un pack
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Componente Principal ─────────────────────────────────────────────────────

export default function Recursos() {
  const [modalProduct, setModalProduct] = useState<ProductId | null>(null);
  const [modalPackUrl, setModalPackUrl] = useState<string>('');
  const [modalPackLabel, setModalPackLabel] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openModal = (productId: ProductId, packUrl: string, packLabel: string) => {
    setModalProduct(productId);
    setModalPackUrl(packUrl);
    setModalPackLabel(packLabel);
  };

  const closeModal = () => setModalProduct(null);

  return (
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen text-brand-text select-none relative">
      <SEOHead
        title="Recursos y Guías en Adicciones y Mindfulness | Lic. Ana Paris"
        description="E-books, audiolibros y guías prácticas de intervención familiar en adicciones y regulación emocional creados por la Lic. Ana Paris."
        canonicalUrl="https://licenciadaanaparis.com/recursos"
        keywords="libro adicciones familia, audiolibro intervención adicciones, guía mindfulness adicciones, recursos adicciones Córdoba, Ana Paris libros"
      />

      {/* Blobs decorativos */}
      <div className="absolute top-[12%] right-[5%] w-72 h-72 rounded-full bg-brand-bg-sage opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[25%] left-[5%] w-80 h-80 rounded-full bg-brand-cream opacity-55 blur-3xl pointer-events-none" />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Recursos Digitales' }]} />

      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            Recursos
          </span>
          <h1 className="font-display font-semibold italic text-4xl sm:text-[44px] leading-tight text-brand-text mb-6">
            Herramientas y Materiales
          </h1>
          <p className="font-body font-light text-brand-text-muted text-base sm:text-lg leading-relaxed">
            Elegí el formato que mejor se adapte a vos. Cada pack incluye las guías de apoyo para que tengas todo lo que necesitás.
          </p>
        </motion.div>

        {/* ── ZONA 1: PACKS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {PACKS.map((pack, packIdx) => (
            <motion.div
              key={pack.id}
              className="bg-brand-bg-dark text-brand-cream rounded-[20px] p-7 sm:p-8 relative overflow-hidden border border-brand-sage/10 shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 + packIdx * 0.1 }}
            >
              {/* Círculo decorativo */}
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full border border-brand-accent/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/30 text-xs font-semibold uppercase tracking-widest mb-4 self-start">
                  <Sparkles className="w-3.5 h-3.5" />
                  {pack.badge}
                </span>

                <h2 className="font-display font-semibold italic text-2xl sm:text-3xl leading-tight text-brand-cream mb-2">
                  {pack.title}
                </h2>
                <p className="font-body font-light text-brand-cream/75 text-sm sm:text-base leading-relaxed mb-6">
                  {pack.subtitle}
                </p>

                {/* Ítems del pack */}
                <div className="space-y-3 mb-7 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent/80 mb-3">
                    Incluye
                  </p>
                  {pack.items.map((productId) => {
                    const prod = PRODUCTS[productId];
                    return (
                      <div
                        key={productId}
                        className="flex items-center gap-3 px-3.5 py-3 bg-white/5 border border-white/8 rounded-[10px] group"
                      >
                        <span className="text-base">{prod.badge.split(' ')[0]}</span>
                        <span className="flex-1 text-xs sm:text-sm font-body text-brand-cream/90 leading-snug">
                          {prod.title}
                        </span>
                        <button
                          onClick={() => openModal(productId, pack.hotmartUrl, `Adquirir ${pack.title}`)}
                          className="text-xs font-semibold text-brand-accent/70 hover:text-brand-accent underline underline-offset-2 transition-colors cursor-pointer shrink-0"
                        >
                          Ver detalle →
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* CTA pack */}
                <a
                  href={pack.hotmartUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-accent text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#A95A2F] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adquirir Pack
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── DIVISOR ── */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="flex-1 h-px bg-brand-sage/20" />
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-text-muted">
            ¿Qué incluye cada material?
          </span>
          <div className="flex-1 h-px bg-brand-sage/20" />
        </motion.div>

        {/* ── ZONA 2: PRODUCTOS (exploración) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Object.values(PRODUCTS) as Product[]).map((product, idx) => {
            // Determinar qué pack abre el modal para este producto
            const pack = PACKS.find((p) => p.items.includes(product.id)) ?? PACKS[0];
            const badgeClass =
              product.badgeStyle === 'green'
                ? 'bg-[#EDF2EC] text-[#3D6B38] border border-brand-sage/20'
                : 'bg-brand-cream text-brand-accent border border-brand-accent/20';

            return (
              <motion.div
                key={product.id}
                className="bg-[#FAF6EE] rounded-[14px] border border-brand-sage/20 shadow-sm overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 + idx * 0.08 }}
              >
                {/* Portada */}
                <div className="relative aspect-[3/4] w-full bg-brand-bg-sage/40 flex items-center justify-center p-5 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full object-contain rounded shadow-sm"
                  />
                  {product.id === 'audio' && (
                    <span className="absolute bottom-2 right-2 p-1.5 bg-brand-accent/90 text-white rounded-full shadow">
                      <Volume2 className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 self-start ${badgeClass}`}>
                    {product.badge}
                  </span>
                  <p className="font-display font-semibold text-base text-brand-bg-dark leading-snug mb-1 line-clamp-2">
                    {product.title}
                  </p>
                  <p className="text-xs font-body font-light text-brand-text-muted leading-relaxed mb-4 flex-1 line-clamp-3">
                    {product.description}
                  </p>

                  <button
                    onClick={() => openModal(product.id, pack.hotmartUrl, `Adquirir ${pack.title}`)}
                    className="w-full py-2.5 rounded-full border border-brand-sage/40 text-brand-sage-dark text-xs font-semibold uppercase tracking-wider hover:bg-brand-bg-sage hover:border-brand-sage-dark transition-all duration-200 cursor-pointer"
                  >
                    {product.extras ? 'Ver índice completo' : 'Ver detalle'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cross-linking navigation section */}
        <div className="mt-16 bg-brand-bg-dark text-brand-cream p-8 rounded-[16px] border border-brand-sage/10 shadow-sm text-center">
          <h3 className="font-display font-medium text-xl text-brand-cream mb-2">
            ¿Querés un acompañamiento guiado y personalizado?
          </h3>
          <p className="font-body font-light text-xs sm:text-sm text-brand-cream/70 max-w-xl mx-auto mb-6">
            Además de los materiales digitales, la Lic. Ana Paris coordina programas de acompañamiento grupal y sesiones individuales VIP presenciales en Córdoba y online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/talleres"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A95A2F] transition-all duration-300 shadow-sm"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Conocer Programas y Talleres</span>
            </Link>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-sage/40 text-brand-cream hover:bg-brand-bg-sage hover:text-brand-sage-dark text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-sage" />
              <span>Consultorio en Córdoba Capital</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ── MODAL ── */}
      {modalProduct && (
        <ProductModal
          product={PRODUCTS[modalProduct]}
          packCtaUrl={modalPackUrl}
          packCtaLabel={modalPackLabel}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
