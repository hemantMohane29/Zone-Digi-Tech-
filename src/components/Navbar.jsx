import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const languages = [
  { code: 'en',    label: 'English',    short: 'EN' },
  { code: 'hi',    label: 'हिंदी',       short: 'HI' },
  { code: 'mr',    label: 'मराठी',       short: 'MR' },
  { code: 'bn',    label: 'বাংলা',       short: 'BN' },
  { code: 'te',    label: 'తెలుగు',      short: 'TE' },
  { code: 'ta',    label: 'தமிழ்',       short: 'TA' },
  { code: 'gu',    label: 'ગુજરાતી',     short: 'GU' },
  { code: 'kn',    label: 'ಕನ್ನಡ',       short: 'KN' },
  { code: 'pa',    label: 'ਪੰਜਾਬੀ',      short: 'PA' },
  { code: 'ar',    label: 'العربية',     short: 'AR' },
  { code: 'fr',    label: 'Français',   short: 'FR' },
  { code: 'de',    label: 'Deutsch',    short: 'DE' },
  { code: 'es',    label: 'Español',    short: 'ES' },
  { code: 'pt',    label: 'Português',  short: 'PT' },
  { code: 'zh-CN', label: '中文',         short: 'ZH' },
  { code: 'ja',    label: '日本語',       short: 'JA' },
  { code: 'ko',    label: '한국어',       short: 'KO' },
  { code: 'ru',    label: 'Русский',    short: 'RU' },
];

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );
      };
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.onerror = () => console.warn('Google Translate failed to load.');
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    setSelected(lang);
    setOpen(false);
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Trigger — compact pill matching CloudNexus style */}
      <button
        onClick={() => setOpen(!open)}
        className="h-8 px-3 rounded-full flex items-center gap-1 text-xs font-semibold tracking-wider border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-400 hover:text-stone-900 dark:hover:text-white bg-transparent transition-all duration-200"
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {selected.short}
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-[calc(100%+8px)] z-50 w-48 bg-white dark:bg-[#111118] border border-stone-200 dark:border-stone-700/80 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/50 overflow-hidden transition-all duration-200 origin-top-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="listbox"
      >
        <div className="px-3 pt-3 pb-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
            Language
          </p>
        </div>
        <div className="pb-2 max-h-64 overflow-y-auto notranslate" style={{ scrollbarWidth: 'thin' }}>
          {languages.map((lang) => {
            const isActive = selected.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                role="option"
                aria-selected={isActive}
                className={`w-full text-left flex items-center justify-between px-3 py-2 mx-1 rounded-lg text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800/60'
                }`}
                style={{ width: 'calc(100% - 8px)' }}
              >
                <span>{lang.label}</span>
                <span className={`text-[10px] font-bold tracking-wider ${isActive ? 'text-orange-500' : 'text-stone-400 dark:text-stone-500'}`}>
                  {lang.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ currentPage }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getPageKey = (path) => {
    if (path === '/') return 'home';
    return path.replace('/', '');
  };

  const logoSrc = theme === 'dark' ? '/Zone digi tecch logo white.png' : '/Zone dii tech logo black.png';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-stone-200/60 dark:border-stone-800/60 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group shrink-0"
          >
            <div className="flex h-10 w-[130px] xs:w-[155px] sm:h-12 sm:w-[190px] md:h-14 md:w-[220px] xl:h-16 xl:w-[260px]">
              <img
                src={logoSrc}
                alt="Zone Digi Tech logo"
                className="h-full w-full object-contain object-left transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === getPageKey(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-saffron-600 dark:text-saffron-400'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #e07b00, #f9b84a)' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageSelector />
            <button
              onClick={toggleTheme}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              className="btn-primary h-10 sm:h-11 md:h-12 px-4 sm:px-6 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight size={14} className="relative z-10" />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 shrink-0"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-[#0d0d18] shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === getPageKey(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
                  }`}
                  style={isActive ? { background: 'linear-gradient(135deg, #e07b00, #f9b84a)' } : {}}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full btn-primary justify-center"
              >
                <span>Get Started</span>
              </Link>
            </div>
            <div className="mt-3 pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-center">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
