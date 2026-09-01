import { motion, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';
import Section from './ui/Section';
import Stat from './ui/Stat';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeLeft, fadeUp, imageReveal, respectMotion, viewport } from '../lib/motion';
import founderImg from '../assets/images/ganeche.jpg';

/** Impact figures, all drawn from CEAD's own published reach. */
const stats = [
  { value: '200+', label: 'Villages reached', detail: 'Across Puducherry & Tamil Nadu' },
  { value: '500+', label: 'Self-help groups', detail: 'Savings, thrift and bank linkage' },
  { value: '1000+', label: 'Agri-graduates trained', detail: 'Certified entrepreneurship training' },
  { value: '20+', label: 'Years of service', detail: 'Continuously since 2003' },
];

/**
 * The homepage's first read: who CEAD is, followed by the figures that make
 * the claim concrete. Editorial rather than card-based on purpose — this is
 * the section that has to establish credibility.
 */
export default function Introduction() {
  const reduced = useReducedMotion();

  return (
    <>
      <Section id="introduction" tone="canvas" aria-labelledby="introduction-heading">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text column */}
          <div className="lg:col-span-7">
            <Reveal variant={fadeUp}>
              <p className="eyebrow">
                <span aria-hidden="true" className="inline-block h-px w-6 bg-forest-400" />
                Welcome to CEAD
              </p>
              <p className="mt-3 max-w-2xl font-display text-h4 font-semibold italic text-forest-700">
                &ldquo;Empowering Communities. Protecting Nature. Building a Sustainable Future &mdash; Since 2003.&rdquo;
              </p>
              <h2
                id="introduction-heading"
                className="mt-4 max-w-2xl font-display text-h1 font-semibold text-forest-900"
              >
                Centre for Environment and Agricultural Development (CEAD)
              </h2>
            </Reveal>

            <RevealGroup className="mt-6 max-w-prose space-y-4 font-body text-body-lg leading-relaxed text-soil-700">
              <RevealItem as="p">
                Working together with communities for <strong className="font-semibold text-forest-800">sustainable development</strong>, <strong className="font-semibold text-forest-800">environmental protection</strong>, and a better future for all.
              </RevealItem>

              {/* Crisp highlight points */}
              <RevealItem as="div" className="my-5 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-forest-100 bg-forest-50/60 p-3.5 transition-colors hover:bg-forest-50">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-forest-700 text-cream">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="font-body text-small font-bold text-forest-950">Ecosystem Regeneration</h3>
                    <p className="mt-0.5 font-body text-caption leading-relaxed text-soil-600">
                      Fostering sustainable innovations to root out poverty and restore natural ecosystems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-forest-100 bg-forest-50/60 p-3.5 transition-colors hover:bg-forest-50">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-forest-700 text-cream">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="font-body text-small font-bold text-forest-950">Empowering Rural Families</h3>
                    <p className="mt-0.5 font-body text-caption leading-relaxed text-soil-600">
                      Over 500+ Women Self-Help Groups (SHGs) organized across 200+ villages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-forest-100 bg-forest-50/60 p-3.5 transition-colors hover:bg-forest-50">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-forest-700 text-cream">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="font-body text-small font-bold text-forest-950">Agri-Entrepreneurship</h3>
                    <p className="mt-0.5 font-body text-caption leading-relaxed text-soil-600">
                      Trained over 1,000+ Agri-Graduates and rural youth in organic farming ventures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-forest-100 bg-forest-50/60 p-3.5 transition-colors hover:bg-forest-50">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-forest-700 text-cream">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="font-body text-small font-bold text-forest-950">Community Institutions</h3>
                    <p className="mt-0.5 font-body text-caption leading-relaxed text-soil-600">
                      Furnished soil testing labs, Farmers Field Schools, and livelihood training farms.
                    </p>
                  </div>
                </div>
              </RevealItem>

              <RevealItem as="p" className="font-body text-body-lg font-medium text-forest-800">
                Through participatory community action, farmers field schools, and integrated livelihood farms, CEAD continues to build sustainable institutions for generations to come.
              </RevealItem>
            </RevealGroup>

            <Reveal variant={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/about" variant="primary" arrow>Read our full profile</Button>
              <Button to="/director-message" variant="secondary">Director&rsquo;s message</Button>
            </Reveal>
          </div>

          {/* Image column with an overlapping founding card. */}
          <div className="pb-8 lg:col-span-5 lg:pb-0">
            <motion.figure
              className="relative"
              variants={respectMotion(fadeLeft, reduced)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src={founderImg}
                  alt="Mr. C. Ganeche, Founder & Director of CEAD"
                  className="aspect-[4/3] w-full object-cover object-top"
                  variants={respectMotion(imageReveal, reduced)}
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>

              <figcaption className="absolute -bottom-6 left-4 right-8 rounded-xl border border-line bg-surface p-5 shadow-card sm:left-6 sm:right-12 lg:-left-8 lg:right-10">
                <p className="font-display text-h4 font-semibold text-forest-900">
                  Registered in 2003
                </p>
                <p className="mt-1.5 font-body text-caption leading-relaxed text-soil-600">
                  Founded by Mr. C. Ganeche, M.Sc. (Agr.), Ph.D (Envt) — Founder &amp; Director.
                </p>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </Section>

      {/* Impact band — the figures behind the paragraphs above. */}
      <Section tone="forest" size="sm" aria-labelledby="impact-heading">
        <h2 id="impact-heading" className="sr-only">CEAD&rsquo;s reach in numbers</h2>
        <RevealGroup
          step={0.09}
          className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10"
        >
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="border-l border-cream/15 pl-5 lg:pl-6">
              <Stat value={stat.value} label={stat.label} detail={stat.detail} tone="dark" />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
