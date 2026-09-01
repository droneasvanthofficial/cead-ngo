import PageHeader from '../components/ui/PageHeader';
import FocusAreas from '../components/FocusAreas';
import headerImg from '../assets/images/real_gallery_4.jpg';

export default function FocusAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Focus Areas"
        description="Agriculture, environment, women empowerment, agro tourism and livelihood — five areas of work that reinforce each other."
        crumbs={[{ label: 'Focus Areas' }]}
        image={headerImg}
        imageAlt=""
      />
      <FocusAreas />
    </>
  );
}
