import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { fadeUp } from '../lib/motion';

// Each `fileUrl` must match a file in `public/reports/` exactly — spaces and
// parentheses in those filenames are literal, not URL-encoded.
const reports = [
  {
    year: '2025–2026',
    title: 'CEAD Annual Report 2025–2026',
    description:
      'The latest annual report, covering CEAD\'s sustainable development programmes, agricultural consultancy and community outreach across South India.',
    fileUrl: '/reports/CEAD_Annual_Report-2025-2026.pdf',
    type: 'PDF',
  },
  {
    year: '2024–2025',
    title: 'CEAD Annual Report 2024–2025',
    description:
      'Women empowerment initiatives, organic farming units, Mahila Kisan training and community institution development.',
    fileUrl: '/reports/CEAD_Annual_Report_2024-2025.docx',
    type: 'DOCX',
  },
  {
    year: '2023–2024',
    title: 'CEAD Annual Report 2023–2024',
    description:
      'Agro-tourism bookings, vermicompost and pot mixture production, self-help group banking linkages, and rural skill workshops.',
    fileUrl: '/reports/CEAD_Annual_Report_2023_2024.docx',
    type: 'DOCX',
  },
  {
    year: '2022–2023',
    title: 'CEAD Annual Report 2022–2023',
    description:
      'Soil testing lab services, farmers field school sessions and environmental protection drives.',
    fileUrl: '/reports/2022-2023_Annual_Report.doc',
    type: 'DOC',
  },
  {
    year: '2019–2020',
    title: 'CEAD Annual Report 2019–2020',
    description:
      'Watershed management, integrated livelihood farms and healthcare initiatives during 2019–20.',
    fileUrl: '/reports/ANNUAL_REPORT_2019-20_FINAL.docx',
    type: 'DOCX',
  },
  {
    year: '2018–2019',
    title: 'CEAD Annual Report 2018–2019',
    description:
      'Field activities, NABARD joint liability groups, and sustainable agriculture promotion across Puducherry and Tamil Nadu.',
    fileUrl: '/reports/annual_report_2018_-2019.pdf',
    type: 'PDF',
  },
  {
    year: '2017–2018',
    title: 'CEAD 1st Annual Report 2017–2018',
    description:
      'Early village interventions, soil health drives and the establishment of institutional partnerships.',
    fileUrl: '/reports/2017-18.pdf',
    type: 'PDF',
  },
];

const specialReports = [
  {
    year: 'Training report',
    title: 'Mahila Kisan Sashakikaran Pariyojana — skill training',
    description:
      'Skill training conducted for rural women farmers, 23–31 December 2024.',
    fileUrl: '/reports/MAHILA_KISAN_SASHAKIKARAN_PARIYOJANA_-_SKILL_TRAINING_(23.12.2024_TO_31.12.2024).docx',
    type: 'DOCX',
  },
  {
    year: 'Event report',
    title: 'Valedictory event report',
    description:
      'Valedictory celebrations, certificate distribution to trainees, and stakeholder addresses.',
    fileUrl: '/reports/Valedictory_Report_17.11.25_(New).docx',
    type: 'DOCX',
  },
];

function DownloadIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-y-0.5"
      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
    </svg>
  );
}

function ReportRow({ report, featured = false }) {
  if (featured) {
    return (
      <a
        href={report.fileUrl}
        download
        className="group block overflow-hidden rounded-2xl bg-forest-900 p-8 transition-colors duration-300 hover:bg-forest-800 sm:p-10"
      >
        <p className="eyebrow-on-dark">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-gold/60" />
          Latest report · {report.year}
        </p>
        <h3 className="mt-4 font-display text-h2 font-semibold text-cream">{report.title}</h3>
        <p className="mt-4 max-w-2xl font-body text-lead text-cream/70">{report.description}</p>
        <span className="mt-7 inline-flex items-center gap-2 font-body text-small font-semibold text-gold-light">
          Download {report.type}
          <DownloadIcon />
        </span>
      </a>
    );
  }

  return (
    <a
      href={report.fileUrl}
      download
      className="group grid gap-3 border-t border-line py-6 sm:grid-cols-12 sm:gap-6"
    >
      <p className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600 sm:col-span-3">
        {report.year}
      </p>
      <div className="sm:col-span-9">
        <h3 className="font-display text-h4 font-semibold text-forest-900 transition-colors duration-200 group-hover:text-forest-600">
          {report.title}
        </h3>
        <p className="mt-2 font-body text-small leading-relaxed text-soil-600">{report.description}</p>
        <span className="mt-3 inline-flex items-center gap-2 font-body text-caption font-semibold text-forest-700">
          Download {report.type}
          <DownloadIcon />
        </span>
      </div>
    </a>
  );
}

export default function AnnualReport() {
  const [latest, ...rest] = reports;

  return (
    <>
      <PageHeader
        eyebrow="Transparency"
        title="Annual Reports"
        description="Every year of CEAD's work, documented and published — programme activity, training numbers and community outcomes."
        crumbs={[{ label: 'Media', href: '/media' }, { label: 'Annual Reports' }]}
      />

      <Section tone="canvas">
        <Reveal variant={fadeUp}>
          <ReportRow report={latest} featured />
        </Reveal>

        <div className="mt-16">
          <h2 className="border-b border-line pb-4 font-display text-h3 font-semibold text-forest-900">
            Earlier reports
          </h2>
          <RevealGroup step={0.05} className="mt-2">
            {rest.map((report) => (
              <RevealItem key={report.fileUrl}>
                <ReportRow report={report} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-16">
          <h2 className="border-b border-line pb-4 font-display text-h3 font-semibold text-forest-900">
            Programme &amp; event reports
          </h2>
          <RevealGroup step={0.05} className="mt-2">
            {specialReports.map((report) => (
              <RevealItem key={report.fileUrl}>
                <ReportRow report={report} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal
          variant={fadeUp}
          className="mt-16 flex flex-col items-start gap-5 rounded-xl bg-cream-dark p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-h4 font-semibold text-forest-900">
              Looking for an earlier year, or a statutory document?
            </h2>
            <p className="mt-2 font-body text-small leading-relaxed text-soil-600">
              Reports from before 2017 and registration certificates are available from the CEAD
              office on request.
            </p>
          </div>
          <Button href="mailto:ceadngo@gmail.com" variant="primary" size="sm" arrow className="shrink-0">
            Request a document
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
