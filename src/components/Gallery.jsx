import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import r1 from '../assets/images/real_gallery_1.png';
import r2 from '../assets/images/real_gallery_2.png';
import r3 from '../assets/images/real_gallery_3.png';
import r4 from '../assets/images/real_gallery_4.png';
import r5 from '../assets/images/real_gallery_5.png';
import r6 from '../assets/images/real_gallery_6.png';
import r7 from '../assets/images/real_gallery_7.jpeg';
import r8 from '../assets/images/real_gallery_8.png';
import r9 from '../assets/images/real_gallery_9.png';
import r10 from '../assets/images/real_gallery_10.png';
import r11 from '../assets/images/real_gallery_11.png';
import r12 from '../assets/images/real_gallery_12.png';

const galleryImages = [
  { src: r1, alt: 'CEAD Training Session for Farmers & Women', caption: 'Farmer Training Session', span: 'md:col-span-1' },
  { src: r2, alt: 'Mahila Kisan Skill Development Workshop', caption: 'Mahila Kisan Training', span: 'md:col-span-2' },
  { src: r3, alt: 'Soil Health & Testing Demonstration', caption: 'Soil Health & Testing', span: 'md:col-span-2' },
  { src: r4, alt: 'Vermicomposting Unit Demonstration', caption: 'Vermi Compost Demonstration', span: 'md:col-span-1' },
  { src: r5, alt: 'Valedictory Function & Certificate Distribution', caption: 'Valedictory Celebrations', span: 'md:col-span-1' },
  { src: r6, alt: 'Field Visit & Organic Farming Inspection', caption: 'Field Inspections', span: 'md:col-span-2' },
  { src: r7, alt: 'Self Help Group Empowering Rural Women', caption: 'Women SHG Meeting', span: 'md:col-span-2' },
  { src: r8, alt: 'CEAD Officers & Trainees Group Photo', caption: 'Trainees & Faculty', span: 'md:col-span-1' },
  { src: r9, alt: 'Press & Media Coverage Event', caption: 'Media & News Event', span: 'md:col-span-1' },
  { src: r10, alt: 'Awareness Campaign in Puducherry Village', caption: 'Awareness Campaign', span: 'md:col-span-2' },
  { src: r11, alt: 'Distribution of Organic Kits & Seeds', caption: 'Organic Seed Distribution', span: 'md:col-span-1' },
  { src: r12, alt: 'CEAD Livelihood Farm Activity', caption: 'Livelihood Farm', span: 'md:col-span-2' },
];

function GalleryItem({ image, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/3] ${image.span} transition-all duration-700 shadow-sm hover:shadow-card-hover ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label={image.alt}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
        loading="lazy"
      />
      {/* Caption overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent flex items-end p-4 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <span className="font-body font-semibold text-cream text-sm">
          {image.alt}
        </span>
      </div>

      {/* Always-visible badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-forest-900/90 text-gold-light border border-gold/30 font-body text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
          {image.caption}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f7f2e8] via-[#eee5d4] to-[#f7f2e8] bg-grain-texture relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Ambient light blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-leaf/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-[#1a380f] text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-forest-700">
            Fieldwork &amp; Impact
          </span>
          <h2 id="gallery-heading" className="section-heading text-forest-900">CEAD Photo Gallery</h2>
          <p className="mt-3 text-soil-700 font-body max-w-xl mx-auto text-base">
            Real photos from our training workshops, Mahila Kisan programs, field visits, and valedictory events across Puducherry and Tamil Nadu.
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.caption} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
