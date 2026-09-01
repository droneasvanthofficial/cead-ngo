import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, respectMotion, stagger, viewport } from '../../lib/motion';

/**
 * Scroll-triggered reveal. Wraps children in a motion element that animates
 * once as it enters the viewport, and degrades to a plain fade when the user
 * prefers reduced motion.
 */
export default function Reveal({
  children,
  as = 'div',
  variant = fadeUp,
  delay = 0,
  className = '',
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      variants={respectMotion(variant, reduced)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent for a staggered group. Pair with `RevealItem` children. */
export function RevealGroup({
  children,
  as = 'div',
  step = 0.07,
  delay = 0,
  className = '',
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      variants={stagger(reduced ? 0 : step, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Child of `RevealGroup` — inherits the parent's stagger timing. */
export function RevealItem({ children, as = 'div', variant = fadeUp, className = '', ...rest }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag className={className} variants={respectMotion(variant, reduced)} {...rest}>
      {children}
    </Tag>
  );
}
