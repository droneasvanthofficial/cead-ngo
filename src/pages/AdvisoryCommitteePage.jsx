import PageWrapper from '../components/PageWrapper';
import AdvisoryCommittee from '../components/AdvisoryCommittee';

export default function AdvisoryCommitteePage() {
  return (
    <PageWrapper crumbs={[{ label: 'About Us', href: '/about' }, { label: 'Advisory Committee', href: '/advisory-committee' }]}>
      <AdvisoryCommittee />
    </PageWrapper>
  );
}
