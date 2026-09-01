import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Modal from './ui/Modal';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { EASE, fadeUp } from '../lib/motion';
import { trainingCategories, trainingCourses } from '../data/trainingCourses';
import acabcImg from '../assets/images/real_gallery_10.jpg';

const flagships = [
  {
    id: 'acabc',
    sponsor: 'Sponsored by MANAGE, Hyderabad · Ministry of Agriculture & Farmers Welfare, Government of India',
    title: 'Agri Clinic & Agri Business Centres (AC & ABC)',
    summary:
      'A 45-day residential training programme preparing agriculture graduates to set up their own agri clinics and agri business ventures, conducted by CEAD at Thavalakuppam, Puducherry.',
    facts: [
      { label: 'Duration', value: '45 days' },
      { label: 'Sponsor', value: 'MANAGE, Government of India' },
      { label: 'Eligibility', value: 'Agriculture & allied graduates' },
      { label: 'Support', value: 'NABARD-linked credit & subsidy' },
    ],
  },
  {
    id: 'wedp',
    sponsor: 'NI-MSME & CEAD / VAPS sponsored',
    title: '45-day WEDP training programme',
    summary:
      'Women Entrepreneurship Development, covering soil health management, health management and roof top gardening for rural women and youth entrepreneurs.',
    facts: [
      { label: 'Cost', value: 'Free of cost' },
      { label: 'Qualification', value: 'Open to any' },
      { label: 'Batches', value: '16th & 26th monthly' },
      { label: 'Register by', value: 'Website, mail or phone' },
    ],
  },
];

const programmeSupport = [
  'Linkages with banks for loan facilities',
  'Government subsidies for availing loans',
  'Marketing support for finished products',
  'Certification on successful completion',
];

const initialRegistration = { name: '', phone: '', course: '', date: '16th of every month' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) errors.phone = 'Enter a phone number we can reach you on.';
  if (!form.course) errors.course = 'Choose the course you want to attend.';
  return errors;
}

/** Registration dialog for a training course. */
function RegistrationForm({ form, setForm, onSubmitted }) {
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`reg-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    const subject = encodeURIComponent(`Training registration — ${form.course}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nCourse: ${form.course}\nPreferred batch: ${form.date}`
    );
    window.location.href = `mailto:ceadngo@gmail.com?subject=${subject}&body=${body}`;
    onSubmitted();
  };

  const fieldClass = (key) =>
    `field-input ${errors[key] ? 'border-terracotta focus:border-terracotta focus:ring-terracotta/20' : ''}`;

  const describedBy = (key) => (errors[key] ? `reg-${key}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="font-body text-small leading-relaxed text-soil-600">
        Training is free of cost and open to any qualification. Batches run on the 16th and 26th of
        every month at CEAD&rsquo;s centre in Puducherry.
      </p>

      <div>
        <label htmlFor="reg-name" className="field-label">
          Full name <span className="text-terracotta" aria-hidden="true">*</span>
        </label>
        <input
          id="reg-name" type="text" autoComplete="name" placeholder="Your name"
          value={form.name} onChange={set('name')} className={fieldClass('name')}
          aria-invalid={errors.name ? 'true' : undefined} aria-describedby={describedBy('name')}
        />
        {errors.name && <p id="reg-name-error" className="field-error" role="alert">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="reg-phone" className="field-label">
          Phone number <span className="text-terracotta" aria-hidden="true">*</span>
        </label>
        <input
          id="reg-phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000"
          value={form.phone} onChange={set('phone')} className={fieldClass('phone')}
          aria-invalid={errors.phone ? 'true' : undefined} aria-describedby={describedBy('phone')}
        />
        {errors.phone && <p id="reg-phone-error" className="field-error" role="alert">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="reg-course" className="field-label">
          Course <span className="text-terracotta" aria-hidden="true">*</span>
        </label>
        <select
          id="reg-course" value={form.course} onChange={set('course')} className={fieldClass('course')}
          aria-invalid={errors.course ? 'true' : undefined} aria-describedby={describedBy('course')}
        >
          <option value="">Choose a training course</option>
          {trainingCourses.map((course) => (
            <option key={course.title} value={course.title}>{course.title}</option>
          ))}
        </select>
        {errors.course && <p id="reg-course-error" className="field-error" role="alert">{errors.course}</p>}
      </div>

      <div>
        <label htmlFor="reg-date" className="field-label">Preferred batch</label>
        <select id="reg-date" value={form.date} onChange={set('date')} className="field-input">
          <option value="16th of every month">16th of every month</option>
          <option value="26th of every month">26th of every month</option>
        </select>
      </div>

      <Button type="submit" variant="primary" arrow className="w-full">Send registration</Button>
      <p className="font-body text-caption text-soil-500">
        Opens your email app with the details filled in, addressed to ceadngo@gmail.com.
      </p>
    </form>
  );
}

/**
 * Consultancy & Training Centre. `compact` shows a curated six on the homepage;
 * the dedicated page shows the full catalogue with category filtering.
 */
export default function ConsultancyCentre({ compact = false }) {
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState('All');
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState(initialRegistration);

  const courses = useMemo(() => {
    if (compact) return trainingCourses.slice(0, 6);
    return filter === 'All' ? trainingCourses : trainingCourses.filter((c) => c.category === filter);
  }, [compact, filter]);

  const openRegistration = (course = '') => {
    setForm({ ...initialRegistration, course });
    setRegistered(false);
    setRegisterOpen(true);
  };

  return (
    <Section id="consultancy" tone="canvas" aria-labelledby="consultancy-heading">
      <SectionHeader
        id="consultancy-heading"
        eyebrow="Consultancy & training"
        title="Skills that turn a plot of land into a livelihood"
        lead="CEAD trains individuals to enhance their own capability through practical, field-tested skill development programmes."
      />

      {/* Flagship programmes */}
      <Reveal variant={fadeUp} className="mt-12 overflow-hidden rounded-2xl bg-forest-900">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={acabcImg}
              alt="A speaker opening CEAD’s 45-day Agri Clinic and Agri Business Centres training programme"
              className="h-56 w-full object-cover lg:h-full"
              loading="lazy"
            />
          </div>

          <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="eyebrow-on-dark">
              <span aria-hidden="true" className="inline-block h-px w-6 bg-gold/60" />
              Flagship programmes
            </p>

            <div className="mt-6 space-y-10">
              {flagships.map((programme) => (
                <div key={programme.id} className="border-t border-cream/15 pt-8 first:border-t-0 first:pt-0">
                  <h3 className="font-display text-h3 font-semibold text-cream">{programme.title}</h3>
                  <p className="mt-2 font-body text-caption text-gold-light">{programme.sponsor}</p>
                  <p className="mt-4 font-body text-small leading-relaxed text-cream/75">
                    {programme.summary}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {programme.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-cream/45">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 font-body text-small text-cream">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-0 border-t border-cream/15 pt-2 sm:grid-cols-2" role="list">
              {programmeSupport.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 py-2.5 font-body text-small text-cream/80"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <Button variant="accent" arrow className="mt-8" onClick={() => openRegistration()}>
              Register for training
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Course catalogue */}
      <div className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <h3 className="font-display text-h3 font-semibold text-forest-900">
            {compact ? 'Training programmes' : 'All training programmes'}
          </h3>
          {compact ? (
            <span className="font-body text-caption font-medium uppercase tracking-[0.12em] text-soil-500">
              {trainingCourses.length} available
            </span>
          ) : (
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter courses by category">
              {trainingCategories.map((category) => {
                const isActive = filter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={isActive}
                    className={`rounded-full px-3.5 py-1.5 font-body text-caption font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'bg-forest-700 text-cream'
                        : 'border border-line text-soil-600 hover:border-forest-300 hover:text-forest-800'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <RevealGroup
          key={filter}
          step={0.04}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <RevealItem key={course.title}>
              <article className="card-interactive group flex h-full flex-col p-6">
                <p className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600">
                  {course.category}
                </p>
                <h4 className="mt-3 font-display text-h4 font-semibold leading-snug text-forest-900">
                  {course.title}
                </h4>
                <p className="mt-2.5 flex-1 font-body text-small leading-relaxed text-soil-600">
                  {course.desc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-body text-caption text-soil-500">16th &amp; 26th monthly</span>
                  <button
                    type="button"
                    onClick={() => openRegistration(course.title)}
                    className="link-arrow text-caption"
                  >
                    Enrol
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h15m0 0l-6-6m6 6l-6 6" />
                    </svg>
                    <span className="sr-only"> in {course.title}</span>
                  </button>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {compact && (
          <Reveal variant={fadeUp} className="mt-10">
            <Button to="/consultancy" variant="secondary" arrow>
              View all {trainingCourses.length} training programmes
            </Button>
          </Reveal>
        )}

        {!compact && courses.length === 0 && (
          <p className="mt-10 font-body text-body-lg text-soil-500">
            No programmes in this category yet.
          </p>
        )}
      </div>

      <Modal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        title={registered ? 'Registration ready to send' : 'Register for training'}
        labelledBy="registration-title"
      >
        {registered ? (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            role="status"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="mt-5 font-body text-body-lg leading-relaxed text-soil-700">
              We have opened your email app with your registration for{' '}
              <strong className="font-semibold text-forest-800">{form.course}</strong> on the{' '}
              {form.date} batch. Send that message and our coordinator will call you on {form.phone}.
            </p>
            <p className="mt-3 font-body text-small text-soil-500">
              If nothing opened, email{' '}
              <a href="mailto:ceadngo@gmail.com" className="link-underline font-medium">ceadngo@gmail.com</a>{' '}
              or call <a href="tel:+919894313435" className="link-underline font-medium">+91 98943 13435</a>.
            </p>
            <Button variant="primary" className="mt-6 w-full" onClick={() => setRegisterOpen(false)}>
              Done
            </Button>
          </motion.div>
        ) : (
          <RegistrationForm form={form} setForm={setForm} onSubmitted={() => setRegistered(true)} />
        )}
      </Modal>
    </Section>
  );
}
