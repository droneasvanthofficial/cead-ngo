const quickLinkGroups = [
  {
    title: 'About',
    links: [
      { href: '#home', label: 'Home' },
      { href: '#about-us', label: 'About Us' },
      { href: '#profile', label: 'Profile' },
      { href: '#director-message', label: 'Director Message' },
      { href: '#advisory-committee', label: 'Advisory Committee' },
    ],
  },
  {
    title: 'Programmes',
    links: [
      { href: '#focus-areas', label: 'Focus Areas' },
      { href: '#consultancy-centre', label: 'Consultancy Centre' },
      { href: '#products', label: 'Our Products' },
      { href: '#partnerships', label: 'Partnerships' },
      { href: '#media', label: 'Media' },
      { href: '#news-events', label: 'News & Events' },
      { href: '#contact-us', label: 'Contact Us' },
    ],
  },
]

function Footer() {
  return (
    <footer id="contact-us" className="mt-12 bg-forest-950 text-cream-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-3">
        <section>
          <h2 className="font-display text-2xl">CEAD Offices</h2>
          <address className="mt-4 space-y-4 text-sm not-italic leading-relaxed text-cream-100">
            <p>
              <span className="font-semibold text-leaf-200">Administration Office:</span>
              <br />
              No. 42, Lenin Street, Kosapalayam, Puducherry - 605013
            </p>
            <p>
              <span className="font-semibold text-leaf-200">Field Office:</span>
              <br />
              No. 72, Nallavadu Road, Thavalakuppam, Abishegapakkam Post, Puducherry - 605007
            </p>
          </address>
        </section>

        <section>
          <h2 className="font-display text-2xl">Quick Links</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {quickLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-leaf-200">{group.title}</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="rounded px-1 py-1 text-cream-100 transition hover:text-leaf-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl">Partners</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream-100">
            <li>
              <a href="https://pias.org.in" target="_blank" rel="noreferrer" className="rounded px-1 py-1 hover:text-leaf-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-300">
                PIAS - pias.org.in
              </a>
            </li>
            <li>
              <a href="https://greendayorganics.com" target="_blank" rel="noreferrer" className="rounded px-1 py-1 hover:text-leaf-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-300">
                Green Day Organics - greendayorganics.com
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-t border-forest-700">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-cream-100">
          © {new Date().getFullYear()} CEAD. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
