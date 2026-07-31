import FeatureCard from './FeatureCard'

const features = [
  {
    id: 'consultancy-centre',
    title: 'Consultancy Centre',
    points: ['Organic Farming', 'Precision Farming', 'Sustainable Agriculture', 'Roof Top Garden', 'Integrated Farming System'],
  },
  {
    id: 'environment-feature',
    title: 'Environment',
    points: ['Solid Waste Management', 'Afforestation Programme & Carbon Trading', 'Awareness Programmes'],
  },
  {
    id: 'agriculture-feature',
    title: 'Agriculture',
    points: ['Organic Farming', 'Precision Farming', 'Integrated Farming System', 'Mechanization in Paddy', 'Government Linkages'],
  },
  {
    id: 'development',
    title: 'Development',
    points: ['Village Development Projects', 'Village Farmers Association Formation', 'Men/Women SHG Formation'],
  },
]

function WhatIsCEAD() {
  return (
    <section data-reveal className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <h2 className="font-display text-3xl text-forest-900 sm:text-4xl">What is CEAD?</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default WhatIsCEAD
