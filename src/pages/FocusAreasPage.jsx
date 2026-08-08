import PageWrapper from '../components/PageWrapper';
import FocusAreas from '../components/FocusAreas';

export default function FocusAreasPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Focus Areas', href: '/focus-areas' }]}>
      <FocusAreas />
    </PageWrapper>
  );
}
