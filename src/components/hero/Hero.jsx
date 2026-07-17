const Hero = ({ title, bgImage, subtitle }) => {
  const stats = [
    { label: 'Founded in', value: '1985' },
    { label: 'Campus Area', value: '15 Acres' },
    { label: 'Students', value: '4500+' },
    { label: 'Alumni', value: '12000+' },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="relative bg-black/60 bg-cover bg-center h-[50vh] min-h-[350px] flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${bgImage || 'https://images.unsplash.com/photo-1541339907198-e08756defe33?q=80&w=2000'})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white flex flex-col items-center">
          <div className="bg-[#112F55] text-white py-2 px-6 rounded-full flex items-center gap-3 mb-6 shadow-md">
            <div className="w-8 h-8 rounded-full bg-[#1C4177] flex items-center justify-center font-bold text-sm">S</div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              {title || 'SPS. Excellence in Education'}
            </h1>
          </div>

          {subtitle && (
            <p className="max-w-2xl text-base md:text-lg text-gray-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Angle cut & Stats Section */}
      <div className="relative w-full h-16 bg-white overflow-hidden -mt-10 z-20">
        <div className="absolute top-0 right-0 bottom-[-100px] left-[-200px] bg-white transform rotate-[-3deg] origin-bottom-right"></div>
      </div>

      <div className="bg-white pb-6 z-30 relative">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-around gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1">
              <div className="text-3xl font-extrabold text-[#F8A411]">{stat.value}</div>
              <p className="text-xs font-semibold text-[#0A2540] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;