import PageWrapper from '../components/PageWrapper';
import DirectorMessage from '../components/DirectorMessage';

export default function DirectorMessagePage() {
  return (
    <PageWrapper crumbs={[{ label: 'About Us', href: '/about' }, { label: "Director's Message", href: '/director-message' }]}>
      <DirectorMessage />
    </PageWrapper>
  );
}
