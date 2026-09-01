import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { fadeUp } from '../lib/motion';
import heroImg from '../assets/images/real_gallery_2.jpg';

/**
 * Ways to work with CEAD. Every route described here maps to something the
 * organisation already does — training, field programmes, partnerships — and
 * every enquiry goes to the real office contacts.
 */
const routes = [
  {
    slug: 'volunteers',
    title: 'Volunteer',
    summary:
      'Spend time on the ground with CEAD\'s field teams — training batches, awareness campaigns, nursery and vermicompost units, and village self-help group meetings.',
    points: [
      'Students and graduates from agriculture, environment and social work backgrounds',
      'Short placements and semester field-work projects',
      'On- and off-farm training through CEAD\'s own Training & Development Unit',
    ],
  },
  {
    slug: 'social-developers',
    title: 'Social developers & institutions',
    summary:
      'Universities, colleges and agencies that want to run field exposure, research or extension programmes with an established partner in Puducherry and Tamil Nadu.',
    points: [
      'Student field visits and institutional training programmes',
      'Joint research on organic production, soil health and rural livelihoods',
      'Programme delivery partnerships with government and NGO agencies',
    ],
  },
  {
    slug: 'donors',
    title: 'Donors & supporters',
    summary:
      'Support the programmes that reach farming families directly — skill training, self-help group formation, soil testing and environmental work.',
    points: [
      'Corporate foundations and CSR programmes',
      'Individual supporters of specific training batches or village programmes',
      'Annual reports are published openly so you can see where work is going',
    ],
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Join CEAD"
        description="Three ways to work with us — as a volunteer, as a partner institution, or as a supporter of the programmes themselves."
        crumbs={[{ label: 'Get Involved' }]}
        image={heroImg}
        imageAlt=""
      />

      <Section tone="canvas">
        <RevealGroup as="ol" step={0.08} className="space-y-0" role="list">
          {routes.map((route, index) => (
            <RevealItem
              as="li"
              key={route.title}
              id={route.slug}
              className="grid gap-6 border-t border-line py-10 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12 scroll-mt-40"
            >
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-body text-caption font-semibold tabular-nums text-forest-500"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-h2 font-semibold text-forest-900">{route.title}</h2>
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="font-body text-lead text-soil-600">{route.summary}</p>
                <ul className="mt-6" role="list">
                  {route.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 border-t border-line py-3.5 font-body text-small leading-relaxed text-soil-700 first:border-t-0 first:pt-0"
                    >
                      <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-leaf-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="forest" size="sm">
        <Reveal
          variant={fadeUp}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-h2 font-semibold text-cream">
              Tell us what you would like to do
            </h2>
            <p className="mt-4 font-body text-lead text-cream/70">
              There is no application form to fill in. Write to the office describing what you have
              in mind, or call and speak to the team directly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-body-lg text-cream/85">
              <a href="tel:+919894313435" className="transition-colors hover:text-gold-light">+91 98943 13435</a>
              <a href="mailto:ceadngo@gmail.com" className="transition-colors hover:text-gold-light">ceadngo@gmail.com</a>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="mailto:ceadngo@gmail.com?subject=Getting%20involved%20with%20CEAD" variant="accent" arrow>
              Write to CEAD
            </Button>
            <Button to="/contact" variant="onDark">Contact page</Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
