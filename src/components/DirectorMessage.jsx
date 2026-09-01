import Section from './ui/Section';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeLeft, fadeUp } from '../lib/motion';
import directorImg from '../assets/images/chairman.jpg';

export default function DirectorMessage() {
  return (
    <Section id="director-message" tone="canvas" aria-labelledby="director-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait rail — stays with the reader on long screens. */}
        <aside className="lg:col-span-4">
          <Reveal variant={fadeLeft} className="lg:sticky lg:top-32">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={directorImg}
                alt="Mr. C. Ganeche, Founder and Director of CEAD, at his office desk"
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="mt-5">
              <p className="font-display text-h4 font-semibold text-forest-900">Mr. C. Ganeche</p>
              <p className="mt-1.5 font-body text-caption leading-relaxed text-soil-600">
                M.Sc. (Agr), Ph.D (Envt)
                <br />
                Founder &amp; Director, CEAD
              </p>
            </div>
          </Reveal>
        </aside>

        {/* Message */}
        <div className="lg:col-span-8">
          <Reveal variant={fadeUp}>
            <p className="eyebrow">
              <span aria-hidden="true" className="inline-block h-px w-6 bg-forest-400" />
              From the Director&rsquo;s desk
            </p>

            <blockquote className="mt-8">
              <p
                id="director-heading"
                className="font-display text-h1 font-normal leading-tight text-forest-900"
              >
                &ldquo;The way of development of a nation passes through villages.&rdquo;
              </p>
              <footer className="mt-5 font-body text-small text-soil-500">
                — <cite className="not-italic font-medium">Mahatma Gandhi</cite>
              </footer>
            </blockquote>
          </Reveal>

          <RevealGroup className="prose-cead mt-10 max-w-prose">
            <RevealItem as="p">
              The quotation strikes us. After visualising the actual picture of rural India, we
              decided to devote our professional careers mostly to the development of rural society.
            </RevealItem>

            <RevealItem as="p">
              CEAD is a non-government, not-for-profit organisation — one of the largest networks of{' '}
              <strong>environment and agriculture</strong> professionals in South India, with a keen
              advisory committee and allied-sector specialists committed to improving the quality of
              life of deprived sectors: farmers, women, youth, students and children. CEAD aims to
              achieve this through effective implementation of rural and urban development
              programmes that use local resources with a people-centric approach — taking up
              environmental protection, agriculture development, horticulture, animal husbandry,
              health and hygiene, poverty, capacity building, youth development, natural resource
              management and watershed resource development.
            </RevealItem>

            <RevealItem as="p">
              CEAD acts as a bridge between this network of agricultural communities and the other
              stakeholders in the sector — state and central governments, international
              organisations, bilateral development agencies, corporates, academia and end users —
              through large-scale projects in the field. We have recently broadened our work into{' '}
              <strong>skill development</strong>, <strong>micro-irrigation systems</strong> and{' '}
              <strong>improving urban and rural healthcare</strong> through the production and
              marketing of organic products. CEAD has dedicated full-time staff and field offices.
            </RevealItem>

            <RevealItem as="p">
              CEAD is the parent organisation guiding{' '}
              <strong>Green Day Producer&rsquo;s Association</strong> and{' '}
              <strong>Green Tec Agro</strong>, both of which work for the care of deprived rural
              societies and improve their quality of life through integrated programmes and
              services — consciously moving from welfare towards development and long-term
              sustainability.
            </RevealItem>
          </RevealGroup>

          <Reveal variant={fadeUp} className="mt-10 border-t border-line pt-6">
            <p className="font-display text-h4 font-semibold text-forest-900">Mr. C. Ganeche</p>
            <p className="mt-1 font-body text-caption text-soil-500">
              M.Sc. (Agr), Ph.D (Envt) · Founder &amp; Director, CEAD
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
