import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#0a0a0f] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 indian-pattern opacity-50 dark:opacity-10 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #e07b00, transparent)' }}
      />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <div className="relative mb-6 inline-block">
          <span
            className="font-display font-black text-[10rem] leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, #e07b00, #f9b84a, #facc15)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </span>
        </div>

        <h1 className="font-display font-bold text-3xl md:text-4xl text-stone-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-10">
          Oops! The page you are looking for does not exist or has been moved.
          Let us get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary px-8 py-3.5 text-sm font-semibold flex items-center gap-2"
          >
            <Home size={16} />
            <span>Go Home</span>
          </Link>
          <Link
            to="/contact"
            className="btn-outline px-8 py-3.5 text-sm font-semibold flex items-center gap-2"
          >
            <span>Contact Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
