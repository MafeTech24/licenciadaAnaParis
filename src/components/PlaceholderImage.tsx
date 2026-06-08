/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Link2, RotateCcw, Image as ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  id: string;
  label: string;
  altText: string;
  organicClass: string;
  rotationClass?: string;
  aspectClass?: string;
  defaultSrc?: string;
}

export default function PlaceholderImage({
  id,
  label,
  altText,
  organicClass,
  rotationClass = '',
  aspectClass = 'aspect-[3/4]',
  defaultSrc,
}: PlaceholderImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persisted image on mount or default if provided
  useEffect(() => {
    const saved = localStorage.getItem(`ana_photo_${id}`);
    if (saved) {
      setImageSrc(saved);
    } else if (defaultSrc) {
      setImageSrc(defaultSrc);
    }
  }, [id, defaultSrc]);

  // Handle URL input submit
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setImageSrc(inputUrl.trim());
      localStorage.setItem(`ana_photo_${id}`, inputUrl.trim());
      setShowConfig(false);
      setInputUrl('');
    }
  };

  // Convert uploaded file to base64
  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido (PNG, JPG, etc).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
        try {
          localStorage.setItem(`ana_photo_${id}`, reader.result);
        } catch (e) {
          console.warn('Storage quota exceeded, setting temporarily in state only');
        }
        setShowConfig(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const resetImage = () => {
    if (confirm('¿Restablecer al diseño original?')) {
      setImageSrc(defaultSrc || null);
      localStorage.removeItem(`ana_photo_${id}`);
    }
  };

  return (
    <div
      className={`relative group ${aspectClass} w-full transition-all duration-500 shadow-sm hover:shadow-md ${rotationClass}`}
      id={`container-${id}`}
    >
      {/* Real Image State vs Botanical Sketch State */}
      {imageSrc ? (
        <div className={`w-full h-full overflow-hidden ${organicClass} relative`}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`w-full h-full ${organicClass} bg-brand-bg-sage border border-brand-sage/20 relative flex flex-col items-center justify-between p-6 transition-all duration-300 ${
            dragOver ? 'bg-brand-sage/20 border-brand-sage-dark' : ''
          }`}
        >
          {/* Subtle Elegant Botanical SVG Line Drawing (Feminine and Therapeutic Concept) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none select-none z-0">
            <svg
              viewBox="0 0 100 120"
              className="w-[60%] h-[60%] text-brand-text-muted/15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Stem */}
              <path d="M50 110 C50 90, 48 50, 52 15" />
              {/* Leaf 1 left */}
              <path d="M50 90 C32 82, 28 65, 50 72" fill="currentColor" fillOpacity="0.04" />
              <path d="M32 82 Q38 80, 50 72" />
              {/* Leaf 2 right */}
              <path d="M51 78 C68 70, 72 55, 51 62" fill="currentColor" fillOpacity="0.04" />
              <path d="M68 70 Q62 68, 51 62" />
              {/* Leaf 3 left */}
              <path d="M50 64 C35 55, 30 40, 51 46" fill="currentColor" fillOpacity="0.04" />
              <path d="M35 55 Q41 53, 51 46" />
              {/* Leaf 4 right */}
              <path d="M52 50 C65 40, 70 28, 52 35" fill="currentColor" fillOpacity="0.04" />
              <path d="M65 40 Q59 38, 52 35" />
              {/* Bud top */}
              <path d="M52 25 C45 15, 55 15, 52 15" fill="currentColor" />
            </svg>
          </div>

          {/* Floating Subtle Circles in corners */}
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full border border-brand-sage/10 pointer-events-none" />
          <div className="absolute bottom-8 right-6 w-16 h-16 rounded-full border border-brand-accent/5 pointer-events-none" />

          {/* Top Label */}
          <div className="z-10 text-center mt-3">
            <span className="font-display italic text-lg text-brand-text-muted block font-medium">
              Lic. Ana Paris
            </span>
          </div>

          {/* Core Descriptive Label */}
          <div className="z-10 text-center px-4 max-w-[240px]">
            <p className="font-display text-2xl text-brand-text/80 tracking-wide font-medium">
              [ {label} ]
            </p>
            <p className="text-xs font-body tracking-[0.06em] text-brand-text-muted/70 uppercase mt-2">
              Boceto Orgánico
            </p>
          </div>

          {/* Bottom Prompt helper */}
          <div className="z-10 text-center pb-2">
            <p className="text-[11px] text-brand-text-muted/60 font-body">
              Arrastrá tu foto o hacé clic arriba para personalizar
            </p>
          </div>
        </div>
      )}

      {/* Floating Image Actions Overlay */}
      <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="p-2.5 bg-brand-cream/95 text-brand-sage-dark rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all text-xs flex items-center justify-center border border-brand-sage/20 cursor-pointer"
          title="Configurar fotografía real"
          aria-label="Cargar fotografía"
        >
          <Camera className="w-4 h-4" />
        </button>
        {imageSrc && (
          <button
            onClick={resetImage}
            className="p-2.5 bg-brand-cream/95 text-brand-accent rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all text-xs flex items-center justify-center border border-brand-sage/20 cursor-pointer"
            title="Quitar foto y usar boceto"
            aria-label="Restaurar ilustración"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Embedded Mini Configuration Modal (Simple, safe layout overlay) */}
      {showConfig && (
        <div className="absolute inset-0 bg-brand-cream/98 rounded-xl border border-brand-sage/30 p-5 flex flex-col justify-between z-40 animate-fade-in shadow-2xl">
          <div className="flex items-center justify-between border-b border-brand-sage/10 pb-2">
            <h4 className="font-display font-semibold italic text-base text-brand-text">
              Fotografía para {label}
            </h4>
            <button
              onClick={() => setShowConfig(false)}
              className="text-xs text-brand-text-muted hover:text-brand-text px-1.5 py-1"
            >
              Cerrar
            </button>
          </div>

          <div className="space-y-3 my-auto">
            {/* Option 1: File Upload */}
            <div className="border border-dashed border-brand-sage/30 rounded-lg p-3 bg-brand-bg-sage hover:bg-brand-sage/15 transition-colors text-center">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                id={`upload-file-field-${id}`}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              >
                <Upload className="w-5 h-5 text-brand-sage-dark" />
                <span className="text-xs text-brand-text font-medium">Subir archivo de foto</span>
                <span className="text-[10px] text-brand-text-muted">JPG o PNG desde tu dispositivo</span>
              </button>
            </div>

            <div className="flex items-center my-1 select-none pointer-events-none">
              <span className="w-full h-[1px] bg-brand-sage/10" />
              <span className="px-2 text-[10px] text-brand-text-muted uppercase tracking-wider">o</span>
              <span className="w-full h-[1px] bg-brand-sage/10" />
            </div>

            {/* Option 2: Image URL */}
            <form onSubmit={handleUrlSubmit} className="space-y-2">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-brand-text-muted/65">
                  <Link2 className="w-3.5 h-3.5" />
                </span>
                <input
                  type="url"
                  placeholder="Pegar URL de la imagen en internet (http...)"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full text-xs pl-8 pr-2 py-1.5 rounded-lg border border-brand-sage/30 bg-white text-brand-text focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage"
                />
              </div>
              <button
                type="submit"
                className="w-full text-center py-1.5 text-xs font-semibold rounded-lg bg-brand-sage-dark text-white hover:bg-brand-bg-dark transition-all duration-200 cursor-pointer"
              >
                Confirmar URL
              </button>
            </form>
          </div>

          <div className="text-[10px] text-brand-text-muted/70 text-center pt-2 border-t border-brand-sage/10">
            Ajustá el diseño cargando los archivos de Ana Paris.
          </div>
        </div>
      )}
    </div>
  );
}
