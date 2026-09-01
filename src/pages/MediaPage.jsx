import PageHeader from '../components/ui/PageHeader';
import MediaSection from '../components/MediaSection';

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & media"
        title="News & Media"
        description="Published reports, event records and the channels where CEAD's work is documented."
        crumbs={[{ label: 'Media' }]}
      />
      <MediaSection />
    </>
  );
}
