import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Campus Image (Crisp & Unblurred) */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="SPS Campus" 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYnVgrQJhhHI4exvTtWJGHY81edbig-lO9RNUZdYTZzR42RHV0r_KXoXaffaTMPpWQrRuOPIufQOxrCutIAARpB6j65pNDyrX7LQ4twstlm1K4weRr060ihowUOSvXt9kC46z2yfyfdfbMw_Em4PYpxmZuDtbiezu6hzBhssdRgc4V0aIyWf-JT0ohvZ1pv-0bhJMBsQCs6jQHz4z77IOGFarOy-1pC1rcY1v-0vXXSUt2zB4PF9w6A-Hsa_fLR2eHIohuj5v2XQ"
        />
        {/* Crisp Image Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl space-y-8 text-white">
          
          {/* Admissions Open Pill */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-medium border border-white/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
            Admissions Open for Session 2026-27
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Shaping <span className="text-secondary-fixed dark:text-secondary">Visionaries</span> Through Academic Excellence.
          </h1>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg text-white/90 max-w-xl font-normal leading-relaxed">
            SPS provides a holistic learning environment blending modern STEM education with core values, preparing students for global leadership.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Register Now: Deep Primary Blue in Light Mode, Bright Gold in Dark Mode */}
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center bg-primary text-on-primary dark:bg-secondary-fixed dark:text-on-secondary-fixed px-10 py-4 rounded-xl font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all"
            >
              Register Now
            </Link>
            
            {/* Learn More: Original Glassmorphic Style */}
            <Link
              to="/about"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-xl font-medium transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Key Statistics Grid */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-2xl">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-secondary-fixed dark:text-secondary">5000+</p>
              <p className="text-xs text-white/80 uppercase tracking-wider font-semibold mt-1">Students</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-secondary-fixed dark:text-secondary">12</p>
              <p className="text-xs text-white/80 uppercase tracking-wider font-semibold mt-1">Campuses</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-secondary-fixed dark:text-secondary">40+</p>
              <p className="text-xs text-white/80 uppercase tracking-wider font-semibold mt-1">Years</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}