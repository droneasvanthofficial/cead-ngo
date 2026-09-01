import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Stat from './ui/Stat';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeLeft, fadeUp } from '../lib/motion';
import aboutImg from '../assets/images/real_gallery_6.jpg';
import chairmanImg from '../assets/images/chairman.jpg';

const reachPoints = [
  'Reached more than 200 villages in Puducherry and Tamil Nadu.',
  'Touched and transformed the lives of South Indian farmer families.',
  'Established a furnished Soil Testing Laboratory.',
  'Promoted organic production and marketing in the area of agriculture.',
  'Provided certified entrepreneurship development training to more than 1,000 agri-graduates, and incubated many successful ventures.',
  'Established an Integrated Livelihood Farm, and trained Below Poverty Line rural women and youth in vocational skills to help them gain meaningful livelihoods.',
  'Established village-based institutions — societies, saving and thrift credit groups, and more than 500 SHGs — strengthening participatory development in agriculture, health and allied sectors.',
  'Answered farmer queries through the Farmers Field School Programme conducted under the CEAD–Reliance partnership.',
  'Runs a Vermi Compost Unit, Pot Mixture Unit and Vermi Wash Unit at our own farm.',
  'Promotes environmental protection activities in both urban and rural areas.',
  'Implements programmes through a series of meetings and awareness campaigns involving the target community.',
  'Operates its own Training & Development Unit, providing on- and off-farm training to internal and external agencies and to students from schools, colleges and institutions — including Annamalai University, Pondicherry University, the Agriculture Department, PKKVK, PAJANCOA, Kerala University, Adhiparasakthi College, Swedish universities and United Nations students.',
  'Runs a Knowledge Centre for rural people to develop their interest in communication development and other aspects of livelihoods.',
  'Builds community capacity for self-reliance, so people can identify their own problems and develop their own solutions through team spirit.',
];

const stats = [
  { value: '200+', label: 'Villages reached' },
  { value: '1000+', label: 'Agri-graduates trained' },
  { value: '500+', label: 'SHGs established' },
  { value: '20+', label: 'Years of service' },
];

const principles = [
  {
    title: 'Vision',
    body: 'To give equal opportunities to all citizens and ensure their basic needs, and to undertake environmentally sustainable and economically viable activities for those who need them.',
  },
  {
    title: 'Mission',
    body: 'Empower deprived sections of society — especially women and farming communities — through skill development, education and health care, and by initiating environmentally sustainable and economically viable activities.',
  },
];

const values = ['Integrity', 'Empowerment', 'Sustainability', 'Inclusivity', 'Accountability', 'Collaboration'];

export default function AboutSection() {
  return (
    <>
      {/* ── Profile & origins ─────────────────────────────────────────────── */}
      <Section id="about" tone="canvas" aria-labelledby="about-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              id="about-heading"
              eyebrow="Our profile"
              title="Bridging modern sustainable technique and traditional farming wisdom"
            />

            <RevealGroup className="mt-7 max-w-prose space-y-5 font-body text-body-lg leading-relaxed text-soil-700">
              <RevealItem as="p">
                CEAD is a registered non-governmental, not-for-profit organisation headquartered in
                Puducherry, India. It was founded in 2003 by like-minded young people from
                agriculture, environmental science, medicine, commerce and computer science.
              </RevealItem>
              <RevealItem as="p">
                Our interdisciplinary team works closely across more than 200 villages to uplift
                farming communities, build self-help institutions, and foster long-term
                environmental sustainability.
              </RevealItem>
            </RevealGroup>

            {/* Founder */}
            <Reveal
              variant={fadeUp}
              className="mt-9 flex items-center gap-4 rounded-xl border border-line bg-surface p-5 shadow-sm"
            >
              <img
                src={chairmanImg}
                alt=""
                className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="font-display text-h4 font-semibold text-forest-900">Mr. C. Ganeche</p>
                <p className="mt-1 font-body text-caption text-soil-600">
                  M.Sc (Agr.), Ph.D (Envt) · Founder &amp; Director
                </p>
              </div>
              <Button to="/director-message" variant="secondary" size="sm" className="ml-auto hidden shrink-0 sm:inline-flex">
                Read message
              </Button>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <RevealItem key={stat.label}>
                  <Stat value={stat.value} label={stat.label} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant={fadeLeft} className="overflow-hidden rounded-2xl lg:sticky lg:top-32">
              <img
                src={aboutImg}
                alt="A group gathered around an open composting bed during a CEAD demonstration"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Reach at a glance ─────────────────────────────────────────────── */}
      <Section id="reach" tone="cream" aria-labelledby="reach-heading">
        <SectionHeader
          id="reach-heading"
          eyebrow="Reach at a glance"
          title="What two decades of fieldwork has built"
          lead="Impact across Puducherry and Tamil Nadu, recorded in CEAD's own programme reporting."
        />

        <RevealGroup
          as="ol"
          step={0.04}
          className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2"
        >
          {reachPoints.map((point, i) => (
            <RevealItem
              as="li"
              key={point}
              className="flex gap-5 border-t border-line py-5 first:border-t-0 md:first:border-t md:[&:nth-child(2)]:border-t-0"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 font-body text-caption font-semibold tabular-nums text-forest-500"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-body text-small leading-relaxed text-soil-700">{point}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── Vision, mission, values ───────────────────────────────────────── */}
      <Section id="vision" tone="forest" aria-labelledby="vision-heading">
        <SectionHeader
          id="vision-heading"
          eyebrow="Our purpose"
          title="Vision & Mission"
          tone="dark"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealGroup className="space-y-10 lg:col-span-8">
            {principles.map((item) => (
              <RevealItem key={item.title} className="border-l-2 border-gold/50 pl-6 sm:pl-8">
                <h3 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-gold-light">
                  {item.title}
                </h3>
                <p className="mt-4 font-display text-h3 font-normal leading-snug text-cream">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal variant={fadeUp} className="lg:col-span-4">
            <h3 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-gold-light">
              Core values
            </h3>
            <ul className="mt-5 space-y-0" role="list">
              {values.map((value) => (
                <li
                  key={value}
                  className="border-t border-cream/15 py-3.5 font-body text-body-lg text-cream/85 first:border-t-0 first:pt-0"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
