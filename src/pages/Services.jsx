import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Video, Share2, Globe, Palette, Image as ImageIcon, Search, TrendingUp,
  ArrowRight, CheckCircle2, MessageCircle, Sparkles, Check, ChevronRight, Layers, LayoutGrid, List
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

const serviceCategories = [
  {
    id: 'videos-photos',
    title: 'Videos & Photos',
    shortName: 'Videos & Photos',
    icon: Video,
    color: '#06b6d4', // Cyan
    tagline: 'Professional Video & Photo Creation',
    desc: 'High-quality video and photo editing & shooting packages tailored for monthly content growth.',
    plans: [
      {
        name: 'Basic plan',
        badge: 'Starter',
        price: '₹1,999.00',
        period: 'per month',
        popular: false,
        features: [
          { label: 'Monthly Posts', value: '6 Posts' },
          { label: 'Monthly Videos', value: '6 Videos' },
          { label: 'Video & Photos Editing', value: 'Normal' },
          { label: 'Video & Photos Shooting', value: 'Normal' }
        ]
      },
      {
        name: 'Popular plan',
        badge: 'Most Popular',
        price: '₹5,499.00',
        period: 'per month',
        popular: true,
        features: [
          { label: 'Monthly Posts', value: '10 Posts' },
          { label: 'Monthly Videos', value: '8 Videos' },
          { label: 'Video Editing', value: 'Subtitle + Voiceover' }
        ]
      },
      {
        name: 'Super plan',
        badge: 'Pro Suite',
        price: '₹8,499.00',
        period: 'per month',
        popular: false,
        features: [
          { label: 'Monthly Posts', value: '12 Posts' },
          { label: 'Monthly Videos', value: '10 Videos' },
          { label: 'Video + Photo Editing & Shooting', value: 'All Types' }
        ]
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Handling',
    shortName: 'Social Media',
    icon: Share2,
    color: '#8b5cf6', // Purple
    tagline: 'Complete Social Media Management',
    desc: 'Grow your reach and engagement across Instagram, Facebook, YouTube & LinkedIn.',
    plans: [
      {
        name: 'Basic Plan',
        badge: 'Instagram Focus',
        price: '₹1,999.00',
        period: 'per month',
        platforms: ['Instagram'],
        popular: false,
        features: [
          { label: 'Posts (Photos + Creative)', value: '6 Post / Month' },
          { label: 'Reels', value: '6 Reel / Month' },
          { label: 'Stories', value: '10 Stories / Month' }
        ]
      },
      {
        name: 'Popular Plan',
        badge: 'Most Popular',
        price: '₹3,999.00',
        period: 'per month',
        platforms: ['Instagram', 'Facebook'],
        popular: true,
        features: [
          { label: 'Posts (Photos + Creative)', value: '10 Post / Month' },
          { label: 'Reels', value: '8 Reel / Month' },
          { label: 'Stories', value: '16 Stories / Month' }
        ]
      },
      {
        name: 'Super Plan',
        badge: 'All-In-One',
        price: '₹5,999.00',
        period: 'per month',
        platforms: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn'],
        popular: false,
        features: [
          { label: 'Posts (Photos + Creative)', value: '12 Post / Month' },
          { label: 'Reels', value: '10 Reel / Month' },
          { label: 'Stories', value: '20 Stories / Month' }
        ]
      }
    ]
  },
  {
    id: 'website-design',
    title: 'Website Design',
    shortName: 'Website Design',
    icon: Globe,
    color: '#10b981', // Emerald
    tagline: 'Modern, Fast & Scalable Web Development',
    desc: 'From high-converting static websites to feature-rich dynamic web applications and full e-commerce platforms.',
    plans: [
      {
        name: 'Basic plan',
        badge: 'Static Website',
        price: '₹7,499.00',
        period: 'one-time',
        popular: false,
        features: [
          { label: 'Website Type', value: 'Static Website' },
          { label: 'Frontend', value: 'HTML, CSS, JS' },
          { label: 'Documentation', value: 'MS Word' }
        ]
      },
      {
        name: 'Popular plan',
        badge: 'Most Popular',
        price: '₹14,499.00',
        period: 'one-time',
        popular: true,
        features: [
          { label: 'Website Type', value: 'Dynamic Website' },
          { label: 'Frontend', value: 'React + JS + Tailwind' },
          { label: 'Backend', value: 'User Authentication' },
          { label: 'Database', value: 'MongoDB (Basic)' },
          { label: 'Documentation', value: 'MS Word' }
        ]
      },
      {
        name: 'Super plan',
        badge: 'Full E-Commerce',
        price: '₹19,999.00',
        period: 'one-time',
        popular: false,
        features: [
          { label: 'Website Type', value: 'Full E-commerce' },
          { label: 'Frontend', value: 'React + JS + Tailwind' },
          { label: 'Backend', value: 'User Auth + Tracking + Error Handling' },
          { label: 'Database', value: 'MongoDB + Supabase + Firebase' },
          { label: 'Payment Gateway', value: 'Juspay, Razorpay, etc.' },
          { label: 'Product Catalog', value: 'Included' },
          { label: 'Shopping Cart', value: 'Included' },
          { label: 'Security & Auth', value: 'Included' },
          { label: 'Documentation', value: 'MS Word' }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI & UX Design',
    shortName: 'UI/UX Design',
    icon: Palette,
    color: '#e07b00', // Saffron
    tagline: 'Pixel-Perfect User Experience & Interfaces',
    desc: 'Intuitive, beautiful Figma & XD designs that captivate users and drive higher conversion rates.',
    plans: [
      {
        name: 'Basic plan',
        badge: 'Static UI',
        price: '₹2,999.00',
        period: 'one-time',
        popular: false,
        features: [
          { label: 'Design Tool', value: 'Figma + XD Design' },
          { label: 'Frontend Scope', value: 'Home, Services, Project, Contact' },
          { label: 'UI Documentation', value: 'MS Word' }
        ]
      },
      {
        name: 'Popular plan',
        badge: 'Most Popular',
        price: '₹7,499.00',
        period: 'one-time',
        popular: true,
        features: [
          { label: 'Static UI', value: 'Figma + XD Design' },
          { label: 'Frontend Design', value: 'Design Included' },
          { label: 'Prototype & Wireframing', value: 'Figma + XD Design' },
          { label: 'UI Documentation', value: 'MS Word' },
          { label: 'UX Documentation', value: 'Figma + XD Design' }
        ]
      },
      {
        name: 'Super plan',
        badge: 'Full UI & UX',
        price: '₹9,999.00',
        period: 'one-time',
        popular: false,
        features: [
          { label: 'Full UI', value: 'Figma + XD Design' },
          { label: 'Professional Frontend', value: 'Design Included' },
          { label: 'Pro Prototype & Wireframing', value: 'Figma + XD Design' },
          { label: 'Pro UI Documentation', value: 'MS Word' },
          { label: 'Pro UX Documentation', value: 'Figma + XD Design' }
        ]
      }
    ]
  },
  {
    id: 'graphics-designing',
    title: 'Graphics Designing',
    shortName: 'Graphics Design',
    icon: ImageIcon,
    color: '#ec4899', // Pink
    tagline: 'Brand Identity & Visual Design Assets',
    desc: 'Stunning marketing collateral from social posts and posters to 3D menu cards and brand assets.',
    plans: [
      {
        name: 'Basic plan',
        badge: 'Essentials',
        price: '₹1,999.00',
        period: 'one-time',
        popular: false,
        features: [
          { label: 'Social Media Post', value: '6 Posts' },
          { label: 'Poster Design', value: '3 Posters' },
          { label: 'Standee Design', value: '2 Standees' },
          { label: 'Flag Design', value: '2 Flags' }
        ]
      },
      {
        name: 'Popular plan',
        badge: 'Most Popular',
        price: '₹6,499.00',
        period: 'one-time',
        popular: true,
        features: [
          { label: 'Logo Design', value: '2 Logos' },
          { label: 'Menu Card', value: '1 Menu (Normal)' },
          { label: 'Profile Design', value: '1 Profile' },
          { label: '3D Model Menu', value: '1 Menu' },
          { label: 'Social Media Post', value: '8 Posts' },
          { label: 'Poster', value: '6 Posters' },
          { label: 'Standee', value: '4 Standees' },
          { label: 'Flag', value: '4 Flags' }
        ]
      },
      {
        name: 'Super plan',
        badge: 'Complete Brand Kit',
        price: '₹9,999.00',
        period: 'one-time',
        popular: false,
        features: [
          { label: 'Logo Design', value: '2 Logos' },
          { label: 'Menu Card', value: '1 Menu (Normal)' },
          { label: 'Profile Design', value: '1 Profile' },
          { label: '3D Model Menu', value: '1 Menu' },
          { label: 'Social Media Post', value: '10 Posts' },
          { label: 'Poster', value: '8 Posters' },
          { label: 'Standee', value: '6 Standees' },
          { label: 'Flag', value: '6 Flags' },
          { label: 'YouTube Thumbnail', value: 'Included (Depends)' },
          { label: 'Business Card', value: '1 Card' },
          { label: 'Packet Design', value: 'Included (Depends)' }
        ]
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    shortName: 'SEO',
    icon: Search,
    color: '#ef4444', // Red
    tagline: 'Rank Higher & Drive Organic Search Traffic',
    desc: 'Data-driven On-Page & Off-Page SEO packages to maximize Google search visibility and rankings.',
    plans: [
      {
        name: 'Basic plan',
        badge: 'SEO Starter',
        price: '₹2,499.00',
        period: 'per month',
        popular: false,
        features: [
          { label: 'On Page SEO', value: 'Half Access' },
          { label: 'Google Search Console', value: 'Included' },
          { label: 'Off Page SEO', value: 'Full Access' },
          { label: 'Bookmarking', value: '100 Links' },
          { label: 'Classified Ads', value: '80 Ads' },
          { label: 'Profile Creation', value: '50 Profiles' },
          { label: 'Blogs', value: '10 Blogs' },
          { label: 'Articles', value: '10 Articles' }
        ]
      },
      {
        name: 'Popular plan',
        badge: 'Most Popular',
        price: '₹5,499.00',
        period: 'per month',
        popular: true,
        features: [
          { label: 'On Page SEO', value: 'Full Access' },
          { label: 'Google Tools', value: 'Console, Analytics, Ads & Keyword Planner' },
          { label: 'Off Page SEO', value: 'Half Access' },
          { label: 'Blogs & Articles', value: '15 Blogs + 15 Articles' },
          { label: 'Traffic Research Report', value: 'Full Access' },
          { label: 'Google Map Review', value: 'Full Access' }
        ]
      },
      {
        name: 'Super plan',
        badge: 'Dominate Search',
        price: '₹9,999.00',
        period: 'per month',
        popular: false,
        features: [
          { label: 'On Page SEO', value: 'Full Access' },
          { label: 'Google Tools', value: 'Console, Analytics, Ads & Keyword Planner' },
          { label: 'Off Page SEO', value: 'Full Access' },
          { label: 'Bookmarking & Ads', value: '100 Links + 80 Ads + 50 Profiles' },
          { label: 'Blogs & Articles', value: '20 Blogs + 20 Articles' },
          { label: 'Traffic Research Report', value: 'Full Access' },
          { label: 'Google Map Review', value: 'Full Access' }
        ]
      }
    ]
  },
  {
    id: 'growth-consulting',
    title: 'Business Growth Consulting',
    shortName: 'Consulting',
    icon: TrendingUp,
    color: '#f59e0b', // Amber
    tagline: 'Strategic Consultation to Scale Your Business',
    desc: 'Expert guidance on business positioning, growth ideas, and revenue expansion strategies.',
    plans: [
      {
        name: 'Popular plan',
        badge: 'Most Popular',
        price: '₹1,999.00',
        period: 'per session',
        popular: true,
        features: [
          { label: 'Business Suggestions', value: 'Included' },
          { label: 'Growth Ideas Discussion', value: 'Included' }
        ]
      },
      {
        name: 'Super plan',
        badge: 'Advanced Strategy',
        price: '₹3,999.00',
        period: 'per session',
        popular: false,
        features: [
          { label: 'Business Suggestions', value: 'Included' },
          { label: 'Growth Ideas', value: 'Included' },
          { label: 'Business Strategy Discussion', value: 'Included' },
          { label: 'Advanced Growth Planning', value: 'Included' }
        ]
      }
    ]
  }
];

const process = [
  { step: '01', title: 'Select Service & Plan', desc: 'Choose the service category and select the tier plan that best matches your budget and goals.' },
  { step: '02', title: 'Consultation & Scope', desc: 'We align on your requirements, deliverables, timeline, and exact customization needs.' },
  { step: '03', title: 'Design & Build', desc: 'Our dedicated creative team executes your project with regular check-ins and progress updates.' },
  { step: '04', title: 'Review & Refine', desc: 'We fine-tune all deliverables through feedback until you are 100% satisfied.' },
  { step: '05', title: 'Launch & Deliver', desc: 'We hand over final master files, deploy your website, or launch your campaigns with ongoing support.' },
];

export default function Services() {
  useScrollAnimation();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategoryId, setSelectedCategoryId] = useState('videos-photos');
  const [viewMode, setViewMode] = useState('single');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state?.serviceId) {
      setSelectedCategoryId(location.state.serviceId);
    }
  }, [location]);

  const activeCategory = serviceCategories.find(c => c.id === selectedCategoryId) || serviceCategories[0];

  const handleSelectPlan = (serviceTitle, plan) => {
    const messageText = `Hi Zone Digi Tech! I am interested in the "${plan.name}" (${plan.price}) for ${serviceTitle}. Please share further details on getting started.`;
    navigate('/contact', {
      state: {
        service: serviceTitle,
        planName: plan.name,
        planPrice: plan.price,
        prefilledMessage: messageText
      }
    });
  };

  const handleWhatsAppInquiry = (serviceTitle, plan) => {
    const text = encodeURIComponent(`Hi Zone Digi Tech! I'd like to choose the *${plan.name}* (${plan.price}) for *${serviceTitle}*.`);
    window.open(`https://wa.me/917974942457?text=${text}`, '_blank');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-20 transition-colors duration-300">
      {/* ── HERO ── */}
      <section className="relative py-14 lg:py-18 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-50 dark:opacity-10 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.25), transparent)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="tag mb-4">Service Selection & Transparent Plans</div>
              <h1 className="section-title text-stone-900 dark:text-white mb-4">
                Choose Your Service,<br />
                <span className="gradient-text">Select Your Ideal Plan</span>
              </h1>
              <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Transparent pricing with 3 tailored tier plans for every digital service. Select any service below to view detailed features, specs, and instant pricing.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/services_selection.png"
                alt="Services Selection"
                className="w-full max-w-[360px] h-auto object-contain rounded-2xl mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY NAVIGATION BAR (CLEAN & NON-STICKY) ── */}
      <section className="py-4 bg-stone-50 dark:bg-[#0a0a0f] border-y border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-stone-700 dark:text-stone-300">
                Explore Service Packages
              </span>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('single')}
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  viewMode === 'single'
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                <LayoutGrid size={13} /> Focused View
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  viewMode === 'all'
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                <List size={13} /> View All Plans
              </button>
            </div>
          </div>

          {/* Clean Scrollbar-Free Category Pill Tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1.5 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategoryId === cat.id && viewMode === 'single';

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategoryId(cat.id);
                    if (viewMode === 'all') {
                      scrollToSection(cat.id);
                    } else {
                      setViewMode('single');
                    }
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap text-xs md:text-sm font-bold transition-all duration-300 shrink-0 border ${
                    isSelected
                      ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-lg scale-105'
                      : 'bg-white dark:bg-stone-900/90 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 hover:bg-white dark:hover:bg-stone-900'
                  }`}
                  style={{
                    borderColor: isSelected ? cat.color : undefined,
                    boxShadow: isSelected ? `0 6px 20px -4px ${cat.color}50` : undefined
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300"
                    style={{ background: `${cat.color}22` }}
                  >
                    <Icon size={14} style={{ color: cat.color }} />
                  </div>
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PLANS DISPLAY SECTION ── */}
      <section className="py-10 md:py-14 bg-stone-50 dark:bg-[#0a0a0f] scroll-mt-24" id="plans-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'single' ? (
            /* ── SINGLE SERVICE 3-TIER PLAN VIEW ── */
            <div key={activeCategory.id} className="animate-fade-in-up">
              {/* Category Header */}
              <div className="text-center max-w-3xl mx-auto mb-8">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-sm border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
                  style={{ color: activeCategory.color }}
                >
                  <activeCategory.icon size={15} />
                  <span>{activeCategory.tagline}</span>
                </div>
                <h2 className="section-title text-stone-900 dark:text-white mb-2">
                  {activeCategory.title} <span className="gradient-text">Plans</span>
                </h2>
                <p className="text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                  {activeCategory.desc}
                </p>
              </div>

              {/* Plans Grid - High Contrast & Compact Uniform Heights */}
              <div className={`grid gap-6 ${activeCategory.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'}`}>
                {activeCategory.plans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white dark:bg-stone-900 border-2 shadow-2xl scale-[1.01] z-10'
                        : 'bg-white dark:bg-stone-900/90 border-2 border-stone-200 dark:border-stone-800 shadow-md hover:shadow-xl'
                    }`}
                    style={{
                      borderColor: plan.popular ? activeCategory.color : undefined,
                      boxShadow: plan.popular ? `0 14px 40px -10px ${activeCategory.color}40` : undefined
                    }}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div
                        className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5"
                        style={{ background: `linear-gradient(135deg, ${activeCategory.color}, #f59e0b)` }}
                      >
                        <Sparkles size={13} /> {plan.badge}
                      </div>
                    )}

                    <div>
                      {/* Fixed Plan Header & Price Box - ALWAYS VISIBLE AT TOP OF CARD */}
                      <div className="p-4 rounded-2xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display font-bold text-xl text-stone-900 dark:text-white">
                            {plan.name}
                          </h3>
                          {!plan.popular && (
                            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                              {plan.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-baseline justify-between pt-1">
                          <span className="font-display font-extrabold text-2xl md:text-3xl text-stone-900 dark:text-white">
                            {plan.price}
                          </span>
                          <span className="text-[11px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Platforms Tag (if available) */}
                      {plan.platforms && (
                        <div className="mb-4 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800">
                          <span className="text-[10px] font-extrabold text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-1">
                            Included Platforms:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {plan.platforms.map(p => (
                              <span
                                key={p}
                                className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-700 text-stone-900 dark:text-stone-100"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features List - Scrollable with max-height to ensure uniform compact card height */}
                      <div className="mb-5">
                        <span className="text-[10px] font-extrabold text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-2.5">
                          Features & Details:
                        </span>
                        <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-hide">
                          {plan.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm">
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0"
                                style={{ color: activeCategory.color }}
                              />
                              <div className="flex-1">
                                <span className="text-stone-600 dark:text-stone-400 font-medium">
                                  {feat.label}:
                                </span>{' '}
                                <strong className="font-bold text-stone-900 dark:text-white">
                                  {feat.value}
                                </strong>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions - ALWAYS PINNED AT BOTTOM */}
                    <div className="space-y-2 pt-3 border-t border-stone-200 dark:border-stone-800">
                      <button
                        onClick={() => handleSelectPlan(activeCategory.title, plan)}
                        className={`w-full py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                          plan.popular
                            ? 'text-white hover:shadow-2xl hover:scale-[1.01]'
                            : 'bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100'
                        }`}
                        style={{
                          background: plan.popular
                            ? `linear-gradient(135deg, ${activeCategory.color}, #f59e0b)`
                            : undefined
                        }}
                      >
                        <span>Choose {plan.name}</span>
                        <ArrowRight size={15} />
                      </button>

                      <button
                        onClick={() => handleWhatsAppInquiry(activeCategory.title, plan)}
                        className="w-full py-2 px-4 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-center gap-2 border border-stone-200 dark:border-stone-800"
                      >
                        <MessageCircle size={14} className="text-emerald-500" />
                        <span>Inquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* ── VIEW ALL SERVICES & PLANS CATALOG VIEW ── */
            <div className="space-y-12 animate-fade-in-up">
              {serviceCategories.map((category) => (
                <div key={category.id} id={category.id} className="p-6 rounded-3xl bg-white dark:bg-stone-900/90 border-2 border-stone-200 dark:border-stone-800 shadow-xl scroll-mt-28">
                  {/* Category Banner */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
                        style={{ background: `${category.color}20` }}
                      >
                        <category.icon size={20} style={{ color: category.color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-stone-500 dark:text-stone-400 text-xs md:text-sm">
                          {category.tagline} — {category.desc}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCategoryId(category.id);
                        setViewMode('single');
                        window.scrollTo({ top: 250, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-saffron-600 dark:text-saffron-400 hover:underline"
                    >
                      Focus View <ChevronRight size={14} />
                    </button>
                  </div>

                  {/* Plans Grid */}
                  <div className={`grid gap-6 ${category.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'lg:grid-cols-3'}`}>
                    {category.plans.map((plan, idx) => (
                      <div
                        key={idx}
                        className={`relative flex flex-col justify-between rounded-2xl p-5 bg-stone-50 dark:bg-stone-900/90 border-2 transition-all duration-300 hover:shadow-xl ${
                          plan.popular
                            ? 'shadow-md'
                            : 'border-stone-200 dark:border-stone-800'
                        }`}
                        style={{ borderColor: plan.popular ? category.color : undefined }}
                      >
                        {plan.popular && (
                          <div
                            className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-extrabold text-white uppercase tracking-wider shadow-sm"
                            style={{ backgroundColor: category.color }}
                          >
                            {plan.badge}
                          </div>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-display font-bold text-base text-stone-900 dark:text-white">
                              {plan.name}
                            </h4>
                            <span className="font-display font-extrabold text-lg text-stone-900 dark:text-white">
                              {plan.price}
                            </span>
                          </div>
                          <span className="text-[11px] text-stone-500 dark:text-stone-400 block mb-3 font-semibold">{plan.period}</span>

                          <div className="space-y-2 mb-4 max-h-[200px] overflow-y-auto pr-1 scrollbar-hide">
                            {plan.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2 text-xs">
                                <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                                <span className="text-stone-600 dark:text-stone-300">
                                  <strong className="text-stone-900 dark:text-white">{feat.label}:</strong> {feat.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => handleSelectPlan(category.title, plan)}
                          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100 transition-all duration-200 flex items-center justify-center gap-1.5"
                        >
                          Select Plan <ArrowRight size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="py-16 bg-white dark:bg-stone-900/20 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mx-auto mb-3">How It Works</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-3">
              Simple 5-Step <span className="gradient-text">Engagement</span>
            </h2>
            <p className="section-subtitle max-w-lg mx-auto">
              From choosing your plan to project kickoff and final delivery — transparent every step of the way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div key={i} className="text-center group p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 hover:border-saffron-300 dark:hover:border-saffron-700 transition-all">
                <div
                  className="w-11 h-11 rounded-full mx-auto mb-2.5 flex items-center justify-center border-2 border-saffron-400 bg-white dark:bg-stone-900 shadow-sm"
                >
                  <span className="font-display font-bold text-saffron-600 dark:text-saffron-400 text-xs">{step.step}</span>
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white mb-1 text-sm">{step.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.08), rgba(250,204,21,0.05))' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="section-title text-stone-900 dark:text-white mb-4">
            Need a Custom <span className="gradient-text">Package?</span>
          </h2>
          <p className="section-subtitle mb-8 max-w-lg mx-auto">
            Looking to combine multiple services or have custom enterprise requirements? Speak with our team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="btn-primary px-8 py-3.5 text-sm">
              <span className="flex items-center gap-2">Book Free Consultation <ArrowRight size={16} /></span>
            </button>
            <a
              href="https://wa.me/917974942457?text=Hi%20Zone%20Digi%20Tech!%20I%20need%20a%20custom%20service%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
