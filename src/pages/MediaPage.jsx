import PageWrapper from '../components/PageWrapper';
import MediaSection from '../components/MediaSection';

export default function MediaPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Media', href: '/media' }]}>
      <MediaSection />
    </PageWrapper>
  );
}
