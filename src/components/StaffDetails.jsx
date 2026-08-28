import { useInView } from 'react-intersection-observer';

const staffMembers = [
  {
    name: 'Mr. S. Senthilkumar',
    designation: 'Executive Director',
    department: 'Administration',
    qualification: 'M.Sc. (Agri), MBA',
    experience: 'Over 20 years of experience in agricultural development and NGO management',
    email: 'ceadngo@gmail.com',
    phone: '+91 98943 13435',
    image: null,
  },
  {
    name: 'Mrs. R. Lakshmi',
    designation: 'Programme Coordinator',
    department: 'Programmes & Projects',
    qualification: 'M.A. (Social Work)',
    experience: '15+ years in community development and women empowerment programmes',
    email: 'programmes@ceadngo.org',
    phone: '+91 98765 43210',
    image: null,
  },
  {
    name: 'Mr. V. Ramesh',
    designation: 'Agriculture Specialist',
    department: 'Agriculture & Environment',
    qualification: 'M.Sc. (Horticulture)',
    experience: '12 years of field experience in organic farming and sustainable agriculture',
    email: 'agriculture@ceadngo.org',
    phone: '+91 97865 12345',
    image: null,
  },
  {
    name: 'Mrs. K. Priya',
    designation: 'Finance & Accounts Officer',
    department: 'Finance & Administration',
    qualification: 'M.Com, CA (Inter)',
    experience: '10 years in financial management and NGO accounting',
    email: 'finance@ceadngo.org',
    phone: '+91 96543 21098',
    image: null,
  },
  {
    name: 'Mr. A. Murugan',
    designation: 'Field Officer',
    department: 'Field Operations',
    qualification: 'B.Sc. (Agriculture)',
    experience: '8 years in rural field operations and farmer training',
    email: 'field@ceadngo.org',
    phone: '+91 95432 10987',
    image: null,
  },
  {
    name: 'Mrs. S. Kavitha',
    designation: 'Documentation & Media Officer',
    department: 'Communications',
    qualification: 'M.A. (Mass Communication)',
    experience: '7 years in media documentation and content creation for development sector',
    email: 'media@ceadngo.org',
    phone: '+91 94321 09876',
    image: null,
  },
];

function StaffCard({ member, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Assign a department color
  const deptColors = {
    'Administration': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    'Programmes & Projects': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    'Agriculture & Environment': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    'Finance & Administration': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    'Field Operations': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    'Communications': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
  };

  const colors = deptColors[member.department] || { bg: 'bg-forest-50', text: 'text-forest-700', border: 'border-forest-200' };

  return (
    <article
      ref={ref}
      className={`bg-[#fcf9f2] rounded-2xl border border-forest-200/70 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#1a380f] via-[#3a7a5c] to-[#82a51f]" />

      <div className="p-6 flex flex-col sm:flex-row gap-5 items-start">
        {/* Avatar */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-forest-50 border-2 border-forest-100 flex-shrink-0 flex items-center justify-center shadow-sm">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-forest-600 p-2 text-center">
              <svg className="w-10 h-10 mb-1 opacity-60" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-[9px] font-body uppercase tracking-wider text-soil-400 font-semibold">Staff</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 space-y-2.5 min-w-0">
          <div>
            <h3 className="font-display text-lg font-bold text-forest-800 leading-tight">
              {member.name}
            </h3>
            <p className="font-body text-sm font-semibold text-[#82a51f] mt-0.5">
              {member.designation}
            </p>
          </div>

          {/* Department badge */}
          <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
            {member.department}
          </span>

          {/* Qualification */}
          {member.qualification && (
            <div className="flex items-start gap-2 text-xs font-body text-soil-600">
              <svg className="w-3.5 h-3.5 text-forest-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              </svg>
              <span>{member.qualification}</span>
            </div>
          )}

          {/* Experience */}
          {member.experience && (
            <p className="font-body text-xs text-soil-500 bg-forest-50/70 p-2 rounded-lg border border-forest-100/50 leading-relaxed">
              {member.experience}
            </p>
          )}

          {/* Contact */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1 text-xs font-body text-soil-700">
            {member.email && (
              <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 hover:text-forest-700 transition-colors">
                <svg className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="underline decoration-forest-300">{member.email}</span>
              </a>
            )}
            {member.phone && (
              <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-forest-700 transition-colors">
                <svg className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-semibold">{member.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function StaffDetails() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="staff-details"
      className="py-20 md:py-28 bg-cream-dark relative overflow-hidden"
      aria-labelledby="staff-heading"
    >
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-100 rounded-full -translate-x-1/3 translate-y-1/3 opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#82a51f]/10 rounded-full opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Team
          </span>
          <h2 id="staff-heading" className="section-heading">Staff Details</h2>
          <p className="mt-3 text-soil-500 font-body max-w-2xl mx-auto">
            Dedicated professionals driving CEAD's mission for sustainable agricultural development and community empowerment
          </p>
        </div>

        {/* Staff cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {staffMembers.map((member, index) => (
            <StaffCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
