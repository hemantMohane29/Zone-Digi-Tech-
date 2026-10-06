import { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowRight, ExternalLink, MessageCircle, Globe, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';
import { useNavigate } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';

// Import client & project images via Vite so they get hashed into the build for production
import clientFoodShood from '../assets/clients/client_food_shood.jpg';
import clientMudassir from '../assets/clients/client_mudassir.png';
import clientYousuf from '../assets/clients/client_yousuf.png';
import clientVadaas from '../assets/clients/client_vadaas.png';
import clientDharmendra from '../assets/clients/client_dharmendra.png';
import projectSelectionImg from '../assets/Project_Selection.png';
import iservicePortalImg from '../assets/iservice_portal.jpg';

const categoryFilters = [
  { id: 'All', label: 'All Projects' },
  { id: 'Web Design', label: 'Web Design' },
  { id: 'E-Commerce', label: 'E-Commerce' },
  { id: 'Video + Photos', label: 'Videos & Photos' },
  { id: 'Social Media Handle', label: 'Social Media' },
  { id: 'UI & UX design', label: 'UI/UX Design' },
  { id: 'Graphics designing', label: 'Graphics Design' },
  { id: 'SEO', label: 'SEO' },
  { id: 'Business growth Consulting', label: 'Growth Consulting' }
];

const projects = [
  // ── WEB DESIGN ──
  {
    title: 'Netligent Solutions',
    category: 'Web Design',
    client: 'Netligent Tech',
    desc: 'Modern enterprise digital agency platform with high-performance responsive architecture, modern typography, and dark UI aesthetic.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Next.js', 'Tailwind', 'Web Architecture'],
    result: '3.5x boost in user engagement',
    link: 'https://www.netligent.com/',
    featured: true,
  },
  {
    title: 'Squarespace Platform',
    category: 'Web Design',
    client: 'Creative Studio Showcase',
    desc: 'Sleek portfolio & business website showcase featuring modern layout hierarchy, dynamic animations, and high conversion design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Design', 'CMS', 'Responsive', 'SEO'],
    result: 'World-class design standards',
    link: 'https://www.squarespace.com/',
    featured: true,
  },
  {
    title: 'Flown Developer Portal',
    category: 'Web Design',
    client: 'Flown Tech',
    desc: 'Full-stack software developer portal and technical showcase platform built for software engineering agency.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Full Stack', 'React', 'JavaScript', 'Node.js'],
    result: 'High-speed 99/100 Lighthouse score',
    link: 'https://flowndeveloper.com/',
    featured: false,
  },

  // ── E-COMMERCE ──
  {
    title: 'PhoneWale Store',
    category: 'E-Commerce',
    client: 'PhoneWale Electronics',
    desc: 'Premium mobile devices & accessories e-commerce store with product catalog, online payment gateway, and pin verification.',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-Commerce', 'Payment Gateway', 'React', 'Product Catalog'],
    result: 'Over 10,000+ monthly orders',
    link: 'https://pin.phonewale.store/',
    featured: true,
  },
  {
    title: 'iService India Portal',
    category: 'E-Commerce',
    client: 'iService India',
    desc: 'Multi-category online repair & service booking e-commerce portal with real-time tracking, Razorpay payment, and customer dashboard.',
    image: iservicePortalImg,
    tags: ['E-Commerce', 'Service Booking', 'Razorpay', 'Live Tracking'],
    result: '240% increase in online bookings',
    link: 'https://www.iserviceindia.in/',
    featured: true,
  },

  // ── VIDEO + PHOTOS ──
  {
    title: 'Cinematic Brand Film & Shoot',
    category: 'Video + Photos',
    client: 'Zone Creative Studios',
    desc: 'Commercial video shoot production with 4K color grading, motion graphics, sound design, and studio product photo shoot.',
    image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Video Shoot', 'Photo Editing', 'Color Grading', '4K Shoot'],
    result: '1M+ viral social views',
    link: 'https://wa.me/917974942457?text=Hi!%20I%20want%20to%20inquire%20about%20Video%20%2B%20Photos%20Services.',
    featured: false,
  },
  {
    title: 'Commercial Product Photography',
    category: 'Video + Photos',
    client: 'D2C Lifestyle Brand',
    desc: 'Professional studio & location photography for e-commerce products, headshots, background removal, and batch photo editing.',
    image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Product Photography', 'Batch Edit', 'Studio Shoot'],
    result: 'High-res D2C brand showcase',
    link: 'https://wa.me/917974942457?text=Hi!%20I%20want%20to%20inquire%20about%20Photo%20Shoots.',
    featured: false,
  },

  // ── SOCIAL MEDIA HANDLE ──
  {
    title: 'Brand Social Media Growth',
    category: 'Social Media Handle',
    client: 'Zone Digital Clients',
    desc: 'Complete Instagram & Facebook page management — monthly content calendar, daily creative posts, reels editing, and story engagement.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Instagram', 'Facebook', 'Reels', 'Social Media'],
    result: '5x follower growth in 6 months',
    link: 'https://wa.me/917974942457?text=Hi!%20I%20want%20to%20inquire%20about%20Social%20Media%20Handling.',
    featured: false,
  },
  {
    title: 'Omnichannel Handle Management',
    category: 'Social Media Handle',
    client: 'Tech & Lifestyle Brands',
    desc: 'Multi-platform content strategy across Instagram, Facebook, YouTube, and LinkedIn with monthly analytics & community management.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['YouTube', 'LinkedIn', 'Analytics', 'Strategy'],
    result: '280% organic engagement growth',
    link: 'https://wa.me/917974942457?text=Hi!%20I%20want%20to%20inquire%20about%20Social%20Media%20Management.',
    featured: false,
  },

  // ── UI & UX DESIGN ──
  {
    title: 'Netligent UX Design System',
    category: 'UI & UX design',
    client: 'Netligent',
    desc: 'Comprehensive user research, interactive wireframing, high-fidelity Figma prototypes, and complete UI component design system.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Figma', 'UX Research', 'Wireframing', 'Design System'],
    result: 'Pixel-perfect user experience',
    link: 'https://www.netligent.com/',
    featured: true,
  },
  {
    title: 'Squarespace Design Framework',
    category: 'UI & UX design',
    client: 'Squarespace Platform',
    desc: 'Modern layout hierarchy, smooth micro-interactions, responsive wireframes, and conversion-optimized UI/UX architecture.',
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UI Design', 'Figma', 'Prototyping', 'User Flows'],
    result: 'Intuitive interface design',
    link: 'https://www.squarespace.com/',
    featured: false,
  },
  {
    title: 'Flown Developer UI Suite',
    category: 'UI & UX design',
    client: 'Flown Tech',
    desc: 'Dark-mode UI suite with custom iconography, dashboard wireframing, interactive prototyping, and developer handoff documentation.',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Dark UI', 'Dashboard', 'Prototype', 'Figma + XD'],
    result: 'Award-worthy aesthetic',
    link: 'https://flowndeveloper.com/',
    featured: false,
  },

  // ── GRAPHICS DESIGNING ──
  {
    title: 'Brand Identity & Visual Suite',
    category: 'Graphics designing',
    client: 'Zone Creative Agency',
    desc: 'Vector logo design, 3D menu card, poster design, business standees, flags, and complete brand identity collateral.',
    tags: ['Logo Design', '3D Menu', 'Posters', 'Standees'],
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: 'Complete brand transformation',
    link: 'https://wa.me/917974942457?text=Hi!%20I%20want%20to%20inquire%20about%20Graphics%20Designing.',
    featured: false,
  },

  // ── SEO ──
  {
    title: 'Search Ranking Overhaul',
    category: 'SEO',
    client: 'Organic Growth Clients',
    desc: 'Technical On-Page SEO audit, Google Search Console, Meta Keyword strategy, Google Analytics, and 100+ Off-Page backlinks.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['On-Page SEO', 'Search Console', 'Off-Page SEO', 'Backlinks'],
    result: 'Top 3 Google Search Rankings',
    link: 'https://wa.me/917974942457?text=Hi!%20I%20want%20to%20inquire%20about%20SEO%20Services.',
    featured: false,
  },

  // ── BUSINESS GROWTH CONSULTING ──
  {
    title: 'Netligent Growth Strategy',
    category: 'Business growth Consulting',
    client: 'Netligent Solutions',
    desc: 'Strategic consultation, growth ideas discussion, conversion rate optimization (CRO), and advanced digital expansion roadmap.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Growth Strategy', 'Digital Transformation', 'CRO', 'Consulting'],
    result: 'Accelerated revenue scaling',
    link: 'https://www.netligent.com/',
    featured: true,
  },
];

const testimonials = [
  {
    name: 'Food Shood',
    company: 'Food Shood Restaurant & Café',
    image: clientFoodShood,
    text: 'Zone Digi Tech delivered exceptional branding, digital menu cards, social media management, and online ordering system for Food Shood. Our footfall and online orders grew massively!',
    rating: 5,
  },
  {
    name: 'Mr. Mudassir Ahmed Hashmi',
    company: 'Netligent Tech',
    image: clientMudassir,
    text: 'Zone Digi Tech transformed our enterprise platform with exceptional speed and precision. Their UI/UX vision and technical execution set a whole new standard for our business.',
    rating: 5,
  },
  {
    name: 'Yousuf Sir',
    company: 'Netligent Tech',
    image: clientYousuf,
    text: 'Working with Zone Digi Tech was a seamless experience. They delivered high-converting digital solutions, modern design frameworks, and outstanding ongoing support.',
    rating: 5,
  },
  {
    name: 'Vadaas Shop',
    company: 'Owner, Vadaas Shop',
    image: clientVadaas,
    text: 'Their team created a stunning digital presence and social media strategy for our shop. Our customer reach and online inquiries increased dramatically!',
    rating: 5,
  },
  {
    name: 'Dr. Dharmendra Pal',
    company: 'Physiotherapy',
    image: clientDharmendra,
    text: 'Highly professional and dedicated team! They built our clinic booking portal and optimized our local search presence, doubling patient appointments month-on-month.',
    rating: 5,
  },
];

export default function Projects() {
  useScrollAnimation();
  const navigate = useNavigate();
  const [activeCategoryId, setActiveCategoryId] = useState('All');
  const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
  const [projectTouchStart, setProjectTouchStart] = useState(null);
  const [projectTouchEnd, setProjectTouchEnd] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNav = (page) => {
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  const handleProjectClick = (url) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/contact');
    }
  };

  const handleCategoryChange = (catId) => {
    setActiveCategoryId(catId);
    setMobileProjectIndex(0);
  };

  const filtered = activeCategoryId === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategoryId);

  // Mobile slider swipe handlers
  const handleProjectTouchStart = (e) => setProjectTouchStart(e.targetTouches[0].clientX);
  const handleProjectTouchMove = (e) => setProjectTouchEnd(e.targetTouches[0].clientX);
  const handleProjectTouchEnd = () => {
    if (!projectTouchStart || !projectTouchEnd) return;
    const distance = projectTouchStart - projectTouchEnd;
    if (Math.abs(distance) > 40) {
      if (distance > 0 && mobileProjectIndex < filtered.length - 1) {
        setMobileProjectIndex((prev) => prev + 1);
      } else if (distance < 0 && mobileProjectIndex > 0) {
        setMobileProjectIndex((prev) => prev - 1);
      }
    }
    setProjectTouchStart(null);
    setProjectTouchEnd(null);
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-20 transition-colors duration-300">
      {/* ── HERO ── */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-40 dark:opacity-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.25), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="tag mb-5">Our Portfolio & Case Studies</div>
              <h1 className="section-title text-stone-900 dark:text-white mb-5">
                Featured Projects &<br />
                <span className="gradient-text">Live Work Showcase</span>
              </h1>
              <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg leading-relaxed">
                Explore real projects, live website links, and client success stories across Web Design, E-Commerce, UI/UX, SEO, Graphics, and Consulting.
              </p>
            </div>

            <div>
              <img
                src={projectSelectionImg}
                alt="Our Projects Showcase"
                width="900"
                height="420"
                loading="eager"
                className="w-full h-auto max-h-[420px] object-contain rounded-2xl mx-auto mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HYPER-PROFESSIONAL FILTERS BAR ── */}
      <div className="bg-stone-50 dark:bg-[#0a0a0f] border-y border-stone-200 dark:border-stone-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-3.5">
            {categoryFilters.map((cat) => {
              const isSelected = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 border ${
                    isSelected
                      ? 'bg-saffron-500 text-white border-saffron-500 shadow-lg shadow-saffron-500/20 scale-105'
                      : 'bg-white dark:bg-stone-900/90 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-saffron-400/60 dark:hover:border-saffron-600/60 hover:text-saffron-600 dark:hover:text-saffron-400'
                  }`}
                  style={isSelected ? { background: 'linear-gradient(135deg, #e07b00, #f9b84a)' } : {}}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PROJECTS SECTION ── */}
      <section className="py-10 md:py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── DESKTOP VIEW: Normal Grid ── */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((project, i) => (
              <div
                key={i}
                className={`animate-fade-in-up group rounded-3xl overflow-hidden bg-white dark:bg-stone-900/80 border-2 border-stone-200 dark:border-stone-800 hover:border-saffron-400 dark:hover:border-saffron-600 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 ${
                  project.featured ? 'ring-2 ring-saffron-400/40 dark:ring-saffron-600/40' : ''
                }`}
              >
                <div>
                  {/* Image Container with Overlay */}
                  <div className="relative overflow-hidden aspect-video cursor-pointer" onClick={() => handleProjectClick(project.link)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => { e.currentTarget.src = iservicePortalImg; }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

                    {/* Hover Overlay Actions */}
                    <div className="absolute inset-0 bg-stone-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                      {project.link.startsWith('http') && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-5 py-2.5 rounded-full text-white text-xs font-bold bg-saffron-500 hover:bg-saffron-600 shadow-xl transition-all flex items-center gap-1.5 hover:scale-105"
                        >
                          <Globe size={14} /> Visit Live Website <ExternalLink size={12} />
                        </a>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNav('contact');
                        }}
                        className="px-5 py-2.5 rounded-full text-white text-xs font-bold bg-white/20 border border-white/60 hover:bg-white/30 transition-all flex items-center gap-1.5"
                      >
                        <MessageCircle size={13} /> Inquire Similar Project
                      </button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-sm"
                        style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.9), rgba(249,184,74,0.9))' }}
                      >
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-white text-stone-900 shadow-md flex items-center gap-1">
                          <Sparkles size={11} className="text-saffron-600" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Result Pill */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="glass rounded-xl px-3 py-2 border border-white/20 backdrop-blur-md">
                        <p className="text-white text-xs font-bold tracking-wide">{project.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-1.5">
                      <h2
                        onClick={() => handleProjectClick(project.link)}
                        className="font-display font-bold text-lg md:text-xl text-stone-900 dark:text-white cursor-pointer hover:text-saffron-500 transition-colors"
                      >
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-xs font-bold text-saffron-600 dark:text-saffron-400 mb-2.5">{project.client}</p>
                    <p className="text-stone-600 dark:text-stone-300 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">{project.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                {project.link.startsWith('http') && (
                  <div className="px-6 pb-6 pt-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <span>View Live Site</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── MOBILE RESPONSIVE VIEW: Interactive Touch Slider ── */}
          <div className="block md:hidden">
            {filtered.length > 0 && (
              <div>
                {/* Mobile Slider Controls & Counter */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-900 dark:text-white">
                      Project {mobileProjectIndex + 1} of {filtered.length}
                    </span>
                    <span className="text-[11px] text-stone-400">| Swipe to browse</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setMobileProjectIndex(prev => Math.max(0, prev - 1))}
                      disabled={mobileProjectIndex === 0}
                      className={`w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center transition-colors ${
                        mobileProjectIndex === 0
                          ? 'opacity-40 cursor-not-allowed bg-stone-100 dark:bg-stone-800 text-stone-400'
                          : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 shadow-sm active:scale-95'
                      }`}
                      aria-label="Previous project"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setMobileProjectIndex(prev => Math.min(filtered.length - 1, prev + 1))}
                      disabled={mobileProjectIndex === filtered.length - 1}
                      className={`w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center transition-colors ${
                        mobileProjectIndex === filtered.length - 1
                          ? 'opacity-40 cursor-not-allowed bg-stone-100 dark:bg-stone-800 text-stone-400'
                          : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 shadow-sm active:scale-95'
                      }`}
                      aria-label="Next project"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Mobile Slider Card with Touch Gestures */}
                <div
                  className="overflow-hidden"
                  onTouchStart={handleProjectTouchStart}
                  onTouchMove={handleProjectTouchMove}
                  onTouchEnd={handleProjectTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${mobileProjectIndex * 100}%)` }}
                  >
                    {filtered.map((project, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-1">
                        <div
                          className={`rounded-3xl overflow-hidden bg-white dark:bg-stone-900/90 border-2 border-stone-200 dark:border-stone-800 shadow-lg flex flex-col justify-between ${
                            project.featured ? 'ring-2 ring-saffron-400/40 dark:ring-saffron-600/40' : ''
                          }`}
                        >
                          {/* Image Container with Overlay */}
                          <div className="relative overflow-hidden aspect-video">
                            <img
                              src={project.image}
                              alt={project.title}
                              onError={(e) => { e.currentTarget.src = iservicePortalImg; }}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex gap-2">
                              <span
                                className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-sm"
                                style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.9), rgba(249,184,74,0.9))' }}
                              >
                                {project.category}
                              </span>
                              {project.featured && (
                                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-white text-stone-900 shadow-md flex items-center gap-1">
                                  <Sparkles size={11} className="text-saffron-600" /> Featured
                                </span>
                              )}
                            </div>

                            {/* Result Pill */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <div className="glass rounded-xl px-3 py-1.5 border border-white/20 backdrop-blur-md">
                                <p className="text-white text-xs font-bold tracking-wide">{project.result}</p>
                              </div>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-5">
                            <h2
                              onClick={() => handleProjectClick(project.link)}
                              className="font-display font-bold text-lg text-stone-900 dark:text-white cursor-pointer hover:text-saffron-500 transition-colors mb-1"
                            >
                              {project.title}
                            </h2>
                            <p className="text-xs font-bold text-saffron-600 dark:text-saffron-400 mb-2">{project.client}</p>
                            <p className="text-stone-600 dark:text-stone-300 text-xs leading-relaxed mb-3 line-clamp-3">{project.desc}</p>

                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {project.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Mobile Direct Action Buttons */}
                            <div className="flex flex-col gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
                              {project.link.startsWith('http') && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full py-2.5 px-4 rounded-xl text-white text-xs font-bold bg-saffron-500 active:bg-saffron-600 shadow-md flex items-center justify-center gap-1.5 transition-colors"
                                >
                                  <Globe size={14} /> Visit Live Website <ExternalLink size={12} />
                                </a>
                              )}
                              <button
                                onClick={() => handleNav('contact')}
                                className="w-full py-2 px-4 rounded-xl text-xs font-bold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-stone-700 flex items-center justify-center gap-1.5 active:bg-stone-200"
                              >
                                <MessageCircle size={13} /> Inquire Similar Project
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Dots Indicator */}
                <div className="flex items-center justify-center gap-1.5 mt-5">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMobileProjectIndex(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === mobileProjectIndex
                          ? 'w-6 h-2 bg-gradient-to-r from-saffron-500 to-amber-400'
                          : 'w-2 h-2 bg-stone-300 dark:bg-stone-600'
                      }`}
                      aria-label={`Go to project slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS SLIDER ── */}
      <TestimonialSlider testimonials={testimonials} />

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.08), rgba(250,204,21,0.05))' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="tag mx-auto mb-4">Start Your Project</div>
          <h2 className="section-title text-stone-900 dark:text-white mb-4">
            Your Success Story<br />
            <span className="gradient-text">Starts Here</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto mb-8">
            Ready to see your brand featured in our portfolio? Let's create something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => handleNav('contact')} className="btn-primary px-8 py-3.5 text-sm">
              <span className="flex items-center gap-2">Start Your Project <ArrowRight size={16} /></span>
            </button>
            <button onClick={() => handleNav('services')} className="btn-outline px-8 py-3.5 text-sm flex items-center gap-2">
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
