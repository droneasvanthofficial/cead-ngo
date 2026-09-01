import womensTraining from '../assets/images/real_gallery_5.jpg';
import compostDemo from '../assets/images/real_gallery_6.jpg';
import fieldAdvisory from '../assets/images/real_gallery_8.jpg';
import demonstrationPlot from '../assets/images/real_gallery_1.jpg';
import trainingBatch from '../assets/images/real_gallery_12.jpg';

/**
 * CEAD's five focus areas and the programmes under each.
 *
 * Each area carries one photograph of CEAD's own work. Individual programmes
 * are listed typographically rather than given a thumbnail each — there are no
 * authentic photographs for most of them, and a wall of decorative stock images
 * would say less than the list does.
 */
export const focusAreas = [
  {
    key: 'agriculture',
    label: 'Agriculture',
    title: 'Agriculture',
    summary:
      'Sustainable farming practice, modern agricultural technique and rural entrepreneurship, delivered to farmers and micro-entrepreneurs on their own land. Programmes range from organic, precision and integrated farming to mechanised paddy cultivation and hi-tech horticulture, alongside hands-on training in vermi composting, mushroom cultivation and other farm-based micro-enterprises that turn agricultural waste and idle land into steady income.',
    image: fieldAdvisory,
    imageAlt: 'CEAD staff reviewing records with a farmer beside a flooded paddy field',
    groups: [
      {
        category: 'For farmers',
        items: [
          { title: 'Organic Farming', desc: 'Eco-friendly crop cultivation avoiding synthetic pesticides and chemical fertilizers.' },
          { title: 'Precision Farming', desc: 'Optimising resource inputs, soil monitoring and data-driven field management.' },
          { title: 'Integrated Farming System', desc: 'Combining crop cultivation, livestock and aquaculture for maximum farm productivity.' },
          { title: 'Mechanization in Paddy', desc: 'Transplanters, harvesters and modern machinery that lessen manual labour.' },
          { title: 'Hi-Tech Horticulture', desc: 'Protected cultivation, drip fertigation and high-value fruit and vegetable crops.' },
          { title: 'SRI Method of Paddy Cultivation', desc: 'System of Rice Intensification techniques that boost yield while saving 30–50% water.' },
          { title: 'Government Linkages', desc: 'Access to central and state government agricultural schemes and subsidies.' },
        ],
      },
      {
        category: 'For micro-entrepreneurs',
        items: [
          { title: 'Vermi Composting', desc: 'Transforming agricultural organic waste into high-grade earthworm compost.' },
          { title: 'Vermi Wash Production', desc: 'Extracting liquid bio-fertilizer rich in nutrients and beneficial microorganisms.' },
          { title: 'Mushroom Cultivation', desc: 'Low-cost, high-return indoor mushroom farming training for rural entrepreneurs.' },
          { title: 'Organic Vegetable Farming', desc: 'Commercial production of pesticide-free vegetables for local market demand.' },
          { title: 'Organic Greens Cultivation', desc: 'Short-duration spinach and traditional greens farming providing fast cash flow.' },
          { title: 'Protected Cultivation', desc: 'Polyhouse and shade-net farming for off-season vegetables and nursery raising.' },
          { title: 'Government Linkages', desc: 'Connecting rural entrepreneurs to NABARD, KVIC and government incubation funds.' },
        ],
      },
    ],
  },
  {
    key: 'environment',
    label: 'Environment',
    title: 'Environment',
    summary:
      'Protecting natural ecosystems through waste management, afforestation and carbon reduction, in both urban and rural areas. CEAD runs tree-planting drives that double as carbon sequestration projects, works with village communities on waste segregation and composting, and carries environmental awareness campaigns into schools, colleges and local communities to build habits that outlast any single programme.',
    image: compostDemo,
    imageAlt: 'A group gathered around an open composting bed during a CEAD demonstration',
    groups: [
      {
        category: 'Environmental initiatives',
        items: [
          { title: 'Afforestation Programme & Carbon Trading', desc: 'Mass tree planting drives and carbon sequestration credit projects in rural areas.' },
          { title: 'Solid Waste Management', desc: 'Segregation, composting and community recycling programmes across villages.' },
          { title: 'Awareness Programmes', desc: 'School, college and village community campaigns on environmental conservation.' },
        ],
      },
    ],
  },
  {
    key: 'women',
    label: 'Women Empowerment',
    title: 'Women Empowerment',
    summary:
      'CEAD consists of 80 self-help groups in and around Pondicherry, empowering rural women through skill development, micro-credit access and sustainable livelihood programmes.',
    image: womensTraining,
    imageAlt: 'Rural women attending a CEAD training session beneath the centre’s banner',
    note: {
      body: 'CEAD consists of 80 self-help groups in and around Pondicherry. The organisation gives different types of training — soap making, candle making, pickle making, tailoring and more — to its members for their overall empowerment and development. The SHGs are also linked with various banks for loans.',
      aside: 'The federation of the women’s SHGs is called “Amudham Magalir”; the men’s federation is called “Aruvi Men’s Federation”.',
    },
    groups: [
      {
        category: 'Self-help groups',
        items: [
          { title: 'Women SHGs Formation', desc: 'Organising rural women into self-reliant micro-credit saving groups.' },
          { title: 'Financial Mobilization for Women SHGs', desc: 'Mobilising community savings and revolving credit funds for members.' },
          { title: 'Bank Linkages for Women SHGs', desc: 'Facilitating low-interest bank loans for women-led enterprises.' },
          { title: 'Sustainable Livelihood Development', desc: 'Establishing sustainable income-generating activities for women.' },
          { title: 'Joint Liability Group (JLG) Link with NABARD', desc: 'Connecting small and landless women farmers with NABARD credit facilities.' },
          { title: 'Awareness Education Campaigns', desc: 'Rights, health, hygiene and social equality workshops.' },
          { title: 'Vermi Composting', desc: 'Training women to set up and sell from organic vermicompost units.' },
          { title: 'Vermi Wash Production', desc: 'Producing liquid bio-fertilizers as a home-based business.' },
          { title: 'Mushroom Cultivation', desc: 'Indoor oyster and button mushroom cultivation with high margins.' },
          { title: 'Community Nursery Establishment', desc: 'Raising plant saplings and seedlings for local agricultural demand.' },
          { title: 'Organic Greens & Vegetable Farming', desc: 'Cultivating pesticide-free vegetables for family nutrition and market.' },
          { title: 'Protected Cultivation for Vegetables & Flowers', desc: 'Polyhouse and shade-net cultivation for high-value crops.' },
          { title: 'Coir Rope Production', desc: 'Using natural coconut fibre to manufacture durable coir ropes.' },
          { title: 'Value Added Coir Products', desc: 'Crafting coir mats, garden pots and decorative eco-friendly items.' },
          { title: 'Coco Peat Production', desc: 'Processing coconut husk peat into growing medium for nursery use.' },
        ],
      },
      {
        category: 'Skill development programme',
        items: [
          { title: 'Mushroom Culture', desc: 'Technical spawn preparation and mushroom harvesting techniques.' },
          { title: 'Coir-pith Composting', desc: 'Enriching raw coir pith into organic manure for potting media.' },
          { title: 'Moisturized Coir Spinning', desc: 'Operating motorised coir spinning machines for uniform yarn quality.' },
          { title: 'Fresh Water Fish Culture', desc: 'Inland aquaculture training for village pond fish farming.' },
          { title: 'Flora Culture', desc: 'Floriculture, flower harvesting, garland making and the floristry trade.' },
          { title: 'Coconut Based Products', desc: 'Processing virgin coconut oil, desiccated powder and handicrafts.' },
          { title: 'Hand Crafts', desc: 'Artisan craft training including jute bags, tailoring and eco-art.' },
          { title: 'Nursery Raising', desc: 'Nursery management, grafting and sapling multiplication skills.' },
        ],
      },
    ],
  },
  {
    key: 'agrotourism',
    label: 'Agro Tourism',
    title: 'Agro Tourism',
    summary:
      'Connecting urban visitors with authentic rural farming experience and eco-living, on CEAD’s own demonstration farm in Puducherry. Visits combine guided farm tours with hands-on organic farming workshops — soil preparation, planting and organic crop care — and a genuine taste of village life, from traditional South Indian hospitality to local culinary traditions, giving guests a working farm to learn from rather than a staged attraction.',
    image: demonstrationPlot,
    imageAlt: 'A CEAD demonstration plot with labelled saplings laid out in marked rows',
    booking: true,
    groups: [
      {
        category: 'What a visit includes',
        items: [
          { title: 'Farm Visits & Eco Stays', desc: 'Experiential farm tours demonstrating organic agricultural practice.' },
          { title: 'Hands-on Organic Farming Workshops', desc: 'Interactive sessions on soil preparation, planting and organic crop care.' },
          { title: 'Village Cultural Heritage Experience', desc: 'Rural South Indian hospitality and traditional culinary experiences.' },
        ],
      },
    ],
  },
  {
    key: 'livelihood',
    label: 'Livelihood',
    title: 'Livelihood',
    summary:
      'Capacity building, vocational training for youth and women, micro-finance mobilisation and village development infrastructure. CEAD helps villages organise into farmers’ associations and self-help groups, mobilises the savings and bank linkages that put working capital into members’ hands, and runs awareness campaigns in schools and communities so livelihood gains are matched by lasting improvements in health, hygiene and local infrastructure.',
    image: trainingBatch,
    imageAlt: 'Group photograph of a CEAD training batch with staff and trainees',
    groups: [
      {
        category: 'Livelihood initiatives',
        items: [
          { title: 'Village Development Projects', desc: 'Integrated infrastructure, sanitation and community water resource management.' },
          { title: 'Village Farmers Association Formation', desc: 'Organising smallholder farmers into cooperative bargaining and marketing groups.' },
          { title: 'Men / Women SHGs Formation', desc: 'Grassroots thrift institutions empowering communities for self-reliance.' },
          { title: 'Financial Mobilization for SHGs', desc: 'Community savings and revolving credit funds for livelihood activities.' },
          { title: 'Bank Linkages for Women SHGs', desc: 'Connecting women self-help groups with low-interest bank credit lines.' },
          { title: 'Sustainable Livelihood Development', desc: 'Resilient, eco-friendly income opportunities for rural families.' },
          { title: 'Trainings to Village Youths & Women', desc: 'Vocational skill development and certification for sustainable employment.' },
          { title: 'Awareness Campaigns for Students', desc: 'Environmental and agricultural sustainability education in schools and colleges.' },
          { title: 'Rural & Urban Awareness Campaigns', desc: 'Community workshops on health, hygiene and sustainable living.' },
        ],
      },
    ],
  },
];
