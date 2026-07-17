export default function AboutSps() {
  return (
    <section className="py-20 bg-[#eff4ff]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img className="w-full h-64 object-cover rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLYwuRTpqDr4GdXndsEFYXINcPx-NNxoJ_KltXo27r3FC2Xu6DrNOeWVsXwHZZi6HBxrGQe-DN1eoqbvtgh6Jx7KFwyuZtsvl2uTGneorjA6J87od1oHhcgGGfAgG6adguMsn2rnfUI66FmtKnmNGUqgArNkAUpMeXSxlIj4F4Ks1hjIZojxf_ENafI0iZerEhJQZy-S9VVdDWFnkY7rgCd35UYgusXJOH3QQoQk7nnpYkdP6bQE4vX516S2iloNOhHZ4pE7vSPg" alt="SPS Campus life"/>
              <img className="w-full h-48 object-cover rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_6j8s0_N6Cd88SurbQ2M-mLOFOYd5SkjkQ0-mLccNtHVnhPk2L_xPejpDQ3fBpNJFxFQ2161lBUY5vI2ez56fsi-3pDtSYNVPZ0IhZ1a_d_sH8q2-1gomUmpIe2rytj_JS-sRzJLbuC5aZO1JzFXu4Ei7oKdiU-0niwP2h2fbQMdJvN5EGi6xtvPMlgW46a7820nGCBY7ufxvkOvESNYJ15u788nGlpINJywfumaLLLK8LO-JY9-8n6rbyZmlpI4e4mPQuO3tA" alt="Students in science laboratory"/>
            </div>
            <div className="pt-12 space-y-4">
              <img className="w-full h-48 object-cover rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWZT5smqMoluh5e6yDnaNWfV3SRrqvPwsaNcDODiA5NecXBHEg0UW7sbgQ_2yGXQCS1Gv5K8Zgxjd19pPzxNwrU47W8nQHJBlqBMchqMlcAu4fpHkaD0uIf5KcuBKTGkRN4W_Gq385zjvRMHXpZMeoZE11eRTX0Phz9pX4l92C7MrsoemSy8-4klrpLnyFptvtP-Da5ervA3aJMNIegdngpz5dGy8ZxOjAawRkdoPR_XLbkbYbzU-FEkn6VfLvl6AnbsrMiS2pfg" alt="Primary classroom activity"/>
              <img className="w-full h-64 object-cover rounded-2xl shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlFpr-14tEA0VDFwBxbaYxxGj8G1WAIm0Qx5yYqKdlogf8ClHsHVPAK7-dwqvANtYQ8zycuUzc0WMWhsRGDLNJdUS7Fv9HDGof939Y3K9V_Gyb7d6T0DEwg6sMZWO_OcUcy_AT6K00K5KxoMMsuMZc5l5BkwxoC-1nyZh6-wH89pnFN927383ealWML8lt04WF8XD_1sRxdHH7-eBBmMqX-BSurDgYYIf7Bi-kWindm-xJEgVuZV05HFeWBe8Nn8NnR-tSyHQBCg" alt="Extra curricular programs"/>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <p className="text-xs font-semibold text-[#003f83] tracking-[0.2em] uppercase">About SPS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c30]">Committed to Excellence in Every Sphere of Development</h2>
          <p className="text-sm sm:text-base text-[#424751] leading-relaxed">Founded on the principles of academic rigor and moral integrity, SPS has evolved into a leading educational institution. We believe in fostering a learning community that celebrates curiosity and empowers students to reach their full potential.</p>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)] border border-[#c2c6d3]/30">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#fdd355] flex items-center justify-center text-[#735a00]">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#0b1c30]">Our Vision</h4>
                <p className="text-sm text-[#424751]">To be a globally recognized center of learning that nurtures ethical leaders.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)] border border-[#c2c6d3]/30">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#1a56a6] flex items-center justify-center text-white">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#0b1c30]">Our Mission</h4>
                <p className="text-sm text-[#424751]">Providing holistic education through innovative curricula and traditional values.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}