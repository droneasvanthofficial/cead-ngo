import PageWrapper from '../components/PageWrapper';
import ConsultancyCentre from '../components/ConsultancyCentre';

export default function ConsultancyPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Consultancy Centre', href: '/consultancy' }]}>
      <ConsultancyCentre />
    </PageWrapper>
  );
}
