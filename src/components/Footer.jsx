import { Link } from 'react-router-dom';
import logoImg from '../assets/cead-logo.png';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: "Director's Message", href: '/director-message' },
  { label: 'Advisory Committee', href: '/advisory-committee' },
  { label: 'Consultancy Centre', href: '/consultancy' },
  { label: 'Our Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Media', href: '/media' },
  { label: 'Annual Report', href: '/annual-report' },
  { label: 'Contact Us', href: '/contact' },
];

const focusLinks = [
  { label: 'Agriculture', href: '/focus-areas' },
  { label: 'Environment', href: '/focus-areas' },
  { label: 'Women Empowerment', href: '/focus-areas' },
  { label: 'Agro Tourism', href: '/focus-areas' },
  { label: 'Livelihood', href: '/focus-areas' },
  { label: 'Non Farming', href: '/focus-areas' },
];

const partnerLinks = [
  { label: 'PIAS', href: 'https://pias.org.in', external: true },
  { label: 'Green Day Organics', href: 'https://greendayorganics.com', external: true },
];

function FooterLink({ href, children, external }) {
  if (external) {
    return (
      <a
        href={href}
        className="text-cream/60 hover:text-cream text-sm font-body transition-colors duration-150 flex items-center gap-1.5 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-forest-500 group-hover:bg-gold transition-colors duration-150 flex-shrink-0" aria-hidden="true" />
        {children}
        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    );
  }
  return (
    <Link
      to={href}
      className="text-cream/60 hover:text-cream text-sm font-body transition-colors duration-150 flex items-center gap-1.5 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-forest-500 group-hover:bg-gold transition-colors duration-150 flex-shrink-0" aria-hidden="true" />
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-forest-900 text-cream" aria-label="Site footer">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5 group" aria-label="CEAD Home">
              <img
                src={logoImg}
                alt="CEAD — Centre for Environment and Agricultural Development"
                className="h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
              />
            </Link>
            <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
              Empowering rural communities since 2003 through sustainable agriculture, environmental conservation, and social development.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-800 hover:bg-gold hover:text-forest-900 flex items-center justify-center transition-colors duration-150 text-cream/80"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-800 hover:bg-gold hover:text-forest-900 flex items-center justify-center transition-colors duration-150 text-cream/80"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 011.768-1.768C5.744 5 12 5 12 5s6.256 0 7.812.418zM9.741 15.56l5.776-3.56-5.776-3.56v7.12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus areas */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4 uppercase tracking-wider">
              Focus Areas
            </h3>
            <ul className="space-y-2.5" role="list">
              {focusLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-base font-semibold text-gold mt-6 mb-3 uppercase tracking-wider">
              Our Initiatives
            </h3>
            <ul className="space-y-2.5" role="list">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3.5 font-body text-sm text-cream/70">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic leading-snug">
                  No. 42, Lenin Street, Kosspalaiyam, Puducherry — 605 013
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919894313435" className="hover:text-cream transition-colors duration-150">
                  +91 98943 13435
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ceadngo@gmail.com" className="hover:text-cream transition-colors duration-150">
                  ceadngo@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-cream/50">
          <p>© {currentYear} CEAD NGO. All rights reserved.</p>
          <p>Centre for Environment and Agricultural Development · Puducherry, India</p>
        </div>
      </div>
    </footer>
  );
}
