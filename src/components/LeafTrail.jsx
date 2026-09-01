import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

// Leaves are spawned only after the pointer has travelled this far, so a slow
// drag leaves a trail rather than a solid smear.
const SPAWN_DISTANCE = 70;
const MAX_LEAVES = 14;
const LIFETIME_MS = 2200;

// Two leaf silhouettes, alternated so the trail doesn't read as one repeated
// stamp. Drawn in a 24×24 box.
const LEAF_PATHS = [
  'M12 2C7 5 3 9 3 14a7 7 0 0 0 11.5 5.4C18 16.6 20 10 21 3c-3 .6-6.3 1-9 -1Z',
  'M20 4c-8 0-14 4-14 10 0 2 .8 3.8 2 5 3-6 7-9 11-10-3.4 2-6.4 5-8.4 9.6 1 .3 2 .4 3 .4 5 0 8-4 8-9 0-2.4-.6-4.4-1.6-6Z',
];

const TINTS = ['#4c9668', '#5f9440', '#337a4f', '#7bad5c'];

let seq = 0;

/**
 * A drift of leaves following the cursor. Pointer-events are off throughout, so
 * it never intercepts a click. Skipped entirely for touch input and for
 * visitors who have asked for reduced motion.
 */
export default function LeafTrail() {
  const reduced = useReducedMotion();
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (reduced) return undefined;
    // Coarse pointers (touch) have no hover trail to speak of, and the effect
    // would only fire on taps.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    let lastX = null;
    let lastY = null;

    const onMove = (event) => {
      const { clientX: x, clientY: y } = event;
      if (lastX !== null && Math.hypot(x - lastX, y - lastY) < SPAWN_DISTANCE) return;
      lastX = x;
      lastY = y;

      seq += 1;
      const leaf = {
        id: seq,
        x,
        y,
        path: LEAF_PATHS[seq % LEAF_PATHS.length],
        tint: TINTS[seq % TINTS.length],
        size: 14 + Math.random() * 12,
        drift: (Math.random() - 0.5) * 90,
        spin: (Math.random() - 0.5) * 320,
        fall: 60 + Math.random() * 70,
      };
      setLeaves((prev) => [...prev, leaf].slice(-MAX_LEAVES));
      setTimeout(() => {
        setLeaves((prev) => prev.filter((item) => item.id !== leaf.id));
      }, LIFETIME_MS);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {leaves.map((leaf) => (
          <motion.svg
            key={leaf.id}
            viewBox="0 0 24 24"
            width={leaf.size}
            height={leaf.size}
            className="absolute"
            style={{ left: leaf.x, top: leaf.y, color: leaf.tint }}
            initial={{ opacity: 0, scale: 0.4, x: '-50%', y: '-50%', rotate: 0 }}
            animate={{
              opacity: [0, 0.85, 0.85, 0],
              scale: [0.4, 1, 1, 0.9],
              x: `calc(-50% + ${leaf.drift}px)`,
              y: `calc(-50% + ${leaf.fall}px)`,
              rotate: leaf.spin,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: LIFETIME_MS / 1000, ease: 'easeOut', times: [0, 0.15, 0.6, 1] }}
          >
            <path d={leaf.path} fill="currentColor" />
          </motion.svg>
        ))}
      </AnimatePresence>
    </div>
  );
}
