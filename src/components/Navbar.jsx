import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/title.png';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Profile', href: '/about' },
      { label: "Director's Message", href: '/director-message' },
      { label: 'Vision & Mission', href: '/about' },
      { label: 'Advisory Committee', href: '/advisory-committee' },
    ],
  },
  {
    label: 'Focus Area',
    href: '/focus-areas',
    children: [
      { label: 'Agriculture', href: '/focus-areas' },
      { label: 'Environment', href: '/focus-areas' },
      { label: 'Women Empowerment', href: '/focus-areas' },
      { label: 'Agro Tourism', href: '/focus-areas' },
      { label: 'Livelihood', href: '/focus-areas' },
    ],
  },
  { label: 'Consultancy Centre', href: '/consultancy' },
  {
    label: 'Our Products',
    href: '/products',
    children: [
      { label: 'Vermi Compost', href: '/products' },
      { label: 'Vermi Wash', href: '/products' },
      { label: 'Organic Greens', href: '/products' },
      { label: 'Enriched Pot Mixture', href: '/products' },
    ],
  },
  {
    label: 'Partnership',
    href: '/partnerships',
    children: [
      { label: 'National', href: '/partnerships' },
      { label: 'International', href: '/partnerships' },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    children: [
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Videos', href: '/media' },
      { label: 'Press Releases', href: '/media' },
    ],
  },
  {
    label: 'News & Events',
    href: '/media',
    children: [
      { label: 'News Letter', href: '/media' },
      { label: 'Annual Report', href: '/annual-report' },
      { label: 'Current Event', href: '/media' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

function DropdownMenu({ items, isOpen, onClose }) {
  return (
    <div
      className={`absolute top-full left-0 mt-0.5 w-56 bg-[#1f4215] rounded-b-xl shadow-xl border border-forest-600/80 overflow-hidden transition-all duration-200 z-50 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      role="menu"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          onClick={onClose}
          className="block px-4 py-2.5 text-sm text-cream hover:bg-[#82a51f] hover:text-white transition-colors duration-150 font-body border-b border-forest-800/50 last:border-0"
          role="menuitem"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('[data-dropdown]')) setActiveDropdown(null);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-md" role="banner">
      {/* ── 1. Top Contact Bar ── */}
      <div className="bg-[#183410] text-cream text-xs font-body py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="opacity-80 hidden sm:block">Centre for Environment and Agricultural Development</span>
          <div className="flex items-center gap-4 ml-auto font-medium">
            <a
              href="tel:+919894313435"
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-150"
              aria-label="Call CEAD"
            >
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 98943 13435
            </a>
            <a
              href="mailto:ceadngo@gmail.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-150"
              aria-label="Email CEAD"
            >
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              ceadngo@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. Full-Width Logo Banner Row ── */}
      <div className="bg-white py-3 px-4 border-b border-forest-100 flex items-center justify-center">
        <Link to="/" className="block max-w-5xl w-full text-center">
          <img
            src={logoImg}
            alt="CEAD — Centre for Environment and Agricultural Development"
            className="h-16 sm:h-20 md:h-24 mx-auto w-auto object-contain"
          />
        </Link>
      </div>

      {/* ── 3. Green Navigation Bar ── */}
      <nav className="bg-[#1a380f] text-cream border-t border-forest-800" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between">
          
          {/* Desktop Navigation Links with dividers */}
          <ul className="hidden lg:flex items-center w-full justify-center divide-x divide-white/20 border-x border-white/20" role="list">
            {navLinks.map((link) => (
              <li key={link.label} className="relative flex-1 text-center" data-dropdown>
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center justify-center gap-1 px-3 py-3 text-sm font-body font-semibold text-white hover:bg-[#82a51f] hover:text-white transition-colors duration-150 w-full"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === link.label}
                    >
                      {link.label}
                      <span className="text-[10px] ml-0.5 opacity-80">▼</span>
                    </Link>
                    <DropdownMenu items={link.children} isOpen={activeDropdown === link.label} onClose={() => setActiveDropdown(null)} />
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center justify-center px-3 py-3 text-sm font-body font-semibold text-white hover:bg-[#82a51f] hover:text-white transition-colors duration-150 w-full"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center justify-between w-full py-2.5 px-2">
            <span className="font-body text-sm font-semibold text-gold-light uppercase tracking-wider">Navigation Menu</span>
            <button
              className="p-2 rounded-lg text-cream hover:bg-forest-800 focus:outline-none transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-[#183410] border-t border-forest-800 transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <ul className="px-4 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-base font-body font-semibold text-white hover:bg-[#82a51f] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="ml-4 space-y-1 border-l border-white/20 pl-3">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-2 py-1.5 text-sm font-body text-cream/80 hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
