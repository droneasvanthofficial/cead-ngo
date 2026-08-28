import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// 5 Real High-Resolution Project Images for Carousel
import slide1 from '../assets/images/real_gallery_1.png';
import slide2 from '../assets/images/real_gallery_3.png';
import slide3 from '../assets/images/real_gallery_4.png';
import slide4 from '../assets/images/real_gallery_5.png';
import slide5 from '../assets/images/real_gallery_6.png';

const slides = [
  {
    id: 1,
    image: slide1,
    title: 'Women Empowerment & Self-Help Group (SHG) Networks',
    subtitle: 'Strengthening participatory development, thrift savings, and women-led rural institutions across 200+ villages.',
  },
  {
    id: 2,
    image: slide2,
    title: 'Sustainable Agriculture & Organic Vermicompost Initiatives',
    subtitle: 'Promoting organic production, soil fertility management, and natural eco-farming techniques.',
  },
  {
    id: 3,
    image: slide3,
    title: 'Farmers Field School & Agricultural Knowledge Training',
    subtitle: 'Providing certified entrepreneurship training and hands-on farm workshops to agri-graduates and farmers.',
  },
  {
    id: 4,
    image: slide4,
    title: 'Integrated Livelihood Farm & Soil Health Testing',
    subtitle: 'Demonstrating sustainable integrated farming models and advanced soil testing facilities.',
  },
  {
    id: 5,
    image: slide5,
    title: 'Environmental Conservation & Agro-Tourism Education',
    subtitle: 'Fostering community-led environmental stewardship, biodiversity preservation, and agro-tourism.',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Auto-play timer
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="home" className="w-full bg-white font-body">

      {/* ── 1. 5-Picture Carousel Section ── */}
      <div
        className="relative w-full overflow-hidden bg-forest-900 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Image Carousel"
      >
        {/* Slides Track */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[580px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle top & bottom vignette gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </div>
          ))}
        </div>

        {/* Previous Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-xs border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-xs border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Yellow / Golden Caption Badge (DHAN Foundation Style) */}
        <div className="absolute bottom-10 sm:bottom-12 left-0 right-0 z-20 flex justify-center px-4">
          <div className="bg-[#f0ad00]/95 text-[#1a2f12] px-6 py-3 sm:px-10 sm:py-3.5 rounded-lg shadow-xl backdrop-blur-xs max-w-2xl text-center border border-amber-300/40 transform transition-all duration-500 hover:scale-105">
            <h2 className="font-display font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-tight leading-snug">
              {slides[currentIndex].title}
            </h2>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-6 h-2.5 bg-gold'
                  : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── 2. Welcome to CEAD Section (Below Carousel) ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#fafcf7] border-b border-forest-100" aria-label="Welcome Section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Welcome Heading */}
          <div className="mb-6 sm:mb-8">
            <span className="text-forest-700 font-semibold text-xs uppercase tracking-widest bg-forest-100 px-3.5 py-1 rounded-full inline-block mb-3">
              About Our Institution
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#14300d] leading-tight">
              Welcome to CEAD
            </h1>
            <p className="font-display text-base sm:text-lg text-forest-700 font-medium mt-1">
              Centre for Environment and Agricultural Development
            </p>
          </div>

          {/* Welcome Editorial Content */}
          <div className="space-y-4 sm:space-y-5 text-[#33422d] text-base sm:text-lg leading-relaxed font-body">
            <p>
              <strong>Centre for Environment and Agricultural Development (CEAD)</strong> is a pioneering non-governmental,
              not-for-profit development organization initiated in <strong>2003</strong> in Puducherry and Tamil Nadu. 
              It brings together highly motivated, dedicated young professionals from agriculture, environmental science, 
              medicine, commerce, and technology to the grassroots development sector.
            </p>
            <p>
              CEAD fosters sustainable innovations to root out poverty, empower rural farming families, and regenerate 
              the natural ecosystem. Over the past two decades, CEAD has reached more than <strong>200+ villages</strong>, 
              organized over <strong>500+ Women Self-Help Groups (SHGs)</strong>, established furnished soil testing laboratories, 
              and trained over <strong>1,000+ Agri-Graduates and rural youth</strong> in organic agricultural entrepreneurship.
            </p>
            <p>
              Through participatory community action, farmers field schools, and integrated livelihood farms, 
              CEAD continues to build sustainable institutions for generations to come.
            </p>
          </div>

          {/* Quick Action Badges / Links */}
          <div className="mt-8 pt-6 border-t border-forest-200/60 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1a4413] hover:bg-[#25611b] text-white px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors shadow-sm"
            >
              Read Our Full Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/focus-areas"
              className="inline-flex items-center gap-2 border border-forest-700 text-forest-800 hover:bg-forest-100 px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-colors"
            >
              Explore Focus Areas
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-forest-700 hover:text-forest-900 font-medium text-sm sm:text-base px-3 py-2 transition-colors ml-auto"
            >
              Our Organic Products →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

