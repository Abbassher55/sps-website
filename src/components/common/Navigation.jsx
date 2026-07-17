export default function Navigation({ isOpen, setIsOpen }) {
  const navLinks = [
    { label: 'Home', active: true },
    { label: 'About Us' },
    { label: 'Curriculum' },
    { label: 'Activities' },
    { label: 'CSR' },
    { label: 'Admissions' },
    { label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f9ff]/80 backdrop-blur-md shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            alt="SPS Logo" 
            className="h-14 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn7oZ3yvltwtqphLb6f4sFBuUErHgTkPYsbliNvqubLvYwkoij7DaXdTT84MUYQysoE3iXvGh6cT9HU5YxJTLsTVKUYoiS3KUwx7SrbIWWNMzsOUriydPswuAT--Uuma7RWYR0qaa0lariM5xD0CYBKqcSlsGUckIryCJ0tmu4uKBtpmeC2Mru4ec073kKXdCElTpTA_f3PRKVeEKUZStOcabIpTrklk6r07np0DH4GogRDCTF4pl9uLthn_i45rdmTS-y6bnEQ"
          />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              className={link.active 
                ? "text-[#003f83] border-b-2 border-[#003f83] pb-1" 
                : "text-[#424751] hover:text-[#003f83] transition-colors"
              } 
              href="#"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a className="hidden sm:block bg-gradient-to-br from-[#003f83] to-[#001b3f] text-white px-8 py-3 rounded-xl text-sm font-medium hover:scale-[1.02] active:scale-95 transition-all" href="#">
            Register Now
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-[#0b1c30]">
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-[#f8f9ff] border-t border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg animate-fadeIn">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              className={`text-base font-medium py-1 ${link.active ? 'text-[#003f83]' : 'text-[#424751]'}`} 
              href="#"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="block text-center bg-gradient-to-br from-[#003f83] to-[#001b3f] text-white px-6 py-3 rounded-xl text-sm font-medium" href="#">
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}