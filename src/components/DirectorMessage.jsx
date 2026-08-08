import { useInView } from 'react-intersection-observer';
import directorImg from '../assets/images/chairman.jpeg';

export default function DirectorMessage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="director-message"
      className="py-20 md:py-28 bg-cream"
      aria-labelledby="director-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label bar */}
        <div className="bg-forest-800 text-cream text-center py-2.5 rounded-xl mb-12">
          <h2 id="director-heading" className="font-body font-semibold text-sm uppercase tracking-widest">
            Director Message
          </h2>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Director name & title */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-forest-800 mb-8">
            Mr. C. Ganeche,{' '}
            <span className="text-forest-700">M.Sc. (Agr), Ph.D (Envt),</span>{' '}
            <span className="font-body font-semibold text-soil-600 text-lg">Founder &amp; Director — CEAD</span>
          </h3>

          {/* Photo + quote block */}
          <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
            {/* Director photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-56 md:w-64 rounded-2xl overflow-hidden shadow-card-hover border-4 border-cream-darker">
                <img
                  src={directorImg}
                  alt="Mr. C. Ganeche, Founder and Director of CEAD, seated at his office desk"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quote + intro */}
            <div className="flex-1">
              <div className="mb-6">
                <h4 className="font-display text-2xl font-semibold text-forest-800 mb-3">
                  From Director's Desk :
                </h4>
                <blockquote className="border-l-4 border-gold pl-5 py-1">
                  <p className="font-body italic text-soil-700 text-base leading-relaxed">
                    "The way of development of a nation, passes through villages."
                  </p>
                  <cite className="block mt-2 font-body font-semibold text-forest-700 text-sm not-italic">
                    — Mahatma Gandhiji
                  </cite>
                </blockquote>
              </div>

              <p className="font-body text-soil-700 leading-relaxed text-sm md:text-base">
                The quotation strikes us and after visualizing the actual picture of Rural India, we decided
                to devote our professional career mostly for the Development of Rural society.
              </p>
            </div>
          </div>

          {/* Full message paragraphs */}
          <div className="prose prose-sm md:prose-base max-w-none space-y-5 text-soil-700 font-body leading-relaxed">
            <p>
              CEAD is a Non-Government; not-for-profit Organization is one of the largest networks of{' '}
              <strong className="text-forest-700">Environment and Agriculture</strong> with a keen Advisory
              Committee Members and Allied Sector Professionals and people in South India with commitment
              mainly to improve the quality of the deprived sectors (Farmers, Women, Youth, Students and
              Children) life by <strong className="text-forest-700">sustainable development</strong>. CEAD
              aims to achieve the goal through effective implementation of the rural and urban developmental
              programmes utilizing the local resources with people centric approach. CEAD is conceding its
              endeavors for improving socio-economic condition by undertaking the issues like Environmental
              Protection, Agriculture Development, Horticulture, Animal Husbandry, Health and Hygiene,
              Poverty, Capacity Building, Youth Development, Natural Resource Management, Watershed Resource
              Development and other developmental concerns.
            </p>

            <p>
              CEAD acts as a bridge between this network of Agricultural Community and various other
              stake-holders of this sector (State and Central Governments, International Organizations,
              Bilateral Developmental agencies, Corporate, Academia, and End-users) through large-scale
              projects on the field. CEAD has also broadened its horizon recently in other rural development
              areas like{' '}
              <strong className="text-forest-700">Skill development, Micro-Irrigation Systems</strong> and{' '}
              <strong className="text-forest-700">Improvising Urban and Rural Healthcare</strong> through
              Producing and Marketing of Organic Products. CEAD has dedicated full time Staffs and Field
              Offices also.
            </p>

            <p>
              CEAD is the Parental Organization guiding{' '}
              <strong className="text-forest-700">Green Day Producer's Association</strong> and{' '}
              <strong className="text-forest-700">Green Tec Agro</strong> those working for the cause and
              care of deprived rural societies and improve their quality of life through integrating programs
              and services, and consciously moving from Welfare towards Development and long term
              Sustainability as the main objective.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 pt-8 border-t border-forest-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-forest-300 flex-shrink-0">
              <img
                src={directorImg}
                alt="Mr. C. Ganeche"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="font-display font-bold text-forest-800 text-lg leading-tight">Mr. C. Ganeche</p>
              <p className="font-body text-soil-500 text-sm">M.Sc. (Agr), Ph.D (Envt) &nbsp;·&nbsp; Founder &amp; Director, CEAD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
