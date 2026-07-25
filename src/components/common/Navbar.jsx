import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Apply dark mode class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    
    const applyTheme = () => {
      if (
        theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    // Listen for OS system theme changes if set to 'system'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (theme === 'system') applyTheme();
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Activities', path: '/activities' },
    { name: 'CSR', path: '/csr' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* SPS Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center">
            <img 
              alt="SPS Logo" 
              className="h-12 sm:h-14 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn7oZ3yvltwtqphLb6f4sFBuUErHgTkPYsbliNvqubLvYwkoij7DaXdTT84MUYQysoE3iXvGh6cT9HU5YxJTLsTVKUYoiS3KUwx7SrbIWWNMzsOUriydPswuAT--Uuma7RWYR0qaa0lariM5xD0CYBKqcSlsGUckIryCJ0tmu4uKBtpmeC2Mru4ec073kKXdCElTpTA_f3PRKVeEKUZStOcabIpTrklk6r07np0DH4GogRDCTF4pl9uLthn_i45rdmTS-y6bnEQ"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-1 transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Theme Switcher Dropdown (Desktop & Tablet) */}
          <div className="relative hidden sm:block" ref={dropdownRef}>
            <button
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              className="p-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary transition-colors flex items-center justify-center shadow-xs"
              aria-label="Select Theme"
            >
              <span className="material-symbols-outlined text-xl select-none">
                {theme === 'dark' ? 'dark_mode' : theme === 'light' ? 'light_mode' : 'desktop_windows'}
              </span>
            </button>

            {isThemeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-lg py-1.5 z-50 overflow-hidden">
                {[
                  { key: 'light', label: 'Light', icon: 'light_mode' },
                  { key: 'dark', label: 'Dark', icon: 'dark_mode' },
                  { key: 'system', label: 'System', icon: 'desktop_windows' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => { setTheme(item.key); setIsThemeDropdownOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors ${
                      theme === item.key 
                        ? 'bg-surface-container-high text-primary font-semibold' 
                        : 'text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{item.icon}</span> 
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Call to Action Button */}
          <Link 
            to="/register" 
            className="hidden sm:inline-flex items-center justify-center primary-gradient text-on-primary px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all shadow-xs"
          >
            Register Now
          </Link>

          {/* Quick Mobile Theme Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="sm:hidden p-2 rounded-xl border border-outline-variant text-on-surface bg-surface-container-lowest flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-xl select-none">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface hover:text-primary focus:outline-none flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl select-none">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-outline-variant/60 bg-background px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-primary text-on-primary font-semibold'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="block w-full text-center primary-gradient text-on-primary py-3 rounded-xl text-base font-semibold shadow-xs"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}