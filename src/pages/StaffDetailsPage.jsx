import PageHeader from '../components/ui/PageHeader';
import StaffDetails from '../components/StaffDetails';

export default function StaffDetailsPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Staff Details"
        description="The full-time team running CEAD's programmes, field operations and administration."
        crumbs={[{ label: 'About', href: '/about' }, { label: 'Staff Details' }]}
      />
      <StaffDetails />
    </>
  );
}
