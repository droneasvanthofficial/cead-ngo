import { motion, useReducedMotion } from 'framer-motion';

/**
 * Soft, blurred colour washes that drift and breathe continuously in the
 * background of a `Section` — the bit of life a flat ground is missing.
 * Purely decorative: behind the content, inert to input and to screen
 * readers, and frozen to a still placement when motion is reduced.
 *
 * Two palettes so the wash always reads against its ground: `light` for the
 * canvas/cream/warm tones, `dark` for the forest/ink tones.
 */
const PALETTES = {
  light: [
    { color: 'bg-forest-300', pos: '-left-28 -top-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem]', opacity: 'opacity-[0.34]', travel: [0, 40, -10, 0], drift: [0, -30, 20, 0], duration: 22 },
    { color: 'bg-gold-light', pos: '-right-20 top-1/4 h-72 w-72 sm:h-[26rem] sm:w-[26rem]', opacity: 'opacity-[0.30]', travel: [0, -35, 15, 0], drift: [0, 25, -25, 0], duration: 26 },
    { color: 'bg-leaf-light', pos: 'left-1/3 -bottom-28 h-80 w-80 sm:h-[28rem] sm:w-[28rem]', opacity: 'opacity-[0.32]', travel: [0, 30, -30, 0], drift: [0, -20, 15, 0], duration: 19 },
  ],
  dark: [
    { color: 'bg-gold', pos: '-left-28 -top-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem]', opacity: 'opacity-[0.24]', travel: [0, 40, -10, 0], drift: [0, -30, 20, 0], duration: 22 },
    { color: 'bg-leaf', pos: '-right-20 top-1/4 h-72 w-72 sm:h-[26rem] sm:w-[26rem]', opacity: 'opacity-[0.22]', travel: [0, -35, 15, 0], drift: [0, 25, -25, 0], duration: 26 },
    { color: 'bg-forest-400', pos: 'left-1/3 -bottom-28 h-80 w-80 sm:h-[28rem] sm:w-[28rem]', opacity: 'opacity-[0.28]', travel: [0, 30, -30, 0], drift: [0, -20, 15, 0], duration: 19 },
  ],
};

function Blob({ color, pos, opacity, travel, drift, duration, delay, reduced }) {
  return (
    <motion.div
      className={`absolute rounded-full ${opacity} blur-2xl will-change-transform ${color} ${pos}`}
      animate={reduced ? undefined : { x: travel, y: drift, scale: [1, 1.15, 0.95, 1] }}
      transition={reduced ? undefined : { duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function SectionDecor({ tone = 'light' }) {
  const reduced = useReducedMotion();
  const blobs = PALETTES[tone] ?? PALETTES.light;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <Blob key={blob.color + blob.pos} {...blob} delay={i * 1.5} reduced={reduced} />
      ))}
    </div>
  );
}
