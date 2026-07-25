import  { useState } from 'react';

const testimonials = [
  {
    name: "Mrs. Elena Rodriguez",
    role: "Parent of Grade 5 Student",
    text: "The transition of my son to SPS was seamless. The teachers are incredibly supportive, and the balance between academic rigor and extracurricular activities is exactly what we were looking for.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    featured: false
  },
  {
    name: "James Wilson",
    role: "Alumni, Class of 2020",
    text: "SPS didn't just teach me subjects; it taught me how to learn. The robotics program sparked my passion for engineering, which I am now pursuing at Stanford.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    featured: true,
    action: "Watch Success Story"
  },
  {
    name: "Dr. Amna Khan",
    role: "Alumni, Class of 2015",
    text: "The foundation built at SPS helped me navigate medical school with discipline and curiosity. The clinical exposure and values taught here are exceptional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    featured: false
  },
  {
    name: "Prof. Tariq Mahmood",
    role: "Parent of O-Level Student",
    text: "Choosing this institute for my daughter was the best decision. The digital classrooms and structured stem laboratories give students an undeniable modern edge.",
    image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=200&h=200",
    featured: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum step index limits tracking when displaying 2 cards side-by-side
  const maxIndex = testimonials.length - 2;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-surface relative overflow-hidden">
      <div className="py-20 max-w-7xl mx-auto px-4 md:px-16 transition-all duration-700 opacity-100 translate-y-0">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <p className="font-label-md text-primary dark:text-secondary tracking-[0.2em] uppercase font-semibold text-sm">
            Voices of our Community
          </p>
          <h2 className="font-headline-lg text-on-background text-4xl font-bold mt-2">
            What Parents &amp; Alumni Say
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Slider track sliding 50% width per increment item */}
          <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-full md:w-1/2 shrink-0 px-4">
                <div className={`p-10 rounded-4xl border relative h-full transition-all duration-300 premium-shadow flex flex-col justify-between ${
                  t.featured 
                    ? "bg-primary dark:bg-surface border-primary text-on-background" 
                    : "bg-surface-container-lowest dark:bg-surface-container  border-outline-variant text-on-background"
                }`}>
                  
                  <div>
                    <span className="absolute top-10 right-10 material-symbols-outlined text-6xl text-primary/10 select-none">
                      format_quote
                    </span>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 rounded-full overflow-hidden border ${
                        t.featured ? "border-primary" : "border-outline-variant"
                      }`}>
                        <img className="w-full h-full object-cover" src={t.image} alt={t.name} />
                      </div>
                      <div>
                        <p className={`font-headline-md text-[18px] font-bold ${t.featured 
                        ? "text-white" 
                        : "text-primary"
                       }`}>{t.name}</p>
                        <p className={`text-sm font-medium text-primary ${t.featured 
                        ? "text-white" 
                        : "text-primary"
                       }`}>{t.role}</p>
                      </div>
                    </div>

                    <p className={`text-base ${t.featured 
                        ? "text-white" 
                        : "text-primary"
                       } italic leading-relaxed`}>
                      "{t.text}"
                    </p>
                  </div>

                  {t.action && (
                    <div className="mt-8 flex items-center gap-2 cursor-pointer w-fit group">
                      <div className={`w-10 h-10 rounded-full dark:bg-primary/10 flex items-center justify-center dark:group-hover:bg-primary
                      group-hover:bg-surface transition-all duration-300 bg-secondary ${t.featured 
                        ? "text-white" 
                        : "text-primary"
                       }`} >
                        <span className={`material-symbols-outlined transition-all duration-300 text-sm ${t.featured 
                        ? "text-white group-hover:text-primary" 
                        : "text-primary dark:group-hover:text-white"
                       }`}>play_arrow</span>
                      </div>
                      <span className={`text-sm font-semibold group-hover:underline ${t.featured 
                        ? "text-white" 
                        : "text-primary"
                       }`}>
                        {t.action}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls with Visual State Modifiers */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center bg-white dark:bg-secondary transition-all duration-300 ${
                currentIndex === 0 
                  ? "opacity-40 cursor-not-allowed text-on-surface-variant" 
                  : "text-on-background hover:border-primary hover:text-primary"
              }`}
              aria-label="Previous card"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            <button 
              onClick={handleNext} 
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center bg-white dark:bg-secondary transition-all duration-300 ${
                currentIndex >= maxIndex 
                  ? "opacity-40 cursor-not-allowed text-on-surface-variant" 
                  : "text-on-background hover:border-primary hover:text-primary"
              }`}
              aria-label="Next card"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}