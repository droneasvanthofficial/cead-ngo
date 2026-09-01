import { Link } from 'react-router-dom';

const variants = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  accent:    'btn-accent',
  onDark:    'btn-on-dark',
};

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12h15m0 0l-6-6m6 6l-6 6" />
  </svg>
);

/**
 * The single button used across the site. Renders as a router `Link`, an
 * anchor or a `button` depending on the props it is given, so every call site
 * gets identical height, padding, radius, focus and hover behaviour.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size,
  arrow = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'group',
    variants[variant] ?? variants.primary,
    size === 'sm' ? 'btn-sm' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );

  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) {
    const external = /^https?:|^mailto:|^tel:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external && href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return <button type="button" className={classes} {...rest}>{content}</button>;
}
