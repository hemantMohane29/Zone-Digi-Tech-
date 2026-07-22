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
import Preloader from './components/Preloader';
import PageSkeleton from './components/PageSkeleton';

function AppLayout({ loading, setLoading }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [pageTransitioning, setPageTransitioning] = useState(false);

  // Helper to map pathname to key
  const getPageKey = (pathname) => {
    if (pathname === '/' || pathname === '/home') return 'home';
    const key = pathname.replace(/^\//, '');
    return ['about', 'services', 'projects', 'contact'].includes(key) ? key : 'home';
  };

  const currentPage = getPageKey(location.pathname);

  // Handle title and meta updates when current active page changes
  useEffect(() => {
    const pageData = {
      home: { title: 'Zone Digi Tech — One Stop Digital Solution', desc: 'A premium creative digital agency helping Indian startups and businesses build powerful digital presences.' },
      about: { title: 'About Us — Zone Digi Tech', desc: 'Learn more about Zone Digi Tech, our mission, values, and the creative team behind our digital solutions.' },
      services: { title: 'Services — Zone Digi Tech', desc: 'Explore our comprehensive digital services including UI/UX Design, Web Development, SEO, and Social Media.' },
      projects: { title: 'Projects — Zone Digi Tech', desc: 'View our portfolio of featured projects across web design, e-commerce, branding, and digital marketing.' },
      contact: { title: 'Contact Us — Zone Digi Tech', desc: 'Get in touch with Zone Digi Tech to discuss your next big digital project. We would love to hear from you.' },
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

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentPageData.desc);
  }, [currentPage]);

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
      {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}

      <Navbar currentPage={currentPage} />
      <main className="flex-1">
        {pageTransitioning ? (
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
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout loading={loading} setLoading={setLoading} />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            {/* Fallback to Home page if route is unmatched */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
