import PageWrapper from '../components/PageWrapper';
import AboutSection from '../components/AboutSection';

export default function AboutPage() {
  return (
    <PageWrapper crumbs={[{ label: 'About Us', href: '/about' }]}>
      <AboutSection />
    </PageWrapper>
  );
}
