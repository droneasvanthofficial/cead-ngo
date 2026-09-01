import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { EASE, fadeUp } from '../lib/motion';

import clippingThillaiMail from '../assets/images/real_gallery_7.jpg';
import clippingBotanical from '../assets/images/real_gallery_11.jpg';
import clippingNaturalFarming from '../assets/images/real_gallery_9.jpg';
import clippingSheet from '../assets/images/real_gallery_3.jpg';

/**
 * Press cuttings held by CEAD. Each entry describes only what is legible on the
 * clipping itself — publication, date and subject. Nothing here is paraphrased
 * beyond what the scan shows.
 */
const clippings = [
  {
    id: 'thillai-mail',
    image: clippingThillaiMail,
    publication: 'Thillai Mail',
    date: '17 December 2023',
    title: 'Awareness programme on formalising micro food processing enterprises',
    description:
      'Full-page report on a CEAD awareness programme for agriculture-based entrepreneurs, covering routes to self-employment for women, bank credit and government scheme access.',
    alt: 'Front page of the Tamil daily Thillai Mail, dated 17 December 2023, reporting a CEAD awareness programme, with a photograph of the session',
  },
  {
    id: 'botanical-garden',
    image: clippingBotanical,
    publication: 'Tamil daily, Puducherry',
    date: 'Undated cutting',
    title: 'Agricultural college students carry out clean-up at the Botanical Garden',
    description:
      'Report on a student volunteering drive at the Puducherry Botanical Garden, clearing fallen timber and garden waste.',
    alt: 'Newspaper cutting in Tamil with a photograph of students clearing fallen branches at the Puducherry Botanical Garden',
  },
  {
    id: 'natural-farming',
    image: clippingNaturalFarming,
    publication: 'Tamil daily',
    date: '16 February 2019',
    title: 'Notice for a natural farming training programme',
    description:
      'A short listing announcing hands-on training in farm design, compost preparation and natural farm input production.',
    alt: 'Short Tamil newspaper cutting dated 16 February 2019 announcing a natural farming training programme',
  },
  {
    id: 'contact-sheet',
    image: clippingSheet,
    publication: 'CEAD archive',
    date: 'Compiled',
    title: 'Event photographs and press cuttings',
    description:
      'A compiled sheet of CEAD field programmes, college training sessions, paddy mechanisation demonstrations and associated press cuttings.',
    alt: 'A compiled sheet of twelve small photographs and newspaper cuttings from CEAD events and training programmes',
  },
];

/**
 * Documents CEAD has published. Every entry maps to a real file in
 * `public/reports/` — filenames must match exactly, spaces and parentheses
 * included.
 */
const publications = [
  {
    title: 'Valedictory event report',
    date: '17 November 2025',
    kind: 'Event report',
    description:
      'Valedictory celebrations, certificate distribution to trainees, and stakeholder addresses.',
    href: '/reports/Valedictory_Report_17.11.25_(New).docx',
    type: 'DOCX',
  },
  {
    title: 'Mahila Kisan Sashakikaran Pariyojana — skill training',
    date: '23–31 December 2024',
    kind: 'Training report',
    description:
      'Skill training conducted for rural women farmers under the Mahila Kisan Sashakikaran Pariyojana.',
    href: '/reports/MAHILA_KISAN_SASHAKIKARAN_PARIYOJANA_-_SKILL_TRAINING_(23.12.2024_TO_31.12.2024).docx',
    type: 'DOCX',
  },
  {
    title: 'Press and event photographs',
    date: 'Compiled',
    kind: 'Photo record',
    description:
      'Photographs from CEAD events, field programmes and press appearances collected into one document.',
    href: '/reports/news_photos.docx',
    type: 'DOCX',
  },
];

const channels = [
  {
    label: 'YouTube',
    detail: 'News features and video coverage of CEAD programmes.',
    href: 'https://www.youtube.com/results?search_query=CEAD+NGO+Puducherry',
    action: 'Search on YouTube',
  },
  {
    label: 'Facebook',
    detail: 'Updates from training batches, field visits and events.',
    href: 'https://facebook.com',
    action: 'Open Facebook',
  },
];

/** Enlarged view of a single clipping, so the Tamil text is actually readable. */
function ClippingViewer({ clipping, onClose }) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {clipping && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${clipping.publication}: ${clipping.title}`}
          className="fixed inset-0 z-[70] flex flex-col bg-forest-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
        >
          <div className="flex items-start justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="font-body text-caption uppercase tracking-[0.16em] text-gold-light">
                {clipping.publication} · {clipping.date}
              </p>
              <p className="mt-1 font-body text-small text-cream/80">{clipping.title}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close clipping viewer"
              autoFocus
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-4 pb-6 sm:px-6">
            <motion.img
              src={clipping.image}
              alt={clipping.alt}
              className="mx-auto max-w-4xl rounded-lg bg-white"
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: EASE }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MediaSection() {
  const [active, setActive] = useState(null);

  return (
    <Section id="media" tone="cream" aria-labelledby="media-heading">
      <SectionHeader
        id="media-heading"
        eyebrow="News & media"
        title="Reports, records and press coverage"
        lead="CEAD publishes its programme reporting openly. These are the cuttings, documents and channels where the work is recorded."
      />

      {/* Press cuttings */}
      <div className="mt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="font-display text-h3 font-semibold text-forest-900">Press cuttings</h3>
          <span className="font-body text-caption font-medium uppercase tracking-[0.12em] text-soil-500">
            From the CEAD archive
          </span>
        </div>

        <RevealGroup step={0.06} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clippings.map((clipping) => (
            <RevealItem key={clipping.id}>
              <button
                type="button"
                onClick={() => setActive(clipping)}
                className="card-interactive group flex h-full w-full flex-col overflow-hidden text-left"
              >
                <span className="block aspect-[4/3] overflow-hidden bg-soil-100">
                  <img
                    src={clipping.image}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth motion-safe:group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600">
                    {clipping.publication}
                  </span>
                  <span className="mt-1.5 font-body text-caption text-soil-500">{clipping.date}</span>
                  <span className="mt-3 font-display text-h4 font-semibold leading-snug text-forest-900">
                    {clipping.title}
                  </span>
                  <span className="mt-2.5 flex-1 font-body text-caption leading-relaxed text-soil-600">
                    {clipping.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 font-body text-caption font-semibold text-forest-700">
                    View cutting
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-x-1"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12h15m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </span>
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Publications + channels */}
      <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <h3 className="border-b border-line pb-4 font-display text-h3 font-semibold text-forest-900">
            Recent publications
          </h3>

          <RevealGroup as="ul" step={0.06} className="mt-2" role="list">
            {publications.map((item) => (
              <RevealItem as="li" key={item.href}>
                <a
                  href={item.href}
                  download
                  className="group grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-3">
                    <p className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600">
                      {item.kind}
                    </p>
                    <p className="mt-1.5 font-body text-caption text-soil-500">{item.date}</p>
                  </div>
                  <div className="sm:col-span-9">
                    <h4 className="font-display text-h4 font-semibold text-forest-900 transition-colors duration-200 group-hover:text-forest-600">
                      {item.title}
                    </h4>
                    <p className="mt-2 font-body text-small leading-relaxed text-soil-600">
                      {item.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 font-body text-caption font-semibold text-forest-700">
                      Download {item.type}
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-y-0.5"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                      </svg>
                    </span>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal variant={fadeUp} className="mt-8">
            <Button to="/annual-report" variant="secondary" arrow>
              Browse all annual reports
            </Button>
          </Reveal>
        </div>

        <aside className="lg:col-span-4">
          <h3 className="border-b border-line pb-4 font-display text-h3 font-semibold text-forest-900">
            Follow CEAD
          </h3>
          <RevealGroup className="mt-6 space-y-6">
            {channels.map((channel) => (
              <RevealItem key={channel.label}>
                <p className="font-display text-h4 font-semibold text-forest-900">{channel.label}</p>
                <p className="mt-2 font-body text-small leading-relaxed text-soil-600">
                  {channel.detail}
                </p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-3"
                >
                  {channel.action}
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal variant={fadeUp} className="mt-10 rounded-xl bg-cream-dark p-6">
            <p className="font-display text-h4 font-semibold text-forest-900">Press enquiries</p>
            <p className="mt-2 font-body text-small leading-relaxed text-soil-600">
              For interviews, photographs or programme details, contact the CEAD office directly.
            </p>
            <a href="mailto:ceadngo@gmail.com" className="link-underline mt-3 inline-block font-body text-small font-semibold">
              ceadngo@gmail.com
            </a>
          </Reveal>
        </aside>
      </div>

      <ClippingViewer clipping={active} onClose={() => setActive(null)} />
    </Section>
  );
}
