import { useEffect, useState } from 'react';
import { ArrowRight, Target, Eye, Heart, Users, Globe, Coffee, Sparkles, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';
import { useNavigate } from 'react-router-dom';
import aboutSelectionImg from '../assets/About_selection.png';
import aboutSelection02Img from '../assets/About_selection02.png';
import hemantImg from '../assets/team/Hemant.png';
import rahulImg from '../assets/team/Rahul.jpeg';
import buntyImg from '../assets/team/bunty.png';
import vikramImg from '../assets/team/vikram.PNG';
import avdheshImg from '../assets/team/Avdhesh.png';

const founder = {
  name: 'Hemant Mohane',
  role: 'Founder & CEO',
  image: hemantImg,
  objectPos: 'center 15%',
  desc: 'Visionary leader driving strategy, innovation, and creative direction at Zone Digi Tech.',
  linkedin: 'https://www.linkedin.com/in/hemant-mohane-35440a330/',
  email: 'mailto:hemantmohane29@gmail.com',
};

const teamMembers = [
  {
    name: 'Rahul Powale',
    role: 'Digital Marketing Lead',
    image: rahulImg,
    objectPos: 'center 15%',
    desc: 'Growth strategist driving digital marketing, SEO, and performance campaigns.',
    linkedin: 'https://www.linkedin.com/in/rahul-powale-b34312326/',
    email: 'mailto:rahulpowale0666@gmail.com',
  },
  {
    name: 'Bhojraj Mahajan',
    role: 'Full Stack Developer',
    image: buntyImg,
    objectPos: 'center 20%',
    desc: 'Architecting robust, scalable web applications and high-performance digital solutions.',
    linkedin: 'https://www.linkedin.com/in/bhojraj-mahajan-80481a329/',
    email: 'mailto:bhojrajmahajan924913@gmail.com',
  },
  {
    name: 'Vikram Kumar',
    role: 'Operation Lead',
    image: vikramImg,
    objectPos: 'center 15%',
    desc: 'Streamlining operational execution, workflow management, and team productivity.',
    linkedin: 'https://www.linkedin.com/in/vikram-kumar-7686702a0/',
    email: 'mailto:Kumarvikram00087@gmail.com',
  },
  {
    name: 'Avdhesh Pal',
    role: 'Finance Manager',
    image: avdheshImg,
    objectPos: 'center 27%',
    desc: 'Managing financial planning, budgeting, reporting, and operational fiscal health.',
    linkedin: 'https://www.linkedin.com/in/avadhesh-pal-263b4a3a5/',
    email: 'mailto:avadheskumar213@gmail.com',
  },
];

const values = [
  { icon: Heart, title: 'Client First', desc: "Every decision we make is guided by what's best for our clients and their growth." },
  { icon: Target, title: 'Results Driven', desc: 'We measure success by the tangible business impact our work creates.' },
  { icon: Sparkles, title: 'Creative Excellence', desc: 'We set new standards in design quality and creative problem-solving.' },
  { icon: Users, title: 'Collaborative Spirit', desc: 'We work as a true partner, not just a vendor, in every engagement.' },
  { icon: Globe, title: 'Global Mindset', desc: 'Indian roots, global standards — we build for the world stage.' },
  { icon: Coffee, title: 'Always Improving', desc: "We're obsessed with learning, iterating, and getting better every day." },
];

const milestones = [
  { year: '2025', title: 'Studio Founded', desc: 'Started with a dedicated team in Bhopal.' },
  { year: '2025', title: 'First 04 Clients', desc: 'Expanded services and onboarded our initial set of clients.' },
  { year: '2026', title: '10+ Happy Clients', desc: 'Grew our portfolio, delivering high-impact digital solutions.' },
];

export default function About() {
  useScrollAnimation();
  const navigate = useNavigate();
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0);
  const [teamTouchStart, setTeamTouchStart] = useState(null);
  const [teamTouchEnd, setTeamTouchEnd] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNav = (page) => {
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Auto-slider effect for mobile team carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setMobileTeamIndex((prev) => {
        // Loop back to start when reaching the end
        if (prev >= teamMembers.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play when user interacts, resume after 10 seconds
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000); // Resume after 10 seconds
  };

  const handleTeamTouchStart = (e) => {
    pauseAutoPlay();
    setTeamTouchStart(e.targetTouches[0].clientX);
  };

  const handleTeamTouchMove = (e) => setTeamTouchEnd(e.targetTouches[0].clientX);

  const handleTeamTouchEnd = () => {
    if (!teamTouchStart || !teamTouchEnd) return;
    const distance = teamTouchStart - teamTouchEnd;
    if (Math.abs(distance) > 40) {
      if (distance > 0 && mobileTeamIndex < teamMembers.length - 1) {
        setMobileTeamIndex((prev) => prev + 1);
      } else if (distance < 0 && mobileTeamIndex > 0) {
        setMobileTeamIndex((prev) => prev - 1);
      }
    }
    setTeamTouchStart(null);
    setTeamTouchEnd(null);
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-20">
      {/* ── HERO ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-50 dark:opacity-10 pointer-events-none" />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full blur-3xl opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.2), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="tag mb-5">Our Story</div>
              <h1 className="section-title text-stone-900 dark:text-white mb-6">
                Built With Passion,<br />
                <span className="gradient-text">Driven by Purpose</span>
              </h1>
              <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-2xl">
                We are Zone Digi Tech, A creative digital studio born in the heart of Bhopal. We exist to help Indian businesses and global startups build digital presences that command attention, build trust, and drive growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => handleNav('contact')} className="btn-primary px-7 py-3.5 text-sm font-semibold">
                  <span className="flex items-center gap-2">Get Started <ArrowRight size={15} /></span>
                </button>
                <button onClick={() => handleNav('projects')} className="btn-outline px-7 py-3.5 text-sm font-semibold">
                  View Our Work
                </button>
              </div>
            </div>

            <div>
              <img
                src={aboutSelectionImg}
                alt="About Zone Digi Tech"
                width="900"
                height="420"
                loading="eager"
                className="w-full h-auto max-h-[420px] object-contain rounded-2xl mx-auto mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] max-h-[420px] group border border-stone-200/50 dark:border-stone-800/50">
              <img
                src={aboutSelection02Img}
                alt="Zone Digi Tech Team"
                width="800"
                height="600"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-stone-900 rounded-2xl p-5 shadow-2xl shadow-black/20 dark:shadow-black/60 border border-stone-200 dark:border-stone-700 hidden md:block ring-1 ring-stone-100 dark:ring-stone-800">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '5+', label: 'Projects' },
                  { value: '4+', label: 'Clients' },
                  { value: '10', label: 'Team' },
                  { value: '1.5 Yrs', label: 'Experience' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-xl text-stone-900 dark:text-white gradient-text">{s.value}</div>
                    <div className="text-stone-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-on-scroll-right">
            <h2 className="section-title text-stone-900 dark:text-white mb-5">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
              Zone Digi Tech started in 2026 with a simple belief: every Indian business deserves a world-class digital presence. Our founder Hemant Mohane, came back to India with a mission to bring that level of quality to local businesses.
            </p>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
              Starting from a small co-working space in Karond, Bhopal, we've grown into a full-service creative studio with a team of 5+ passionate professionals serving clients across India.
            </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40">
                <Target size={20} className="text-saffron-600 dark:text-saffron-400 mb-2" />
                <h3 className="font-bold text-stone-900 dark:text-white text-sm mb-1">Our Mission</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">Empower every Indian business with premium digital presence.</p>
              </div>
              <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40">
                <Eye size={20} className="text-saffron-600 dark:text-saffron-400 mb-2" />
                <h3 className="font-bold text-stone-900 dark:text-white text-sm mb-1">Our Vision</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">To be India's most trusted digital partner for small and medium businesses.</p>
              </div>
            </div>
            <button onClick={() => handleNav('contact')} className="btn-primary inline-flex items-center gap-2 text-sm">
              <span>Work With Us</span> <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Our Values</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="animate-on-scroll group p-6 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:border-saffron-300 dark:hover:border-saffron-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.12), rgba(249,184,74,0.08))' }}>
                  <v.icon size={20} className="text-saffron-600 dark:text-saffron-400" />
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Our Journey</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Milestones That<br />
              <span className="gradient-text">Define Us</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-saffron-400 to-transparent" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="animate-on-scroll flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-saffron-400 bg-white dark:bg-stone-900"
                    style={{ boxShadow: '0 0 0 4px rgba(224,123,0,0.1)' }}>
                    <span className="font-display font-bold text-saffron-600 dark:text-saffron-400 text-xs">{m.year}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-display font-bold text-stone-900 dark:text-white mb-1">{m.title}</h3>
                    <p className="text-stone-500 dark:text-stone-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mx-auto mb-5">Our Team</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Meet the <span className="gradient-text">Minds Behind</span><br />Zone Digi Tech
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm max-w-xl mx-auto">
              The passionate leaders, developers, and strategists dedicated to transforming ideas into digital success.
            </p>
          </div>

          {/* Founder & CEO — Centered Middle Card */}
          <div className="max-w-md mx-auto mb-16 animate-on-scroll">
            <div className="group text-center p-8 rounded-3xl bg-white dark:bg-stone-900/80 border border-saffron-300/40 dark:border-saffron-700/40 shadow-2xl hover:shadow-saffron-500/10 transition-all duration-300 relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-saffron-500 to-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-bl-xl shadow-sm">
                Founder & CEO
              </div>

              <div className="relative w-36 h-36 mx-auto mb-5 group/avatar cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-saffron-500 via-amber-400 to-emerald-400 shadow-xl group-hover/avatar:scale-105 transition-all duration-500">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{ objectPosition: founder.objectPos || 'center 15%' }}
                    className="w-full h-full object-cover rounded-full bg-stone-100 dark:bg-stone-800 group-hover/avatar:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-stone-900 dark:text-white mb-1">
                {founder.name}
              </h3>
              <p className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-3">
                {founder.role}
              </p>
              <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mb-6 max-w-xs">
                {founder.desc}
              </p>

              {/* Social links with animations */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-100 dark:border-stone-800 w-full justify-center">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative w-11 h-11 rounded-full flex items-center justify-center bg-[#0a66c2]/10 dark:bg-[#0a66c2]/20 text-[#0a66c2] dark:text-[#38bdf8] hover:bg-[#0a66c2] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0a66c2]/40 active:scale-90 active:rotate-12"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={19} className="group-hover/icon:scale-125 group-hover/icon:rotate-12 transition-all duration-300 ease-out" />
                </a>
                <a
                  href={founder.email}
                  className="group/icon relative w-11 h-11 rounded-full flex items-center justify-center bg-[#ea4335]/10 dark:bg-[#ea4335]/20 text-[#ea4335] dark:text-[#f87171] hover:bg-[#ea4335] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ea4335]/40 active:scale-90 active:-rotate-12"
                  title="Send Email"
                >
                  <Mail size={19} className="group-hover/icon:scale-125 group-hover/icon:-rotate-12 transition-all duration-300 ease-out" />
                </a>
              </div>
            </div>
          </div>

          {/* Core Team Members — Desktop: Normal 4 Column Grid */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="animate-on-scroll group text-center p-6 rounded-3xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:border-saffron-300 dark:hover:border-saffron-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-32 h-32 mx-auto mb-4 group/avatar cursor-pointer">
                    <div className="w-full h-full rounded-full overflow-hidden p-1 bg-stone-200/80 dark:bg-stone-800 group-hover/avatar:bg-gradient-to-tr group-hover/avatar:from-saffron-500 group-hover/avatar:to-amber-400 transition-all duration-500 shadow-md group-hover/avatar:shadow-xl group-hover/avatar:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ objectPosition: member.objectPos || 'center top' }}
                        className="w-full h-full object-cover rounded-full bg-white dark:bg-stone-900 group-hover/avatar:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-stone-900 dark:text-white text-base mb-1">
                    {member.name}
                  </h3>
                  <p className="text-saffron-600 dark:text-saffron-400 text-xs font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mb-5">
                    {member.desc}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800/80 w-full">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon w-10 h-10 rounded-full flex items-center justify-center bg-[#0a66c2]/10 dark:bg-[#0a66c2]/20 text-[#0a66c2] dark:text-[#38bdf8] hover:bg-[#0a66c2] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0a66c2]/40 active:scale-90 active:rotate-12"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={17} className="group-hover/icon:scale-125 group-hover/icon:rotate-12 transition-all duration-300 ease-out" />
                  </a>
                  <a
                    href={member.email}
                    className="group/icon w-10 h-10 rounded-full flex items-center justify-center bg-[#ea4335]/10 dark:bg-[#ea4335]/20 text-[#ea4335] dark:text-[#f87171] hover:bg-[#ea4335] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#ea4335]/40 active:scale-90 active:-rotate-12"
                    title="Send Email"
                  >
                    <Mail size={17} className="group-hover/icon:scale-125 group-hover/icon:-rotate-12 transition-all duration-300 ease-out" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Core Team Members — Mobile: Interactive Touch Slider */}
          <div className="block md:hidden">
            {/* Mobile Slider Controls & Counter */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-900 dark:text-white">
                  Team Member {mobileTeamIndex + 1} of {teamMembers.length}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  {isAutoPlaying ? '🔄 Auto' : '⏸ Paused'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    pauseAutoPlay();
                    setMobileTeamIndex(prev => Math.max(0, prev - 1));
                  }}
                  disabled={mobileTeamIndex === 0}
                  className={`w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center transition-colors ${
                    mobileTeamIndex === 0
                      ? 'opacity-40 cursor-not-allowed bg-stone-100 dark:bg-stone-800 text-stone-400'
                      : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 shadow-sm active:scale-95'
                  }`}
                  aria-label="Previous team member"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => {
                    pauseAutoPlay();
                    setMobileTeamIndex(prev => Math.min(teamMembers.length - 1, prev + 1));
                  }}
                  disabled={mobileTeamIndex === teamMembers.length - 1}
                  className={`w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center transition-colors ${
                    mobileTeamIndex === teamMembers.length - 1
                      ? 'opacity-40 cursor-not-allowed bg-stone-100 dark:bg-stone-800 text-stone-400'
                      : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 shadow-sm active:scale-95'
                  }`}
                  aria-label="Next team member"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Mobile Swipe Container */}
            <div
              className="overflow-hidden"
              onTouchStart={handleTeamTouchStart}
              onTouchMove={handleTeamTouchMove}
              onTouchEnd={handleTeamTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${mobileTeamIndex * 100}%)` }}
              >
                {teamMembers.map((member, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="text-center p-6 rounded-3xl bg-white dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 shadow-lg flex flex-col justify-between">
                      <div>
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <div className="w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-tr from-saffron-500 to-amber-400 shadow-md">
                            <img
                              src={member.image}
                              alt={member.name}
                              style={{ objectPosition: member.objectPos || 'center top' }}
                              className="w-full h-full object-cover rounded-full bg-white dark:bg-stone-900"
                            />
                          </div>
                        </div>
                        <h3 className="font-display font-bold text-stone-900 dark:text-white text-lg mb-1">
                          {member.name}
                        </h3>
                        <p className="text-saffron-600 dark:text-saffron-400 text-xs font-semibold mb-2">
                          {member.role}
                        </p>
                        <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mb-5">
                          {member.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800/80 w-full">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0a66c2]/10 dark:bg-[#0a66c2]/20 text-[#0a66c2] dark:text-[#38bdf8] shadow-sm active:scale-90"
                          title="LinkedIn Profile"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={member.email}
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ea4335]/10 dark:bg-[#ea4335]/20 text-[#ea4335] dark:text-[#f87171] shadow-sm active:scale-90"
                          title="Send Email"
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {teamMembers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    pauseAutoPlay();
                    setMobileTeamIndex(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === mobileTeamIndex
                      ? 'w-6 h-2 bg-gradient-to-r from-saffron-500 to-amber-400'
                      : 'w-2 h-2 bg-stone-300 dark:bg-stone-600'
                  }`}
                  aria-label={`Go to team member slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a00, #2d1a00)' }}>
        <div className="absolute inset-0 indian-pattern opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to Join Our <span className="gradient-text">Family?</span>
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            Whether you're a startup, an established business, or an individual creator — we'd love to hear your story and help you build your digital future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => handleNav('contact')} className="btn-primary px-8 py-3.5 text-sm">
              <span className="flex items-center gap-2">Start a Conversation <ArrowRight size={16} /></span>
            </button>
            <button onClick={() => handleNav('projects')} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              See Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
