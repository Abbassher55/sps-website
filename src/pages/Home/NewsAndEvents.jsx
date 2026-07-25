import { Link } from 'react-router-dom';

const newsItems = [
  {
    category: "Athletics",
    title: "SPS wins Regional Interschool Football Championship",
    date: "May 10, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfIlg9JmNVSa4IgWqB2cHvXIfyrCk1Lm1vy8jV39V8EBQ3iluLc1vo5WQD8qvFOZO62BMOBHikm_4l4CF1XQ8vmo0Vn4w_daaxJnhUHQpNhyv5zjCvycqRQvxLEbevSLOsmQHvm__KwT7x6PJUZuJJ_B6vtH4AQlkvuQy86YQQWcE4P0azJofP52arumMTQGywPamZCuaTS6STL9u_lt8V1oNSmhlWVvP5QKQxkNYXc3jmm3NvKaIFiO3d3z31bky6H4_DTfTekQ",
    href: "/news/football-championship"
  },
  {
    category: "Academic",
    title: "National Science Fair: SPS Students Bag 3 Gold Medals",
    date: "May 08, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsHQGxMX9opDpcw_wOzwWaQjBb3Bkj5goHmE7KHhnMm954RR5uTjmNYzB4_gm--Sh3_OIRlG46rigCdCO7RpeQy287GcDDaOUQpCjZcrEdLXbPffD7ikX1UD8qQP-HRXyLo6Kd5krMM85z8jWnIu7QFcCPglYqOlx9LSvBfIbe6-1jBIEJwmU-nhe17BOKmO_EwVz5a1EEW1bQJQrgyPCW8AGFr5Lhbo-V0EdPNDWz4ZUPgIHAYUDcnPdG5DsHGhMys1Cw6vEbiw",
    href: "/news/science-fair"
  },
  {
    category: "Community",
    title: "Ramadan Drive: Community Support Initiative Success",
    date: "May 05, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoxvhzNNcmu8LtAk4UHBp5X60BCEebWjlQMAHgczXlPsKEqjUgpoY9rHVvTRYten9g9Mt2wanfyYuZF8wXrMmg0z_roy_qaLFjX79SbLOHebgXPbee7Ip6gZi2z2b7b7VntXOZOUQPf5xTNlKyp-qlDFXM3aFBltHKWYpUh9izCgvuGRxzZYbkwDeVbvfNwCbFEIQm_sdyA7mBRO-SNGcsAgKY1nwT-9uJrBMrTK1Hzf6uflG90lIL6yJ_fYbJ1BvMuIMSQtRa7g",
    href: "/news/ramadan-drive"
  }
];

export default function NewsAndEvents() {
  return (
    <section className="dark:bg-surface-container-low py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
          Latest Updates &amp; Happenings
        </h2>
        <Link 
          to="/news" 
          className="text-primary dark:text-secondary font-bold flex items-center gap-1 hover:gap-2 transition-all duration-200"
        >
          View Newsroom 
          <span className="material-symbols-outlined text-xl select-none">chevron_right</span>
        </Link>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured News Card */}
        <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl h-115 sm:h-125 border border-outline-variant/40 dark:border-outline-variant/20 premium-shadow">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGBpyRmWLlP0ppSrNS73rLQJLankJnZV4n2KoeVbhjz7gkQVgwTIPbo9whI4bC30r2ha--azHyeSNKnMUpkyrw0OvDBVpccDNtkBFBX2iCuWOYp6IcbicuH_3Jx1_JQFxCZPNHOuXnAXAt5wydx7YJmX4KuUG94SRkKIyiy8RPi8Fw_z8M0yiNhh5EZJq1YEuyXK09ScbFKPjjHnpMLpIxuY0_RyqtRi-UHKTpvSp5TjpiJW6VT7p7f1g_sUeCcb3zjKVfipYIA" 
            alt="Annual Convocation"
          />
          {/* Gradient Overlay for Text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
            <div className="mb-3 flex flex-wrap gap-2 items-center">
              <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-white px-3 py-1 rounded-full text-xs font-bold">
                Featured Event
              </span>
              <span className="text-xs border border-white/30 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                May 15, 2024
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">
              Annual Convocation 2024: Celebrating Our Future Leaders
            </h3>
            
            <p className="text-sm sm:text-base text-white/80 max-w-xl mb-6 line-clamp-2 sm:line-clamp-none leading-relaxed">
              Join us as we honor the graduating class of 2024 in a grand ceremony featuring distinguished guests and inspirational speakers.
            </p>
            
            <Link 
              to="/news/annual-convocation-2024" 
              className="inline-flex items-center gap-2 text-white dark:text-secondary font-bold hover:text-secondary-fixed transition-colors duration-200"
            >
              Read Article 
              <span className="material-symbols-outlined text-base select-none">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Sidebar News Grid */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {newsItems.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.href} 
                className="flex gap-4 group p-2 rounded-2xl hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors duration-200"
              >
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-outline-variant/30">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={item.image} 
                    alt={item.title} 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-primary dark:text-secondary font-bold mb-1">
                    {item.category}
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold leading-snug text-on-surface group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <button className="w-full py-3.5 rounded-xl border border-outline-variant dark:border-outline-variant/40 bg-surface-container-lowest dark:bg-surface-container text-on-surface hover:bg-surface-container dark:hover:bg-surface-container-high font-semibold text-sm transition-all duration-200 shadow-sm">
              Download Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}