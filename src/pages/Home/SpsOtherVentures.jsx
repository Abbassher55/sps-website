const ventures = [
  {
    title: "SPS Trekking Club",
    desc: "Fostering adventure and environmental awareness through guided excursions into nature.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZWFf9LMU4Gp1dNv43kg_LpjMVswdpZejaCVSHNPE4TqunCxnKk0jgNse64bO_ZzZ_JDS8C028yqS5Qad_fhSg4ntvfSkwxOtmyWMC5TVLkq9hShVnKJIpcx5Fg9Kpw3aQMZYcPZ2sMB3Cs0JoSePS_w_yRg9oMs20EzAikU7T7e1qoIbKFypA9LEmDsDDHLTTlyzgfqdj6YTGOOjIQEIq5XcFDOnhpoohAC7Xxky_duIbBCyK2bSHnOotyKpJ4Lok-KrXpGrxUA"
  },
  {
    title: "Al-Fajar Foundation",
    desc: "Our philanthropic arm dedicated to community welfare and educational support for all.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH7ju51C-JvMflYJxHr1iJUCEHCzknibO2AVS0nTNo1dINI3f83oEmbaE250LiIzZIKm6Wcx56l5qfYZM6dJtynpn_Jzgf6IkExqvVcATEQDY69LZFEru-PKRZmXK6ZaUQa_2TFXwCzIUONrPfRlihSiLMp5HoskhJ9WZizyobOrwoK6YbsI0g4Z6IG-Fa0Q5y6dSo2hZEYIZc0XVz0Rdf1KrKvDloblyU-W5eF4f0EjftVVB2JdDXsGw7BCT9KYR-69_Aa33QVA"
  },
  {
    title: "SPS Institute of Nursing And Allied Health Sciences",
    desc: "Professional healthcare training program preparing the next generation of medical heroes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyyQp8WHijf2UqbZ8G25gtIRuMUZXQ1e0jkUPESpUBtlrTQpQpz1qOKEoXnlXaALHqxy4yhRLYdlOe03auovzYuRciFPK_2wsVHB_XcMVZigh8lu682cBzjrWaBGzzCT3HE6jOJpJUzBDVGMW9WLKdUMMwPFJIBHom-hJHu59-74zoX7owGPHdpdJn8dM96z6LujzKGEixBizdthrPURuhC0AdzBx4p-VdQhKUnKUGzVqxCTUx0kfeyuOUCb1y8a8CLjct6alPeg"
  }
];

export default function SpsOtherVentures() {
  return (
    <section className="bg-surface">
      <div className="py-20 max-w-[1280px] mx-auto px-4 md:px-16 transition-all duration-700 opacity-100 translate-y-0">
        <div className="text-center mb-16">
          <p className="font-label-md text-primary tracking-[0.2em] uppercase">Beyond Academics</p>
          <h2 className="font-headline-lg text-on-background text-4xl font-bold">SPS OTHER VENTURES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-outline-variant premium-shadow group">
              <div className="h-56 relative overflow-hidden">
                <img 
                  alt={venture.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={venture.image} 
                />
              </div>
              <div className="p-8">
                <h4 className="font-headline-md text-primary mb-3 font-bold text-xl">{venture.title}</h4>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{venture.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}