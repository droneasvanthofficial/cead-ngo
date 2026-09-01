import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll on navigation. When the destination carries a hash it scrolls
 * to that element instead, so in-page links from the navbar dropdowns land
 * where they promise. Sections carry `scroll-mt-*` so the sticky header does
 * not cover the heading they land on.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // `instant` overrides the global `scroll-behavior: smooth`, which would
    // otherwise animate the whole page on every route change.
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (!hash) {
      toTop();
      return undefined;
    }

    // Wait a frame so the incoming route has rendered its anchor.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else toTop();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
