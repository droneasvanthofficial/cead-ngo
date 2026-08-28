import { useInView } from 'react-intersection-observer';

const trustees = [
  {
    name: 'Mr. S. Senthilkumar',
    designation: 'Chairman & Managing Trustee',
    qualification: 'M.Sc. (Agri), MBA',
    bio: 'Founding member of CEAD with over two decades of experience in agricultural development, rural empowerment, and environmental conservation. Has led multiple national and international projects for sustainable livelihoods.',
    since: '2004',
    image: null,
  },
  {
    name: 'Mrs. P. Saraswathi',
    designation: 'Vice Chairperson',
    qualification: 'M.A. (Economics)',
    bio: 'A committed social worker focused on women empowerment and self-help group development across rural Tamil Nadu and Puducherry. Pioneered CEAD\'s micro-enterprise programs.',
    since: '2004',
    image: null,
  },
  {
    name: 'Mr. R. Anbalagan',
    designation: 'Secretary',
    qualification: 'M.Sc. (Environmental Science)',
    bio: 'An environmentalist with deep expertise in biodiversity conservation, watershed management, and climate-resilient agriculture practices.',
    since: '2005',
    image: null,
  },
  {
    name: 'Mr. K. Ravi',
    designation: 'Treasurer',
    qualification: 'M.Com, LLB',
    bio: 'Experienced in financial administration and legal compliance for non-profit organisations. Ensures transparency and accountability in CEAD\'s financial operations.',
    since: '2006',
    image: null,
  },
  {
    name: 'Dr. M. Subramaniam',
    designation: 'Trustee',
    qualification: 'Ph.D. (Agricultural Sciences)',
    bio: 'Former Professor and research scientist specializing in organic farming, soil health, and crop diversification. Guides CEAD\'s agricultural research initiatives.',
    since: '2007',
    image: null,
  },
  {
    name: 'Mrs. L. Jayanthi',
    designation: 'Trustee',
    qualification: 'M.S.W.',
    bio: 'Specialist in community health and rural development. Has managed several projects on nutrition, sanitation, and healthcare access in underserved regions.',
    since: '2008',
    image: null,
  },
  {
    name: 'Mr. T. Natarajan',
    designation: 'Trustee',
    qualification: 'B.E., MBA',
    bio: 'Brings corporate governance expertise and strategic planning experience to CEAD. Actively supports capacity-building and institutional strengthening efforts.',
    since: '2010',
    image: null,
  },
];

function TrusteeCard({ trustee, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Role-based accent colors
  const roleAccent = {
    'Chairman & Managing Trustee': 'from-amber-500 to-amber-600',
    'Vice Chairperson': 'from-emerald-500 to-emerald-600',
    'Secretary': 'from-blue-500 to-blue-600',
    'Treasurer': 'from-purple-500 to-purple-600',
    'Trustee': 'from-forest-600 to-forest-700',
  };

  const gradient = roleAccent[trustee.designation] || 'from-forest-600 to-forest-700';

  return (
    <article
      ref={ref}
      className={`bg-[#fcf9f2] rounded-2xl border border-forest-200/70 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        {/* Avatar with gradient ring */}
        <div className={`w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br ${gradient} p-[3px] shadow-md group-hover:scale-105 transition-transform duration-300 mb-4`}>
          <div className="w-full h-full rounded-full overflow-hidden bg-forest-50 flex items-center justify-center">
            {trustee.image ? (
              <img
                src={trustee.image}
                alt={trustee.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-forest-600 p-2">
                <svg className="w-10 h-10 opacity-60" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="font-display text-lg font-bold text-forest-800 leading-tight">
          {trustee.name}
        </h3>
        <p className="font-body text-sm font-semibold text-[#82a51f] mt-1">
          {trustee.designation}
        </p>

        {/* Qualification & Since badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {trustee.qualification && (
            <span className="text-xs font-body font-semibold text-terracotta bg-soil-50 px-2.5 py-0.5 rounded-md">
              {trustee.qualification}
            </span>
          )}
          {trustee.since && (
            <span className="text-xs font-body font-medium text-forest-700 bg-forest-50 px-2.5 py-0.5 rounded-md border border-forest-100">
              Since {trustee.since}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-forest-300 to-transparent my-4" />

        {/* Bio */}
        {trustee.bio && (
          <p className="font-body text-xs text-soil-500 leading-relaxed max-w-sm">
            {trustee.bio}
          </p>
        )}
      </div>
    </article>
  );
}

export default function BoardTrustees() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="board-trustees"
      className="py-20 md:py-28 bg-cream-dark relative overflow-hidden"
      aria-labelledby="trustees-heading"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#82a51f]/10 rounded-full opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Governance
          </span>
          <h2 id="trustees-heading" className="section-heading">Board of Trustees</h2>
          <p className="mt-3 text-soil-500 font-body max-w-2xl mx-auto">
            Visionary leaders guiding CEAD's mission towards sustainable development and community transformation
          </p>
        </div>

        {/* Intro card */}
        <div
          ref={introRef}
          className={`max-w-3xl mx-auto mb-14 bg-white/70 backdrop-blur-sm rounded-2xl border border-forest-200/50 p-6 sm:p-8 shadow-sm transition-all duration-700 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-forest-800 mb-1.5">About the Board</h3>
              <p className="font-body text-sm text-soil-500 leading-relaxed">
                The Board of Trustees provides strategic governance and oversight to CEAD. Comprising experienced professionals
                from diverse backgrounds—agriculture, environment, finance, social work, and management—the Board ensures that
                CEAD remains true to its founding vision of sustainable development and community empowerment across rural India.
              </p>
            </div>
          </div>
        </div>

        {/* Trustee cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustees.map((trustee, index) => (
            <TrusteeCard key={trustee.name} trustee={trustee} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
