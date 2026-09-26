import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import PageSkeleton from './components/PageSkeleton';
import NotFound from './pages/NotFound';

function AppLayout() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [pageTransitioning, setPageTransitioning] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Helper to map pathname to key
  const getPageKey = (pathname) => {
    if (pathname === '/' || pathname === '/home') return 'home';
    const key = pathname.replace(/^\//, '');
    if (['policies', 'privacy-policy', 'terms-and-conditions', 'refund-policy', 'service-delivery-policy'].includes(key)) {
      return key;
    }
    return ['about', 'services', 'projects', 'contact'].includes(key) ? key : 'home';
  };

  const currentPage = getPageKey(location.pathname);

  // Handle title and meta updates when current active page changes
  useEffect(() => {
    const pageData = {
      home: { title: 'Zone Digi Tech - One Stop Digital Solution', desc: 'A premium creative digital agency helping Indian startups and businesses build powerful digital presences.' },
      about: { title: 'About Us - Zone Digi Tech', desc: 'Learn more about Zone Digi Tech, our mission, values, and the creative team behind our digital solutions.' },
      services: { title: 'Services - Zone Digi Tech', desc: 'Explore our comprehensive digital services including UI/UX Design, Web Development, SEO, and Social Media.' },
      projects: { title: 'Projects - Zone Digi Tech', desc: 'View our portfolio of featured projects across web design, e-commerce, branding, and digital marketing.' },
      contact: { title: 'Contact Us - Zone Digi Tech', desc: 'Get in touch with Zone Digi Tech to discuss your next big digital project. We would love to hear from you.' },
      policies: { title: 'Policies & Terms - Zone Digi Tech', desc: 'Review official policies, privacy guidelines, refund rules, and terms of service of Zone Digi Tech.' },
      'privacy-policy': { title: 'Privacy Policy - Zone Digi Tech', desc: 'Learn how Zone Digi Tech collects, uses, and safeguards client and visitor personal data.' },
      'terms-and-conditions': { title: 'Terms & Conditions - Zone Digi Tech', desc: 'Official terms, project scope, client responsibilities, and licensing agreements at Zone Digi Tech.' },
      'refund-policy': { title: 'Cancellation & Refund Policy - Zone Digi Tech', desc: 'Cancellation criteria, refund terms, and support guidelines for Zone Digi Tech services.' },
      'service-delivery-policy': { title: 'Service Delivery Policy - Zone Digi Tech', desc: 'Delivery procedures for on-location services, digital deliverables, and timelines at Zone Digi Tech.' },
    };

    const currentPageData = pageData[currentPage] || pageData.home;
    document.title = currentPageData.title;

    let metaTitle = document.querySelector('meta[name="title"]');
    if (!metaTitle) {
      metaTitle = document.createElement('meta');
      metaTitle.setAttribute('name', 'title');
      document.head.appendChild(metaTitle);
    }
    metaTitle.setAttribute('content', currentPageData.title);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentPageData.title);
    }

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentPageData.title);
    }

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentPageData.desc);
  }, [currentPage]);

  // Handle initial loading - show skeleton on first mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle page transition when the location pathname changes
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setPageTransitioning(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setPageTransitioning(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-[#0a0a0f] transition-colors duration-300">
      <Navbar currentPage={currentPage} />
      <main className="flex-1">
        {initialLoading || pageTransitioning ? (
          <PageSkeleton page={getPageKey(location.pathname)} />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="policies" element={<Policies />} />
            <Route path="privacy-policy" element={<Policies />} />
            <Route path="terms-and-conditions" element={<Policies />} />
            <Route path="refund-policy" element={<Policies />} />
            <Route path="service-delivery-policy" element={<Policies />} />
            {/* 404 — unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
