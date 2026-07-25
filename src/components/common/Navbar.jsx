import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const location = useLocation();

  // Apply dark mode class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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

  return (
    <nav className="sticky top-0 z-50 bg-page-bg/80 backdrop-blur-md shadow-sm border-b border-card-border/40 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 h-20 flex justify-between items-center">
        
        {/* SPS Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img 
              alt="SPS Logo" 
              className="h-14 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn7oZ3yvltwtqphLb6f4sFBuUErHgTkPYsbliNvqubLvYwkoij7DaXdTT84MUYQysoE3iXvGh6cT9HU5YxJTLsTVKUYoiS3KUwx7SrbIWWNMzsOUriydPswuAT--Uuma7RWYR0qaa0lariM5xD0CYBKqcSlsGUckIryCJ0tmu4uKBtpmeC2Mru4ec073kKXdCElTpTA_f3PRKVeEKUZStOcabIpTrklk6r07np0DH4GogRDCTF4pl9uLthn_i45rdmTS-y6bnEQ"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                isActive(link.path)
                  ? 'text-brand-primary border-b-2 border-brand-primary pb-1 font-semibold dark:text-blue-400 dark:border-blue-400'
                  : 'text-text-sub hover:text-brand-primary dark:hover:text-blue-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Controls: Theme Switcher, Register Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* Desktop Theme Selector Dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              className="p-2.5 rounded-xl border border-card-border/60 bg-card-bg text-text-body hover:border-brand-primary dark:hover:border-blue-400 transition-colors flex items-center justify-center shadow-xs"
              aria-label="Select Theme"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'dark_mode' : theme === 'light' ? 'light_mode' : 'desktop_windows'}
              </span>
            </button>

            {isThemeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-card-bg border border-card-border/60 rounded-xl shadow-xl py-2 z-50">
                <button
                  onClick={() => { setTheme('light'); setIsThemeDropdownOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2.5 transition-colors ${
                    theme === 'light' ? 'text-brand-primary font-semibold' : 'text-text-body hover:bg-page-bg'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">light_mode</span> Light
                </button>
                <button
                  onClick={() => { setTheme('dark'); setIsThemeDropdownOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2.5 transition-colors ${
                    theme === 'dark' ? 'text-brand-primary font-semibold' : 'text-text-body hover:bg-page-bg'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">dark_mode</span> Dark
                </button>
                <button
                  onClick={() => { setTheme('system'); setIsThemeDropdownOpen(false); }}
                  className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2.5 transition-colors ${
                    theme === 'system' ? 'text-brand-primary font-semibold' : 'text-text-body hover:bg-page-bg'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">desktop_windows</span> System
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <Link 
            to="/register" 
            className="hidden sm:block bg-brand-primary text-white dark:bg-blue-500 dark:text-gray-950 px-8 py-3 rounded-xl font-medium text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
          >
            Register Now
          </Link>

          {/* Quick Mobile Theme Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="sm:hidden p-2 rounded-xl border border-card-border/60 text-text-body flex items-center"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-text-body focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-card-border/50 bg-page-bg px-6 py-6 space-y-3 transition-colors">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-brand-primary text-white dark:bg-blue-500 dark:text-gray-950'
                  : 'text-text-body hover:bg-card-bg'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/register"
              className="block w-full text-center bg-brand-primary text-white dark:bg-blue-500 dark:text-gray-950 py-3 rounded-xl font-medium shadow-md"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}