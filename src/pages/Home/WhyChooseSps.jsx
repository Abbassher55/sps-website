export default function WhyChooseSps() {
  const attributes = [
    {
      icon: 'psychology',
      title: 'Expert Faculty',
      desc: 'Internationally certified educators committed to child-centric learning methodologies.',
      iconBg: 'bg-[#003f83]/10',
      iconText: 'text-[#003f83]'
    },
    {
      icon: 'verified_user',
      title: 'Islamic Values',
      desc: 'Integrating moral and spiritual development within a modern academic framework.',
      iconBg: 'bg-[#745b00]/10',
      iconText: 'text-[#745b00]'
    },
    {
      icon: 'biotech',
      title: 'Advanced Labs',
      desc: 'State-of-the-art facilities for Robotics, Coding, and Scientific Exploration.',
      iconBg: 'bg-[#003f83]/10',
      iconText: 'text-[#003f83]'
    },
    {
      icon: 'workspace_premium',
      title: 'Global Awards',
      desc: 'Consistently ranked among the top international schools for academic excellence.',
      iconBg: 'bg-[#745b00]/10',
      iconText: 'text-[#745b00]'
    }
  ];

  return (
    <section className="py-20 max-w-[1280px] mx-auto px-4 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-semibold text-[#003f83] tracking-[0.2em] uppercase">The SPS Edge</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c30]">A Tradition of Innovation and Value-Based Education</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {attributes.map((attr, idx) => (
          <div key={idx} className="p-8 rounded-[2rem] bg-white border border-[#c2c6d3] shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)] hover:bg-[#003f83] group transition-all">
            <div className={`w-16 h-16 rounded-2xl ${attr.iconBg} flex items-center justify-center ${attr.iconText} group-hover:bg-white/20 group-hover:text-white mb-6`}>
              <span className="material-symbols-outlined text-3xl">{attr.icon}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold group-hover:text-white mb-2 text-[#0b1c30]">{attr.title}</h4>
            <p className="text-sm text-[#424751] group-hover:text-white/80 leading-relaxed">{attr.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}