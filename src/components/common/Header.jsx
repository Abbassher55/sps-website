
export default function Header() {
  return (
    <header className="bg-[#003f83] text-white py-3 hidden md:block">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined !text-sm">call</span>
            <span>+1 (800) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            <span className="material-symbols-outlined !text-sm">mail</span>
            <span>admissions@sps.edu</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-white/80">
            <a className="hover:text-[#ffe08b] transition-colors" href="#">
              <span className="material-symbols-outlined">face_nod</span>
            </a>
            <a className="hover:text-[#ffe08b] transition-colors" href="#">
              <span className="material-symbols-outlined">language</span>
            </a>
            <a className="hover:text-[#ffe08b] transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a className="bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full text-xs transition-all" href="#">
              Student Portal
            </a>
            <a className="bg-[#fdd355] text-[#241a00] px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:bg-yellow-400" href="#">
              Staff Portal
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}