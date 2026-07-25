import { Link } from 'react-router-dom';

export default function QuickLinks() {
  const links = [
    { icon: 'edit_document', title: 'Admissions', subtitle: 'Join SPS', href: '/admissions' },
    { icon: 'account_balance', title: 'Fees Portal', subtitle: 'Secure Payments', href: '/fees' },
    { icon: 'school', title: 'Scholarships', subtitle: 'Apply for Merit', href: '/scholarships' },
    { icon: 'event_note', title: 'Events', subtitle: 'School Calendar', href: '/events' },
    { icon: 'map', title: 'Locations', subtitle: 'Find a Campus', href: '/locations' },
    { icon: 'groups', title: 'Alumni', subtitle: 'Connect Back', href: '/alumni' },
  ];

  return (
    /* Outer Section Wrapper with Dark Surface Background */
    <section className="bg-surface-container-low  dark:bg-surface-dim py-16 lg:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {links.map((link) => (
            <Link 
              key={link.title} 
              to={link.href}
              className="group bg-surface-container-lowest dark:bg-surface-container p-5 sm:p-6 rounded-2xl border border-outline-variant/60 hover:border-primary dark:hover:border-primary-fixed transition-all duration-300 hover:-translate-y-1 premium-shadow flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary dark:group-hover:bg-secondary-fixed dark:group-hover:text-on-secondary-fixed transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl select-none dark:text-white">
                    {link.icon}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <p className="text-base sm:text-lg font-semibold text-on-surface transition-colors duration-200">
                  {link.title}
                </p>
                <p className="text-xs text-on-surface-variant mt-1 font-normal">
                  {link.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}