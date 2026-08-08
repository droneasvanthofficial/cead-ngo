import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const contactCards = [
  {
    id: 'phone',
    label: 'Phone',
    color: 'bg-forest-800',
    iconBg: 'bg-gold/20',
    icon: (
      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    lines: ['+91 98943 13435', '+91 443 4293 2435'],
  },
  {
    id: 'admin',
    label: 'Administration Office',
    color: 'bg-leaf',
    iconBg: 'bg-white/20',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
      </svg>
    ),
    lines: ['No. 42, Lenin Street,', 'Kosspalaiyam,', 'Puducherry - 605 013'],
  },
  {
    id: 'field',
    label: 'Field Office',
    color: 'bg-terracotta',
    iconBg: 'bg-white/20',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    lines: ['No. 72, Nallavadu Road,', 'Thavalakuppam, Ablishegapakkam Post,', 'Puducherry - 605 007'],
  },
  {
    id: 'email',
    label: 'E-mail & Web',
    color: 'bg-soil-600',
    iconBg: 'bg-white/20',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    lines: ['www.cead.org.in', 'ceadngo@gmail.com'],
    links: [null, 'mailto:ceadngo@gmail.com'],
  },
];

export default function ContactUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', replyTo: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client with prefilled details
    const subject = encodeURIComponent(`Message from ${form.name} via CEAD Website`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReply To: ${form.replyTo}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:ceadngo@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5efe4] via-[#ebe3d3] to-[#f5efe4] bg-grain-texture relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Ambient blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-leaf/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-forest-800 text-gold-light text-xs font-body font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm border border-forest-700">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="section-heading text-forest-900">Contact Us</h2>
          <p className="mt-3 text-soil-700 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            You can contact us through Phone, Mobile, Email and Website. We'd love to hear from you.
          </p>
        </div>

        {/* Contact Address Cards */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {contactCards.map((card) => (
            <div
              key={card.id}
              className={`${card.color} rounded-2xl p-5 text-cream shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                {card.icon}
              </div>
              <h3 className="font-body font-bold text-sm uppercase tracking-wider text-cream/80 mb-2">
                {card.label}
              </h3>
              <div className="space-y-0.5">
                {card.lines.map((line, i) =>
                  card.links?.[i] ? (
                    <a
                      key={i}
                      href={card.links[i]}
                      className="block font-body text-sm text-cream hover:text-gold transition-colors leading-snug"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={i} className="font-body text-sm text-cream/90 leading-snug">
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map + Form grid */}
        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-card-hover border border-forest-200/70 bg-white">
            <div className="bg-forest-800 px-5 py-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-xs font-semibold text-cream uppercase tracking-widest">Find Us On Map</span>
            </div>
            <iframe
              title="CEAD Office Location — Thavalakuppam, Puducherry"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1!2d79.8!3d11.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361dbef3b6c3b%3A0xa82ea5e7b50e64a7!2sCentre%20for%20Environment%20and%20Agricultural%20Development!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full"
              style={{ height: '360px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-[#faf6f0] rounded-2xl border border-forest-200/70 shadow-sm overflow-hidden">
            <div className="bg-forest-800 px-5 py-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-xs font-semibold text-cream uppercase tracking-widest">Send Us a Message</span>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-forest-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-forest-900 text-xl">Message Sent!</h3>
                  <p className="font-body text-soil-600 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', replyTo: '', message: '' }); }}
                    className="text-xs font-body font-semibold text-forest-700 underline hover:text-forest-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs font-body font-bold text-soil-700 mb-1" htmlFor="contact-name">
                      Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-forest-200/80 rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 placeholder-soil-400 focus:ring-2 focus:ring-forest-500 focus:outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-soil-700 mb-1" htmlFor="contact-email">
                      Email <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-forest-200/80 rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 placeholder-soil-400 focus:ring-2 focus:ring-forest-500 focus:outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-soil-700 mb-1" htmlFor="contact-replyto">
                      Reply To
                    </label>
                    <input
                      id="contact-replyto"
                      type="text"
                      placeholder="Alternative contact (optional)"
                      value={form.replyTo}
                      onChange={(e) => setForm({ ...form, replyTo: e.target.value })}
                      className="w-full bg-white border border-forest-200/80 rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 placeholder-soil-400 focus:ring-2 focus:ring-forest-500 focus:outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-bold text-soil-700 mb-1" htmlFor="contact-message">
                      Message <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Type your message or feedback here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-forest-200/80 rounded-xl px-4 py-2.5 text-sm font-body text-forest-900 placeholder-soil-400 focus:ring-2 focus:ring-forest-500 focus:outline-none transition-shadow resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forest-800 hover:bg-forest-700 text-cream font-body font-bold text-sm uppercase tracking-wider py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
