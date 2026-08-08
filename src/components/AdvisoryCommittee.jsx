import { useInView } from 'react-intersection-observer';
import mahadevanImg from '../assets/images/mahadevan.png';
import kuppusamyImg from '../assets/images/kuppusamy.png';
import boopathyImg from '../assets/images/boopathy.png';
import pandianImg from '../assets/images/pandian.png';

const advisors = [
  {
    name: 'Mr. K. Mahadevan',
    degrees: 'B.Sc (Agri), M.Sc (Ecology)',
    title: 'Director of Agriculture (Rtd.), Pondicherry',
    role: 'Consultant — Agriculture / Ecology & Rural Development',
    address: 'No: 31, First Cross Brindavan, Puducherry - 605 013',
    phone: '0413 - 2243231',
    mobile: '+91 93813 41900',
    image: mahadevanImg,
  },
  {
    name: 'Mr. P. Kuppusamy',
    degrees: 'M.Sc. (Agri), M.Z.S., F.E.S.I.',
    title: 'Additional Director of Agriculture (Rtd.), Pondicherry',
    role: 'Consultant — Agriculture / Ecology',
    address: '44, Lenin Street, Kosapalayam, Puducherry - 605 013',
    phone: '0413 - 2241773',
    mobile: '+91 96005 032938',
    image: kuppusamyImg,
  },
  {
    name: 'Dr. P. Murugesa Boopathy',
    degrees: 'Former Vice-Chancellor',
    title: 'Tamil Nadu Agricultural University, Coimbatore',
    role: 'Senior Advisor — Agricultural Education & Research',
    address: '190/1, Green Fields, Anna Nagar West Extn., Chennai - 600 010',
    phone: '044 - 26562596 / 1017',
    image: boopathyImg,
  },
  {
    name: 'Dr. B.J. Pandian',
    degrees: 'Ph.D.',
    title: 'Director (i/c) and Nodal Officer (TN-IAMWARM)',
    role: 'Water Technology Centre, TNAU, Coimbatore - 641 003',
    phone: '0422 - 6611278 / 378 / 375',
    image: pandianImg,
  },
  {
    name: 'Dr. Anbumani',
    degrees: 'Ph.D.',
    title: 'Assistant Professor',
    role: 'Oilseed Research Station, Tindivanam, Villupuram Dt. - 604 002',
    image: null,
  },
  {
    name: 'Dr. Usha',
    degrees: 'MD',
    title: 'Health Consultant',
    role: 'Community Health & Hygiene Advisor',
    address: 'No: 6, Main Road, Thendral Nagar, Puducherry - 605 013',
    phone: '0413 - 4202435',
    image: null,
  },
  {
    name: 'Mr. Ramalingam',
    degrees: '',
    title: 'Steward, Sustinancy Farm',
    role: 'Aurovillian · SUSTINANCY Farm, Auroville',
    mobile: '+91 94433 05663',
    image: null,
  },
];

function AdvisorCard({ advisor, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`bg-[#fcf9f2] rounded-2xl border border-forest-200/70 p-6 shadow-sm hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Profile photo / Avatar */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-forest-50 border-2 border-forest-100 flex-shrink-0 flex items-center justify-center shadow-sm">
        {advisor.image ? (
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-forest-600 p-2 text-center">
            <svg className="w-10 h-10 mb-1 opacity-60" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] font-body uppercase tracking-wider text-soil-400 font-semibold">CEAD Advisor</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 space-y-2.5 min-w-0">
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="font-display text-lg font-bold text-forest-800 leading-tight">
              {advisor.name}
            </h3>
            {advisor.degrees && (
              <span className="text-xs font-body font-semibold text-terracotta bg-soil-50 px-2 py-0.5 rounded-md">
                {advisor.degrees}
              </span>
            )}
          </div>
          <p className="font-body text-xs font-medium text-forest-600 mt-1">{advisor.title}</p>
        </div>

        <p className="font-body text-xs text-soil-600 font-medium bg-forest-50/70 p-2 rounded-lg border border-forest-100/50">
          {advisor.role}
        </p>

        {/* Contact info list */}
        <div className="space-y-1.5 pt-1 text-xs font-body text-soil-700">
          {advisor.address && (
            <div className="flex items-start gap-2">
              <svg className="w-3.5 h-3.5 text-forest-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="leading-snug">{advisor.address}</span>
            </div>
          )}

          {advisor.phone && (
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Tel: <a href={`tel:${advisor.phone.split('/')[0].trim()}`} className="hover:text-forest-800 underline decoration-forest-300">{advisor.phone}</a></span>
            </div>
          )}

          {advisor.mobile && (
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-leaf-dark flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Mob: <a href={`tel:${advisor.mobile.replace(/\s+/g, '')}`} className="hover:text-forest-800 font-semibold">{advisor.mobile}</a></span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AdvisoryCommittee() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="advisory-committee"
      className="py-20 md:py-28 bg-cream-dark relative overflow-hidden"
      aria-labelledby="advisory-heading"
    >
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Leadership &amp; Governance
          </span>
          <h2 id="advisory-heading" className="section-heading">Advisory Committee</h2>
          <p className="mt-3 text-soil-500 font-body max-w-2xl mx-auto">
            Distinguished agricultural scientists, former directors, vice-chancellors, and health consultants guiding CEAD's mission
          </p>
        </div>

        {/* Advisory cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {advisors.map((advisor, index) => (
            <AdvisorCard key={advisor.name} advisor={advisor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
