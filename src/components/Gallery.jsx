const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
    alt: 'Farm worker carrying harvested greens in a rural field',
  },
  {
    src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
    alt: 'Organic vegetable farming rows in warm morning light',
  },
  {
    src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=900&q=80',
    alt: 'Women farmers collaborating in a sustainable agriculture plot',
  },
  {
    src: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    alt: 'Tree plantation activity supporting community afforestation',
  },
]

function Gallery() {
  return (
    <section id="gallery" data-reveal className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <h2 className="font-display text-3xl text-forest-900 sm:text-4xl">CEAD Gallery</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-2xl">
            <img src={image.src} alt={image.alt} className="h-52 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
