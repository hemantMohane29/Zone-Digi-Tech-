import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  RefreshCw,
  Truck,
  Download,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

const policyTabs = [
  { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck, route: '/privacy-policy' },
  { id: 'terms', label: 'Terms & Conditions', icon: FileText, route: '/terms-and-conditions' },
  { id: 'refund', label: 'Cancellation & Refund', icon: RefreshCw, route: '/refund-policy' },
  { id: 'delivery', label: 'Service Delivery Policy', icon: Truck, route: '/service-delivery-policy' },
];

export default function Policies() {
  useScrollAnimation();
  const location = useLocation();
  const navigate = useNavigate();

  const getTabFromPath = (path) => {
    if (path.includes('terms')) return 'terms';
    if (path.includes('refund') || path.includes('cancellation')) return 'refund';
    if (path.includes('delivery')) return 'delivery';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState(() => getTabFromPath(location.pathname));

  useEffect(() => {
    setActiveTab(getTabFromPath(location.pathname));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab.id);
    navigate(tab.route);
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-24 pb-20 min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative py-14 lg:py-18 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-50 dark:opacity-10 pointer-events-none" />
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.25), transparent)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="tag mx-auto mb-4 flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-saffron-600 dark:text-saffron-400" />
            <span>Legal & Trust Center</span>
          </div>
          <h1 className="section-title text-stone-900 dark:text-white mb-4">
            Zone Digi Tech <span className="gradient-text">Policies & Terms</span>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparency and clarity are at the core of our business. Review our official privacy standards, project terms, refund terms, and service delivery policies below.
          </p>

          {/* Quick Docx Download Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/docs/Zone_Digi_Tech_Policies.docx"
              download="Zone_Digi_Tech_Policies.docx"
              className="btn-primary inline-flex items-center gap-2 text-xs md:text-sm py-2.5 px-5 shadow-lg shadow-saffron-500/10"
            >
              <Download size={15} />
              <span>Download Policies (.docx)</span>
            </a>
            <a
              href="/docs/Zone_Digi_Tech_Terms_and_Conditions.docx"
              download="Zone_Digi_Tech_Terms_and_Conditions.docx"
              className="inline-flex items-center gap-2 text-xs md:text-sm py-2.5 px-5 rounded-full font-semibold border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:border-saffron-400 dark:hover:border-saffron-500 transition-all duration-300 shadow-sm"
            >
              <Download size={15} />
              <span>Download Terms & Conditions (.docx)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TAB NAVIGATION & CONTENT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-sm mb-12">
          {policyTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-saffron-500 to-amber-500 text-white shadow-md shadow-saffron-500/20 font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/60'
                }`}
              >
                <Icon size={17} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box & Bottom Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Content Area */}
          <div className="bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.15), rgba(249,184,74,0.15))' }}
                >
                  {activeTab === 'privacy' && <ShieldCheck size={24} className="text-saffron-600 dark:text-saffron-400" />}
                  {activeTab === 'terms' && <FileText size={24} className="text-saffron-600 dark:text-saffron-400" />}
                  {activeTab === 'refund' && <RefreshCw size={24} className="text-saffron-600 dark:text-saffron-400" />}
                  {activeTab === 'delivery' && <Truck size={24} className="text-saffron-600 dark:text-saffron-400" />}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-white">
                    {policyTabs.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <p className="text-stone-400 text-xs mt-0.5">Effective Date: 10 July 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 size={13} /> Official Document
                </span>
              </div>
            </div>

            {/* TAB CONTENT: PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <div className="space-y-8 text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-stone-700 dark:text-stone-300 text-sm">
                  <p className="font-medium text-stone-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Info size={16} className="text-saffron-600 dark:text-saffron-400" />
                    At Zone Digi Tech, trust is the foundation of every client relationship.
                  </p>
                  This Privacy Policy explains, in plain language, what information we collect from you, why we collect it, and how we keep it safe when you visit our website, get in touch with us, or use any of our services.
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">1</span>
                    Information We Collect
                  </h3>
                  <p>When you work with us, we may collect the following:</p>
                  <ul className="space-y-2.5 pl-2">
                    {[
                      'Personal details such as your name, phone number, email address, and business name.',
                      'Project-related information like brand assets, photos, videos, website content, and login credentials needed to complete your project (for example, hosting or social media access).',
                      'Payment details when you make a payment for our services.',
                      'Basic usage data such as browser type, IP address, and how you interact with our website.',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-saffron-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">2</span>
                    How We Use Your Information
                  </h3>
                  <p>We use the information you share with us to:</p>
                  <ul className="space-y-2.5 pl-2">
                    {[
                      "Understand your requirements and deliver the service you've booked, whether that's a photo shoot, a website, or a social media strategy.",
                      'Communicate with you about ongoing projects, timelines, invoices, and support.',
                      "Share relevant updates, offers, or growth tips for your business, only if you've agreed to receive them.",
                      'Improve how we work, our website, and the overall client experience.',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-saffron-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">3</span>
                    Data Protection
                  </h3>
                  <p>
                    We take reasonable technical and organisational steps to protect your data, including secure storage, restricted access to client files, and encrypted connections wherever applicable. Login credentials shared with us for project purposes are used only for the work agreed upon and are never used for any other reason.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">4</span>
                    Third-Party Sharing
                  </h3>
                  <p>
                    We do not sell, rent, or trade your personal information. We may share information with trusted third parties only where necessary, such as payment gateways, hosting providers, or advertising platforms (like Meta or Google Ads) when running campaigns on your behalf.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">5</span>
                    Your Rights
                  </h3>
                  <p>
                    You have the right to ask us what personal information we hold about you, request corrections, or ask us to delete it, subject to any ongoing project or legal requirement. Just reach out to us using our official contact details.
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: TERMS & CONDITIONS */}
            {activeTab === 'terms' && (
              <div className="space-y-8 text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-stone-700 dark:text-stone-300 text-sm">
                  <p className="font-medium text-stone-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Info size={16} className="text-saffron-600 dark:text-saffron-400" />
                    Welcome to Zone Digi Tech.
                  </p>
                  By reaching out to us, booking a service, or using our website, you agree to the terms below. We've kept them simple and clear so there's no confusion later.
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">1</span>
                    Our Services
                  </h3>
                  <p>We offer creative and digital services, including:</p>
                  <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                    {[
                      'Video & Photo Shoot',
                      'Social Media Handling',
                      'SEO (Search Engine Optimization)',
                      'Website Development',
                      'UI & UX Design',
                      'Graphic Design',
                      'Business Growth Consultation & Strategy',
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 text-xs font-medium">
                        <Sparkles size={14} className="text-saffron-500" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-400 pt-2">
                    Some of these services (like shoots) involve in-person work at a location agreed upon with the client, while others (like SEO, website development, and social media management) are delivered digitally.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">2</span>
                    Scope of Work & License
                  </h3>
                  <p>
                    Once a project is confirmed, we will share a clear scope of work covering deliverables, timelines, and revisions included. Any final files, designs, or digital assets handed over to you are for your personal or business use only. Reselling or redistributing our work without written permission is not allowed.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">3</span>
                    Payments
                  </h3>
                  <p>
                    Most projects require an advance payment before work begins, with the balance due on or before final delivery. Ongoing services such as social media management or SEO are billed on a monthly basis, in advance, unless otherwise agreed in writing. We accept UPI, bank transfer, and other common digital payment methods.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">4</span>
                    Client Responsibility
                  </h3>
                  <p>
                    You are responsible for providing accurate project details, timely feedback, and access to any accounts, files, or locations needed to complete the work. Delays caused by late feedback or missing information may affect the final delivery timeline.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">5</span>
                    Revisions
                  </h3>
                  <p>
                    We include a reasonable number of revisions as agreed at the start of the project. Additional changes beyond the agreed scope may involve extra charges, which we will always discuss with you before proceeding.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">6</span>
                    Changes to These Terms
                  </h3>
                  <p>
                    We may update these terms from time to time to reflect changes in how we work. Continuing to use our services after an update means you accept the revised terms.
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: CANCELLATION & REFUND POLICY */}
            {activeTab === 'refund' && (
              <div className="space-y-8 text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-stone-700 dark:text-stone-300 text-sm">
                  <p className="font-medium text-stone-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Info size={16} className="text-saffron-600 dark:text-saffron-400" />
                    Cancellation & Refund Policy
                  </p>
                  We want every client to feel confident booking with Zone Digi Tech. Here's how cancellations and refunds work across our services.
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">1</span>
                    Cancellations
                  </h3>
                  
                  <div className="space-y-3 pl-2">
                    <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">For Shoots</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                        Cancellations made at least 48 hours before the scheduled shoot are eligible for a full refund of the advance. Cancellations made within 48 hours may attract a cancellation charge to cover crew and equipment booking.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">For Ongoing Services (SEO, Social Media, Website Maintenance)</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                        You may cancel anytime with 7 days' written notice before the next billing cycle. Charges already paid for the current cycle are non-refundable, as work for that period has already begun.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">For One-Time Projects (Website, UI/UX, Graphic Design)</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                        Once significant work has started on your project, cancellations may only be refunded for the unused portion of the project, after deducting the value of work already completed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">2</span>
                    Refund Criteria & Process
                  </h3>
                  <p>
                    Since most of our services involve custom, time-and-effort-based work, refunds are considered only in the following situations:
                  </p>
                  <ul className="space-y-2.5 pl-2">
                    {[
                      'The service was not delivered at all within the agreed timeline.',
                      'The final output does not match what was agreed upon in the project scope, despite revisions.',
                      'A technical issue on our end (like a corrupted file or broken website deployment) prevents you from using the delivered product.',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-saffron-500 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="p-4 rounded-2xl bg-saffron-500/10 text-saffron-700 dark:text-saffron-300 text-xs font-medium border border-saffron-500/20 mt-3">
                    To request a refund, please contact us within 3 days of delivery with your order details and a clear explanation of the issue. Approved refunds are processed within 7–10 working days to your original payment method.
                  </p>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SERVICE DELIVERY POLICY */}
            {activeTab === 'delivery' && (
              <div className="space-y-8 text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-stone-700 dark:text-stone-300 text-sm">
                  <p className="font-medium text-stone-900 dark:text-white mb-1 flex items-center gap-1.5">
                    <Info size={16} className="text-saffron-600 dark:text-saffron-400" />
                    Service Delivery Policy
                  </p>
                  As Zone Digi Tech offers creative and digital services rather than physical products, there is no shipping involved. Here's how delivery works for each type of service.
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">1</span>
                    On-Location Services
                  </h3>
                  <p>
                    For video and photo shoots, our team will travel to the agreed shoot location in and around Bhopal (or elsewhere, if arranged in advance) on the scheduled date and time. Raw or edited files are then delivered digitally once post-production is complete, as per the agreed timeline.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">2</span>
                    Digital Deliverables
                  </h3>
                  <ul className="space-y-2.5 pl-2">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-saffron-500 flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-stone-900 dark:text-white">Website Development & UI/UX Design:</strong> Delivered through a live website link, staging link, or shared design files (like Figma), typically within the timeline agreed at the start of the project.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-saffron-500 flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-stone-900 dark:text-white">Graphic Design:</strong> Final files are shared via email or a cloud storage link (Google Drive, WeTransfer, etc.).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-saffron-500 flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-stone-900 dark:text-white">Social Media Handling & SEO:</strong> These are ongoing services, with monthly reports and updates shared directly with you, usually via email or a shared dashboard.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">3</span>
                    Delivery Timeline
                  </h3>
                  <p>
                    Typical turnaround times are shared with you at the time of booking, based on the scope of the project. Larger projects like websites may take longer and will follow a milestone-based delivery schedule.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-saffron-500/10 text-saffron-600 dark:text-saffron-400 font-bold text-xs flex items-center justify-center">4</span>
                    Non-Receipt of Deliverables
                  </h3>
                  <p>
                    If you haven't received your files, access, or updates within the promised timeframe, please reach out to us right away with your project details so we can resolve it quickly.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Cards: Need Assistance & Ready to Start a Project */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white text-lg mb-2">
                  Need Assistance?
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  Have questions regarding our terms or policies? Reach out directly to our team.
                </p>
              </div>
              <div className="space-y-3 text-xs">
                <a
                  href="mailto:infozonedigitech@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/40 hover:bg-saffron-500/10 text-stone-700 dark:text-stone-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors"
                >
                  <Mail size={16} className="text-saffron-500 flex-shrink-0" />
                  <span className="font-medium truncate">infozonedigitech@gmail.com</span>
                </a>
                <a
                  href="tel:+917974942457"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/40 hover:bg-saffron-500/10 text-stone-700 dark:text-stone-300 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors"
                >
                  <Phone size={16} className="text-saffron-500 flex-shrink-0" />
                  <span className="font-medium">+91 7974942457</span>
                </a>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/40 text-stone-700 dark:text-stone-300">
                  <MapPin size={16} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Karond, Bhopal, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links / CTA Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 text-white shadow-xl relative overflow-hidden border border-stone-800 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl bg-saffron-500 pointer-events-none" />
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-2">Ready to Start a Project?</h3>
                <p className="text-stone-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  Let's discuss how Zone Digi Tech can elevate your business digitally.
                </p>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="w-full btn-primary text-xs sm:text-sm py-3 inline-flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
