import PageWrapper from '../components/PageWrapper';
import BoardTrustees from '../components/BoardTrustees';

export default function BoardTrusteesPage() {
  return (
    <PageWrapper crumbs={[{ label: 'About Us', href: '/about' }, { label: 'Board of Trustees', href: '/board-trustees' }]}>
      <BoardTrustees />
    </PageWrapper>
  );
}
