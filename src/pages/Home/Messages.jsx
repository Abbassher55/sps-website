export default function Messages() {
  const leaders = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd2b8VcPCrIxY9l8XuXJ4KA3i_gYxWWs8JiTyjN_jbmJxWG6B7Gkz9u-_hWXvsc58FAg6nFC7WYsbqYXm_ZbNEsTkuRjmniOrlKynQMlOzPCEjgs_v6XKJ8gegEWC8iW1fUCUSXdYfAAbWz8k-l9leuzwUli6mSNMSzSgaBMSCh2cETqWxtkHIlrLvfa-KioRSQLDXYEkgzH0pXwzvacqZTqbXTjO5QhwQBj8fx3SuKXaym8zBmWYCVnsFSKV91VoIQ2m9aYnnAw',
      quote: "Education is the most powerful weapon which you can use to change the world. At SPS, we provide the tools and environment for that change.",
      name: "Dr. Ahmed Salman",
      title: "Managing Director"
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBFiRNmj41pie5XCA8vUL0GztqNqT8YcRQvBUkStauYZI6guWg0sHA0BzYBa4yppNPxGwlvDUDWjvhXiDdkfBWeoT7rnqLdFmbet7vq8EZvNovnRoKQDQvAx-kMcHikvsMumqbmr8ASXQDDH7rfDaNUY5h1oSv033qkbUn8g7S7rif0IJzxLKIbjE5bI1k82gIdTpKucVw3VxCEHOVAZ7OX8qbiIV0Xzu4alIqyDt3PTXCN7p3ZkLDUia52gFpt_WbFrRRdZCdHA',
      quote: "Our goal is to create a nurturing environment where every child feels valued and inspired to explore their unique talents and capabilities.",
      name: "Mrs. Sarah Jenkins",
      title: "Executive Principal"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface-container-low dark:bg-surface-dim transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start bg-surface-container-lowest dark:bg-surface-container p-6 sm:p-8 rounded-3xl border border-outline-variant/40 premium-shadow transition-colors duration-300"
            >
              {/* Leader Photo */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border-4 border-primary-container/60 dark:border-primary-container/30">
                <img 
                  className="w-full h-full object-cover" 
                  src={leader.img} 
                  alt={leader.name} 
                />
              </div>

              {/* Quote & Info */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                <span className="material-symbols-outlined text-4xl text-primary/20 dark:text-primary-fixed/20 select-none block leading-none">
                  format_quote
                </span>
                
                <p className="italic text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  "{leader.quote}"
                </p>

                <div className="pt-2">
                  <p className="text-base sm:text-lg font-semibold text-primary dark:text-white">
                    {leader.name}
                  </p>
                  <p className="text-xs text-on-surface-variant/80 uppercase tracking-wider font-medium">
                    {leader.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}