import PageWrapper from '../components/PageWrapper';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Media', href: '/media' }, { label: 'Photo Gallery', href: '/gallery' }]}>
      <Gallery />
    </PageWrapper>
  );
}
