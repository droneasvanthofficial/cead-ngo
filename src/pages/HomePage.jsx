import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import FocusAreas from '../components/FocusAreas';
import ConsultancyCentre from '../components/ConsultancyCentre';
import OurProducts from '../components/OurProducts';
import Gallery from '../components/Gallery';
import Partnerships from '../components/Partnerships';
import MediaSection from '../components/MediaSection';

/**
 * Homepage narrative: who CEAD is, the figures behind it, what it does, what it
 * teaches, what it sells, the fieldwork itself, who backs it, and where it is
 * documented. The closing call to action lives in the footer.
 *
 * Governance sections (director's message, trustees, advisory committee, staff)
 * are reached from the About menu rather than repeated here.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FocusAreas />
      <ConsultancyCentre compact />
      <OurProducts />
      <Gallery />
      <Partnerships />
      <MediaSection />
    </>
  );
}
