import heroImg from '../assets/images/hero.png';

const impactStats = [
  {
    value: '200+',
    label: 'Villages Covered',
    sub: 'Across Puducherry & Tamil Nadu',
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '1,000+',
    label: 'People Trained',
    sub: 'Agri-Graduates & BPL Youth',
    icon: (
      <svg className="w-6 h-6 text-leaf-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    value: '5,000+',
    label: 'Students Supported',
    sub: 'School & College Trainees',
    icon: (
      <svg className="w-6 h-6 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    value: '50,000+',
    label: 'Beneficiaries Reached',
    sub: 'Farming Families & Women',
    icon: (
      <svg className="w-6 h-6 text-terracotta-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    value: '500+',
    label: 'Self-Help Groups',
    sub: 'Established & Bank Linked',
    icon: (
      <svg className="w-6 h-6 text-leaf-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden pt-28 pb-16 bg-forest-900 min-h-[90vh]"
      aria-label="CEAD Hero Banner"
    >
      {/* Background Image with Dark Atmospheric Gradient */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={heroImg}
          alt="Lush green paddy fields of Puducherry"
          className="w-full h-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-900/90 to-forest-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-forest-900/40" />
      </div>

      {/* Decorative Blur Shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-leaf/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Hero Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 my-auto">
        <div className="max-w-4xl space-y-6">


          {/* Client Requested Big Banner Heading */}
          <h1
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight text-balance animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Empowering Rural Communities Since 2003 Through{' '}
            <span className="text-gold italic font-normal">Sustainable Development.</span>
          </h1>

          {/* Supporting Overview Subtitle */}
          <p
            className="text-cream/90 font-body text-base sm:text-xl leading-relaxed max-w-3xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Transforming South Indian farming families, empowering rural women, and fostering environmental
            conservation through organic agriculture, micro-credit access, and vocational training.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-forest-900 font-body font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Our Impact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/70 text-cream font-body font-medium px-7 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm hover:bg-cream/10"
            >
              Explore Focus Areas
            </a>
          </div>

        </div>
      </div>

      {/* Impact Counters Bar Immediately Below Hero Banner */}
      <div id="impact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mb-8 sm:-mb-12">
        <div className="bg-[#fbf7f0] bg-grain-texture rounded-3xl p-6 sm:p-8 shadow-card-hover border border-forest-200/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-forest-200/50">
          {impactStats.map((stat, idx) => (
            <div key={stat.label} className={`flex flex-col items-center text-center p-2 ${idx !== 0 ? 'pt-4 sm:pt-2' : ''}`}>
              <div className="w-12 h-12 rounded-2xl bg-forest-50 flex items-center justify-center mb-3 shadow-sm border border-forest-100/50">
                {stat.icon}
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-forest-800 tracking-tight">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm font-bold text-forest-700 mt-1">
                {stat.label}
              </div>
              <div className="font-body text-[11px] text-soil-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
