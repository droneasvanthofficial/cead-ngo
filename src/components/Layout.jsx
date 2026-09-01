import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { EASE } from '../lib/motion';

export default function Layout() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  // The route transition runs on navigation only. Animating the first render
  // would hide the whole page behind an opacity-0 element until JS finished —
  // a bad trade for a 0.3s fade, and it would blank the page entirely if the
  // animation never ran.
  const isFirstRender = useRef(true);
  useEffect(() => { isFirstRender.current = false; }, []);
  const animateEntry = !isFirstRender.current && !reduced;

  return (
    <>
      <Navbar />
      <motion.main
        id="main"
        key={pathname}
        initial={animateEntry ? { opacity: 0, y: 8 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
}
