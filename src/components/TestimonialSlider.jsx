import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const intervalRef = useRef(null);
  const totalSlides = testimonials.length;

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % totalSlides);
  }, [currentIndex, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
  }, [currentIndex, totalSlides, goToSlide]);

  // Auto-slide
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, nextSlide]);

  // Touch handling
  const minSwipeDistance = 50;
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? nextSlide() : prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-20 bg-white dark:bg-stone-900/20 border-t border-stone-200 dark:border-stone-800 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e07b00, transparent)' }} />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #facc15, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="tag mx-auto mb-4">Client Feedback</div>
          <h2 className="section-title text-stone-900 dark:text-white mb-3">
            What Our Clients<br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Real feedback from Indian startups, businesses, and brands we have partnered with.
          </p>
        </div>

        {/* ── DESKTOP VIEW: Normal Grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 lg:p-7 rounded-3xl bg-stone-50 dark:bg-stone-900/60 border-2 border-stone-200 dark:border-stone-800 hover:border-saffron-400 dark:hover:border-saffron-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote size={56} className="text-saffron-500" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={17} className="text-amber-400 fill-amber-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6 italic relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-stone-200 dark:border-stone-800 mt-auto">
                <div className="relative flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    width="44"
                    height="44"
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover shadow-md border-2 border-white dark:border-stone-700"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-stone-900" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-saffron-600 dark:text-saffron-400 text-xs font-semibold">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE RESPONSIVE VIEW: Interactive Touch Slider ── */}
        <div className="block md:hidden">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-9 h-9 rounded-full bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 shadow-lg flex items-center justify-center text-stone-600 dark:text-stone-300 hover:border-saffron-400 hover:text-saffron-600 transition-all duration-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-9 h-9 rounded-full bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 shadow-lg flex items-center justify-center text-stone-600 dark:text-stone-300 hover:border-saffron-400 hover:text-saffron-600 transition-all duration-300 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden mx-5">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="w-full flex-shrink-0 px-1"
                  >
                    <div className="p-6 rounded-3xl bg-stone-50 dark:bg-stone-900/60 border-2 border-stone-200 dark:border-stone-800 flex flex-col h-full relative overflow-hidden">
                      {/* Decorative quote icon */}
                      <div className="absolute top-4 right-4 opacity-5">
                        <Quote size={50} className="text-saffron-500" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={16} className="text-amber-400 fill-amber-400 drop-shadow-sm" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6 italic flex-1 relative z-10">
                        "{t.text}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-stone-200 dark:border-stone-800 mt-auto">
                        <div className="relative flex-shrink-0">
                          <img
                            src={t.image}
                            alt={t.name}
                            width="44"
                            height="44"
                            loading="lazy"
                            className="w-11 h-11 rounded-full object-cover shadow-md border-2 border-white dark:border-stone-700"
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-stone-900" />
                        </div>
                        <div>
                          <p className="font-bold text-stone-900 dark:text-white text-sm">{t.name}</p>
                          <p className="text-saffron-600 dark:text-saffron-400 text-xs font-semibold">{t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-7 h-2 bg-gradient-to-r from-saffron-500 to-amber-400 shadow-md shadow-saffron-500/30'
                    : 'w-2 h-2 bg-stone-300 dark:bg-stone-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex items-center justify-center mt-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-1.5 text-[11px] text-stone-400 dark:text-stone-500"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-stone-400' : 'bg-emerald-400 animate-pulse'}`} />
              {isPaused ? 'Paused' : 'Auto-sliding'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
