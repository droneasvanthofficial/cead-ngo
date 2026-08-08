import PageWrapper from '../components/PageWrapper';
import OurProducts from '../components/OurProducts';

export default function ProductsPage() {
  return (
    <PageWrapper crumbs={[{ label: 'Our Products', href: '/products' }]}>
      <OurProducts />
    </PageWrapper>
  );
}
