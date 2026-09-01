import PageHeader from '../components/ui/PageHeader';
import BoardTrustees from '../components/BoardTrustees';

export default function BoardTrusteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Executive Committee"
        description="The executive committee responsible for CEAD's governance, finances and programme accountability."
        crumbs={[{ label: 'About', href: '/about' }, { label: 'Executive Committee' }]}
      />
      <BoardTrustees />
    </>
  );
}
