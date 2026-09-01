import PageHeader from '../components/ui/PageHeader';
import Partnerships from '../components/Partnerships';

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our network"
        title="Partnerships"
        description="Government departments, universities, foundations and NGOs that CEAD delivers programmes with."
        crumbs={[{ label: 'Partners' }]}
      />
      <Partnerships />
    </>
  );
}
