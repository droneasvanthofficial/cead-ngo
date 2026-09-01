import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Logo from './ui/Logo';
import { EASE, drawer, popover, respectMotion } from '../lib/motion';

// ── Navigation model ────────────────────────────────────────────────────────
// Every destination from the original site is preserved; the top level is
// grouped so the bar stays scannable instead of listing eleven peers.
const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Profile', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: "Director's Message", href: '/director-message' },
      { label: 'Executive Committee', href: '/board-trustees' },
      { label: 'Advisory Committee', href: '/advisory-committee' },
      { label: 'Staff Details', href: '/staff-details' },
    ],
  },
  {
    label: 'Focus Areas',
    href: '/focus-areas',
    children: [
      { label: 'Agriculture', href: '/focus-areas#agriculture' },
      { label: 'Environment', href: '/focus-areas#environment' },
      { label: 'Women Empowerment', href: '/focus-areas#women' },
      { label: 'Agro Tourism', href: '/focus-areas#agrotourism' },
      { label: 'Livelihood', href: '/focus-areas#livelihood' },
    ],
  },
  { label: 'Consultancy', href: '/consultancy' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Vermi Compost', href: '/products#vermi-compost' },
      { label: 'Vermi Wash', href: '/products#vermi-wash' },
      { label: 'Organic Greens', href: '/products#organic-greens' },
      { label: 'Enriched Pot Mixture', href: '/products#enriched-pot-mixture' },
    ],
  },
  {
    label: 'Partners',
    href: '/partnerships',
    children: [
      { label: 'National Partners', href: '/partnerships#national' },
      { label: 'International Partners', href: '/partnerships#international' },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    children: [
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'News & Press', href: '/media' },
      { label: 'Annual Reports', href: '/annual-report' },
      { label: 'Financial Reports', href: '/financial-reports' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/join-us',
    children: [
      { label: 'Volunteers', href: '/join-us#volunteers' },
      { label: 'Social Developers & Institutions', href: '/join-us#social-developers' },
      { label: 'Donors & Supporters', href: '/join-us#donors' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

const ChevronIcon = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

/** True when `href` addresses the page currently shown. */
function isActive(href, pathname) {
  const path = href.split('#')[0];
  return path === '/' ? pathname === '/' : pathname.startsWith(path);
}

// ── Desktop dropdown ────────────────────────────────────────────────────────
function Dropdown({ link, open, onOpen, onClose, pathname }) {
  const reduced = useReducedMotion();
  const closeTimer = useRef();
  const active = isActive(link.href, pathname);

  const openNow = () => { clearTimeout(closeTimer.current); onOpen(); };
  const closeSoon = () => { closeTimer.current = setTimeout(onClose, 140); };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <li className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <Link
        to={link.href}
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={openNow}
        onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
        className={`group relative flex items-center gap-1.5 rounded px-2.5 py-2 font-body text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-colors duration-150 ${
          active ? 'text-forest-700' : 'text-slate-800 hover:text-forest-700'
        }`}
      >
        <span>{link.label}</span>
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-forest-600 transition-transform duration-300 ease-smooth ${
            active ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={respectMotion(popover, reduced)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute left-0 top-full z-50 w-60 pt-1.5"
            onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
          >
            <ul className="overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5 shadow-card">
              {link.children.map((child) => (
                <li key={child.label}>
                  <Link
                    to={child.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-lg px-3 py-2.5 font-body text-small font-medium text-slate-700 transition-colors duration-150 hover:bg-forest-50 hover:text-forest-800"
                  >
                    {child.label}
                    <svg
                      className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 ease-smooth group-hover:translate-x-0 group-hover:opacity-100"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

// ── Mobile drawer ───────────────────────────────────────────────────────────
function MobileNav({ open, onClose, pathname }) {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState(null);
  const panelRef = useRef(null);

  // Lock background scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-forest-950/50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            id="mobile-menu"
            variants={respectMotion(drawer, reduced)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream shadow-lg outline-none"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Logo size="sm" to="/" taglineDisplay="block" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-soil-600 transition-colors hover:bg-cream-dark hover:text-forest-800"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
              <ul className="space-y-0.5">
                {navLinks.map((link) => {
                  const active = isActive(link.href, pathname);
                  const isOpen = expanded === link.label;
                  return (
                    <li key={link.label}>
                      <div className="flex items-stretch">
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className={`flex min-h-[48px] flex-1 items-center rounded-lg px-3 font-body text-body-lg font-medium transition-colors ${
                            active ? 'bg-forest-50 text-forest-800' : 'text-soil-800 hover:bg-cream-dark'
                          }`}
                        >
                          {link.label}
                        </Link>
                        {link.children && (
                          <button
                            type="button"
                            onClick={() => setExpanded(isOpen ? null : link.label)}
                            aria-expanded={isOpen}
                            aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${link.label} submenu`}
                            className="ml-1 flex w-12 items-center justify-center rounded-lg text-soil-500 transition-colors hover:bg-cream-dark hover:text-forest-700"
                          >
                            <ChevronIcon className={`h-4 w-4 transition-transform duration-300 ease-smooth ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {link.children && isOpen && (
                          <motion.div
                            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <ul className="my-1 ml-4 space-y-0.5 border-l border-line pl-3">
                              {link.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.href}
                                    onClick={onClose}
                                    className="flex min-h-[44px] items-center rounded-lg px-3 font-body text-small text-soil-600 transition-colors hover:bg-cream-dark hover:text-forest-800"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-line bg-cream-dark px-5 py-5">
              <Link to="/contact" onClick={onClose} className="btn-primary w-full">
                Contact CEAD
              </Link>
              <div className="flex flex-col gap-2 font-body text-caption text-soil-600">
                <a href="tel:+919894313435" className="transition-colors hover:text-forest-700">+91 98943 13435</a>
                <a href="mailto:ceadngo@gmail.com" className="transition-colors hover:text-forest-700">ceadngo@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ── Header ──────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Any navigation dismisses whatever menu was open.
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);

  const closeMenu = useCallback(() => setOpenMenu(null), []);
  // A dropdown's own close is scoped to itself: without this, moving the
  // pointer from one item straight into a neighbour races their timers — the
  // item just left closes on its delay *after* the new one has already
  // opened, wiping out the menu the pointer is actually sitting on.
  const closeMenuIfActive = useCallback(
    (label) => setOpenMenu((current) => (current === label ? null : current)),
    []
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-forest-800 focus:px-4 focus:py-3 focus:font-body focus:text-small focus:font-semibold focus:text-cream"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50" role="banner">
        {/* Utility bar — solid deep royal blue with contacts and social media icons */}
        <div
          className={`overflow-hidden bg-[#2e8b57] text-white transition-[max-height,opacity] duration-300 ease-smooth ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="container-nav flex h-9 items-center justify-between gap-4 font-body text-caption">
            <div className="flex items-center gap-4 text-white/90">
              <span className="hidden font-medium sm:inline">
                Registered NGO · Puducherry &amp; Tamil Nadu · Since 2003
              </span>
              <a href="tel:+919894313435" className="flex items-center gap-1.5 transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 text-gold-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 98943 13435</span>
              </a>
              <a href="mailto:ceadngo@gmail.com" className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex">
                <svg className="h-3.5 w-3.5 text-gold-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>ceadngo@gmail.com</span>
              </a>
            </div>

            {/* Social media icons on the right */}
            <div className="flex items-center gap-3.5 text-white/80">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Primary bar — clean crisp white background */}
        <div
          className={`border-b bg-white transition-[border-color,box-shadow] duration-300 ease-smooth ${
            scrolled ? 'border-slate-200 shadow-sm' : 'border-slate-100 shadow-sm'
          }`}
        >
          <div className="container-nav">
            <div
              className={`flex items-center justify-between gap-4 transition-[height] duration-300 ease-smooth ${
                scrolled ? 'h-[88px]' : 'h-[116px] md:h-[128px]'
              }`}
            >
              <Logo
                size={scrolled ? 'sm' : 'base'}
                taglineDisplay="hidden sm:block"
                className="min-w-0 shrink-0"
              />

              <nav aria-label="Main navigation" className="hidden lg:block">
                <ul className="flex items-center gap-1 xl:gap-1.5" onMouseLeave={closeMenu}>
                  {navLinks.map((link) =>
                    link.children ? (
                      <Dropdown
                        key={link.label}
                        link={link}
                        pathname={pathname}
                        open={openMenu === link.label}
                        onOpen={() => setOpenMenu(link.label)}
                        onClose={() => closeMenuIfActive(link.label)}
                      />
                    ) : (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          onMouseEnter={closeMenu}
                          className={`relative flex items-center rounded px-2.5 py-2 font-body text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-colors duration-150 ${
                            isActive(link.href, pathname) ? 'text-forest-700' : 'text-slate-800 hover:text-forest-700'
                          }`}
                        >
                          {link.label}
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-forest-600 transition-transform duration-300 ease-smooth ${
                              isActive(link.href, pathname) ? 'scale-x-100' : 'scale-x-0'
                            }`}
                          />
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              <div className="flex shrink-0 items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                  className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
