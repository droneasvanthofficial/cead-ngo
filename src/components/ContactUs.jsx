import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import { EASE, fadeUp } from '../lib/motion';

const details = [
  {
    label: 'Phone',
    lines: [
      { text: '+91 98943 13435', href: 'tel:+919894313435' },
      { text: '+91 443 4293 2435', href: 'tel:+9144342932435' },
    ],
  },
  {
    label: 'Email & web',
    lines: [
      { text: 'ceadngo@gmail.com', href: 'mailto:ceadngo@gmail.com' },
      { text: 'www.cead.org.in' },
    ],
  },
  {
    label: 'Administration office',
    lines: [{ text: 'No. 42, Lenin Street, Kosspalaiyam, Puducherry — 605 013' }],
  },
  {
    label: 'Field office',
    lines: [{ text: 'No. 72, Nallavadu Road, Thavalakuppam, Ablishegapakkam Post, Puducherry — 605 007' }],
  },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please tell us your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (form.message.trim().length < 10) errors.message = 'Please write a little more so we can help.';
  return errors;
}

export default function ContactUs() {
  const reduced = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    const subject = encodeURIComponent(form.subject.trim() || `Message from ${form.name} via the CEAD website`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:ceadngo@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldClass = (key) =>
    `field-input ${errors[key] ? 'border-terracotta focus:border-terracotta focus:ring-terracotta/20' : ''}`;

  return (
    <Section id="contact" tone="canvas" aria-labelledby="contact-heading">
      <SectionHeader
        id="contact-heading"
        eyebrow="Get in touch"
        title="Talk to the CEAD office"
        lead="Farmer enquiries, training registrations, student visits and partnership proposals all reach the same team in Puducherry."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Details + map */}
        <div className="lg:col-span-5">
          <RevealGroup as="dl" className="space-y-0">
            {details.map((detail) => (
              <RevealItem key={detail.label} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                <dt className="font-body text-eyebrow font-semibold uppercase tracking-[0.16em] text-forest-600">
                  {detail.label}
                </dt>
                <dd className="mt-2 space-y-1">
                  {detail.lines.map((line) => (
                    <p key={line.text} className="font-body text-body-lg leading-relaxed text-soil-800">
                      {line.href ? (
                        <a href={line.href} className="link-underline">{line.text}</a>
                      ) : (
                        line.text
                      )}
                    </p>
                  ))}
                </dd>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal variant={fadeUp} className="mt-8 overflow-hidden rounded-xl border border-line">
            <iframe
              title="Map showing the CEAD office in Puducherry"
              src="https://www.google.com/maps?q=Centre+for+Environment+and+Agricultural+Development+Puducherry&output=embed"
              className="block h-[320px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        {/* Message form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            {sent ? (
              <motion.div
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                role="status"
                className="py-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-h3 font-semibold text-forest-900">
                  Your message is ready to send
                </h3>
                <p className="mt-3 max-w-md font-body text-small leading-relaxed text-soil-600">
                  We have opened your email app with the message addressed to CEAD. Send it and we
                  will reply to {form.email}. If nothing opened, write to{' '}
                  <a href="mailto:ceadngo@gmail.com" className="link-underline font-medium">ceadngo@gmail.com</a>{' '}
                  or call{' '}
                  <a href="tel:+919894313435" className="link-underline font-medium">+91 98943 13435</a>.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-6"
                  onClick={() => { setForm(initialForm); setSent(false); }}
                >
                  Write another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-display text-h3 font-semibold text-forest-900">Send us a message</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="field-label">
                      Name <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name" type="text" autoComplete="name" placeholder="Your full name"
                      value={form.name} onChange={set('name')} className={fieldClass('name')}
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name && <p id="contact-name-error" className="field-error" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="field-label">
                      Email <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email" type="email" autoComplete="email" placeholder="you@example.com"
                      value={form.email} onChange={set('email')} className={fieldClass('email')}
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    />
                    {errors.email && <p id="contact-email-error" className="field-error" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="field-label">Subject</label>
                  <input
                    id="contact-subject" type="text" placeholder="What is this about?"
                    value={form.subject} onChange={set('subject')} className="field-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="field-label">
                    Message <span className="text-terracotta" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message" rows={6} placeholder="Tell us how we can help."
                    value={form.message} onChange={set('message')}
                    className={`${fieldClass('message')} resize-y`}
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && <p id="contact-message-error" className="field-error" role="alert">{errors.message}</p>}
                </div>

                <div>
                  <Button type="submit" variant="primary" arrow className="w-full sm:w-auto">
                    Send message
                  </Button>
                  <p className="mt-3 font-body text-caption text-soil-500">
                    Opens your email app with the message filled in, addressed to ceadngo@gmail.com.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
