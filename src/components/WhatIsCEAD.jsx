import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Consultancy Centre',
    accentColor: 'forest',
    items: [
      'Organic Farming',
      'Precision Farming',
      'Sustainable Agriculture',
      'Roof Top Garden',
      'Integrated Farming System',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Environment',
    accentColor: 'leaf',
    items: [
      'Solid Waste Management',
      'Afforestation Programme & Carbon Trading',
      'Awareness Programmes',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Agriculture',
    accentColor: 'gold',
    items: [
      'Organic Farming',
      'Precision Farming',
      'Integrated Farming System',
      'Mechanization in Paddy',
      'Government Linkages',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Development',
    accentColor: 'soil',
    items: [
      'Village Development Projects',
      'Village Farmers Association Formation',
      'Men Self-Help Group Formation',
      'Women Self-Help Group Formation',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhatIsCEAD() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="what-we-do"
      className="py-20 md:py-28 bg-cream-dark relative overflow-hidden"
      aria-labelledby="focus-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-forest-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soil-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h2 id="focus-heading" className="section-heading">Our Focus Areas</h2>
          <p className="mt-4 text-soil-600 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            CEAD works across four interconnected pillars — each addressing a critical dimension of
            sustainable rural development in Puducherry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              items={feature.items}
              accentColor={feature.accentColor}
              delay={index * 120}
            />
          ))}
        </div>

        {/* Products section */}
        <div
          id="products"
          className={`mt-16 bg-forest-800 rounded-3xl p-8 md:p-10 text-cream relative overflow-hidden transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold">Our Products</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Vermi Compost', desc: 'Nutrient-rich organic fertilizer from vermicomposting' },
                { name: 'Vermi Wash', desc: 'Liquid bio-fertilizer from earthworm castings' },
                { name: 'Organic Greens', desc: 'Freshly grown pesticide-free vegetables & greens' },
                { name: 'Enriched Pot Mixture', desc: 'Premium organic potting mix for home gardens' },
              ].map((product) => (
                <div key={product.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
                  <h4 className="font-display font-semibold text-gold-light mb-2">{product.name}</h4>
                  <p className="text-cream/70 font-body text-sm leading-relaxed">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
