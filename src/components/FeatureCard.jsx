import { useInView } from 'react-intersection-observer';

export default function FeatureCard({ icon, title, items, accentColor = 'forest', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const accentClasses = {
    forest: {
      header: 'bg-forest-700',
      icon: 'bg-forest-600 text-cream',
      badge: 'bg-forest-100 text-forest-700',
      dot: 'bg-leaf',
    },
    soil: {
      header: 'bg-soil-700',
      icon: 'bg-soil-600 text-cream',
      badge: 'bg-soil-100 text-soil-700',
      dot: 'bg-terracotta',
    },
    gold: {
      header: 'bg-forest-800',
      icon: 'bg-gold/20 text-gold-dark',
      badge: 'bg-gold-pale text-gold-dark',
      dot: 'bg-gold',
    },
    leaf: {
      header: 'bg-leaf-dark',
      icon: 'bg-leaf/20 text-leaf-dark',
      badge: 'bg-leaf-pale text-leaf-dark',
      dot: 'bg-leaf',
    },
  };

  const colors = accentClasses[accentColor] || accentClasses.forest;

  return (
    <article
      ref={ref}
      className={`card-base overflow-hidden flex flex-col transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`${title} focus area`}
    >
      {/* Card header */}
      <div className={`${colors.header} p-5 flex items-center gap-4`}>
        <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0 shadow-sm`}>
          {icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-cream leading-tight">{title}</h3>
      </div>

      {/* Card body */}
      <div className="p-5 flex-1">
        <ul className="space-y-2.5" role="list">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 font-body text-sm text-soil-700 group"
            >
              <span className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-150`} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Card footer */}
      <div className={`px-5 pb-5`}>
        <span className={`inline-block text-xs font-body font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${colors.badge}`}>
          {items.length} services
        </span>
      </div>
    </article>
  );
}
