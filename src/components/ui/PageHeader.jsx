import { motion, useReducedMotion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';
import { EASE, fadeUp, respectMotion, stagger } from '../../lib/motion';

/**
 * Header for inner pages. Visually connected to the homepage hero — same dark
 * forest ground and same staggered text reveal — but shorter, so the page's own
 * content stays the focus.
 */
export default function PageHeader({ eyebrow, title, description, crumbs = [], image, imageAlt = '' }) {
  const reduced = useReducedMotion();
  const item = respectMotion(fadeUp, reduced);

  return (
    <section className="relative isolate overflow-hidden bg-forest-900">
      {image && (
        <>
          <motion.img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            initial={reduced ? false : { scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
            loading="eager"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/85 to-forest-950/65"
            aria-hidden="true"
          />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 -z-10 bg-grain-texture opacity-60" aria-hidden="true" />
      )}

      <div className="container-page py-14 sm:py-16 lg:py-20">
        <motion.div
          className="max-w-prose"
          variants={stagger(reduced ? 0 : 0.08)}
          initial="hidden"
          animate="show"
        >
          {crumbs.length > 0 && (
            <motion.div variants={item}>
              <Breadcrumb items={crumbs} />
            </motion.div>
          )}
          {eyebrow && (
            <motion.p variants={item} className="eyebrow-on-dark mt-6">
              <span aria-hidden="true" className="inline-block h-px w-6 bg-gold/60" />
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={item}
            className="mt-4 font-display text-h1 font-semibold text-cream"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p variants={item} className="mt-5 font-body text-lead text-cream/70">
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
