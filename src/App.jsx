import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LeafTrail from './components/LeafTrail';
import HomePage from './pages/HomePage';
import RouteFallback from './components/ui/RouteFallback';

// The homepage ships in the initial bundle; every other route is split out so a
// first visit only downloads what it needs.
const AboutPage = lazy(() => import('./pages/AboutPage'));
const DirectorMessagePage = lazy(() => import('./pages/DirectorMessagePage'));
const AdvisoryCommitteePage = lazy(() => import('./pages/AdvisoryCommitteePage'));
const StaffDetailsPage = lazy(() => import('./pages/StaffDetailsPage'));
const BoardTrusteesPage = lazy(() => import('./pages/BoardTrusteesPage'));
const FocusAreasPage = lazy(() => import('./pages/FocusAreasPage'));
const ConsultancyPage = lazy(() => import('./pages/ConsultancyPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const PartnershipsPage = lazy(() => import('./pages/PartnershipsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const AnnualReport = lazy(() => import('./pages/AnnualReport'));
const FinancialReportsPage = lazy(() => import('./pages/FinancialReportsPage'));
const JoinUsPage = lazy(() => import('./pages/JoinUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <LeafTrail />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/director-message" element={<DirectorMessagePage />} />
            <Route path="/advisory-committee" element={<AdvisoryCommitteePage />} />
            <Route path="/staff-details" element={<StaffDetailsPage />} />
            <Route path="/board-trustees" element={<BoardTrusteesPage />} />
            <Route path="/focus-areas" element={<FocusAreasPage />} />
            <Route path="/consultancy" element={<ConsultancyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/annual-report" element={<AnnualReport />} />
            <Route path="/financial-reports" element={<FinancialReportsPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
