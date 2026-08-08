import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DirectorMessagePage from './pages/DirectorMessagePage';
import AdvisoryCommitteePage from './pages/AdvisoryCommitteePage';
import FocusAreasPage from './pages/FocusAreasPage';
import ConsultancyPage from './pages/ConsultancyPage';
import ProductsPage from './pages/ProductsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import GalleryPage from './pages/GalleryPage';
import MediaPage from './pages/MediaPage';
import AnnualReport from './pages/AnnualReport';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/director-message" element={<DirectorMessagePage />} />
          <Route path="/advisory-committee" element={<AdvisoryCommitteePage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/annual-report" element={<AnnualReport />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
