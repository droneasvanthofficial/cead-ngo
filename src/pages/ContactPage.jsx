import PageWrapper from '../components/PageWrapper';
import ContactUs from '../components/ContactUs';

export default function ContactPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Contact Us', href: '/contact' }]}>
      <ContactUs />
    </PageWrapper>
  );
}
