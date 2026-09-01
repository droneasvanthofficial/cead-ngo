import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { fadeUp } from '../lib/motion';

/**
 * Staff roster. Contact for every role goes through the single CEAD office line
 * and address rather than per-person addresses, which is how the organisation
 * actually routes enquiries.
 */
const staffMembers = [
  {
    name: 'Mr. S. Senthilkumar',
    designation: 'Executive Director',
    department: 'Administration',
    qualification: 'M.Sc. (Agri), MBA',
    experience: 'Over 20 years in agricultural development and NGO management',
  },
  {
    name: 'Mrs. R. Lakshmi',
    designation: 'Programme Coordinator',
    department: 'Programmes & Projects',
    qualification: 'M.A. (Social Work)',
    experience: '15+ years in community development and women empowerment programmes',
  },
  {
    name: 'Mr. V. Ramesh',
    designation: 'Agriculture Specialist',
    department: 'Agriculture & Environment',
    qualification: 'M.Sc. (Horticulture)',
    experience: '12 years of field experience in organic farming and sustainable agriculture',
  },
  {
    name: 'Mrs. K. Priya',
    designation: 'Finance & Accounts Officer',
    department: 'Finance & Administration',
    qualification: 'M.Com, CA (Inter)',
    experience: '10 years in financial management and NGO accounting',
  },
  {
    name: 'Mr. A. Murugan',
    designation: 'Field Officer',
    department: 'Field Operations',
    qualification: 'B.Sc. (Agriculture)',
    experience: '8 years in rural field operations and farmer training',
  },
  {
    name: 'Mrs. S. Kavitha',
    designation: 'Documentation & Media Officer',
    department: 'Communications',
    qualification: 'M.A. (Mass Communication)',
    experience: '7 years in media documentation and content creation for the development sector',
  },
];

/** Departments in roster order, so the grouping matches the list above. */
const departments = [...new Set(staffMembers.map((member) => member.department))];

export default function StaffDetails() {
  return (
    <Section id="staff-details" tone="canvas" aria-labelledby="staff-heading">
      <SectionHeader
        id="staff-heading"
        eyebrow="Our team"
        title="Staff details"
        lead="CEAD runs with full-time staff across administration, programmes, agriculture, finance, field operations and communications, supported by field offices."
      />

      <div className="mt-12 space-y-12">
        {departments.map((department) => (
          <div key={department} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <h3 className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600 lg:col-span-3">
              {department}
            </h3>

            <RevealGroup as="ul" step={0.05} className="lg:col-span-9" role="list">
              {staffMembers
                .filter((member) => member.department === department)
                .map((member) => (
                  <RevealItem
                    as="li"
                    key={member.name}
                    className="border-t border-line py-5 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h4 className="font-display text-h4 font-semibold text-forest-900">
                        {member.name}
                      </h4>
                      <p className="font-body text-small font-medium text-forest-700">
                        {member.designation}
                      </p>
                    </div>
                    <p className="mt-2 font-body text-small text-soil-700">{member.qualification}</p>
                    <p className="mt-1 font-body text-caption leading-relaxed text-soil-500">
                      {member.experience}
                    </p>
                  </RevealItem>
                ))}
            </RevealGroup>
          </div>
        ))}
      </div>

      <Reveal variant={fadeUp} className="mt-14 rounded-xl bg-cream-dark p-6 sm:p-8">
        <h3 className="font-display text-h4 font-semibold text-forest-900">Reaching the team</h3>
        <p className="mt-2.5 max-w-2xl font-body text-small leading-relaxed text-soil-600">
          All enquiries — training, programmes, partnerships or field visits — are routed through the
          CEAD administration office in Puducherry, which will direct you to the right staff member.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="tel:+919894313435" className="link-underline font-body text-body-lg font-medium text-forest-800">
            +91 98943 13435
          </a>
          <a href="mailto:ceadngo@gmail.com" className="link-underline font-body text-body-lg font-medium text-forest-800">
            ceadngo@gmail.com
          </a>
          <Button to="/contact" variant="secondary" size="sm" arrow>Contact page</Button>
        </div>
      </Reveal>
    </Section>
  );
}
