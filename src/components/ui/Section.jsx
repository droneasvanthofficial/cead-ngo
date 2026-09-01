import SectionDecor from './SectionDecor';

/**
 * Standard page section: consistent vertical rhythm, one of a small set of
 * grounds, and a centred container. Sections alternate their `tone` down the
 * page to create rhythm without introducing new colours.
 */
const tones = {
  canvas: 'bg-canvas text-soil-700',
  cream:  'bg-cream text-soil-700',
  warm:   'bg-cream-dark text-soil-700',
  forest: 'bg-forest-900 text-cream/85',
  ink:    'bg-forest-950 text-cream/85',
};

// Which SectionDecor palette reads correctly against each ground.
const decorTones = {
  canvas: 'light',
  cream:  'light',
  warm:   'light',
  forest: 'dark',
  ink:    'dark',
};

export default function Section({
  id,
  tone = 'canvas',
  size = 'base',
  className = '',
  containerClassName = '',
  bleed = false,
  decor = true,
  children,
  ...rest
}) {
  const pad = size === 'sm' ? 'py-section-sm' : size === 'none' ? '' : 'py-section';
  // Clears the sticky header when a section is reached via an in-page anchor.
  const anchorOffset = id ? 'scroll-mt-28' : '';

  return (
    <section
      id={id}
      className={`relative isolate ${tones[tone] ?? tones.canvas} ${pad} ${anchorOffset} ${className}`}
      {...rest}
    >
      {/* Bleed sections manage their own full-bleed background layers, so the
          ambient wash would fight them — only the default, contained
          sections get it. */}
      {decor && !bleed && <SectionDecor tone={decorTones[tone] ?? 'light'} />}
      {bleed ? children : <div className={`container-page ${containerClassName}`}>{children}</div>}
    </section>
  );
}
