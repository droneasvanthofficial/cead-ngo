import Hero from '../components/Hero';
import FocusAreas from '../components/FocusAreas';
import AboutSection from '../components/AboutSection';
import DirectorMessage from '../components/DirectorMessage';
import AdvisoryCommittee from '../components/AdvisoryCommittee';
import ConsultancyCentre from '../components/ConsultancyCentre';
import OurProducts from '../components/OurProducts';
import Partnerships from '../components/Partnerships';
import Gallery from '../components/Gallery';
import MediaSection from '../components/MediaSection';
import ContactUs from '../components/ContactUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <AboutSection />
      <DirectorMessage />
      <AdvisoryCommittee />
      <ConsultancyCentre />
      <OurProducts />
      <Partnerships />
      <Gallery />
      <MediaSection />
      <ContactUs />
    </>
  );
}
