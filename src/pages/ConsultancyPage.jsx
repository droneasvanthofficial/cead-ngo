import PageHeader from '../components/ui/PageHeader';
import ConsultancyCentre from '../components/ConsultancyCentre';
import headerImg from '../assets/images/real_gallery_1.jpg';

export default function ConsultancyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills & training"
        title="Consultancy & Training Centre"
        description="Free, practical training programmes in organic production, bio-inputs, horticulture and enterprise, run every month in Puducherry."
        crumbs={[{ label: 'Consultancy' }]}
        image={headerImg}
        imageAlt=""
      />
      <ConsultancyCentre />
    </>
  );
}
