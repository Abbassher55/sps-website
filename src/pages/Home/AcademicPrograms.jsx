
const programs = [
  {
    title: "Preschool",
    desc: "Montessori-based foundation for young learners aged 3-5 years.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYFtYsN5CPCwvPy9INdUzAif6kmhFaF0LZbrgdsU_8AHhoD_WKeEdRb-LOgUzOjxplKqIWWBfPUu3K1nY3mkns4jAopuurwhdsLDIOkBxAzEjbCoGbGBFknS_CM_nhmwcHytCgxY-gw_KX70Mr1qrxslkWFT9ge0jzuSq6zHDKaLJU51-r-WPy8y145KZNTAh7GoOMAhFDdnRxIzmi_t9TYNBEarFf1xuinRwGQo7s_W0ORCzZnqlK2Ji874Bv9o_pm8RbUmEYOg"
  },
  {
    title: "Primary School",
    desc: "Grades 1 to 5, focusing on core literacies and creative thinking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqUFK8DLdJZdvsakHF_Lobd_8GLkh6mdWj-LKjCiUb3mqnQnMwmNRKe3L_hGwW-Pj58XY7Rwv5LRS1GDTRPsLI0thzD2ddipXJNaox3JWdiQXbz5o_GU0G5ENR3_rDOS6CHzW8M4paY8bzEFUX7xKp56pweUGfWY2O40QH7jyFu9IvLzNIalE3s3_UHM97zElOziGZXGg81H_jj7_4gPAPn0duBknX1hmmFuQQNGiiU2jswSrGZTWWKwW05LpYbpMoTmzZ9a7iGw"
  },
  {
    title: "Secondary",
    desc: "Cambridge IGCSE & O-Levels for students aged 11 to 16 years.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa91cy7z_f4tlc4y51VL8XWgLxQRVdzzBWjR4R5HckGIPgBrxxpJTqpV1_q4GhQ-KMTE0ErSbNrTHeB1dEFb4TvCb0uULUgtZjv_0EIdNYAMOcqQsdTQsnp0_cW5Hk48oO9kBw6lezLP6gfC-BD8GfwK2GhR6PmNT0p8m-MQA1GUAWN7IAHchxMU5VI69CtWxzhGnxlz0KojTMTdfYdb2laAnHLySVQT75jfQ4bZSaCrN-bLFhSRIQM7phqnzAArd8Y948nUI15A"
  },
  {
    title: "A-Levels / College",
    desc: "Advanced pre-university education for specialized career tracks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0EBHWRyio2Wnd1tzWqmORvew6ada1zbhrKo3NoaSXMVM9s3jrhZJzxsIk1oMNBB4GpQKS95fIx_Qr2pzaq3vj3om1Hze8up-S1o8VpNR6_YL9yMtJJNegCuF1PXNr8sd_LMXxMoHNuTLhVzozAAjTJxpN9gcMxeZfBsHDr7k2iDNuvhIm6vBR3Z0XhOyq_gYh8LW7YJJBMNtoX9oEaHk8LoMktHPB_Vcm9f6JWEbuTWyZylyTR7aRwFyeY8_hIzsgSihG0JA-cg"
  }
];

export default function AcademicPrograms() {
  return (
    <section className="bg-surface-container-low">
      <div className="py-20 max-w-7xl mx-auto px-4 md:px-16 transition-all duration-700 opacity-100 translate-y-0">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <p className="font-label-md text-primary tracking-[0.2em] uppercase">Educational Pathways</p>
            <h2 className="font-headline-lg text-on-background text-4xl font-bold">Comprehensive Programs for Every Stage</h2>
          </div>
          <button className="bg-white border border-outline-variant px-8 py-3 rounded-xl font-label-md hover:bg-surface-container transition-all">
            View All Programs
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-white overflow-hidden rounded-2xl border border-outline-variant premium-shadow group cursor-pointer">
              <div className="h-48 overflow-hidden mb-6">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={program.image} 
                  alt={program.title}
                />
              </div>
              <div className="p-6 pt-0">
                <h4 className="font-headline-md text-primary  dark:text-secondary mb-2">{program.title}</h4>
                <p className="text-body-md text-on-surface-variant mb-6 dark">{program.desc}</p>
                <a className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-on-primary dark:bg-secondary-fixed dark:text-on-secondary-fixed font-bold hover:primary-gradient hover:text-white transition-all" href="#">
                  Apply Now <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}