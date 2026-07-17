import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Contact', path: '/contact' },
  ];

  // Utility to style the active link
  const linkStyles = ({ isActive }) => 
    `text-sm font-medium transition-colors ${
      isActive ? 'text-[#F8A411] border-b-2 border-[#F8A411] pb-1' : 'text-gray-700 hover:text-[#F8A411]'
    }`;

  return (
    <header className="w-full">
      {/* 1. TOP BAR */}
      <div className="bg-[#0A2540] text-white text-xs py-1.5 px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>+92 345 1234567</span>
          <span>info@sps.edu.pk</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/portal" className="hover:opacity-80">Parent Portal</Link>
          <button className="bg-[#F8A411] text-[#0A2540] font-bold px-3 py-1 rounded-sm text-[10px] hover:bg-[#e0930f] transition-all">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0A2540] text-white font-bold flex items-center justify-center">S</div>
            <span className="font-bold text-lg text-[#0A2540]">SPS</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkStyles}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Contact CTA Button */}
          <Link to="/contact" className="hidden md:block text-xs font-semibold px-4 py-1.5 border-2 border-[#0A2540] text-[#0A2540] rounded-sm hover:bg-[#0A2540] hover:text-white transition-all">
            CONTACT US
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;