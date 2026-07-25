
export default function StatsSection() {
  const stats = [
    { num: '500+', label: 'Certified Teachers' },
    { num: '150+', label: 'Global Awards' },
    { num: '25k+', label: 'Success Alumni' },
    { num: '100%', label: 'Board Results' },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-[#003f83] to-[#001b3f] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">{stat.num}</p>
            <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}