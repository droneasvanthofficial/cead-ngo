import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { fadeUp } from '../lib/motion';

/**
 * Statutory registrations and filings. CEAD has not published these documents
 * on the site, so each is listed with what it is and how to request it, rather
 * than with a download link that would not resolve.
 */
const documents = [
  {
    label: 'Darpan',
    name: 'NGO Darpan registration',
    description:
      'CEAD\'s registration on the NITI Aayog NGO Darpan portal, which government departments use to verify a registered organisation before sanctioning a project.',
  },
  {
    label: '80G',
    name: '80G certificate',
    description:
      'Income Tax certification allowing Indian donors to claim a deduction on donations made to CEAD.',
  },
  {
    label: '12A',
    name: '12A registration',
    description:
      'Income Tax registration for charitable trusts, exempting CEAD\'s income applied to its objects.',
  },
  {
    label: 'Form VII',
    name: 'Form VII — trust registration',
    description:
      'The registration record for CEAD as a public charitable trust in Puducherry.',
  },
  {
    label: 'Receipts',
    name: 'Fund receipts & utilisation',
    description:
      'Statements of funds received and how they were applied to programmes for a given financial year.',
  },
];

export default function FinancialReportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparency"
        title="Financial Reports"
        description="CEAD's statutory registrations, tax certifications and fund utilisation records."
        crumbs={[{ label: 'Media', href: '/media' }, { label: 'Financial Reports' }]}
      />

      <Section tone="canvas">
        <Reveal variant={fadeUp} className="max-w-prose">
          <h2 className="font-display text-h2 font-semibold text-forest-900">
            Where CEAD&rsquo;s finances are recorded
          </h2>
          <p className="mt-5 font-body text-lead text-soil-600">
            Programme activity and expenditure for each year are set out in the{' '}
            <a href="/annual-report" className="link-underline font-medium">annual reports</a>, which
            are published here in full. The statutory documents below are held at the CEAD office
            and issued on request to donors, partners and government departments.
          </p>
        </Reveal>

        <RevealGroup as="ul" step={0.06} className="mt-14" role="list">
          {documents.map((doc) => (
            <RevealItem
              as="li"
              key={doc.label}
              className="grid gap-3 border-t border-line py-6 sm:grid-cols-12 sm:gap-6"
            >
              <p className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600 sm:col-span-3">
                {doc.label}
              </p>
              <div className="sm:col-span-9">
                <h3 className="font-display text-h4 font-semibold text-forest-900">{doc.name}</h3>
                <p className="mt-2 font-body text-small leading-relaxed text-soil-600">
                  {doc.description}
                </p>
                <a
                  href={`mailto:ceadngo@gmail.com?subject=${encodeURIComponent(`Document request — ${doc.name}`)}`}
                  className="link-arrow mt-3"
                >
                  Request this document
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12h15m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal
          variant={fadeUp}
          className="mt-14 flex flex-col items-start gap-5 rounded-xl bg-cream-dark p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-h4 font-semibold text-forest-900">
              Published programme reporting
            </h2>
            <p className="mt-2 font-body text-small leading-relaxed text-soil-600">
              Seven years of annual reports are available to download in full, covering programme
              activity across Puducherry and Tamil Nadu.
            </p>
          </div>
          <Button to="/annual-report" variant="primary" size="sm" arrow className="shrink-0">
            Annual reports
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
