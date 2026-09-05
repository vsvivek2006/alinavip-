import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import LocationsPage from '@/pages/LocationsPage';
import LocationPage from '@/pages/LocationPage';
import CategoryPage from '@/pages/CategoryPage';
import GalleryPage from '@/pages/GalleryPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { PrivacyPolicyPage, DisclaimerPage, TermsPage } from '@/pages/LegalPages';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/call-girls" element={<ServicesPage />} />
          <Route path="/escorts" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          
          {/* Direct category keyword route aliases */}
          <Route path="/russian-escorts" element={<Navigate to="/category/russian-call-girls" replace />} />
          <Route path="/vip-escorts" element={<Navigate to="/category/vip-call-girls" replace />} />
          <Route path="/model-escorts" element={<Navigate to="/category/model-escorts" replace />} />
          <Route path="/college-girls" element={<Navigate to="/category/college-girls" replace />} />
          <Route path="/housewife-escorts" element={<Navigate to="/category/housewife-escorts" replace />} />
          <Route path="/independent-escorts" element={<Navigate to="/category/independent-girls" replace />} />
          <Route path="/air-hostess-escorts" element={<Navigate to="/category/air-hostess" replace />} />
          <Route path="/celebrity-escorts" element={<Navigate to="/category/celebrity-escorts" replace />} />
          <Route path="/travel-escorts" element={<Navigate to="/category/travel-escorts" replace />} />
          <Route path="/vip-call-girls" element={<Navigate to="/category/vip-call-girls" replace />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
