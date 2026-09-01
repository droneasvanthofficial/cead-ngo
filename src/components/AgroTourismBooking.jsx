import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';
import { EASE } from '../lib/motion';

// The courses CEAD actually runs, taken from the Consultancy & Training Centre.
const courses = [
  'Organic Farming',
  'Precision Farming',
  'Integrated Farming System',
  'Hi-Tech Horticulture',
  'Vermi Composting',
  'Vermi Wash Production',
  'Mushroom Cultivation',
  'Bio-Fertilisers Production & Usage',
  'Bio-Pesticides Production & Usage',
  'Community Nursery Development',
  'Roof Top Garden',
  'Organic Kitchen Garden',
  'Soil Testing — Importance and Methods',
  'Farm Visit & Agro Tour (general)',
];

const steps = [
  'Choose the tour or training programme you are interested in.',
  'Fill in your details and submit the request below.',
  'Our coordinator confirms your date and itinerary by phone.',
  'Visit the farm in Puducherry for a hands-on session.',
];

const initialForm = { fullName: '', phone: '', email: '', city: '', education: '', course: '' };

/** Client-side validation. Returns a field → message map; empty means valid. */
function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = 'Please enter your name.';
  if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) errors.phone = 'Enter a phone number we can reach you on.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (!form.course) errors.course = 'Select the programme you would like to attend.';
  return errors;
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-terracotta" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Agro-tourism appointment request. Submitting hands the enquiry to the visitor's
 * mail client addressed to CEAD — the site has no backend, so this keeps the
 * request honest rather than pretending it was filed somewhere.
 */
export default function AgroTourismBooking() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`agro-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    const subject = encodeURIComponent(`Agro Tourism booking request — ${form.course}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.fullName}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        form.city && `City: ${form.city}`,
        form.education && `Education: ${form.education}`,
        `Programme: ${form.course}`,
      ].filter(Boolean).join('\n')
    );
    window.location.href = `mailto:ceadngo@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputProps = (key) => ({
    id: `agro-${key}`,
    value: form[key],
    onChange: set(key),
    className: `field-input ${errors[key] ? 'border-terracotta focus:border-terracotta focus:ring-terracotta/20' : ''}`,
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `agro-${key}-error` : undefined,
  });

  return (
    <div className="grid gap-10 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8 lg:grid-cols-12 lg:gap-14 lg:p-10">
      {/* What the visit is */}
      <div className="lg:col-span-5">
        <p className="eyebrow">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-forest-400" />
          CEAD Agro Tourism
        </p>
        <h3 className="mt-4 font-display text-h2 font-semibold text-forest-900">
          Book a farm visit
        </h3>
        <p className="mt-4 font-body text-body-lg leading-relaxed text-soil-600">
          Hands-on farm visits in Puducherry: organic cultivation, eco-living, vermicompost
          demonstrations and village cultural traditions, guided by CEAD&rsquo;s agricultural staff.
        </p>

        <ol className="mt-8 space-y-0" role="list">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-4 border-t border-line py-4 first:border-t-0 first:pt-0">
              <span
                aria-hidden="true"
                className="shrink-0 font-body text-caption font-semibold tabular-nums text-forest-500"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-body text-small leading-relaxed text-soil-700">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-center justify-between gap-4 rounded-xl bg-cream-dark p-5">
          <div>
            <p className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-soil-500">
              Direct helpline
            </p>
            <a href="tel:+919894313435" className="link-underline mt-1.5 inline-block font-display text-h4 font-semibold text-forest-900">
              +91 98943 13435
            </a>
          </div>
        </div>
      </div>

      {/* Request form */}
      <div className="lg:col-span-7">
        {submitted ? (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex h-full flex-col items-start justify-center rounded-xl bg-forest-50 p-8"
            role="status"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h4 className="mt-5 font-display text-h3 font-semibold text-forest-900">
              Your request is ready to send
            </h4>
            <p className="mt-3 max-w-md font-body text-small leading-relaxed text-soil-600">
              We have opened your email app with the details for{' '}
              <strong className="font-semibold text-forest-800">{form.course}</strong>. Send that
              message and our coordinator will call you on {form.phone} to confirm a date. If nothing
              opened, email us directly at{' '}
              <a href="mailto:ceadngo@gmail.com" className="link-underline font-medium">ceadngo@gmail.com</a>.
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-6"
              onClick={() => { setForm(initialForm); setSubmitted(false); }}
            >
              Make another request
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <h4 className="font-display text-h3 font-semibold text-forest-900">
              Request an appointment
            </h4>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="agro-fullName" label="Full name" required error={errors.fullName}>
                <input type="text" autoComplete="name" placeholder="Your name" {...inputProps('fullName')} />
              </Field>
              <Field id="agro-phone" label="Phone" required error={errors.phone}>
                <input type="tel" autoComplete="tel" placeholder="+91 00000 00000" {...inputProps('phone')} />
              </Field>
            </div>

            <Field id="agro-email" label="Email" required error={errors.email}>
              <input type="email" autoComplete="email" placeholder="you@example.com" {...inputProps('email')} />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="agro-city" label="City">
                <input type="text" autoComplete="address-level2" placeholder="Your city" {...inputProps('city')} />
              </Field>
              <Field id="agro-education" label="Education">
                <input type="text" placeholder="Highest qualification" {...inputProps('education')} />
              </Field>
            </div>

            <Field id="agro-course" label="Programme" required error={errors.course}>
              <select {...inputProps('course')}>
                <option value="">Select a programme</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </Field>

            <div className="pt-1">
              <Button type="submit" variant="primary" arrow className="w-full sm:w-auto">
                Send request
              </Button>
              <p className="mt-3 font-body text-caption text-soil-500">
                Opens your email app with the details filled in, addressed to ceadngo@gmail.com.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
