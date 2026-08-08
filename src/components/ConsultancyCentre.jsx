import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g3.png';
import g4 from '../assets/images/g4.png';
import g5 from '../assets/images/g5.png';
import g6 from '../assets/images/g6.png';

const trainingCourses = [
  { title: 'Precision Farming', image: g6, category: 'Agritech', desc: 'Drones, sensors, and GPS-guided farming for maximum input efficiency.' },
  { title: 'Organic Farming', image: g2, category: 'Agriculture', desc: 'Sustainable crop cultivation avoiding chemical pesticides & synthetic fertilizers.' },
  { title: 'Integrated Farming System', image: g2, category: 'Agriculture', desc: 'Synergistic combination of crops, livestock, poultry, and fish farming.' },
  { title: 'Hi-Tech Horticulture', image: g5, category: 'Horticulture', desc: 'Polyhouse cultivation, micro-irrigation, and high-value fruit/flower crops.' },
  { title: 'Vermi Composting', image: g1, category: 'Bio-Inputs', desc: 'Transforming agricultural organic waste into nutrient-dense vermicompost.' },
  { title: 'Vermi Wash Production', image: g1, category: 'Bio-Inputs', desc: 'Liquid bio-fertilizer extraction techniques rich in plant growth hormones.' },
  { title: 'Mushroom Cultivation', image: g5, category: 'Livelihood', desc: 'Indoor oyster and button mushroom spawning, bed preparation & harvesting.' },
  { title: 'Bio-Fertilisers Production & Usage', image: g1, category: 'Bio-Inputs', desc: 'Rhizobium, Azospirillum, and PSB bio-fertilizer preparation methods.' },
  { title: 'Bio-Pesticides Production & Usage', image: g2, category: 'Bio-Inputs', desc: 'Neem-based extracts, Trichoderma, and botanical pest management.' },
  { title: 'Community Nursery Development', image: g5, category: 'Nursery', desc: 'Polybag seedling production, grafting, and high-quality plant sapling raising.' },
  { title: 'Roof Top Garden', image: g5, category: 'Urban Agri', desc: 'Designing and maintaining terrace vegetable, herb & container gardens.' },
  { title: 'Organic Kitchen Garden', image: g2, category: 'Urban Agri', desc: 'Home organic vegetable farming for daily family nutrition and health.' },
  { title: 'Coir Rope Production', image: g1, category: 'Enterprise', desc: 'Processing coconut husk fibers into marketable coir yarn and ropes.' },
  { title: 'Fish Culture', image: g6, category: 'Aquaculture', desc: 'Inland freshwater pond fish farming, feeding, and water quality care.' },
  { title: 'Flora Culture', image: g5, category: 'Horticulture', desc: 'Commercial flower growing, garland making, and floristry business.' },
  { title: 'SHG Management Training', image: g4, desc: 'Leadership, book-keeping, micro-finance savings, and group dynamics.', category: 'Governance' },
  { title: 'SRI - Improved Method of Paddy Cultivation', image: g6, category: 'Agriculture', desc: 'System of Rice Intensification saving 40% water while boosting yield.' },
  { title: 'Soil Testing - Importance and Methods', image: g3, category: 'Soil Health', desc: 'pH testing, NPK estimation, and soil health card interpretation.' },
  { title: 'Awareness Training on Insurance', image: g4, category: 'Finance', desc: 'Pradhan Mantri Fasal Bima Yojana and crop/livestock risk protection.' },
  { title: 'Awareness Training on Bankable Project', image: g4, category: 'Finance', desc: 'DPR preparation, NABARD subsidy filing, and bank loan application.' },
  { title: 'Awareness Training on Government Schemes', image: g3, category: 'Government', desc: 'Navigating state & central agri-subsidies, PM-KISAN, and MSME schemes.' },
];

export default function ConsultancyCentre() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [registerOpen, setRegisterOpen] = useState(false);
  const [regForm, setRegForm] = useState({ name: '', phone: '', course: '', date: '16th' });
  const [regSuccess, setRegSuccess] = useState(false);

  const categories = ['All', 'Agriculture', 'Bio-Inputs', 'Horticulture', 'Livelihood', 'Urban Agri', 'Finance'];

  const filteredCourses = selectedFilter === 'All'
    ? trainingCourses
    : trainingCourses.filter(c => c.category === selectedFilter);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegSuccess(true);
  };

  return (
    <section
      id="consultancy"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f7f2e8] via-[#eee5d4] to-[#f7f2e8] bg-grain-texture relative overflow-hidden"
      aria-labelledby="consultancy-heading"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-leaf/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-800 text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm border border-forest-700">
            Skill Development &amp; Training
          </span>
          <h2 id="consultancy-heading" className="section-heading text-forest-900">Consultancy &amp; Training Centre</h2>
          <p className="mt-3 text-soil-700 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We provide training to individuals to enhance their abilities towards self-empowerment by various skill development programmes.
          </p>
        </div>

        {/* Highlight Training Banner (NI-MSME / WEDP 45 Days Training) */}
        <div className="bg-forest-800 rounded-3xl p-6 md:p-10 text-cream shadow-card mb-14 relative overflow-hidden border border-forest-700">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-body font-semibold px-3 py-1 rounded-full">
                NI-MSME &amp; CEAD / VAPS Sponsored
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">
                45 Days WEDP Training Programme &amp; Skill Workshops
              </h3>
              <p className="font-body text-gold-light font-medium text-sm md:text-base">
                TRAINING ON SOIL HEALTH MANAGEMENT, HEALTH MANAGEMENT AND ROOF TOP GARDEN
              </p>

              {/* Key Features Bullets */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs md:text-sm font-body text-cream/90">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-leaf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Training is Free of Cost</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-leaf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Linkages with Bank for Loan facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-leaf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Govt. Subsidies for Availing Loans</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-leaf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Marketing Support for Products</span>
                </div>
              </div>
            </div>

            {/* Schedule & Register CTA */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 space-y-4">
              <div className="space-y-1 text-xs font-body">
                <p><span className="text-gold font-semibold uppercase">Qualification:</span> Any</p>
                <p><span className="text-gold font-semibold uppercase">Date Of Training:</span> Every month 16th and 26th</p>
                <p><span className="text-gold font-semibold uppercase">Registration:</span> Website, Mail &amp; Phone</p>
              </div>

              <button
                onClick={() => setRegisterOpen(true)}
                className="w-full bg-gold hover:bg-gold-light text-forest-900 font-body font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Click Here to Register
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-body font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-forest-800 text-cream shadow-md scale-105 ring-2 ring-gold/40'
                  : 'bg-[#faf6ee] text-forest-900 border border-forest-200/80 hover:bg-forest-100/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of 21 Training Courses */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCourses.map((course) => (
            <article
              key={course.title}
              className="bg-[#faf6f0] rounded-2xl border border-forest-200/70 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col group"
            >
              {/* Image header */}
              <div className="h-40 relative overflow-hidden bg-forest-900">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute top-3 left-3 text-[10px] font-body font-semibold bg-cream/90 text-forest-900 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
                <h4 className="absolute bottom-3 left-3 right-3 font-display font-semibold text-cream text-base drop-shadow-md leading-tight">
                  {course.title}
                </h4>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="font-body text-xs text-soil-600 leading-relaxed">
                  {course.desc}
                </p>
                <div className="pt-2 border-t border-cream-dark/60 flex items-center justify-between text-[11px] font-body">
                  <span className="text-forest-700 font-semibold">16th &amp; 26th Monthly</span>
                  <button
                    onClick={() => {
                      setRegForm({ ...regForm, course: course.title });
                      setRegisterOpen(true);
                    }}
                    className="text-terracotta hover:text-terracotta-dark font-bold hover:underline"
                  >
                    Enroll &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Registration Modal */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-card-hover border border-cream-darker relative">
            <button
              onClick={() => {
                setRegisterOpen(false);
                setRegSuccess(false);
              }}
              className="absolute top-4 right-4 text-soil-400 hover:text-soil-800 p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {regSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-xl font-bold text-forest-800">Registration Received!</h4>
                <p className="font-body text-xs text-soil-600 leading-relaxed">
                  Thank you <strong className="text-forest-800">{regForm.name}</strong>. You have registered for <strong className="text-terracotta">{regForm.course || 'Training'}</strong> on the {regForm.date} batch. Our coordinator will contact you at {regForm.phone}.
                </p>
                <button
                  onClick={() => {
                    setRegisterOpen(false);
                    setRegSuccess(false);
                  }}
                  className="btn-primary text-xs mt-2"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="border-b border-forest-100 pb-3">
                  <span className="text-[10px] font-body uppercase font-bold text-terracotta tracking-wider">Free Training Program</span>
                  <h4 className="font-display text-xl font-bold text-forest-800">Register for Training</h4>
                </div>

                <div>
                  <label className="block text-xs font-body font-bold text-soil-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    className="w-full border border-cream-darker rounded-xl px-3.5 py-2 text-sm font-body focus:ring-2 focus:ring-forest-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-bold text-soil-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    className="w-full border border-cream-darker rounded-xl px-3.5 py-2 text-sm font-body focus:ring-2 focus:ring-forest-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-bold text-soil-700 mb-1">Select Course *</label>
                  <select
                    required
                    value={regForm.course}
                    onChange={(e) => setRegForm({ ...regForm, course: e.target.value })}
                    className="w-full border border-cream-darker rounded-xl px-3.5 py-2 text-sm font-body focus:ring-2 focus:ring-forest-500 focus:outline-none"
                  >
                    <option value="">-- Choose training course --</option>
                    {trainingCourses.map((c) => (
                      <option key={c.title} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-body font-bold text-soil-700 mb-1">Preferred Batch Date</label>
                  <select
                    value={regForm.date}
                    onChange={(e) => setRegForm({ ...regForm, date: e.target.value })}
                    className="w-full border border-cream-darker rounded-xl px-3.5 py-2 text-sm font-body focus:ring-2 focus:ring-forest-500 focus:outline-none"
                  >
                    <option value="16th of every month">16th of every month</option>
                    <option value="26th of every month">26th of every month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-800 hover:bg-forest-700 text-cream font-body font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md mt-2"
                >
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
