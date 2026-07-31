const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#profile', label: 'Profile' },
  { href: '#director-message', label: 'Director Message' },
  { href: '#advisory-committee', label: 'Advisory Committee' },
  { href: '#focus-areas', label: 'Focus Areas' },
  { href: '#agriculture', label: 'Agriculture' },
  { href: '#environment', label: 'Environment' },
  { href: '#women-empowerment', label: 'Women Empowerment' },
  { href: '#agro-tourism', label: 'Agro Tourism' },
  { href: '#livelihood', label: 'Livelihood' },
  { href: '#consultancy-centre', label: 'Consultancy Centre' },
  { href: '#products', label: 'Our Products' },
  { href: '#national-partnerships', label: 'Partnerships (National)' },
  { href: '#international-partnerships', label: 'Partnerships (International)' },
  { href: '#media', label: 'Media' },
  { href: '#news-events', label: 'News & Events' },
  { href: '#contact-us', label: 'Contact Us' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-200 bg-cream-50/95 backdrop-blur">
      <div className="bg-forest-900 text-cream-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <a href="tel:+919894313435" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-300">
              +91 98943 13435
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:ceadngo@gmail.com" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-300">
              ceadngo@gmail.com
            </a>
          </p>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 lg:flex-row lg:items-center lg:justify-between" aria-label="Primary">
        <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soil-400">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-leaf-200 text-forest-900">🌿</span>
          CEAD
        </a>
        <ul className="flex gap-2 overflow-x-auto pb-1 text-sm text-forest-900 lg:justify-end">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-forest-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soil-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
