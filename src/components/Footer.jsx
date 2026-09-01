import { Link } from 'react-router-dom';
import markSrc from '../assets/cead-mark.png';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { fadeUp } from '../lib/motion';

const columns = [
  {
    heading: 'Organisation',
    links: [
      { label: 'Profile', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: "Director's Message", href: '/director-message' },
      { label: 'Executive Committee', href: '/board-trustees' },
      { label: 'Advisory Committee', href: '/advisory-committee' },
      { label: 'Staff Details', href: '/staff-details' },
    ],
  },
  {
    heading: 'Our work',
    links: [
      { label: 'Focus Areas', href: '/focus-areas' },
      { label: 'Consultancy & Training', href: '/consultancy' },
      { label: 'Organic Products', href: '/products' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Volunteers', href: '/join-us#volunteers' },
      { label: 'Social Developers & Institutions', href: '/join-us#social-developers' },
      { label: 'Donors & Supporters', href: '/join-us#donors' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Annual Reports', href: '/annual-report' },
      { label: 'Financial Reports', href: '/financial-reports' },
      { label: 'News & Press', href: '/media' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const initiatives = [
  { label: 'PIAS', href: 'https://pias.org.in' },
  { label: 'Green Day Organics', href: 'https://greendayorganics.com' },
];

function FooterLink({ href, children }) {
  return (
    <Link
      to={href}
      className="inline-block font-body text-small text-cream/60 transition-colors duration-200 hover:text-cream"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-forest-950 text-cream/70" aria-label="Site footer">
      {/* Closing call to action — the last thing a visitor is asked to do. */}
      <div className="border-b border-cream/10">
        <div className="container-page py-section-sm">
          <Reveal
            variant={fadeUp}
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-xl">
              <p className="eyebrow-on-dark">
                <span aria-hidden="true" className="inline-block h-px w-6 bg-gold/60" />
                Work with CEAD
              </p>
              <h2 className="mt-4 font-display text-h2 font-semibold text-cream">
                Training, consultancy, or a partnership on the ground
              </h2>
              <p className="mt-4 font-body text-lead text-cream/65">
                Our team in Puducherry answers farmer, student and institutional enquiries
                directly. Call the office or send us a note and we will get back to you.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Button to="/contact" variant="accent" arrow>Contact CEAD</Button>
              <Button to="/join-us" variant="onDark">Get involved</Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Directory */}
      <div className="container-page py-section-sm">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3.5" aria-label="CEAD home">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-cream/95 p-2 shadow-sm">
                <img src={markSrc} alt="" width={256} height={256} className="h-full w-full object-contain" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl sm:text-2xl font-bold text-cream">
                  Centre for Environment and Agriculture Development
                </span>
                <span className="mt-1 block font-body text-xs font-semibold text-cream/75">
                  சுற்றுச்சூழல் மற்றும் வேளாண் அபிவிருத்தி மையம் · Est. 2003
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm font-body text-small leading-relaxed text-cream/60">
              Centre for Environment and Agricultural Development — a registered
              not-for-profit working with farming families, rural women and youth across
              Puducherry and Tamil Nadu.
            </p>

            <div className="mt-7">
              <h3 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-gold-light">
                Our initiatives
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2" role="list">
                {initiatives.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cream/15 px-3 py-1.5 font-body text-caption text-cream/70 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
                    >
                      {item.label}
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="lg:col-span-2">
              <h3 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-gold-light">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h3 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-gold-light">
              Contact
            </h3>
            <address className="mt-4 space-y-4 font-body text-small not-italic text-cream/60">
              <div>
                <p className="mb-1 font-medium text-cream/80">Administration office</p>
                <p className="leading-relaxed">No. 42, Lenin Street, Kosspalaiyam, Puducherry — 605 013</p>
              </div>
              <div>
                <p className="mb-1 font-medium text-cream/80">Field office</p>
                <p className="leading-relaxed">No. 72, Nallavadu Road, Thavalakuppam, Ablishegapakkam Post, Puducherry — 605 007</p>
              </div>
              <div className="space-y-1.5 pt-1">
                <a href="tel:+919894313435" className="block transition-colors hover:text-cream">+91 98943 13435</a>
                <a href="mailto:ceadngo@gmail.com" className="block transition-colors hover:text-cream">ceadngo@gmail.com</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col-reverse items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="font-body text-caption text-cream/45">
            © {year} CEAD — Centre for Environment and Agricultural Development. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CEAD on Facebook (opens in a new tab)"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream/15 text-cream/60 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CEAD on YouTube (opens in a new tab)"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream/15 text-cream/60 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 011.768-1.768C5.744 5 12 5 12 5s6.256 0 7.812.418zM9.741 15.56l5.776-3.56-5.776-3.56v7.12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
