export default function Footer() {
  return (
    <footer className="bg-[#001b3f] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <img 
              alt="SPS Logo" 
              className="h-16 w-auto brightness-0 invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn7oZ3yvltwtqphLb6f4sFBuUErHgTkPYsbliNvqubLvYwkoij7DaXdTT84MUYQysoE3iXvGh6cT9HU5YxJTLsTVKUYoiS3KUwx7SrbIWWNMzsOUriydPswuAT--Uuma7RWYR0qaa0lariM5xD0CYBKqcSlsGUckIryCJ0tmu4uKBtpmeC2Mru4ec073kKXdCElTpTA_f3PRKVeEKUZStOcabIpTrklk6r07np0DH4GogRDCTF4pl9uLthn_i45rdmTS-y6bnEQ"
            />
            <p className="text-sm text-white/70 leading-relaxed">
              SPS offers premium education with global standards and Islamic values. Join our community of 5000+ students across 12 campuses.
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <a className="hover:text-[#ffe08b] transition-colors" href="#">
                <span className="material-symbols-outlined">face_nod</span>
              </a>
              <a className="hover:text-[#ffe08b] transition-colors" href="#">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a className="hover:text-[#ffe08b] transition-colors" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wider text-[#ffe08b]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Our History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admission Procedure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fee Structure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers at SPS</a></li>
            </ul>
          </div>

          {/* Column 3: Campuses */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wider text-[#ffe08b]">Our Campuses</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">SPS Global Heights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SPS Heritage Campus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SPS Eco-Valley</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metropolis Central</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wider text-[#ffe08b]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ffe08b] text-lg shrink-0">location_on</span>
                <span>123 Education Sector, Metropolis City, MC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffe08b] text-lg shrink-0">call</span>
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffe08b] text-lg shrink-0">mail</span>
                <span>admissions@sps.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 SPS (Excellence in Education). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}