import { useInView } from 'react-intersection-observer';
import aboutImg from '../assets/images/about.png';
import chairmanImg from '../assets/images/chairman.jpeg';

const reachPoints = [
  'Reached more than 200 villages in Puducherry and Tamil Nadu.',
  'Touched and transformed most of the lives of South Indian farmer families.',
  'Established a furnished Soil Testing Laboratory.',
  'Promoted Organic Productions and Marketing in the area of Agriculture.',
  'Provided Certified Entrepreneurship Development Training to more than 1000 Agri-Graduates and incubated many successful ventures.',
  'Successfully established Integrated Livelihood Farm and Trained Below Poverty Line (BPL) Rural Women & Youths on Vocational skills and helped them gain meaningful livelihoods.',
  'Established village-based institutions such as society, saving and thrift credit groups, and more than 500 SHGs for strengthening participatory development in agriculture, health, etc.',
  'Satisfactorily answered farmer queries through Farmers Field School Programme conducted by CEAD–RELIANCE partnership.',
  'Successfully running Vermi Compost Unit, Pot Mixture Unit & Vermi Wash Unit in our Farm.',
  'Actively involved in promoting Environmental Protection activities both in urban & rural areas.',
  'Implementation through a series of meetings and Awareness Campaigns involving the target community to render better results.',
  'CEAD has its own Training & Development Unit providing On & Off Farm trainings to internal and external agencies and students from schools, colleges and institutions (Annamalai University, Pondicherry University, Agriculture Dept., PKKVK, PAJANCOA, Kerala University, Adhiparasakthi College, Swedan University, United Nation Students, etc.).',
  'Knowledge Centre set up for rural people to develop their interest in communication development and other aspects of livelihoods.',
  'Built capacity of Community for self-reliance so they can identify their problems and self-develop solutions through Team spirit.',
];

const stats = [
  { value: '200+', label: 'Villages Reached' },
  { value: '1000+', label: 'Agri-Graduates Trained' },
  { value: '500+', label: 'SHGs Established' },
  { value: '20+', label: 'Years of Service' },
];

function StatCard({ value, label, delay }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`bg-[#fbf8f2] rounded-2xl shadow-sm border border-forest-200/60 p-5 text-center transition-all duration-500 hover:shadow-card hover:-translate-y-0.5 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-3xl font-bold text-forest-700 mb-1">{value}</div>
      <div className="font-body text-xs text-soil-500 uppercase tracking-wide">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const { ref: heroRef, inView: heroIn } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: reachRef, inView: reachIn } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: visionRef, inView: visionIn } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="bg-cream" aria-labelledby="about-heading">

      {/* ── Welcome & Profile Section ── */}
      <div className="pt-16 sm:pt-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Welcome to CEAD
            </span>
            <h2 id="about-heading" className="section-heading">
              Centre for Environment &amp; Agricultural Development
            </h2>
            <p className="mt-3 text-soil-600 font-body max-w-2xl mx-auto text-base md:text-lg">
              Empowering South Indian farming communities, women, and landless labourers through sustainable agriculture, micro-credit access, and environmental stewardship since 2003.
            </p>
          </div>

          <div
            ref={heroRef}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
              heroIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src={aboutImg}
                  alt="Rural Indian women farmers working together in a green field"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" aria-hidden="true" />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="section-subheading">Our Profile &amp; Origins</h3>
              <p className="font-body text-soil-700 leading-relaxed">
                CEAD (Centre for Environment and Agricultural Development) is a registered non-governmental,
                not-for-profit organization headquartered in Puducherry, India. Founded in 2003 by like-minded
                youth from backgrounds in agriculture, environmental science, medicine, commerce, and computer science,
                we bridge the gap between modern sustainable techniques and traditional farming wisdom.
              </p>
              <p className="font-body text-soil-700 leading-relaxed">
                Our interdisciplinary team works closely across 200+ villages to uplift farming communities,
                build self-help institutions, and foster long-term environmental sustainability.
              </p>

              {/* Founder Leadership Card */}
              <div className="bg-forest-800 rounded-2xl p-5 text-cream relative overflow-hidden shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/40 flex-shrink-0">
                    <img
                      src={chairmanImg}
                      alt="Mr. C. Ganeche"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-cream text-base leading-tight">Mr. C. Ganeche</h4>
                    <p className="font-body text-gold-light text-xs mt-0.5">M.Sc (Agr.), Ph.D (Envt) &nbsp;·&nbsp; Founder &amp; Director</p>
                  </div>
                </div>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 pt-2">
                {stats.map((s, i) => (
                  <StatCard key={s.label} value={s.value} label={s.label} delay={i * 100} />
                ))}
              </div>

              <a
                href="#reach"
                className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-900 font-body font-semibold text-sm transition-colors duration-150 group"
              >
                Explore our full reach &amp; achievements
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Reach at a Glance ── */}
      <div id="reach" className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={reachRef}
            className={`transition-all duration-700 ${reachIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-forest-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="section-subheading">CEAD's Reach at a Glance</h3>
                <p className="text-soil-500 font-body text-sm mt-0.5">Impact across Puducherry and Tamil Nadu</p>
              </div>
            </div>

            {/* Bullet list */}
            <ul className="space-y-3" role="list">
              {reachPoints.map((point, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 bg-[#fbf8f2] rounded-xl px-5 py-4 shadow-sm border border-forest-200/60 hover:border-forest-400/80 transition-all duration-500 hover:shadow-md ${
                    reachIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="mt-1 w-5 h-5 rounded-full bg-leaf/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <span className="w-2 h-2 rounded-full bg-leaf-dark" />
                  </span>
                  <span className="font-body text-sm text-soil-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Vision & Mission ── */}
      <div id="vision" className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={visionRef}
            className={`transition-all duration-700 ${visionIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-forest-100 text-forest-700 text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Our Purpose
              </span>
              <h3 className="section-heading">Vision &amp; Mission</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision */}
              <div className="bg-forest-800 rounded-3xl p-8 text-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-gold">Vision</h4>
                  </div>
                  <p className="font-body text-cream/85 leading-relaxed">
                    To give equal opportunities to all citizens and ensure their basic needs. To undertake
                    environmentally sustainable and economically viable activities for the needed.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-leaf-dark rounded-3xl p-8 text-cream relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-cream">Mission</h4>
                  </div>
                  <p className="font-body text-cream/85 leading-relaxed">
                    Empower deprived sections of society especially women and farming communities through
                    promotion of skill development, education, health care, and initiation of environmentally
                    sustainable and economically viable activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
