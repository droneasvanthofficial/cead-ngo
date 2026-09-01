import Reveal from './Reveal';
import { fadeUp } from '../../lib/motion';

/**
 * Section introduction: eyebrow, heading and optional lead paragraph.
 * `align="start"` is the editorial default; `center` is reserved for sections
 * whose content below is symmetric.
 */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'start',
  tone = 'light',
  as: Heading = 'h2',
  id,
  className = '',
  children,
}) {
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <Reveal
      variant={fadeUp}
      className={`max-w-prose ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p className={dark ? 'eyebrow-on-dark' : 'eyebrow'}>
          <span
            aria-hidden="true"
            className={`inline-block h-px w-6 ${dark ? 'bg-gold/60' : 'bg-forest-400'}`}
          />
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={`mt-4 font-display text-h2 font-semibold ${dark ? 'text-cream' : 'text-forest-900'}`}
      >
        {title}
      </Heading>
      {lead && (
        <p className={`mt-4 font-body text-lead ${dark ? 'text-cream/70' : 'text-soil-600'}`}>
          {lead}
        </p>
      )}
      {children}
    </Reveal>
  );
}
