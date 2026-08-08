import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g3.png';
import g4 from '../assets/images/g4.png';
import g5 from '../assets/images/g5.png';
import g6 from '../assets/images/g6.png';

function AgroTourismBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    education: '',
    course: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-darker p-6 md:p-10 shadow-card space-y-10 my-6">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Info & Helpline */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="inline-block bg-gold-pale text-gold-dark text-xs font-body font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
              CEAD Agro Tourism
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-forest-800 leading-tight">
              Book your Appointment
            </h3>
          </div>

          {/* What is Agro Tour */}
          <div className="bg-forest-50/70 border border-forest-100 rounded-2xl p-5 space-y-2">
            <h4 className="font-display font-bold text-forest-800 text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What is Agro Tour
            </h4>
            <p className="font-body text-xs md:text-sm text-soil-700 leading-relaxed">
              CEAD Agro Tourism offers immersive, hands-on farm visits in Puducherry. Experience authentic organic farming, eco-living, vermicompost demonstrations, and village cultural traditions guided by agricultural experts.
            </p>
          </div>

          {/* Programe Steps */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-forest-800 text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Programe Steps
            </h4>
            <ol className="space-y-2 text-xs md:text-sm font-body text-soil-700" role="list">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-forest-700 text-cream text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span>Select your preferred Agro Tour course / package below</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-forest-700 text-cream text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span>Fill in your details and submit the online application form</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-forest-700 text-cream text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span>Our coordinator confirms your date &amp; itinerary details</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-forest-700 text-cream text-[11px] font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span>Enjoy an enriching, hands-on farm experience in Puducherry</span>
              </li>
            </ol>
          </div>

          {/* Helpline Badge */}
          <div className="bg-terracotta/10 border border-terracotta/30 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-body font-semibold uppercase tracking-wider text-terracotta-dark">Direct Helpline</p>
              <a href="tel:+919894313435" className="font-display font-bold text-forest-800 text-base hover:underline">
                +91 98943 13435
              </a>
            </div>
            <a
              href="tel:+919894313435"
              className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center shadow-md hover:bg-terracotta-dark transition-colors"
              aria-label="Call CEAD Helpline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Appointment Form */}
        <div className="lg:col-span-7 bg-cream-dark/50 border border-cream-darker rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-display text-2xl font-bold text-forest-800">Appointment Requested!</h4>
              <p className="font-body text-sm text-soil-600 max-w-md mx-auto">
                Thank you, <strong className="text-forest-800">{formData.fullName || 'Visitor'}</strong>. We have received your booking request for the <span className="text-terracotta font-semibold">{formData.course || 'Agro Tour'}</span>. Our team will call you shortly at <span className="font-semibold">{formData.phone}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary text-xs mt-4"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-display text-xl font-bold text-forest-800 mb-2 pb-2 border-b border-forest-100">
                Book Appointment Online
              </h4>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-body font-bold text-soil-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-cream-darker rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-body font-bold text-soil-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-cream-darker rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                />
              </div>

              {/* Email Id */}
              <div>
                <label className="block text-xs font-body font-bold text-soil-700 mb-1">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-cream-darker rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                />
              </div>

              {/* Your City */}
              <div>
                <label className="block text-xs font-body font-bold text-soil-700 mb-1">
                  Your City
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white border border-cream-darker rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-xs font-body font-bold text-soil-700 mb-1">
                  Education
                </label>
                <input
                  type="text"
                  placeholder="Enter your education"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full bg-white border border-cream-darker rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                />
              </div>

              {/* Course Dropdown */}
              <div>
                <label className="block text-xs font-body font-bold text-soil-700 mb-1">
                  Course / Tour Package <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-white border border-cream-darker rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 focus:ring-2 focus:ring-forest-500 focus:outline-none"
                >
                  <option value="">-- Select course --</option>
                  <option value="Aerospace Engineering">Aerospace Engineering</option>
                  <option value="Agriculture Courses">Agriculture Courses</option>
                  <option value="Fashion Technology">Fashion Technology</option>
                  <option value="Marine Engineering">Marine Engineering</option>
                  <option value="Building, Construction Management">Building, Construction Management</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Accountant course">Accountant course</option>
                  <option value="Dot Net Development">Dot Net Development</option>
                  <option value="Java Development">Java Development</option>
                  <option value="Chemical Engineering">Chemical Engineering</option>
                </select>
              </div>

              {/* Submit button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-forest-800 hover:bg-forest-700 text-cream font-body font-semibold text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  APPLY NOW
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const focusData = {
  agriculture: {
    title: 'Agriculture',
    subtitle: 'Promoting sustainable farming, modern agricultural technology, and rural entrepreneurship.',
    sections: [
      {
        category: 'For Farmers',
        badgeColor: 'bg-forest-100 text-forest-800 border-forest-200',
        icon: (
          <svg className="w-5 h-5 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        items: [
          { title: 'Organic Farming', image: g2, desc: 'Eco-friendly crop cultivation avoiding synthetic pesticides & chemical fertilizers.' },
          { title: 'Precision Farming', image: g6, desc: 'Optimizing resource inputs, soil monitoring, and data-driven field management.' },
          { title: 'Integrated Farming System', image: g2, desc: 'Combining crop cultivation, livestock, and aquaculture for maximum farm productivity.' },
          { title: 'Mechanization in Paddy', image: g6, desc: 'Introducing transplanters, harvesters, and modern machinery to lessen manual labor.' },
          { title: 'Hi-Tech Horticulture', image: g5, desc: 'Protected cultivation, drip fertigation, and high-value fruit and vegetable crops.' },
          { title: 'SRI Method of Paddy Cultivation', image: g6, desc: 'System of Rice Intensification techniques boosting yield while saving 30–50% water.' },
          { title: 'Government Linkages', image: g3, desc: 'Facilitating access to central & state government agricultural schemes & subsidies.' },
        ],
      },
      {
        category: 'For Micro-Entrepreneurs',
        badgeColor: 'bg-soil-100 text-soil-800 border-soil-200',
        icon: (
          <svg className="w-5 h-5 text-soil-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        items: [
          { title: 'Vermi Composting', image: g1, desc: 'Transforming agricultural organic waste into high-grade earthworm compost.' },
          { title: 'Vermi Wash Production', image: g1, desc: 'Extracting liquid bio-fertilizer rich in nutrients & beneficial microorganisms.' },
          { title: 'Mushroom Cultivation', image: g5, desc: 'Low-cost, high-return indoor mushroom farming training for rural entrepreneurs.' },
          { title: 'Organic Vegetable Farming', image: g2, desc: 'Commercial production of pesticide-free vegetables for local market demand.' },
          { title: 'Organic Greens Cultivation', image: g5, desc: 'Short-duration spinach & traditional greens farming providing fast cash flow.' },
          { title: 'Protected Cultivation', image: g5, desc: 'Polyhouse and shade-net farming for off-season vegetable & nursery raising.' },
          { title: 'Government Linkages', image: g3, desc: 'Connecting rural entrepreneurs to NABARD, KVIC, and government incubation funds.' },
        ],
      },
    ],
  },
  environment: {
    title: 'Environment',
    subtitle: 'Protecting natural ecosystems, waste management, afforestation, and carbon reduction.',
    sections: [
      {
        category: 'Environmental Initiatives',
        badgeColor: 'bg-leaf-pale text-leaf-dark border-leaf-light',
        icon: (
          <svg className="w-5 h-5 text-leaf-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          { title: 'Solid Waste Management', image: g1, desc: 'Segregation, composting, and community recycling programs across villages.' },
          { title: 'Afforestation Programme & Carbon Trading', image: g3, desc: 'Mass tree planting drives and carbon sequestration credit projects in rural areas.' },
          { title: 'Awareness Programmes', image: g4, desc: 'School, college, and village community campaigns on environmental conservation.' },
        ],
      },
    ],
  },
  women: {
    title: 'Women Empowerment',
    subtitle: 'CEAD consists of 80 Self Help Groups in & around Pondicherry, empowering rural women through skill development, micro-credit access, and sustainable livelihood programs.',
    introBox: {
      shgText: 'CEAD consists of 80 Self help groups in & around Pondicherry. The organization gives different types of training (soap making, candle making, pickle making, tailoring etc) to its members for their overall empowerment & development. The SHGs through CEAD are also linked with various banks for loans.',
      federationText: 'The federation of women\'s SHGs is called "Amudham Magalir" and the men\'s SHGs is called "Aruvi men\'s federation".',
    },
    sections: [
      {
        category: 'Self Help Groups (SHGs)',
        badgeColor: 'bg-terracotta/10 text-terracotta-dark border-terracotta/30',
        icon: (
          <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        items: [
          { title: 'Women SHGs Formation', image: g4, desc: 'Organizing rural women into self-reliant micro-credit saving groups.' },
          { title: 'Financial Mobilization for Women SHGs', image: g4, desc: 'Mobilizing community savings and revolving credit funds for members.' },
          { title: 'Bank Linkages for Women SHGs', image: g4, desc: 'Facilitating low-interest bank loans for women-led enterprises.' },
          { title: 'Sustainable Livelihood Development', image: g5, desc: 'Establishing sustainable income-generating activities for women.' },
          { title: 'Joint Liability Group (JLG) Link with NABARD', image: g3, desc: 'Connecting small landless women farmers with NABARD credit facilities.' },
          { title: 'Awareness Education Campaigns', image: g4, desc: 'Conducting rights, health, hygiene, and social equality workshops.' },
          { title: 'Vermi Composting', image: g1, desc: 'Training women in organic vermicompost unit setup and sales.' },
          { title: 'Vermi Wash Production', image: g1, desc: 'Producing liquid bio-fertilizers as a lucrative home-based business.' },
          { title: 'Mushroom Cultivation', image: g5, desc: 'Indoor oyster & button mushroom cultivation for high profit margins.' },
          { title: 'Community Nursery Establishment', image: g5, desc: 'Raising plant saplings and seedlings for local agricultural demand.' },
          { title: 'Organic Greens & Vegetable Farming', image: g2, desc: 'Cultivating pesticide-free vegetables for family nutrition and market.' },
          { title: 'Protected Cultivation for Vegetables & Flowers', image: g5, desc: 'Polyhouse and shade net cultivation for high-value crops.' },
          { title: 'Coir Rope Production', image: g1, desc: 'Utilizing natural coconut fiber to manufacture durable coir ropes.' },
          { title: 'Value Added Coir Products', image: g1, desc: 'Crafting coir mats, garden pots, and decorative eco-friendly coir items.' },
          { title: 'Coco Peat Production', image: g1, desc: 'Processing coconut husk peat into growing medium for nursery export.' },
        ],
      },
      {
        category: 'Skill Development Programme',
        badgeColor: 'bg-forest-100 text-forest-800 border-forest-200',
        icon: (
          <svg className="w-5 h-5 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.4 15.11a2 2 0 01-1.022-.547l-2.387-.477a2 2 0 00-2.387.477L0 15" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          </svg>
        ),
        items: [
          { title: 'Mushroom Culture', image: g5, desc: 'Technical spawn preparation and mushroom harvesting techniques.' },
          { title: 'Coir-pith Composting', image: g1, desc: 'Enriching raw coir pith into organic manure for potting media.' },
          { title: 'Moisturized Coir Spinning', image: g1, desc: 'Operating motorized coir spinning machines for uniform yarn quality.' },
          { title: 'Fresh Water Fish Culture', image: g6, desc: 'Inland aquaculture training for village pond fish farming.' },
          { title: 'Flora Culture', image: g5, desc: 'Floriculture, flower harvesting, garland making, and floristry trade.' },
          { title: 'Coconut Based Products', image: g1, desc: 'Processing virgin coconut oil, desiccated powder, and handicrafts.' },
          { title: 'Hand Crafts', image: g4, desc: 'Artisan craft training including jute bags, tailoring, and eco-art.' },
          { title: 'Nursery Raising', image: g5, desc: 'Nursery management, grafting, and sapling multiplication skills.' },
        ],
      },
    ],
  },
  agrotourism: {
    title: 'Agro Tourism',
    subtitle: 'Connecting urban visitors with authentic rural farming experiences and eco-living.',
    sections: [
      {
        category: 'Agro Tourism Offerings',
        badgeColor: 'bg-gold-pale text-gold-dark border-gold',
        icon: (
          <svg className="w-5 h-5 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: [
          { title: 'Farm Visits & Eco Stays', image: g6, desc: 'Experiential farm tours demonstrating organic agricultural practices.' },
          { title: 'Hands-on Organic Farming Workshops', image: g2, desc: 'Interactive sessions on soil preparation, planting, and organic crop care.' },
          { title: 'Village Cultural Heritage Experience', image: g4, desc: 'Immersive rural South Indian hospitality and traditional culinary experiences.' },
        ],
      },
    ],
  },
  livelihood: {
    title: 'Livelihood',
    subtitle: 'Capacity building, youth & women vocational training, micro-finance mobilization, and village development infrastructure.',
    sections: [
      {
        category: 'Livelihood Initiatives',
        badgeColor: 'bg-soil-100 text-soil-800 border-soil-200',
        icon: (
          <svg className="w-5 h-5 text-soil-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        items: [
          { title: 'Village Development Projects', image: g3, desc: 'Integrated infrastructure, sanitation, and community water resource management.' },
          { title: 'Village Farmers Association Formation', image: g4, desc: 'Organizing smallholder farmers into cooperative bargaining and marketing groups.' },
          { title: 'Men / Women SHGs Formation', image: g4, desc: 'Establishing grassroots thrift institutions empowering communities for self-reliance.' },
          { title: 'Financial Mobilization for Men / Women SHGs', image: g4, desc: 'Mobilizing community savings and revolving credit funds for livelihood activities.' },
          { title: 'Bank Linkages for Women SHGs', image: g4, desc: 'Connecting women self-help groups with low-interest bank credit lines.' },
          { title: 'Sustainable Livelihood Development', image: g5, desc: 'Creating resilient, eco-friendly income opportunities for rural families.' },
          { title: 'Trainings to Village Youths & Women', image: g5, desc: 'Vocational skill development and certification for sustainable employment.' },
          { title: 'Awareness Education Campaigns to Students in Rural & Urban', image: g4, desc: 'Empowering students with environmental and agricultural sustainability knowledge.' },
          { title: 'Awareness Education Campaigns to Rural & Urban', image: g3, desc: 'Broad-based community workshops on health, hygiene, and sustainable living.' },
        ],
      },
    ],
  },
};

const tabs = [
  { key: 'agriculture', label: 'Agriculture' },
  { key: 'environment', label: 'Environment' },
  { key: 'women', label: 'Women Empowerment' },
  { key: 'agrotourism', label: 'Agro Tourism' },
  { key: 'livelihood', label: 'Livelihood' },
];

export default function FocusAreas() {
  const [activeTab, setActiveTab] = useState('agriculture');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const current = focusData[activeTab];

  return (
    <section
      id="what-we-do"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5efe4] via-[#ebe3d3] to-[#f5efe4] relative overflow-hidden bg-grain-texture"
      aria-labelledby="focus-areas-heading"
    >
      {/* Organic Light Blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-96 h-96 bg-leaf/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-soil/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-800 text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm border border-forest-700">
            Our Core Pillars
          </span>
          <h2 id="focus-areas-heading" className="section-heading text-forest-900">Focus Areas</h2>
          <p className="mt-3 text-soil-700 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring CEAD's key development initiatives across South India
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-200 shadow-sm ${
                  isActive
                    ? 'bg-forest-800 text-cream shadow-md scale-105 ring-2 ring-gold/40'
                    : 'bg-[#faf6ee] text-forest-900 hover:bg-forest-100/70 hover:text-forest-900 border border-forest-200/80'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="space-y-12 animate-fade-in" key={activeTab}>
          {current.introBox && (
            <div className="bg-forest-800 rounded-2xl p-6 md:p-8 text-cream shadow-card space-y-4 relative overflow-hidden border border-forest-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2 text-gold font-body font-semibold text-xs uppercase tracking-widest">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Self Help Group Network Overview
                </div>
                <p className="font-body text-sm md:text-base leading-relaxed text-cream/90">
                  {current.introBox.shgText}
                </p>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3.5 flex items-start gap-3 mt-2">
                  <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <p className="font-body text-xs md:text-sm text-gold-light italic">
                    {current.introBox.federationText}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Custom Agro Tourism Layout matching old site screenshot */}
          {activeTab === 'agrotourism' && <AgroTourismBooking />}

          {current.sections.map((sec) => (
            <div key={sec.category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-forest-200/80 pb-3">
                <div className="w-9 h-9 rounded-lg bg-forest-800 text-cream shadow-sm flex items-center justify-center">
                  {sec.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-forest-900">
                  {sec.category}
                </h3>
                <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full border ${sec.badgeColor} ml-auto`}>
                  {sec.items.length} Programs
                </span>
              </div>

              {/* Grid of Program Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {sec.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="bg-[#faf6f0] rounded-2xl border border-forest-200/70 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden group"
                  >
                    {/* Image header */}
                    <div className="h-40 relative overflow-hidden bg-forest-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" aria-hidden="true" />
                      <span className="absolute bottom-3 left-3 font-display font-semibold text-cream text-base drop-shadow-md">
                        {item.title}
                      </span>
                    </div>

                    {/* Description body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <p className="font-body text-xs text-soil-700 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-forest-100 flex items-center justify-between text-[11px] font-body font-semibold text-forest-800">
                        <span>CEAD Initiative</span>
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
