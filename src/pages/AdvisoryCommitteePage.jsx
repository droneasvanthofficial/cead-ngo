import PageHeader from '../components/ui/PageHeader';
import AdvisoryCommittee from '../components/AdvisoryCommittee';

export default function AdvisoryCommitteePage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Advisory Committee"
        description="The agricultural, environmental and health specialists who guide CEAD's technical work."
        crumbs={[{ label: 'About', href: '/about' }, { label: 'Advisory Committee' }]}
      />
      <AdvisoryCommittee />
    </>
  );
}
