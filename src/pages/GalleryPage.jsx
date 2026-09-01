import PageHeader from '../components/ui/PageHeader';
import Gallery from '../components/Gallery';
import headerImg from '../assets/images/real_gallery_10.jpg';

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fieldwork"
        title="Photo Gallery"
        description="Photographs from CEAD training workshops, field visits, self-help group meetings and events."
        crumbs={[{ label: 'Media', href: '/media' }, { label: 'Photo Gallery' }]}
        image={headerImg}
        imageAlt=""
      />
      <Gallery />
    </>
  );
}
