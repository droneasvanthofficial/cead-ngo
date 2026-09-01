// ── Shared Framer Motion variants ───────────────────────────────────────────
// Every animation on the site comes from this file so timing and distance stay
// consistent. Motion is short (0.3–0.7s), travels a small distance, and always
// uses the same easing curve as the CSS transitions in index.css.

export const EASE = [0.22, 1, 0.36, 1];

/** Default viewport config for scroll-triggered reveals — fires once, slightly early. */
export const viewport = { once: true, amount: 0.15, margin: '0px 0px -80px 0px' };

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Parent that releases its children one after another. */
export const stagger = (staggerChildren = 0.07, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Image container that wipes its image into view. */
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

/** Dropdown / popover. */
export const popover = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: EASE } },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.12, ease: 'easeIn' } },
};

/** Mobile navigation drawer. */
export const drawer = {
  hidden: { opacity: 0, x: '100%' },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
};

/** Route-level page transition — deliberately short so navigation feels instant. */
export const pageTransition = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
};

/**
 * Collapses a variant to a plain opacity fade when the user has asked for
 * reduced motion, so nothing travels but content still appears deliberately.
 */
export function respectMotion(variant, reduced) {
  if (!reduced) return variant;
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
}
