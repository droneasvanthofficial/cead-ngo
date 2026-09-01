import PageHeader from '../components/ui/PageHeader';
import ContactUs from '../components/ContactUs';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        description="Reach the CEAD office in Puducherry by phone, email or in person — for training, partnerships or farmer enquiries."
        crumbs={[{ label: 'Contact' }]}
      />
      <ContactUs />
    </>
  );
}
