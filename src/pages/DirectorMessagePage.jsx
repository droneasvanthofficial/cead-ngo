import PageHeader from '../components/ui/PageHeader';
import DirectorMessage from '../components/DirectorMessage';

export default function DirectorMessagePage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Director's Message"
        description="Mr. C. Ganeche, Founder and Director, on why CEAD chose to work in the villages of South India."
        crumbs={[{ label: 'About', href: '/about' }, { label: "Director's Message" }]}
      />
      <DirectorMessage />
    </>
  );
}
