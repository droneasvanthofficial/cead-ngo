import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeUp } from '../lib/motion';

const trustees = [
  {
    name: 'C. Ganeche',
    designation: 'President',
    qualification: 'M.Sc. (Agri.)',
    occupation: 'Agri-Business',
    address: 'No. 72, Nallavadu Road, Thavalakuppam, Abisegapakkam Post, Pondicherry - 605007',
  },
  {
    name: 'N. Elilarasan',
    designation: 'Vice-President',
    qualification: 'B.E. (Mech)',
    occupation: 'HR Trainer',
    address: 'CCI Computer Education, 1/167, Sillarahalli and Post, Pappireddi Taluk, Dharmapuri Dt - 635303',
  },
  {
    name: 'J. Manimegalai',
    designation: 'Secretary',
    qualification: 'B.Sc.',
    occupation: 'Agri-Business',
    address: '23, Mariamman Koil St., Nathamedu, Melpattampakkam, Cuddalore Dt.',
  },
  {
    name: 'T.M. Anandane',
    designation: 'Joint-Secretary',
    qualification: 'B.Sc. (Agri.), PGDAM',
    occupation: 'Social Worker',
    address: 'No.5, Rice Mill St., Thirukkanur & Post, Pondicherry-4',
  },
  {
    name: 'R. Ramesh',
    designation: 'Treasurer',
    qualification: 'B.Com',
    occupation: 'Social Worker',
    address: '246, 3rd Main Road, Mahaveer Nagar, Lawspet, Pondicherry 605008',
  },
  {
    name: 'G. Sathiskumar',
    designation: 'Executive Member',
    qualification: 'B.B.M.',
    occupation: 'Agriculturist',
    address: '1/149, Reddiar Street, Malligaimedu and Post, Panruti Tk, Cuddalore Dt 607112',
  },
  {
    name: 'P. Arumugam',
    designation: 'Executive Member',
    qualification: 'B.Sc. (Agri.)',
    occupation: 'Agriculturist',
    address: 'No.26, Bank Street, Nettapakkam, Pondicherry',
  },
];

export default function BoardTrustees() {
  return (
    <Section id="board-trustees" tone="canvas" aria-labelledby="trustees-heading">
      <SectionHeader
        id="trustees-heading"
        eyebrow="Governance"
        title="Executive Committee"
        lead="The executive committee holds CEAD accountable for its programmes, its finances and its commitments to the communities it works with."
      />

      <RevealGroup as="ol" step={0.05} className="mt-12" role="list">
        {trustees.map((trustee, index) => (
          <RevealItem
            as="li"
            key={trustee.name}
            className="grid gap-4 border-t border-line py-7 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-body text-caption font-semibold tabular-nums text-forest-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-h4 font-semibold text-forest-900">{trustee.name}</h3>
                  <p className="mt-1.5 font-body text-caption font-semibold uppercase tracking-[0.1em] text-forest-600">
                    {trustee.designation}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="font-body text-small text-soil-700">{trustee.qualification}</p>
              <p className="mt-1 font-body text-caption text-soil-500">{trustee.occupation}</p>
            </div>

            <p className="font-body text-small leading-relaxed text-soil-600 lg:col-span-6">
              {trustee.address}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal variant={fadeUp} className="mt-12 rounded-xl bg-cream-dark p-6 sm:p-8">
        <h3 className="font-display text-h4 font-semibold text-forest-900">
          Governance documents
        </h3>
        <p className="mt-2.5 max-w-2xl font-body text-small leading-relaxed text-soil-600">
          CEAD&rsquo;s annual reports set out programme activity and expenditure for each year.
          Registration and statutory certificates are available from the office on request.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button to="/annual-report" variant="secondary" size="sm" arrow>Annual reports</Button>
          <Button to="/financial-reports" variant="secondary" size="sm">Financial reports</Button>
        </div>
      </Reveal>
    </Section>
  );
}
