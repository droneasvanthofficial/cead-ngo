import { Link } from 'react-router-dom';

/** Trail back to the homepage. `items` is [{ label, href }], last item is current. */
export default function Breadcrumb({ items = [], tone = 'dark', className = '' }) {
  if (!items.length) return null;
  const dark = tone === 'dark';
  const muted = dark ? 'text-cream/55' : 'text-soil-500';
  const current = dark ? 'text-cream' : 'text-forest-800';

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-caption">
        <li>
          <Link to="/" className={`${muted} transition-colors ${dark ? 'hover:text-cream' : 'hover:text-forest-700'}`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href ?? item.label} className="flex items-center gap-2">
              <span aria-hidden="true" className={muted}>/</span>
              {last || !item.href ? (
                <span className={`font-medium ${current}`} aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.href} className={`${muted} transition-colors hover:text-cream`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
