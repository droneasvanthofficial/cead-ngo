import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';
import { EASE } from '../lib/motion';

import slideHerbal from '../assets/images/carousel/herbal-training.jpg';
import slideMedicinal from '../assets/images/carousel/medicinal-plants-campaign.jpg';
import slideConference from '../assets/images/carousel/reclaim-conference.jpg';
import slideField from '../assets/images/carousel/field-visit.jpg';
import slideHonour from '../assets/images/carousel/inauguration-honour.jpg';

const SLIDE_MS = 6500;

// Real CEAD programmes; the label is what the slide is *about*, the caption is
// shown beneath the fixed headline so the hero message never fully resets.
// Real CEAD programmes, each paired with a photograph of that work. The label
// says what the slide is about; the caption sits under the fixed headline so
// the hero's message never fully resets between slides.
const slides = [
  {
    id: 'herbal',
    image: slideHerbal,
    label: 'Herbal Training Programme',
    caption: 'Certificates awarded at a CEAD herbal training programme, run with the Pondicherry Institute of Agricultural Sciences.',
    alt: 'Participants holding certificates at a CEAD herbal training programme',
  },
  {
    id: 'medicinal',
    image: slideMedicinal,
    label: 'Medicinal Plants Campaign',
    caption: 'Seedlings handed to farmers at the National Campaign on Ashwagandha, with the National Medicinal Plants Board and Ministry of AYUSH.',
    alt: 'A tray of medicinal plant seedlings handed to a farmer at a campaign event',
  },
  {
    id: 'conference',
    image: slideConference,
    label: 'Research & Conferences',
    caption: 'RECLAIM 2026 — a national conference on earthworm-based composting for land improvement, organised with PIAS.',
    alt: 'Delegates releasing the proceedings at the RECLAIM 2026 national conference',
  },
  {
    id: 'advisory',
    image: slideField,
    label: 'Field Advisory & Soil Health',
    caption: 'Farm visits and on-field advisory support, alongside soil testing from a furnished laboratory.',
    alt: 'CEAD staff and farmers inspecting a standing crop during a field visit',
  },
  {
    id: 'recognition',
    image: slideHonour,
    label: 'Recognition & Public Engagement',
    caption: 'CEAD represented at public inaugurations and official programmes across Puducherry.',
    alt: 'A memento being presented on stage at an inauguration ceremony',
  },
];

// The headline types itself out. Split into segments so "CEAD" keeps its own
// colour while sharing one character counter.
const HEADLINE = [
  { text: 'Welcome to ', className: 'text-cream' },
  { text: 'CEAD', className: 'text-[#f5e14b]' },
];
const HEADLINE_TEXT = HEADLINE.map((part) => part.text).join('');
const TYPE_MS = 95;

/** Reveals `full` one character at a time; returns it whole if motion is reduced. */
function useTypewriter(full, enabled) {
  const [count, setCount] = useState(enabled ? 0 : full.length);

  useEffect(() => {
    if (!enabled) {
      setCount(full.length);
      return undefined;
    }
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= full.length) clearInterval(id);
    }, TYPE_MS);
    return () => clearInterval(id);
  }, [full, enabled]);

  return { count, done: count >= full.length };
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef();
  const { count: typed, done: typedOut } = useTypewriter(HEADLINE_TEXT, !reduced);

  const go = useCallback((next) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  // Auto-advance. Paused on hover/focus, and switched off entirely for
  // visitors who have asked for reduced motion.
  useEffect(() => {
    if (paused || reduced) return undefined;
    timer.current = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(timer.current);
  }, [index, paused, reduced, go]);

  const active = slides[index];

  return (
    <section
      className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-forest-950 sm:min-h-[750px] lg:min-h-[max(780px,calc(100vh-164px))]"
      aria-label="CEAD introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides. Only the crossfade moves — the headline above stays put. */}
      <AnimatePresence initial={false}>
        <motion.img
          key={active.id}
          src={active.image}
          alt={active.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          initial={{ opacity: 0, scale: reduced ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9, ease: 'linear' }, scale: { duration: 7, ease: 'linear' } }}
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      </AnimatePresence>

      {/* Slide arrows, sat against the edges of the photograph itself. */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="group absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 bg-forest-950/30 text-cream/85 backdrop-blur-sm transition-colors duration-200 hover:border-cream/60 hover:bg-forest-950/60 hover:text-cream sm:left-5 sm:flex lg:left-8 lg:h-14 lg:w-14"
      >
        <svg className="h-5 w-5 lg:h-6 lg:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="group absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 bg-forest-950/30 text-cream/85 backdrop-blur-sm transition-colors duration-200 hover:border-cream/60 hover:bg-forest-950/60 hover:text-cream sm:right-5 sm:flex lg:right-8 lg:h-14 lg:w-14"
      >
        <svg className="h-5 w-5 lg:h-6 lg:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Two-stop scrim: dark on the left for text contrast, lighter on the
          right so the photograph stays readable as an image. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-forest-950/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-forest-950 via-forest-950/75 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative w-full py-16 pt-10 sm:pt-12 lg:pt-14">
        <div className="max-w-2xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : 0.09 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: reduced ? 0 : 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
              className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight text-cream leading-none"
              aria-label={HEADLINE_TEXT}
            >
              <span aria-hidden="true">
                {HEADLINE.reduce(
                  (acc, part) => {
                    const shown = part.text.slice(0, Math.max(0, Math.min(part.text.length, typed - acc.used)));
                    acc.used += part.text.length;
                    if (shown) {
                      acc.nodes.push(
                        <span key={part.text} className={part.className}>
                          {shown}
                        </span>,
                      );
                    }
                    return acc;
                  },
                  { used: 0, nodes: [] },
                ).nodes}
                {!typedOut && (
                  <motion.span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-[#f5e14b] align-middle"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
                  />
                )}
              </span>
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: reduced ? 0 : 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
              className="mt-4 font-display text-h3 sm:text-h2 font-semibold text-cream/90 leading-snug"
            >
              Empowering Communities.{' '}
              <span className="text-gold-light">Protecting Nature.</span>{' '}
              Building a Sustainable Future.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: reduced ? 0 : 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
              className="mt-4 max-w-lg font-display text-h2 font-bold italic text-white"
            >
              &mdash; Since 2003
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: reduced ? 0 : 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="mt-5 max-w-xl font-body text-lead text-cream/85 leading-relaxed"
            >
              Working together with communities for sustainable development, environmental protection, and a better future for all.
            </motion.p>

            {/* Crisp highlight points */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: reduced ? 0 : 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="mt-5 flex flex-wrap items-center gap-2 font-body text-caption font-medium text-cream/90"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" /> 200+ Villages Reached
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" /> 500+ Women SHGs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" /> 1,000+ Agri-Graduates Trained
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" /> Soil Testing Labs
              </span>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: reduced ? 0 : 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button to="/about" variant="accent" arrow>Our work since 2003</Button>
              <Button to="/focus-areas" variant="onDark">Explore focus areas</Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Slide caption + controls. Sits below the message so the two never
            compete for the same attention. */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.5, ease: EASE }}
          className="mt-12 border-t border-cream/15 pt-5 lg:mt-16"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0 flex-1" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <p className="font-display text-h4 font-semibold text-cream">{active.label}</p>
                  <p className="mt-1.5 max-w-md font-body text-small text-cream/60">{active.caption}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex shrink-0 items-center">
              {/* Progress ticks double as the slide selector. */}
              <ul className="flex items-center gap-1.5">
                {slides.map((slide, i) => (
                  <li key={slide.id}>
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Show slide ${i + 1}: ${slide.label}`}
                      aria-current={i === index}
                      className="group flex h-8 items-center px-0.5"
                    >
                      <span
                        className={`block h-0.5 rounded-full transition-all duration-500 ease-smooth ${
                          i === index ? 'w-10 bg-gold' : 'w-4 bg-cream/35 group-hover:bg-cream/70'
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
