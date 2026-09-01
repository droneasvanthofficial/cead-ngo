
/**
 * The training programmes run by CEAD's Consultancy & Training Centre.
 * Listed typographically — CEAD has no photograph of most individual courses,
 * and decorative stock imagery would add nothing to the list.
 */
export const trainingCourses = [
  { title: 'Organic Farming', category: 'Agriculture', desc: 'Sustainable crop cultivation avoiding chemical pesticides and synthetic fertilizers.' },
  { title: 'Precision Farming', category: 'Agriculture', desc: 'Sensors, mapping and input efficiency for data-guided field management.' },
  { title: 'Integrated Farming System', category: 'Agriculture', desc: 'Synergistic combination of crops, livestock, poultry and fish farming.' },
  { title: 'SRI — Improved Method of Paddy Cultivation', category: 'Agriculture', desc: 'System of Rice Intensification, saving water while boosting yield.' },
  { title: 'Hi-Tech Horticulture', category: 'Horticulture', desc: 'Polyhouse cultivation, micro-irrigation and high-value fruit and flower crops.' },
  { title: 'Flora Culture', category: 'Horticulture', desc: 'Commercial flower growing, garland making and the floristry business.' },
  { title: 'Vermi Composting', category: 'Bio-Inputs', desc: 'Transforming agricultural organic waste into nutrient-dense vermicompost.' },
  { title: 'Vermi Wash Production', category: 'Bio-Inputs', desc: 'Liquid bio-fertilizer extraction techniques rich in plant growth hormones.' },
  { title: 'Bio-Fertilisers Production & Usage', category: 'Bio-Inputs', desc: 'Rhizobium, Azospirillum and PSB bio-fertilizer preparation methods.' },
  { title: 'Bio-Pesticides Production & Usage', category: 'Bio-Inputs', desc: 'Neem-based extracts, Trichoderma and botanical pest management.' },
  { title: 'Mushroom Cultivation', category: 'Livelihood', desc: 'Indoor oyster and button mushroom spawning, bed preparation and harvesting.' },
  { title: 'Coir Rope Production', category: 'Livelihood', desc: 'Processing coconut husk fibres into marketable coir yarn and ropes.' },
  { title: 'Fish Culture', category: 'Livelihood', desc: 'Inland freshwater pond fish farming, feeding and water quality care.' },
  { title: 'Community Nursery Development', category: 'Nursery', desc: 'Polybag seedling production, grafting and quality sapling raising.' },
  { title: 'Roof Top Garden', category: 'Urban Agri', desc: 'Designing and maintaining terrace vegetable, herb and container gardens.' },
  { title: 'Organic Kitchen Garden', category: 'Urban Agri', desc: 'Home organic vegetable farming for daily family nutrition and health.' },
  { title: 'Soil Testing — Importance and Methods', category: 'Soil Health', desc: 'pH testing, NPK estimation and soil health card interpretation.' },
  { title: 'SHG Management Training', category: 'Governance', desc: 'Leadership, book-keeping, micro-finance savings and group dynamics.' },
  { title: 'Awareness Training on Insurance', category: 'Finance', desc: 'Pradhan Mantri Fasal Bima Yojana and crop/livestock risk protection.' },
  { title: 'Awareness Training on Bankable Projects', category: 'Finance', desc: 'DPR preparation, NABARD subsidy filing and bank loan applications.' },
  { title: 'Awareness Training on Government Schemes', category: 'Finance', desc: 'Navigating state and central agri-subsidies, PM-KISAN and MSME schemes.' },
];

export const trainingCategories = [
  'All',
  ...Array.from(new Set(trainingCourses.map((course) => course.category))),
];
