export default function QuickLinks() {
  const links = [
    { icon: 'edit_document', title: 'Admissions', subtitle: 'Join SPS' },
    { icon: 'account_balance', title: 'Fees Portal', subtitle: 'Secure Payments' },
    { icon: 'school', title: 'Scholarships', subtitle: 'Apply for Merit' },
    { icon: 'event_note', title: 'Events', subtitle: 'School Calendar' },
    { icon: 'map', title: 'Locations', subtitle: 'Find a Campus' },
    { icon: 'groups', title: 'Alumni', subtitle: 'Connect Back' },
  ];

  return (
    <section className="py-20 max-w-[1280px] mx-auto px-4 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {links.map((link, idx) => (
          <a 
            key={idx} 
            className="group bg-white p-6 rounded-2xl border border-[#c2c6d3] hover:border-[#003f83] transition-all hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)]" 
            href="#"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#003f83] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#003f83] group-hover:to-[#001b3f] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">{link.icon}</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-[#0b1c30]">{link.title}</p>
            <p className="text-xs text-[#424751] mt-1">{link.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}