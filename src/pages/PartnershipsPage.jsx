import PageWrapper from '../components/PageWrapper';
import Partnerships from '../components/Partnerships';

export default function PartnershipsPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Partnerships', href: '/partnerships' }]}>
      <Partnerships />
    </PageWrapper>
  );
}
