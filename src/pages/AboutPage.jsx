import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/AboutSection';
import headerImg from '../assets/images/real_gallery_5.jpg';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Centre for Environment and Agricultural Development"
        description="A registered not-for-profit founded in Puducherry in 2003, working with farming families, rural women and youth across South India."
        crumbs={[{ label: 'About' }]}
        image={headerImg}
        imageAlt=""
      />
      <AboutSection />
    </>
  );
}
