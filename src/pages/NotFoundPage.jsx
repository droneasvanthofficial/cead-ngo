import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const suggestions = [
  { label: 'About CEAD', href: '/about' },
  { label: 'Focus Areas', href: '/focus-areas' },
  { label: 'Consultancy & Training', href: '/consultancy' },
  { label: 'Our Products', href: '/products' },
  { label: 'Annual Reports', href: '/annual-report' },
  { label: 'Contact Us', href: '/contact' },
];

export default function NotFoundPage() {
  return (
    <Section tone="canvas" className="flex min-h-[60vh] items-center">
      <div className="max-w-prose">
        <p className="eyebrow">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-forest-400" />
          Error 404
        </p>
        <h1 className="mt-4 font-display text-h1 font-semibold text-forest-900">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-5 font-body text-lead text-soil-600">
          The link may be out of date, or the page may have moved. Here is where most visitors
          are heading.
        </p>

        <ul className="mt-8 grid gap-x-10 sm:grid-cols-2" role="list">
          {suggestions.map((item) => (
            <li key={item.href} className="border-t border-line">
              <Link
                to={item.href}
                className="group flex items-center justify-between py-3.5 font-body text-body-lg text-soil-800 transition-colors hover:text-forest-800"
              >
                {item.label}
                <svg
                  className="h-4 w-4 text-forest-500 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-x-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12h15m0 0l-6-6m6 6l-6 6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/" variant="primary" arrow>Back to the homepage</Button>
          <Button to="/contact" variant="secondary">Contact CEAD</Button>
        </div>
      </div>
    </Section>
  );
}
