import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeUp } from '../lib/motion';

const nationalPartners = [
  { name: 'NABARD, Government of India', category: 'Government' },
  { name: 'MANAGE, Hyderabad — Ministry of Agriculture & Farmers Welfare', category: 'Government' },
  { name: 'Coir Board, Pollachi', category: 'Government' },
  { name: 'DRDA', category: 'Government' },
  { name: 'Department of Science and Technology, Pondicherry', category: 'Government' },
  { name: 'Department of Agriculture, Pondicherry', category: 'Government' },
  { name: 'Department of Tourism, Pondicherry', category: 'Government' },
  { name: 'Krishi Vignyan Kendra, Pondicherry', category: 'Agriculture' },
  { name: 'PAJANCOA & RI, Karaikal', category: 'Agriculture' },
  { name: 'Annamalai University, Chidambaram', category: 'Education' },
  { name: 'Arulmigu Adiparasakthi Agriculture College, Kalavai', category: 'Education' },
  { name: 'Reliance Foundation', category: 'Foundation' },
  { name: 'CPRR Foundation', category: 'Foundation' },
  { name: 'Voluntary Association for People Service (VAPS)', category: 'NGO' },
  { name: 'REAL, Villupuram', category: 'NGO' },
  { name: 'HOPE, Pondicherry', category: 'NGO' },
  { name: 'CCD, Madurai', category: 'NGO' },
  { name: 'ARWEL, Sadraskuppam', category: 'NGO' },
  { name: 'PMSSS, Pondicherry', category: 'NGO' },
  { name: 'AIDE ET ACTION, Cuddalore', category: 'NGO' },
  { name: 'Subiksha, Chidambaram', category: 'NGO' },
  { name: 'AVVAI, Sirkali', category: 'NGO' },
  { name: 'ADRA India, Cuddalore', category: 'NGO' },
];

const internationalPartners = [
  {
    name: 'Concern Worldwide India',
    country: 'Ireland',
    desc: 'A leading international humanitarian organisation working with the world\'s poorest people to eliminate extreme poverty.',
  },
  {
    name: 'Wetlands International — Green Coast Project',
    country: 'Netherlands',
    desc: 'A global organisation working to sustain and restore wetlands and their resources for people and biodiversity, collaborating with CEAD on the Green Coast Project.',
  },
];

/** Groups the flat partner list into its categories, preserving order. */
const groupedNational = nationalPartners.reduce((acc, partner) => {
  (acc[partner.category] ??= []).push(partner);
  return acc;
}, {});

export default function Partnerships() {
  return (
    <Section id="partnerships" tone="canvas" aria-labelledby="partnerships-heading">
      <SectionHeader
        id="partnerships-heading"
        eyebrow="Our network"
        title="Who we work with"
        lead="CEAD collaborates with government bodies, universities, foundations and NGOs across South India, and with international organisations on coastal and livelihood programmes."
      />

      {/* National */}
      <div id="national" className="mt-14 scroll-mt-32">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="font-display text-h3 font-semibold text-forest-900">National partners</h3>
          <span className="font-body text-caption font-medium uppercase tracking-[0.12em] text-soil-500">
            {nationalPartners.length} organisations
          </span>
        </div>

        <div className="mt-10 space-y-10">
          {Object.entries(groupedNational).map(([category, partners]) => (
            <div key={category} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <h4 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600 lg:col-span-3">
                {category}
              </h4>
              <RevealGroup as="ul" step={0.03} className="lg:col-span-9" role="list">
                {partners.map((partner) => (
                  <RevealItem
                    as="li"
                    key={partner.name}
                    className="border-t border-line py-3.5 font-body text-body-lg text-soil-800 first:border-t-0 first:pt-0"
                  >
                    {partner.name}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>

      {/* International */}
      <div id="international" className="mt-20 scroll-mt-32">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="font-display text-h3 font-semibold text-forest-900">International partners</h3>
          <span className="font-body text-caption font-medium uppercase tracking-[0.12em] text-soil-500">
            {internationalPartners.length} organisations
          </span>
        </div>

        <RevealGroup className="mt-10 grid gap-8 md:grid-cols-2">
          {internationalPartners.map((partner) => (
            <RevealItem key={partner.name}>
              <article className="h-full rounded-2xl border border-line bg-surface p-7 shadow-sm">
                <p className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600">
                  {partner.country}
                </p>
                <h4 className="mt-4 font-display text-h3 font-semibold leading-snug text-forest-900">
                  {partner.name}
                </h4>
                <p className="mt-4 font-body text-small leading-relaxed text-soil-600">
                  {partner.desc}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Collaboration invitation */}
      <Reveal
        variant={fadeUp}
        className="mt-20 flex flex-col items-start gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-xl">
          <h3 className="font-display text-h3 font-semibold text-forest-900">
            Interested in partnering with CEAD?
          </h3>
          <p className="mt-2.5 font-body text-small leading-relaxed text-soil-600">
            We welcome collaborations with government bodies, NGOs, academic institutions and
            corporate foundations committed to rural and environmental development.
          </p>
        </div>
        <Button href="mailto:ceadngo@gmail.com" variant="primary" arrow className="shrink-0">
          Get in touch
        </Button>
      </Reveal>
    </Section>
  );
}
