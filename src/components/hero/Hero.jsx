export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="SPS Campus" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYnVgrQJhhHI4exvTtWJGHY81edbig-lO9RNUZdYTZzR42RHV0r_KXoXaffaTMPpWQrRuOPIufQOxrCutIAARpB6j65pNDyrX7LQ4twstlm1K4weRr060ihowUOSvXt9kC46z2yfyfdfbMw_Em4PYpxmZuDtbiezu6hzBhssdRgc4V0aIyWf-JT0ohvZ1pv-0bhJMBsQCs6jQHz4z77IOGFarOy-1pC1rcY1v-0vXXSUt2zB4PF9w6A-Hsa_fLR2eHIohuj5v2XQ"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        <div className="max-w-3xl space-y-8 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs border border-white/30">
            <span className="w-2 h-2 rounded-full bg-[#fdd355] animate-pulse"></span>
            Admissions Open for Session 2024-25
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Shaping <span className="text-[#ffe08b]">Visionaries</span> Through Academic Excellence.
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl font-normal leading-relaxed">
            SPS provides a holistic learning environment blending modern STEM education with core values, preparing students for global leadership.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-[#003f83] to-[#001b3f] text-white px-10 py-4 rounded-xl font-medium shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)] hover:scale-105 transition-all">
              Register Now
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 px-10 py-4 rounded-xl font-medium text-white hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#ffe08b]">5000+</p>
              <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold">Students</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#ffe08b]">12</p>
              <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold">Campuses</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#ffe08b]">40+</p>
              <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-semibold">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}