import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import { RevealGroup, RevealItem } from './ui/Reveal';
import mahadevanImg from '../assets/images/mahadevan.jpg';
import kuppusamyImg from '../assets/images/kuppusamy.jpg';
import boopathyImg from '../assets/images/boopathy.jpg';
import pandianImg from '../assets/images/pandian.jpg';

const advisors = [
  {
    name: 'Mr. K. Mahadevan',
    degrees: 'B.Sc (Agri), M.Sc (Ecology)',
    title: 'Director of Agriculture (Retd.), Pondicherry',
    role: 'Consultant — Agriculture, Ecology & Rural Development',
    address: 'No. 31, First Cross Brindavan, Puducherry — 605 013',
    phone: '0413 - 2243231',
    mobile: '+91 93813 41900',
    image: mahadevanImg,
  },
  {
    name: 'Mr. P. Kuppusamy',
    degrees: 'M.Sc. (Agri), M.Z.S., F.E.S.I.',
    title: 'Additional Director of Agriculture (Retd.), Pondicherry',
    role: 'Consultant — Agriculture & Ecology',
    address: '44, Lenin Street, Kosapalayam, Puducherry — 605 013',
    phone: '0413 - 2241773',
    mobile: '+91 96005 032938',
    image: kuppusamyImg,
  },
  {
    name: 'Dr. P. Murugesa Boopathy',
    degrees: 'Former Vice-Chancellor',
    title: 'Tamil Nadu Agricultural University, Coimbatore',
    role: 'Senior Advisor — Agricultural Education & Research',
    address: '190/1, Green Fields, Anna Nagar West Extn., Chennai — 600 010',
    phone: '044 - 26562596 / 1017',
    image: boopathyImg,
  },
  {
    name: 'Dr. B.J. Pandian',
    degrees: 'Ph.D.',
    title: 'Director (i/c) and Nodal Officer (TN-IAMWARM)',
    role: 'Water Technology Centre, TNAU, Coimbatore — 641 003',
    phone: '0422 - 6611278 / 378 / 375',
    image: pandianImg,
  },
  {
    name: 'Dr. Anbumani',
    degrees: 'Ph.D.',
    title: 'Assistant Professor',
    role: 'Oilseed Research Station, Tindivanam, Villupuram Dt. — 604 002',
    image: null,
  },
  {
    name: 'Dr. Usha',
    degrees: 'MD',
    title: 'Health Consultant',
    role: 'Community Health & Hygiene Advisor',
    address: 'No. 6, Main Road, Thendral Nagar, Puducherry — 605 013',
    phone: '0413 - 4202435',
    image: null,
  },
  {
    name: 'Mr. Ramalingam',
    degrees: '',
    title: 'Steward, Sustinancy Farm',
    role: 'Aurovillian · SUSTINANCY Farm, Auroville',
    mobile: '+91 94433 05663',
    image: null,
  },
];

/** Falls back to initials when no photograph is on file. */
function Portrait({ name, image }) {
  const initials = name
    .replace(/^(Mr\.|Mrs\.|Dr\.|Ms\.)\s*/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  return (
    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-forest-100 sm:h-24 sm:w-24">
      {image ? (
        <img src={image} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center font-display text-h3 font-semibold text-forest-500"
        >
          {initials}
        </span>
      )}
    </div>
  );
}

export default function AdvisoryCommittee() {
  return (
    <Section id="advisory-committee" tone="canvas" aria-labelledby="advisory-heading">
      <SectionHeader
        id="advisory-heading"
        eyebrow="Governance"
        title="Advisory committee"
        lead="Retired directors of agriculture, university researchers and health specialists who guide CEAD's programme design and technical standards."
      />

      <RevealGroup as="ul" step={0.05} className="mt-12 grid gap-x-12 md:grid-cols-2" role="list">
        {advisors.map((advisor) => (
          <RevealItem
            as="li"
            key={advisor.name}
            className="flex gap-5 border-t border-line py-7 first:border-t-0 md:first:border-t md:[&:nth-child(2)]:border-t-0"
          >
            <Portrait name={advisor.name} image={advisor.image} />

            <div className="min-w-0 flex-1">
              <h3 className="font-display text-h4 font-semibold text-forest-900">{advisor.name}</h3>
              {advisor.degrees && (
                <p className="mt-1 font-body text-caption text-forest-600">{advisor.degrees}</p>
              )}
              <p className="mt-2.5 font-body text-small font-medium leading-snug text-soil-800">
                {advisor.title}
              </p>
              <p className="mt-1 font-body text-small leading-snug text-soil-600">{advisor.role}</p>

              {(advisor.address || advisor.phone || advisor.mobile) && (
                <div className="mt-4 space-y-1 border-t border-line pt-3 font-body text-caption text-soil-500">
                  {advisor.address && <p>{advisor.address}</p>}
                  {advisor.phone && (
                    <p>
                      <a href={`tel:${advisor.phone.replace(/[^\d+]/g, '')}`} className="link-underline">
                        {advisor.phone}
                      </a>
                    </p>
                  )}
                  {advisor.mobile && (
                    <p>
                      <a href={`tel:${advisor.mobile.replace(/[^\d+]/g, '')}`} className="link-underline">
                        {advisor.mobile}
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
