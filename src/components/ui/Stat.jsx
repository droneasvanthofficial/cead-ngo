import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';

/** Splits "200+" into { number: 200, suffix: '+', prefix: '' }. */
function parseValue(value) {
  const match = String(value).match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return null;
  const numeric = Number(match[2].replace(/,/g, ''));
  if (!Number.isFinite(numeric)) return null;
  return { prefix: match[1], number: numeric, suffix: match[3] };
}

/**
 * A single impact figure. Counts up once on entering the viewport; renders the
 * final value immediately when motion is reduced or the value is not numeric.
 */
export default function Stat({ value, label, detail, tone = 'light', className = '' }) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  // Memoised: a fresh object each render would re-trigger the effect below on
  // every counted frame, restarting the count instead of finishing it.
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(parsed && !reduced ? 0 : parsed?.number);
  const frame = useRef();

  useEffect(() => {
    if (!inView || !parsed || reduced) return undefined;
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast then settling, so the number feels decisive.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(t === 1 ? parsed.number : Math.round(parsed.number * eased));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, parsed, reduced]);

  const dark = tone === 'dark';
  const shown = parsed ? `${parsed.prefix}${display?.toLocaleString('en-IN') ?? ''}${parsed.suffix}` : value;

  return (
    <div ref={ref} className={className}>
      <p
        className={`font-display text-stat font-semibold tabular-nums ${dark ? 'text-cream' : 'text-forest-800'}`}
      >
        {/* Screen readers get the final figure, not the intermediate count. */}
        <span aria-hidden="true">{shown}</span>
        <span className="sr-only">{value}</span>
      </p>
      <p
        className={`mt-2 font-body text-caption font-semibold uppercase tracking-[0.12em] ${
          dark ? 'text-gold-light' : 'text-forest-600'
        }`}
      >
        {label}
      </p>
      {detail && (
        <p className={`mt-1.5 font-body text-caption ${dark ? 'text-cream/60' : 'text-soil-500'}`}>
          {detail}
        </p>
      )}
    </div>
  );
}
