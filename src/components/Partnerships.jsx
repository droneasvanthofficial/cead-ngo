import { useInView } from 'react-intersection-observer';

const nationalPartners = [
  { name: 'NABARD, Government of India', category: 'Government', icon: '🏛️' },
  { name: 'Coir Board, Pollachi', category: 'Government', icon: '🏛️' },
  { name: 'DRDA', category: 'Government', icon: '🏛️' },
  { name: 'CPRR Foundation', category: 'Foundation', icon: '🤝' },
  { name: 'Department of Science and Technology, Pondicherry', category: 'Government', icon: '🏛️' },
  { name: 'Department of Agriculture, Pondicherry', category: 'Government', icon: '🌾' },
  { name: 'Department of Tourism, Pondicherry', category: 'Government', icon: '🏛️' },
  { name: 'Krishi Vignyan Kendra, Pondicherry', category: 'Agriculture', icon: '🌱' },
  { name: 'PAJANCOA & RI, Karaikal', category: 'Agriculture', icon: '🌱' },
  { name: 'Arulmigu Adiparasakthi Agriculture College, Kalavai', category: 'Education', icon: '🎓' },
  { name: 'Annamalai University, Chidambaram', category: 'Education', icon: '🎓' },
  { name: 'Reliance Foundation', category: 'Foundation', icon: '🤝' },
  { name: 'Voluntary Association for People Service (VAPS)', category: 'NGO', icon: '🤝' },
  { name: 'REAL, Villupuram', category: 'NGO', icon: '🤝' },
  { name: 'HOPE, Pondicherry', category: 'NGO', icon: '🤝' },
  { name: 'CCD, Madurai', category: 'NGO', icon: '🤝' },
  { name: 'ARWEL, Sadraskuppam', category: 'NGO', icon: '🤝' },
  { name: 'PMSSS, Pondicherry', category: 'NGO', icon: '🤝' },
  { name: 'AIDE ET ACTION, Cuddalore', category: 'NGO', icon: '🤝' },
  { name: 'Subiksha, Chidambaram', category: 'NGO', icon: '🤝' },
  { name: 'AVVAI, Sirkali', category: 'NGO', icon: '🤝' },
  { name: 'ADRA India, Cuddalore', category: 'NGO', icon: '🤝' },
];

const internationalPartners = [
  {
    name: 'Concern Worldwide India',
    country: 'Ireland',
    flag: '🇮🇪',
    desc: 'Leading international humanitarian organisation working with the world\'s poorest people to eliminate extreme poverty.',
  },
  {
    name: 'Wetlands International — Green Coast Project',
    country: 'Netherlands',
    flag: '🇳🇱',
    desc: 'Global organisation that works to sustain and restore wetlands and their resources for people and biodiversity — Green Coast Project collaboration.',
  },
];

const categoryColors = {
  Government: 'bg-blue-50 text-blue-700 border-blue-200',
  Foundation: 'bg-purple-50 text-purple-700 border-purple-200',
  Agriculture: 'bg-green-50 text-green-700 border-green-200',
  Education: 'bg-amber-50 text-amber-700 border-amber-200',
  NGO: 'bg-forest-50 text-forest-700 border-forest-200',
};

function PartnerCard({ partner, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`bg-[#faf6f0] rounded-xl border border-forest-200/70 p-4 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      {/* Icon circle */}
      <div className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-forest-900 text-sm leading-snug">
          {partner.name}
        </p>
        <span className={`inline-block mt-1.5 text-[10px] font-body font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${categoryColors[partner.category]}`}>
          {partner.category}
        </span>
      </div>
    </div>
  );
}

export default function Partnerships() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="partnerships"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5efe4] via-[#ebe3d3] to-[#f5efe4] bg-grain-texture relative overflow-hidden"
      aria-labelledby="partnerships-heading"
    >
      {/* Ambient blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-leaf/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-800 text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm border border-forest-700">
            Our Network
          </span>
          <h2 id="partnerships-heading" className="section-heading text-forest-900">
            Partnerships
          </h2>
          <p className="mt-3 text-soil-700 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            CEAD collaborates with leading government bodies, universities, foundations, and NGOs across South India to drive sustainable rural development.
          </p>
        </div>

        {/* National Partners */}
        <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Category Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-forest-900">National Partners</h3>
                <p className="font-body text-soil-600 text-sm mt-0.5">
                  {nationalPartners.length} organisations across India
                </p>
              </div>
            </div>
            <div className="flex-1 h-px bg-forest-200/60 ml-4" />
            <span className="text-xs font-body font-bold bg-forest-800 text-cream px-3 py-1 rounded-full">
              {nationalPartners.length} Partners
            </span>
          </div>

          {/* Partners Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {nationalPartners.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* International Partners */}
        <div className={`mt-14 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-forest-900">International Partners</h3>
                <p className="font-body text-soil-600 text-sm mt-0.5">
                  {internationalPartners.length} global organisations
                </p>
              </div>
            </div>
            <div className="flex-1 h-px bg-forest-200/60 ml-4" />
            <span className="text-xs font-body font-bold bg-forest-800 text-cream px-3 py-1 rounded-full">
              {internationalPartners.length} Partners
            </span>
          </div>

          {/* International Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {internationalPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-[#faf6f0] rounded-2xl border border-forest-200/70 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                {/* Country Header Strip */}
                <div className="bg-forest-800 px-5 py-3 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">{partner.flag}</span>
                  <div>
                    <p className="font-body text-xs font-semibold text-gold-light uppercase tracking-widest">
                      {partner.country}
                    </p>
                  </div>
                  <span className="ml-auto text-xs font-body font-bold bg-white/15 text-cream px-2 py-0.5 rounded-full border border-white/20">
                    International
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-forest-900 text-base leading-snug mb-2">
                      {partner.name}
                    </h4>
                    <p className="font-body text-sm text-soil-600 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA / Collaboration Note */}
        <div className={`mt-14 bg-forest-800 rounded-2xl p-6 md:p-8 border border-forest-700 text-cream flex flex-col md:flex-row items-center gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/20 border border-gold/30 flex items-center justify-center">
            <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-xl font-bold mb-1">Interested in Partnering with CEAD?</h3>
            <p className="font-body text-cream/85 text-sm leading-relaxed">
              We welcome collaborations with government bodies, NGOs, academic institutions, and corporate foundations committed to rural and environmental development.
            </p>
          </div>
          <a
            href="mailto:ceadngo@gmail.com"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-forest-900 font-body font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
