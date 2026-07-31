const focusAreas = [
  { id: 'agriculture', title: 'Agriculture', body: 'Organic farming support, precision agriculture guidance, and integrated farm development.' },
  { id: 'environment', title: 'Environment', body: 'Conservation campaigns, ecological awareness programs, and village-level green action.' },
  { id: 'women-empowerment', title: 'Women Empowerment', body: 'Self-help groups, livelihood opportunities, and capacity building for rural women.' },
  { id: 'agro-tourism', title: 'Agro Tourism', body: 'Community-rooted farm experiences that showcase sustainable rural practices.' },
  { id: 'livelihood', title: 'Livelihood', body: 'Income generation, skill training, and linkages that strengthen village economies.' },
]

const products = ['Vermi Compost', 'Vermi Wash', 'Organic Greens', 'Enriched Pot Mixture']

function AboutSection() {
  return (
    <section id="about-us" data-reveal className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <h2 className="font-display text-3xl text-forest-900 sm:text-4xl">About Us</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article id="profile" className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-soil-700">Profile</h3>
          <p className="mt-3 text-forest-900">
            CEAD works with farming and coastal communities across Puducherry, supporting climate-resilient agriculture and
            inclusive grassroots development.
          </p>
        </article>
        <article id="director-message" className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-soil-700">Director Message</h3>
          <p className="mt-3 text-forest-900">
            We believe sustainable progress grows from local knowledge, women-led participation, and practical environmental
            stewardship rooted in village realities.
          </p>
        </article>
        <article id="advisory-committee" className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-soil-700">Advisory Committee</h3>
          <p className="mt-3 text-forest-900">
            Experts from agriculture, environment, health, and social development provide strategic guidance for CEAD programs.
          </p>
        </article>
      </div>

      <div id="focus-areas" className="mt-10 rounded-2xl bg-cream-100 p-6 sm:p-8">
        <h3 className="font-display text-2xl text-forest-900 sm:text-3xl">Focus Areas</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.id} id={area.id} className="rounded-xl border border-forest-100 bg-white p-4">
              <h4 className="font-semibold text-soil-700">{area.title}</h4>
              <p className="mt-2 text-sm text-forest-800">{area.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="products" className="mt-8 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
        <h3 className="font-display text-2xl text-forest-900">Our Products</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <li key={item} id={item.toLowerCase().replace(/\s+/g, '-')} className="rounded-lg bg-leaf-50 p-3 text-sm font-medium text-forest-900">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div id="partnerships" className="mt-8 grid gap-4 sm:grid-cols-2">
        <article id="national-partnerships" className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-forest-900">National Partnerships</h3>
          <p className="mt-2 text-forest-900">Collaborations with farmer networks, local institutions, and development groups across India.</p>
        </article>
        <article id="international-partnerships" className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-forest-900">International Partnerships</h3>
          <p className="mt-2 text-forest-900">Knowledge exchange and programme support with global sustainability and community organizations.</p>
        </article>
      </div>

      <article id="news-events" className="mt-8 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-forest-100">
        <h3 className="font-display text-2xl text-forest-900">News & Events</h3>
        <p className="mt-2 text-forest-900">Upcoming training sessions, village programmes, and community updates will be listed here.</p>
      </article>
    </section>
  )
}

export default AboutSection
