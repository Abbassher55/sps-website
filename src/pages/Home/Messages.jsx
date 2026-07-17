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
    <section className="py-20 max-w-[1280px] mx-auto px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {leaders.map((leader, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white p-8 rounded-[2rem] border border-[#c2c6d3] shadow-[0_10px_30px_-10px_rgba(13,44,84,0.08)]">
            <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-[#e5eeff]">
              <img className="w-full h-full object-cover" src={leader.img} alt={leader.name} />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <span className="material-symbols-outlined text-4xl text-[#003f83]/20">format_quote</span>
              <p className="italic text-sm sm:text-base text-[#424751] leading-relaxed">"{leader.quote}"</p>
              <div>
                <p className="text-base sm:text-lg font-semibold text-[#003f83]">{leader.name}</p>
                <p className="text-[10px] sm:text-xs text-[#424751] uppercase tracking-wider font-semibold">{leader.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}