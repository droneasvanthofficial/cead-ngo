const paperNews = [
  'Community composting awareness drive in coastal villages',
  'Farm women SHG livelihood training coverage',
  'Precision agriculture workshop in Puducherry region',
  'Afforestation programme and youth volunteer mobilization',
]

function MediaSection() {
  return (
    <section id="media" data-reveal className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <h2 className="font-display text-3xl text-forest-900 sm:text-4xl">Media</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-soil-700">CEAD TV News</h3>
          <div className="mt-4 overflow-hidden rounded-xl">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/jfKfPfyJRdk"
              title="CEAD TV News placeholder video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </article>
        <article className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-forest-100">
          <h3 className="font-display text-2xl text-soil-700">CEAD Paper News</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {paperNews.map((item) => (
              <div key={item} className="rounded-xl bg-cream-100 p-4 text-sm text-forest-900">
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default MediaSection
