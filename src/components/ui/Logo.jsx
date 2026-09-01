import { Link } from 'react-router-dom';
import markSrc from '../../assets/cead-mark.png';

/**
 * CEAD brand lockup — the official crest at its original proportions beside a
 * typographic wordmark. The crest is never recoloured, cropped or stretched.
 */
export default function Logo({
  tone = 'light',
  size = 'base',
  to = '/',
  taglineDisplay = 'block',
  className = '',
}) {
  const dark = tone === 'dark';
  const dims = {
    sm: {
      mark: 'h-[58px] w-[58px] sm:h-[64px] sm:w-[64px]',
      name: 'text-[13px] sm:text-[14.5px] md:text-[16px]',
      sub: 'text-[10.5px] sm:text-[12px]',
    },
    base: {
      mark: 'h-[72px] w-[72px] sm:h-[84px] sm:w-[84px] md:h-[96px] md:w-[96px]',
      name: 'text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21.5px]',
      sub: 'text-[11.5px] sm:text-[13px] md:text-[14px]',
    },
    lg: {
      mark: 'h-[96px] w-[96px] sm:h-[108px] sm:w-[108px] md:h-[120px] md:w-[120px]',
      name: 'text-base sm:text-lg md:text-xl lg:text-2xl',
      sub: 'text-sm sm:text-[15px]',
    },
    xl: {
      mark: 'h-[120px] w-[120px] sm:h-[140px] sm:w-[140px]',
      name: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
      sub: 'text-base sm:text-lg',
    },
  }[size] || {
    mark: 'h-[72px] w-[72px] sm:h-[84px] sm:w-[84px] md:h-[96px] md:w-[96px]',
    name: 'text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21.5px]',
    sub: 'text-[11.5px] sm:text-[13px] md:text-[14px]',
  };

  const inner = (
    <>
      <img
        src={markSrc}
        alt=""
        width={256}
        height={256}
        className={`${dims.mark} shrink-0 object-contain transition-transform duration-300 ease-smooth motion-safe:group-hover:scale-[1.04]`}
      />
      <span className="min-w-0 leading-tight">
        <span
          className={`block font-display font-extrabold tracking-tight whitespace-nowrap ${dims.name} ${
            dark ? 'text-cream' : 'text-[#8b1d24]'
          }`}
        >
          Centre for Environment and Agriculture Development
        </span>
        <span
          className={`mt-0.5 block font-body whitespace-nowrap ${taglineDisplay} ${dims.sub} ${
            dark ? 'text-cream/80' : 'text-[#14532d]'
          }`}
        >
          <span className={`font-semibold ${dark ? 'text-cream/90' : 'text-[#14532d]'}`}>
            சுற்றுச்சூழல் மற்றும் வேளாண் அபிவிருத்தி மையம்
          </span>
        </span>
      </span>
    </>
  );

  const classes = `group flex items-center gap-3 sm:gap-4 ${className}`;

  return to ? (
    <Link to={to} className={classes} aria-label="Centre for Environment and Agriculture Development (CEAD) home">
      {inner}
    </Link>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
