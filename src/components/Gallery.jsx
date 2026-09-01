import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import { RevealGroup, RevealItem } from './ui/Reveal';
import { EASE } from '../lib/motion';

import trainingHall from '../assets/images/real_gallery_5.jpg';
import acabcBatch from '../assets/images/real_gallery_12.jpg';
import acabcOpening from '../assets/images/real_gallery_10.jpg';
import paddyHandling from '../assets/images/real_gallery_4.jpg';
import compostDemo from '../assets/images/real_gallery_6.jpg';
import fieldVisit from '../assets/images/real_gallery_8.jpg';
import plantationPlot from '../assets/images/real_gallery_1.jpg';

/**
 * Photographs of CEAD's own work. Captions describe what is actually in each
 * frame — press clippings live in the Media section instead, so this stays a
 * record of fieldwork. `wide` items span two columns to give the grid rhythm.
 */
const galleryImages = [
  {
    src: trainingHall,
    caption: 'Women’s training session',
    alt: 'A room of rural women attending a CEAD training session, with the centre’s banner on the wall behind the speaker',
    wide: true,
  },
  {
    src: acabcOpening,
    caption: 'Agri Clinic training opening',
    alt: 'A speaker addressing the opening of CEAD’s 45-day Agri Clinic and Agri Business Centres training programme',
  },
  {
    src: paddyHandling,
    caption: 'Harvest handling session',
    alt: 'Women and students sorting and bagging harvested paddy at a CEAD training session',
  },
  {
    src: compostDemo,
    caption: 'Composting demonstration',
    alt: 'Students gathered around an open composting bed during an outdoor CEAD demonstration',
    wide: true,
  },
  {
    src: fieldVisit,
    caption: 'Field advisory visit',
    alt: 'CEAD staff reviewing paperwork with a farmer at the edge of a flooded paddy field',
  },
  {
    src: acabcBatch,
    caption: 'Training batch',
    alt: 'Group photograph of the trainees and staff of a CEAD Agri Clinic and Agri Business Centres batch',
  },
  {
    src: plantationPlot,
    caption: 'Plantation plot',
    alt: 'A newly planted demonstration plot with labelled saplings laid out in marked rows',
    wide: true,
  },
];

/** Full-screen viewer with keyboard paging. */
function Lightbox({ index, onClose, onStep }) {
  const reduced = useReducedMotion();
  const open = index !== null;
  const image = open ? galleryImages[index] : null;

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, onStep]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${index + 1} of ${galleryImages.length}: ${image.caption}`}
          className="fixed inset-0 z-[70] flex flex-col bg-forest-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <p className="font-body text-small text-cream/70">
              <span className="tabular-nums">{index + 1}</span> / {galleryImages.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photo viewer"
              autoFocus
              className="flex h-11 w-11 items-center justify-center rounded-lg text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center gap-2 px-2 sm:gap-4 sm:px-6">
            <button
              type="button"
              onClick={() => onStep(-1)}
              aria-label="Previous photo"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:bg-cream/10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="mx-auto max-h-full min-h-0 w-auto max-w-full flex-1 rounded-lg object-contain"
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={() => onStep(1)}
              aria-label="Next photo"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:bg-cream/10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="px-6 py-5 text-center font-body text-small text-cream/80">{image.alt}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);

  const step = useCallback((delta) => {
    setActive((prev) => (prev === null ? prev : (prev + delta + galleryImages.length) % galleryImages.length));
  }, []);

  return (
    <Section id="gallery" tone="warm" aria-labelledby="gallery-heading">
      <SectionHeader
        id="gallery-heading"
        eyebrow="Fieldwork"
        title="Photographs from the villages we work in"
        lead="Training batches, self-help group sessions, farm demonstrations and advisory visits across Puducherry and Tamil Nadu."
      />

      <RevealGroup
        step={0.05}
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {galleryImages.map((image, index) => (
          <RevealItem key={image.caption} className={image.wide ? 'sm:col-span-2' : ''}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block h-full w-full overflow-hidden rounded-xl bg-forest-900 text-left"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-smooth motion-safe:group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95"
                aria-hidden="true"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span className="font-body text-small font-semibold text-cream">{image.caption}</span>
                <span
                  className="flex h-8 w-8 shrink-0 translate-y-1 items-center justify-center rounded-full bg-cream/15 text-cream opacity-0 backdrop-blur-sm transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0-4h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </span>
              </span>
              <span className="sr-only">Open photo: {image.alt}</span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <Lightbox index={active} onClose={() => setActive(null)} onStep={step} />
    </Section>
  );
}
