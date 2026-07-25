export default function WhyChooseSps() {
  const attributes = [
    {
      icon: 'psychology',
      title: 'Expert Faculty',
      desc: 'Internationally certified educators committed to child-centric learning methodologies.',
      accent: 'primary'
    },
    {
      icon: 'verified_user',
      title: 'Islamic Values',
      desc: 'Integrating moral and spiritual development within a modern academic framework.',
      accent: 'secondary'
    },
    {
      icon: 'biotech',
      title: 'Advanced Labs',
      desc: 'State-of-the-art facilities for Robotics, Coding, and Scientific Exploration.',
      accent: 'primary'
    },
    {
      icon: 'workspace_premium',
      title: 'Global Awards',
      desc: 'Consistently ranked among the top international schools for academic excellence.',
      accent: 'secondary'
    }
  ];

  return (
    <section className="dark:bg-surface-dim py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-semibold text-primary dark:text-secondary tracking-[0.2em] uppercase">
          The SPS Edge
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-2">
          A Tradition of Innovation and Value-Based Education
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {attributes.map((attr, idx) => {
          const isPrimary = attr.accent === 'primary';

          return (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/40 premium-shadow hover:bg-primary hover:border-primary dark:hover:bg-primary-container dark:hover:border-primary-container group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isPrimary
                    ? 'bg-primary text-white dark:bg-primary-container group-hover:bg-white/20 group-hover:text-white dark:group-hover:bg-white/20 dark:group-hover:text-white'
                    : 'bg-secondary-container text-on-secondary-container dark:bg-secondary-container dark:text-white group-hover:bg-white/20 group-hover:text-white dark:group-hover:bg-white/20 dark:group-hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-3xl select-none">
                  {attr.icon}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-semibold text-on-surface group-hover:text-white dark:group-hover:text-on-primary-container mb-2 transition-colors duration-200">
                {attr.title}
              </h3>
              <p className="text-sm text-on-surface-variant group-hover:text-white/80 dark:group-hover:text-on-primary-container/80 leading-relaxed transition-colors duration-200">
                {attr.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}