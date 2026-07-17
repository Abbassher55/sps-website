const newsItems = [
  {
    category: "Athletics",
    title: "SPS wins Regional Interschool Football Championship",
    date: "May 10, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfIlg9JmNVSa4IgWqB2cHvXIfyrCk1Lm1vy8jV39V8EBQ3iluLc1vo5WQD8qvFOZO62BMOBHikm_4l4CF1XQ8vmo0Vn4w_daaxJnhUHQpNhyv5zjCvycqRQvxLEbevSLOsmQHvm__KwT7x6PJUZuJJ_B6vtH4AQlkvuQy86YQQWcE4P0azJofP52arumMTQGywPamZCuaTS6STL9u_lt8V1oNSmhlWVvP5QKQxkNYXc3jmm3NvKaIFiO3d3z31bky6H4_DTfTekQ"
  },
  {
    category: "Academic",
    title: "National Science Fair: SPS Students Bag 3 Gold Medals",
    date: "May 08, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsHQGxMX9opDpcw_wOzwWaQjBb3Bkj5goHmE7KHhnMm954RR5uTjmNYzB4_gm--Sh3_OIRlG46rigCdCO7RpeQy287GcDDaOUQpCjZcrEdLXbPffD7ikX1UD8qQP-HRXyLo6Kd5krMM85z8jWnIu7QFcCPglYqOlx9LSvBfIbe6-1jBIEJwmU-nhe17BOKmO_EwVz5a1EEW1bQJQrgyPCW8AGFr5Lhbo-V0EdPNDWz4ZUPgIHAYUDcnPdG5DsHGhMys1Cw6vEbiw"
  },
  {
    category: "Community",
    title: "Ramadan Drive: Community Support Initiative Success",
    date: "May 05, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoxvhzNNcmu8LtAk4UHBp5X60BCEebWjlQMAHgczXlPsKEqjUgpoY9rHVvTRYten9g9Mt2wanfyYuZF8wXrMmg0z_roy_qaLFjX79SbLOHebgXPbee7Ip6gZi2z2b7b7VntXOZOUQPf5xTNlKyp-qlDFXM3aFBltHKWYpUh9izCgvuGRxzZYbkwDeVbvfNwCbFEIQm_sdyA7mBRO-SNGcsAgKY1nwT-9uJrBMrTK1Hzf6uflG90lIL6yJ_fYbJ1BvMuIMSQtRa7g"
  }
];

export default function NewsAndEvents() {
  return (
    <section className="py-20 max-w-[1280px] mx-auto px-4 md:px-16">
      <div className="flex justify-between items-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
        <h2 className="font-headline-lg text-on-background text-4xl font-bold">Latest Updates &amp; Happenings</h2>
        <a className="text-primary font-bold flex items-center gap-2" href="#">
          View Newsroom <span className="material-symbols-outlined">chevron_right</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 opacity-100 translate-y-0">
        {/* Main Featured News Card */}
        <div className="lg:col-span-2 relative group overflow-hidden rounded-[2rem] h-[500px] border border-outline-variant premium-shadow">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGBpyRmWLlP0ppSrNS73rLQJLankJnZV4n2KoeVbhjz7gkQVgwTIPbo9whI4bC30r2ha--azHyeSNKnMUpkyrw0OvDBVpccDNtkBFBX2iCuWOYp6IcbicuH_3Jx1_JQFxCZPNHOuXnAXAt5wydx7YJmX4KuUG94SRkKIyiy8RPi8Fw_z8M0yiNhh5EZJq1YEuyXK09ScbFKPjjHnpMLpIxuY0_RyqtRi-UHKTpvSp5TjpiJW6VT7p7f1g_sUeCcb3zjKVfipYIA" 
            alt="Annual Convocation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end text-white">
            <div className="mb-4 flex gap-3">
              <span className="bg-secondary-container text-on-secondary-fixed px-3 py-1 rounded-full text-label-sm font-bold">Featured Event</span>
              <span className="text-label-sm border border-white/40 px-3 py-1 rounded-full">May 15, 2024</span>
            </div>
            <h3 className="font-display-lg text-3xl md:text-4xl mb-4 leading-tight">Annual Convocation 2024: Celebrating Our Future Leaders</h3>
            <p className="text-body-md text-white/80 max-w-xl mb-6">Join us as we honor the graduating class of 2024 in a grand ceremony featuring distinguished guests and inspirational speakers.</p>
            <a className="inline-flex items-center gap-2 text-white font-bold hover:underline" href="#">
              Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Sidebar News Grid */}
        <div className="space-y-6">
          {newsItems.map((item, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer">
              <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-all" src={item.image} alt={item.title} />
              </div>
              <div>
                <p className="text-label-sm text-primary font-bold mb-1">{item.category}</p>
                <h4 className="font-headline-md text-[16px] leading-tight mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-label-sm text-on-surface-variant">{item.date}</p>
              </div>
            </div>
          ))}
          <div className="pt-4">
            <button className="w-full py-4 rounded-xl border border-outline-variant text-label-md hover:bg-surface-container transition-all">
              Download Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}