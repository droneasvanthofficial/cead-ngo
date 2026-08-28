import PageWrapper from '../components/PageWrapper';
import StaffDetails from '../components/StaffDetails';

export default function StaffDetailsPage() {
  return (
    <PageWrapper crumbs={[{ label: 'About Us', href: '/about' }, { label: 'Staff Details', href: '/staff-details' }]}>
      <StaffDetails />
    </PageWrapper>
  );
}
