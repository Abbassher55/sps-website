
const campuses = [
  {
    name: "Mingora Campus",
    type: "Boys & Girls (Separate Wings)",
    address: "Saidu Sharif Road, Mingora, Swat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa91cy7z_f4tlc4y51VL8XWgLxQRVdzzBWjR4R5HckGIPgBrxxpJTqpV1_q4GhQ-KMTE0ErSbNrTHeB1dEFb4TvCb0uULUgtZjv_0EIdNYAMOcqQsdTQsnp0_cW5Hk48oO9kBw6lezLP6gfC-BD8GfwK2GhR6PmNT0p8m-MQA1GUAWN7IAHchxMU5VI69CtWxzhGnxlz0KojTMTdfYdb2laAnHLySVQT75jfQ4bZSaCrN-bLFhSRIQM7phqnzAArd8Y948nUI15A"
  },
  {
    name: "Kabal Campus",
    type: "Co-Education (Primary to Matric)",
    address: "Main Kabal Bazar, Swat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa91cy7z_f4tlc4y51VL8XWgLxQRVdzzBWjR4R5HckGIPgBrxxpJTqpV1_q4GhQ-KMTE0ErSbNrTHeB1dEFb4TvCb0uULUgtZjv_0EIdNYAMOcqQsdTQsnp0_cW5Hk48oO9kBw6lezLP6gfC-BD8GfwK2GhR6PmNT0p8m-MQA1GUAWN7IAHchxMU5VI69CtWxzhGnxlz0KojTMTdfYdb2laAnHLySVQT75jfQ4bZSaCrN-bLFhSRIQM7phqnzAArd8Y948nUI15A"
  },
  {
    name: "Matta Campus",
    type: "Girls High School & College",
    address: "College Road, Matta, Swat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqUFK8DLdJZdvsakHF_Lobd_8GLkh6mdWj-LKjCiUb3mqnQnMwmNRKe3L_hGwW-Pj58XY7Rwv5LRS1GDTRPsLI0thzD2ddipXJNaox3JWdiQXbz5o_GU0G5ENR3_rDOS6CHzW8M4paY8bzEFUX7xKp56pweUGfWY2O40QH7jyFu9IvLzNIalE3s3_UHM97zElOziGZXGg81H_jj7_4gPAPn0duBknX1hmmFuQQNGiiU2jswSrGZTWWKwW05LpYbpMoTmzZ9a7iGw"
  }
];

export default function Campuses() {
  return (
    <section className="py-20 max-w-[1280px] mx-auto px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div>
          <p className="font-label-md text-primary tracking-[0.2em] uppercase">Our Footprint</p>
          <h2 className="font-headline-lg text-on-background text-4xl font-bold">State-of-the-Art Campuses</h2>
        </div>
        <button className="bg-white border border-outline-variant px-8 py-3 rounded-xl font-label-md hover:bg-surface-container transition-all">
          Find on Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {campuses.map((campus, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-outline-variant premium-shadow group">
            <div className="h-64 relative overflow-hidden">
              <img 
                alt={campus.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={campus.image} 
              />
              <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-label-sm font-bold text-primary">
                Active Campus
              </span>
            </div>
            <div className="p-8">
              <h4 className="font-headline-md text-2xl font-bold text-on-background mb-2">{campus.name}</h4>
              <p className="text-label-sm text-primary font-semibold mb-4">{campus.type}</p>
              <p className="text-body-md text-on-surface-variant flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-1">location_on</span>
                {campus.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}