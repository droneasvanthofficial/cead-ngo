import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeLeft, fadeUp } from '../lib/motion';
import unitsImg from '../assets/images/real_gallery_6.jpg';
import vermiCompostImg from '../assets/images/product_vermicompost.jpg';
import vermiWashImg from '../assets/images/product_vermiwash.jpg';
import organicGreensImg from '../assets/images/product_organic_greens.jpg';
import potMixtureImg from '../assets/images/product_pot_mixture.jpg';

/**
 * CEAD's own organic inputs, produced at the farm in Puducherry.
 */
const products = [
  {
    id: 'vermi-compost',
    name: 'Vermi Compost',
    tagline: 'Organic fertilizer',
    image: vermiCompostImg,
    imageAlt: 'Green Day Vermi Compost organic fertilizer packages',
    intro:
      'A rich organic fertilizer produced by earthworm activity that enhances soil fertility and plant growth naturally — a source of macro and micro nutrients, enzymes, vitamins and beneficial microorganisms.',
    features: [
      'Improves soil structure and aeration for better root growth.',
      'Contains beneficial microorganisms that suppress plant diseases naturally.',
      'Rich in nitrogen, phosphorus, potassium and essential trace minerals.',
      'Improves the water retention capacity of soil, reducing irrigation needs.',
      'Promotes faster seed germination and healthier seedling development.',
      'Safe for all crops — vegetables, fruits, flowers and field crops.',
    ],
    footer: 'Produced by CEAD in partnership with Green Day Organics.',
  },
  {
    id: 'vermi-wash',
    name: 'Vermi Wash',
    tagline: 'Liquid plant growth regulator',
    image: vermiWashImg,
    imageAlt: 'Green Day Vermi Wash liquid plant growth regulator bottles',
    intro:
      'A liquid plant growth regulator containing high amounts of enzymes, vitamins and hormones such as auxins and gibberellins, along with macro and micro nutrients.',
    features: [
      'A liquid foliar spray recommended for all field crops, fruits, vegetables and flowers.',
      'Acts as a plant tonic and helps reduce many plant diseases.',
      'Mixed one litre with one litre of cow urine in ten litres of water, it acts as a bio-pesticide and liquid manure.',
      'Contains enzymes, vitamins and growth hormones alongside macro and micro nutrients.',
    ],
    footer: 'Dilute before spraying, as advised for the crop.',
  },
  {
    id: 'organic-greens',
    name: 'Organic Greens',
    tagline: 'Fresh, clean and chemical-free',
    image: organicGreensImg,
    imageAlt: 'Green Day Organic Greens fresh spinach palak keerai package',
    intro:
      'Fresh, cleaned, healthy organic greens cultivated under controlled conditions without any chemicals — produced using environmentally sound methods that involve no pesticides or chemical fertilizers.',
    features: [
      'Cultivated without any chemical fertilizers or pesticides.',
      'Grown and processed by Joint Liability Group members formed under NABARD, with technical support from CEAD.',
      'Packed ready to cook, with no wastage.',
      'Twelve varieties of greens available at present.',
    ],
    footer: 'Grown in collaboration with Green Day.',
  },
  {
    id: 'enriched-pot-mixture',
    name: 'Enriched Pot Mixture',
    tagline: 'Organic potting mix',
    image: potMixtureImg,
    imageAlt: 'Pure Organic Potting Mix enriched pot mixture bag',
    intro:
      'A potting mixture for sowing seeds and planting seedlings, cuttings and grafts — an organic mix that provides the right growing environment for all plants.',
    features: [
      'Rich in organic matter, which helps produce healthy saplings during germination.',
      'Allows good drainage while holding sufficient moisture, letting excess water drain away.',
      'Supplies adequate nutrients to plants at every stage of growth.',
      'Free from harmful organisms and toxic minerals.',
    ],
    footer: 'Suitable for container gardening, terrace gardens and nurseries.',
  },
];

export default function OurProducts() {
  return (
    <Section id="products" tone="cream" aria-labelledby="products-heading">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeader
            id="products-heading"
            eyebrow="Green Day products"
            title="Organic inputs made on our own farm"
            lead="CEAD runs its own vermicompost, vermiwash and pot mixture units. What we teach farmers to make, we make and sell ourselves."
          />
        </div>
        <Reveal variant={fadeLeft} className="overflow-hidden rounded-2xl lg:col-span-5">
          <img
            src={unitsImg}
            alt="A group gathered around an open composting bed at a CEAD demonstration"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>

      <RevealGroup as="ol" step={0.06} className="mt-16" role="list">
        {products.map((product, index) => (
          <RevealItem
            as="li"
            key={product.id}
            id={product.id}
            className="grid scroll-mt-32 gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-14"
          >
            {/* Identity */}
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-body text-caption font-semibold tabular-nums text-forest-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-h2 font-semibold text-forest-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600">
                    {product.tagline}
                  </p>
                </div>
              </div>

              {/* Product Image */}
              {product.image && (
                <div className="mt-6 group overflow-hidden rounded-2xl border border-line/80 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-forest-300/80 max-w-sm lg:max-w-none">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.imageAlt || product.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="lg:col-span-8">
              <p className="font-body text-lead text-soil-600">{product.intro}</p>

              <ul className="mt-7 grid gap-x-10 sm:grid-cols-2" role="list">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 border-t border-line py-3 font-body text-small leading-relaxed text-soil-700"
                  >
                    <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-leaf-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-body text-caption text-soil-500">{product.footer}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal
        variant={fadeUp}
        className="mt-6 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-xl">
          <h3 className="font-display text-h3 font-semibold text-forest-900">
            Pack sizes, pricing and bulk supply
          </h3>
          <p className="mt-2.5 font-body text-small leading-relaxed text-soil-600">
            Products are dispatched from our farm in Puducherry. Call or email for current pack
            sizes, pricing and availability.
          </p>
        </div>
        <Button href="mailto:ceadngo@gmail.com" variant="primary" arrow className="shrink-0">
          Enquire about products
        </Button>
      </Reveal>
    </Section>
  );
}
