import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import AgroTourismBooking from './AgroTourismBooking';
import { RevealGroup, RevealItem } from './ui/Reveal';
import { EASE } from '../lib/motion';
import { focusAreas } from '../data/focusAreas';

/** The URL hash selects a tab, so the navbar's Focus Areas menu can deep-link. */
function keyFromHash(hash) {
  const key = hash.replace('#', '');
  return focusAreas.some((area) => area.key === key) ? key : null;
}

export default function FocusAreas() {
  const reduced = useReducedMotion();
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(() => keyFromHash(hash) ?? focusAreas[0].key);
  const active = focusAreas.find((area) => area.key === activeKey) ?? focusAreas[0];

  // Follow the hash on every navigation, including menu clicks made while
  // already on this page — those change only the hash, not the route.
  useEffect(() => {
    const key = keyFromHash(hash);
    if (!key) return;
    setActiveKey(key);
  }, [hash]);

  const selectTab = (key) => {
    setActiveKey(key);
    // Keep the URL shareable without pushing a history entry per tab.
    navigate(`${pathname}#${key}`, { replace: true });
  };

  return (
    <Section id="focus-areas" tone="cream" aria-labelledby="focus-areas-heading">
      <SectionHeader
        id="focus-areas-heading"
        eyebrow="What we do"
        title="Five areas of work, one continuous relationship with the village"
        lead="CEAD's programmes are designed to reinforce each other — a household that joins a self-help group also gains access to training, inputs and a route to market."
      />

      {/* Tabs. Horizontally scrollable on narrow screens rather than wrapping
          into an uneven block. */}
      <div className="relative mt-12 border-b border-line">
        {focusAreas.map((area) => (
          <span
            key={`anchor-${area.key}`}
            id={area.key}
            aria-hidden="true"
            className="absolute top-0 block h-0 w-0 scroll-mt-[180px]"
          />
        ))}
        <div
          role="tablist"
          aria-label="Focus areas"
          className="-mb-px flex gap-1 overflow-x-auto pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {focusAreas.map((area) => {
            const isActive = area.key === activeKey;
            return (
              <button
                key={area.key}
                type="button"
                role="tab"
                id={`tab-${area.key}`}
                aria-selected={isActive}
                aria-controls={`panel-${area.key}`}
                onClick={() => selectTab(area.key)}
                className={`relative whitespace-nowrap px-4 py-3.5 font-body text-small font-semibold transition-colors duration-200 ${
                  isActive ? 'text-forest-800' : 'text-soil-500 hover:text-forest-700'
                }`}
              >
                {area.label}
                {isActive && (
                  <motion.span
                    layoutId="focus-tab-underline"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-forest-700"
                    transition={reduced ? { duration: 0 } : { duration: 0.3, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.key}
          id={`panel-${active.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.key}`}
          tabIndex={-1}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="pt-12"
        >
          {/* Area introduction, led by a photograph of that work. */}
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <figure className="overflow-hidden rounded-2xl lg:col-span-5">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <div className="lg:col-span-7">
              <h3 className="font-display text-h2 font-semibold text-forest-900">{active.title}</h3>
              <p className="mt-4 font-body text-lead text-soil-600">{active.summary}</p>

              {active.note && (
                <div className="mt-7 border-l-2 border-forest-300 pl-6">
                  <p className="font-body text-small leading-relaxed text-soil-700">
                    {active.note.body}
                  </p>
                  <p className="mt-3 font-body text-small italic text-forest-700">
                    {active.note.aside}
                  </p>
                </div>
              )}
            </div>
          </div>

          {active.booking && (
            <div className="mt-14">
              <AgroTourismBooking />
            </div>
          )}

          {/* Programmes, listed rather than tiled. */}
          {active.groups.map((group) => (
            <div key={group.category} className="mt-14">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
                <h4 className="font-display text-h3 font-semibold text-forest-900">
                  {group.category}
                </h4>
                <span className="font-body text-caption font-medium uppercase tracking-[0.12em] text-soil-500">
                  {group.items.length} programme{group.items.length === 1 ? '' : 's'}
                </span>
              </div>

              <RevealGroup
                as="ul"
                step={0.035}
                className="mt-2 grid gap-x-12 md:grid-cols-2"
                role="list"
              >
                {group.items.map((item, index) => (
                  <RevealItem
                    as="li"
                    key={`${group.category}-${item.title}`}
                    className="flex gap-5 border-b border-line py-5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 font-body text-caption font-semibold tabular-nums text-forest-500"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-body text-body-lg font-semibold leading-snug text-forest-900">
                        {item.title}
                      </span>
                      <span className="mt-1.5 block font-body text-small leading-relaxed text-soil-600">
                        {item.desc}
                      </span>
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
