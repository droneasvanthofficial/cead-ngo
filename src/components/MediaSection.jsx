import { useInView } from 'react-intersection-observer';

const pressClippings = [
  { title: 'CEAD Launches Organic Farming Initiative in Puducherry Villages', source: 'The Hindu', date: 'March 2024' },
  { title: 'Rural Women Empowered Through CEAD\'s Self-Help Group Programme', source: 'Deccan Chronicle', date: 'November 2023' },
  { title: 'Vermicompost Project Transforms Waste into Resource', source: 'Indian Express', date: 'August 2023' },
  { title: 'CEAD\'s Carbon Trading Programme Sets Precedent for NGOs', source: 'Times of India', date: 'May 2023' },
  { title: 'Rooftop Gardening Movement Gains Momentum in Puducherry', source: 'New Indian Express', date: 'January 2023' },
  { title: 'CEAD Celebrates 20 Years of Sustainable Agriculture', source: 'Puducherry Today', date: 'October 2023' },
];

function PressCard({ clipping, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`bg-[#faf6f0] rounded-xl border border-forest-200/70 p-4 hover:border-forest-400 hover:shadow-card transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 80}ms`, transitionProperty: 'opacity, transform, box-shadow, border-color' }}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-forest-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body font-medium text-forest-900 text-sm leading-snug line-clamp-2 mb-2">
            {clipping.title}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-body font-semibold text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-full border border-terracotta/20">
              {clipping.source}
            </span>
            <span className="text-xs font-body text-soil-500">{clipping.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MediaSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="media"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5efe4] via-[#ebe3d3] to-[#f5efe4] bg-grain-texture relative overflow-hidden"
      aria-labelledby="media-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-forest-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Media
          </span>
          <h2 id="media-heading" className="section-heading">CEAD in the Media</h2>
          <p className="mt-3 text-soil-500 font-body max-w-xl mx-auto">
            News coverage and media features highlighting CEAD's work in rural development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Video section */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path fill="white" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="section-subheading">CEAD TV News</h3>
            </div>

            {/* YouTube embed */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-card-hover bg-forest-900" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed?listType=search&list=CEAD+NGO+Puducherry"
                title="CEAD TV News — CEAD NGO Puducherry news features"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <p className="mt-3 text-xs font-body text-soil-400 text-center">
              News features and documentary coverage of CEAD's programs
            </p>
          </div>

          {/* Press clippings */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-soil-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-soil-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </div>
              <h3 className="section-subheading">CEAD Paper News</h3>
            </div>

            <div className="space-y-3">
              {pressClippings.map((clipping, index) => (
                <PressCard key={clipping.title} clipping={clipping} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
