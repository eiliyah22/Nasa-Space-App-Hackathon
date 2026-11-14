import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Waves, Bot, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-ocean-100 shadow-sm w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* 1. Logo (Prevents shrinking) */}
          <NavLink to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-ocean-700 via-lagoon-500 to-amber-300 flex items-center justify-center shadow-lg text-white font-bold text-xl overflow-hidden">
              <Waves className="w-6 h-6 text-white" />
              <span className="absolute -bottom-1 text-[8px] tracking-widest uppercase font-extrabold text-amber-200">NISAR</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl xl:text-2xl font-black bg-gradient-to-r from-ocean-900 via-ocean-700 to-lagoon-600 bg-clip-text text-transparent">
                  Zitwar Lakot
                </span>
                <span className="hidden 2xl:flex px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> LIVE
                </span>
              </div>
              <p className="text-[10px] xl:text-xs font-semibold text-slate-500 hidden xl:block truncate max-w-[250px]">
                Nou Lamer, Nou Zeritaz, Nou Lavenir
              </p>
            </div>
          </NavLink>

          {/* 2. Desktop Nav (Changed breakpoint to xl so it doesn't overflow on small laptops) */}
          <nav className="hidden xl:flex items-center justify-center flex-1 gap-1 2xl:gap-3 px-2">
            <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${isActive ? 'text-ocean-700 bg-ocean-50' : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-100'}`}>
              Home
            </NavLink>
            <NavLink to="/network" className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap flex items-center gap-1.5 ${isActive ? 'text-ocean-700 bg-ocean-50' : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-100'}`}>
              Lakot Network
              <span className="hidden 2xl:inline px-1.5 py-0.5 bg-ocean-100 text-ocean-800 text-[9px] font-bold rounded-md">Jobs</span>
            </NavLink>
            <NavLink to="/feed" className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${isActive ? 'text-ocean-700 bg-ocean-50' : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-100'}`}>
              Lakot Vibe
            </NavLink>
            <NavLink to="/analytics" className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${isActive ? 'text-ocean-700 bg-ocean-50' : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-100'}`}>
              NISAR Lab
            </NavLink>
            <NavLink to="/recreation" className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap ${isActive ? 'text-ocean-700 bg-ocean-50' : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-100'}`}>
              Lagoon Watch
            </NavLink>
            <NavLink to="/kids" className="px-3 py-2 rounded-xl text-sm font-bold transition bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 shadow-sm hover:brightness-105 whitespace-nowrap">
              Ti-Planz Lab
            </NavLink>
          </nav>

          {/* 3. Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Language Toggle (Hidden on smaller desktop, moved to mobile menu) */}
            <div className="hidden 2xl:inline-flex items-center p-1 bg-slate-200/80 rounded-xl text-xs font-bold text-slate-700 shadow-inner">
              {['EN', 'FR', 'Kreol'].map((l) => (
                <button key={l} className={`px-2.5 py-1 rounded-lg transition uppercase ${l === 'EN' ? 'bg-white text-ocean-900 shadow-sm' : 'hover:text-ocean-900'}`}>
                  {l}
                </button>
              ))}
            </div>

            <button className="relative p-2.5 rounded-xl bg-ocean-50 text-ocean-700 hover:bg-ocean-100 border border-ocean-200 transition">
              <Bot className="w-5 h-5 text-ocean-600" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-coral-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Mobile Hamburger (Now triggers up to xl screens) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-6 pt-3 pb-6 space-y-2 shadow-xl absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium">Home</NavLink>
          <NavLink to="/network" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium">Lakot Network</NavLink>
          <NavLink to="/feed" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium">Lakot Vibe</NavLink>
          <NavLink to="/analytics" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium">NISAR Lab</NavLink>
          <NavLink to="/recreation" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 font-medium">Beach & Lagoon Watch</NavLink>
          <NavLink to="/kids" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-xl font-bold bg-amber-100 text-amber-900 mt-2">Ti-Planz Lab</NavLink>
          
          {/* Mobile Language Toggle */}
          <div className="pt-4 mt-4 border-t border-slate-200">
            <p className="text-xs font-bold text-slate-500 mb-2 uppercase">Language</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-xl bg-ocean-50 text-ocean-700 font-bold text-xs border border-ocean-200">EN</button>
              <button className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs hover:bg-slate-200">FR</button>
              <button className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs hover:bg-slate-200">Kreol</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}