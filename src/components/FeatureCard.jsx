function FeatureCard({ title, points, id }) {
  return (
    <article id={id} className="group rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-forest-100 transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-display text-2xl text-soil-700">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-forest-900">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-1 inline-block h-2 w-2 rounded-full bg-leaf-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default FeatureCard
