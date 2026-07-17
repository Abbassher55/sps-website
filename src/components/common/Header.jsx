import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Contact', path: '/contact' },
  ];

  // Utility to style desktop active links
  const linkStyles = ({ isActive }) => 
    `text-sm font-medium transition-colors ${
      isActive ? 'text-[#F8A411] border-b-2 border-[#F8A411] pb-1' : 'text-gray-700 hover:text-[#F8A411]'
    }`;

  // Utility to style mobile active links
  const mobileLinkStyles = ({ isActive }) => 
    `block px-4 py-2 text-base font-medium rounded-md transition-colors ${
      isActive ? 'bg-[#F8A411]/10 text-[#F8A411]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#F8A411]'
    }`;

  return (
    <header className="w-full relative z-50">
      {/* 1. TOP BAR */}
      <div className="bg-[#0A2540] text-white text-[10px] sm:text-xs py-1.5 px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <span>+92 345 1234567</span>
          <span className="hidden sm:inline">info@sps.edu.pk</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/portal" className="hover:opacity-80">Parent Portal</Link>
          <button className="bg-[#F8A411] text-[#0A2540] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-sm text-[10px] hover:bg-[#e0930f] transition-all">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 rounded-full bg-[#0A2540] text-white font-bold flex items-center justify-center">S</div>
            <span className="font-bold text-lg text-[#0A2540]">SPS</span>
          </Link>

          {/* Nav Links (Desktop only: hidden on small screens, flex on medium+) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkStyles}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Contact CTA Button (Desktop only) */}
          <Link to="/contact" className="hidden md:block text-xs font-semibold px-4 py-1.5 border-2 border-[#0A2540] text-[#0A2540] rounded-sm hover:bg-[#0A2540] hover:text-white transition-all">
            CONTACT US
          </Link>

          {/* Mobile Menu Button (Visible only on mobile/tablet) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close (X) Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 3. MOBILE DROPDOWN MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full left-0 z-40">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={mobileLinkStyles}
                onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
              >
                {link.name}
              </NavLink>
            ))}
            {/* Mobile Contact Button */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="block w-full text-center text-xs font-semibold py-2.5 bg-[#0A2540] text-white rounded-sm hover:bg-opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;