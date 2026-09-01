import PageHeader from '../components/ui/PageHeader';
import OurProducts from '../components/OurProducts';
import headerImg from '../assets/images/real_gallery_12.jpg';

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Green Day products"
        title="Our Products"
        description="Vermicompost, vermiwash, organic greens and enriched pot mixture, produced on CEAD's own farm."
        crumbs={[{ label: 'Products' }]}
        image={headerImg}
        imageAlt=""
      />
      <OurProducts />
    </>
  );
}
