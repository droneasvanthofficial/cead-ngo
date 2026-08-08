import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import vermiCompostImg from '../assets/images/product_vermicompost.png';
import vermiWashImg from '../assets/images/product_vermiwash.png';
import organicGreensImg from '../assets/images/product_organic_greens.png';
import potMixtureImg from '../assets/images/product_pot_mixture.png';

const products = [
  {
    id: 'vermi-compost',
    name: 'Vermi Compost',
    tagline: 'Nature\'s Finest Organic Fertilizer',
    brand: 'Green Day Products',
    image: vermiCompostImg,
    color: 'from-amber-800 to-amber-900',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    iconColor: 'text-amber-700',
    accentColor: 'bg-amber-600',
    intro:
      'Vermi Compost is a rich organic fertilizer produced by earthworm activity that enhances soil fertility and plant growth naturally. It is an excellent source of macro and micro nutrients, enzymes, vitamins, and beneficial microorganisms.',
    features: [
      'Enriched Vermi Compost improves soil structure and aeration for better root growth.',
      'Contains beneficial microorganisms that suppress plant diseases naturally.',
      'Rich in NPK (Nitrogen, Phosphorus, Potassium) and essential trace minerals.',
      'Improves water retention capacity of soil, reducing irrigation needs.',
      'Promotes faster seed germination and healthier seedling development.',
      'Safe for all crops — vegetables, fruits, flowers, and field crops.',
    ],
    footer: 'Produced by CEAD in partnership with Green Day Organics. Available in 1 kg, 5 kg, and 25 kg packs.',
  },
  {
    id: 'vermi-wash',
    name: 'Vermi Wash',
    tagline: 'Liquid Plant Growth Regulator',
    brand: 'Green Day Products',
    image: vermiWashImg,
    color: 'from-orange-700 to-orange-900',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    iconColor: 'text-orange-700',
    accentColor: 'bg-orange-600',
    intro:
      'Vermiwash is a liquid plant growth regulator which contains high amounts of enzymes, vitamins and hormones like auxins, gibberellins etc., along with macro & micro nutrients. Spray it and watch your plants bloom like never before.',
    features: [
      'Enriched Vermi Wash is a Liquid Plant Growth Regulator which contains high amounts of Enzymes, Vitamins and hormones like Auxins, Gibberellins etc. along with Macro & Micro nutrients.',
      'Enriched Vermi Wash is a Liquid foliar spray recommended for all field crops, Fruits, Vegetables and Flowers.',
      'Enriched Vermi Wash acts as a Plant Tonic and helps to reduce many Plant Diseases.',
      'A mixture of Vermi Wash (1Ltr.) with cow urine (1Ltr.) in 10 Litres of Water acts as Bio-Pesticides and Liquid Manure.',
    ],
    footer: 'Available in 500 ml, 1 Litre, and 5 Litre containers. Dilute 1:10 with water before spraying.',
  },
  {
    id: 'organic-greens',
    name: 'Organic Greens',
    tagline: 'Fresh, Clean & Chemical-Free',
    brand: 'Green Day Products',
    image: organicGreensImg,
    color: 'from-green-700 to-green-900',
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
    iconColor: 'text-green-700',
    accentColor: 'bg-green-600',
    intro:
      'Fresh cleaned healthy organic greens cultivated under controlled conditions without using any Chemicals. Organic greens are those foods that are produced using environmentally sound methods that do not involve pesticides & chemical fertilizer.',
    features: [
      'Fresh cleaned healthy organic greens cultivated without using any chemical Fertilizers and Pesticides.',
      'Greens are being cultivated and Processed by Joint Liability Group members formed under NABARD, to which the technical support is given by CEAD.',
      'The Products packed is ready to cook without any wastage.',
      'There are twelve varieties of greens available at Present.',
    ],
    footer:
      'We at CEAD promote the growth of organic greens in collaboration with Green Day. This food is healthy and highly nutritious.',
  },
  {
    id: 'enriched-pot-mixture',
    name: 'Enriched Pot Mixture',
    tagline: 'Premium Organic Potting Mix',
    brand: 'Green Day Products',
    image: potMixtureImg,
    color: 'from-stone-700 to-stone-900',
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-200',
    iconColor: 'text-stone-700',
    accentColor: 'bg-stone-600',
    intro:
      'Pot Mixture is used for sowing of seeds, planting of seedlings, cuttings and grafts. This premium organic potting mix provides the perfect growing environment for all plants.',
    features: [
      'It is important to ensure that plants receive enough nutrition to build their immunity for the future.',
      'Especially for the germination of seeds, this healthy Pot Mixture rich in Organic matter acts in facilitating healthy saplings.',
      'It allows good drainage and holds sufficient moisture for plant growth and permits excess water to drain away.',
      'Enriched Pot Mixture supplies adequate nutrient to the plants during all stages of growth.',
      'It is free from all harmful organisms and toxic minerals.',
    ],
    footer: 'Available in 5 kg and 10 kg packs. Suitable for container gardening, terrace gardens, and nurseries.',
  },
];

function ProductCard({ product, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      id={product.id}
      className={`bg-[#faf6f0] rounded-3xl border border-forest-200/70 shadow-sm hover:shadow-card-hover overflow-hidden transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Card Header Strip */}
      <div className={`bg-gradient-to-r ${product.color} px-6 py-4 flex items-center gap-3`}>
        <span className="text-cream/70 font-body text-xs font-semibold uppercase tracking-widest">
          {product.brand}
        </span>
        <span className="ml-auto">
          <span className={`text-xs font-body font-bold px-3 py-1 rounded-full bg-white/20 text-cream border border-white/25`}>
            Organic Certified
          </span>
        </span>
      </div>

      {/* Product Body */}
      <div className="grid md:grid-cols-5 gap-0">
        {/* Image Panel */}
        <div className="md:col-span-2 bg-white flex items-center justify-center p-6 border-r border-forest-100">
          <img
            src={product.image}
            alt={`${product.name} — Green Day CEAD organic product`}
            className="w-full max-h-52 object-contain drop-shadow-md"
            loading="lazy"
          />
        </div>

        {/* Content Panel */}
        <div className="md:col-span-3 p-6 space-y-4">
          {/* Product name & tagline */}
          <div>
            <h3 className="font-display text-2xl font-bold text-forest-900 leading-tight">
              {product.name}
            </h3>
            <p className={`text-xs font-body font-semibold uppercase tracking-wider mt-1 ${product.iconColor}`}>
              {product.tagline}
            </p>
          </div>

          {/* Intro Text */}
          <p className="font-body text-sm text-soil-700 leading-relaxed">
            {product.intro}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-body text-forest-800">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${product.accentColor}`} />
                {f}
              </li>
            ))}
          </ul>

          {/* Footer note */}
          {product.footer && (
            <p className="font-body text-xs text-soil-500 italic border-t border-forest-100 pt-3">
              {product.footer}
            </p>
          )}

          {/* CTA */}
          <a
            href="mailto:ceadngo@gmail.com"
            className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-cream text-xs font-body font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mt-2"
          >
            Enquire Now
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function OurProducts() {
  const [activeProduct, setActiveProduct] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f7f2e8] via-[#eee5d4] to-[#f7f2e8] bg-grain-texture relative overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* Ambient light blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-leaf/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-800 text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm border border-forest-700">
            Green Day Products
          </span>
          <h2 id="products-heading" className="section-heading text-forest-900">Our Products</h2>
          <p className="mt-3 text-soil-700 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Organic, eco-friendly products cultivated and produced by CEAD in partnership with Green Day Organics — straight from nature to your doorstep.
          </p>
        </div>

        {/* Quick-Jump Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {products.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="px-5 py-2 rounded-xl font-body text-sm font-semibold bg-[#faf6ee] text-forest-900 border border-forest-200/80 hover:bg-forest-800 hover:text-cream hover:border-forest-800 transition-all duration-200 shadow-sm"
            >
              {p.name}
            </a>
          ))}
        </div>

        {/* Product Cards */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Partnership Note */}
        <div className={`mt-14 bg-forest-800 rounded-2xl p-6 md:p-8 text-cream border border-forest-700 flex flex-col md:flex-row items-center gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center border border-gold/30">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <h3 className="font-display text-xl font-bold">Partnership with Green Day Organics</h3>
            <p className="font-body text-sm text-cream/85 leading-relaxed">
              All Green Day products are produced under CEAD's technical guidance and sold through Green Day Organics. CEAD supports rural farmers, Joint Liability Groups, and Self Help Groups in the production and marketing of these organic products.
            </p>
          </div>
          <a
            href="https://greendayorganics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-forest-900 font-body font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Visit Green Day
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
