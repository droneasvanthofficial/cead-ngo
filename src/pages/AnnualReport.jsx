import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const reports = [
  {
    year: '2025–2026',
    title: 'CEAD Annual Report 2025–2026',
    description: 'Latest annual report detailing CEAD\'s flagship sustainable development programs, agricultural consultancy, and community outreach across South India.',
    fileUrl: '/reports/CEAD_Annual_Report-2025-2026.pdf',
    type: 'PDF',
  },
  {
    year: '2024–2025',
    title: 'CEAD Annual Report 2024–2025',
    description: 'Comprehensive report highlighting women empowerment initiatives, organic farming units, Mahila Kisan training, and community institution development.',
    fileUrl: '/reports/CEAD_Annual_Report_2024-2025.docx',
    type: 'DOCX',
  },
  {
    year: '2023–2024',
    title: 'CEAD Annual Report 2023–2024',
    description: 'Detailed overview of agro-tourism bookings, vermicompost & pot mixture production, self-help group banking linkages, and rural skill workshops.',
    fileUrl: '/reports/CEAD_Annual_Report_2023_2024.docx',
    type: 'DOCX',
  },
  {
    year: '2022–2023',
    title: 'CEAD Annual Report 2022–2023',
    description: 'Activities and achievements report covering soil testing lab services, farmers field school sessions, and environmental protection drives.',
    fileUrl: '/reports/2022-2023_Annual_Report.doc',
    type: 'DOC',
  },
  {
    year: '2019–2020',
    title: 'CEAD Annual Report 2019–2020',
    description: 'Annual milestone summary on watershed management, integrated livelihood farms, and healthcare initiatives during 2019–20.',
    fileUrl: '/reports/ANNUAL_REPORT_2019-20_FINAL.docx',
    type: 'DOCX',
  },
  {
    year: '2018–2019',
    title: 'CEAD Annual Report 2018–2019',
    description: 'Overview of field activities, NABARD joint liability groups, and sustainable agriculture promotion across Puducherry and Tamil Nadu.',
    fileUrl: '/reports/annual_report_2018_-2019.pdf',
    type: 'PDF',
  },
  {
    year: '2017–2018',
    title: 'CEAD 1st Annual Report 2017–2018',
    description: 'Foundational annual report documenting early village interventions, soil health drives, and institutional partner establishment.',
    fileUrl: '/reports/2017-18.pdf',
    type: 'PDF',
  },
];

const specialReports = [
  {
    year: 'Special Training Report',
    title: 'Mahila Kisan Sashakikaran Pariyojana — Skill Training',
    description: 'Comprehensive report on skill training program conducted for rural women farmers under Mahila Kisan Sashakikaran Pariyojana.',
    fileUrl: '/reports/MAHILA_KISAN_SASHAKIKARAN_PARIYOJANA_-_SKILL_TRAINING_(23.12.2024_TO_31.12.2024).docx',
    type: 'DOCX',
  },
  {
    year: 'Event Summary Report',
    title: 'Valedictory Event Report',
    description: 'Detailed report covering valedictory celebrations, certificate distribution to trainees, and stakeholder addresses.',
    fileUrl: '/reports/Valedictory_Report_17.11.25_(New).docx',
    type: 'DOCX',
  },
];

function ReportCard({ report, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`bg-[#faf6f0] rounded-2xl border border-forest-200/70 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Year strip */}
      <div className="bg-[#1a380f] px-6 py-3 flex items-center justify-between">
        <span className="font-body text-xs font-bold uppercase tracking-widest text-gold-light">
          {report.year}
        </span>
        <span className="text-xs font-body font-bold bg-white/15 text-cream px-2.5 py-0.5 rounded-full border border-white/20">
          {report.type}
        </span>
      </div>

      <div className="p-6 flex items-start gap-5">
        {/* Icon */}
        <div className="w-14 h-16 rounded-xl bg-forest-100 border border-forest-200 flex flex-col items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-forest-800" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
          <span className="text-[9px] font-body font-bold text-forest-800 mt-0.5 tracking-wider">{report.type}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-forest-900 text-lg leading-snug mb-2">
            {report.title}
          </h3>
          <p className="font-body text-sm text-soil-600 leading-relaxed mb-4">
            {report.description}
          </p>

          <a
            href={report.fileUrl}
            download
            className="inline-flex items-center gap-2 bg-[#1a380f] hover:bg-[#82a51f] text-cream font-body font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Document ({report.type})
          </a>
        </div>
      </div>
    </article>
  );
}

export default function AnnualReport() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f2e8] via-[#eee5d4] to-[#f7f2e8] bg-grain-texture">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-[#1a380f] text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-forest-700">
            News &amp; Events
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-forest-900 leading-tight mb-4">
            Annual Reports &amp; Documentation
          </h1>
          <p className="font-body text-soil-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Official annual reports, event summaries, and special project documentation published by CEAD — transparently available for download.
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-3 gap-4 mb-14 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { value: '7+', label: 'Annual Reports' },
            { value: '14', label: 'Documents Available' },
            { value: '200+', label: 'Villages Covered' },
          ].map((s) => (
            <div key={s.label} className="bg-[#faf6f0] rounded-2xl border border-forest-200/70 p-5 text-center shadow-sm">
              <p className="font-display text-3xl font-bold text-forest-800">{s.value}</p>
              <p className="font-body text-xs text-soil-600 mt-1 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Annual Reports List */}
        <div className="space-y-6 mb-16">
          <h2 className="font-display text-2xl font-bold text-forest-900 border-b border-forest-200/80 pb-3 flex items-center gap-2">
            <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Annual Reports Archive
          </h2>
          <div className="space-y-5">
            {reports.map((report, index) => (
              <ReportCard key={report.year} report={report} index={index} />
            ))}
          </div>
        </div>

        {/* Special Project Reports */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-forest-900 border-b border-forest-200/80 pb-3 flex items-center gap-2">
            <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Special Training &amp; Event Reports
          </h2>
          <div className="space-y-5">
            {specialReports.map((report, index) => (
              <ReportCard key={report.title} report={report} index={index} />
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#1a380f] hover:bg-[#82a51f] text-cream font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
