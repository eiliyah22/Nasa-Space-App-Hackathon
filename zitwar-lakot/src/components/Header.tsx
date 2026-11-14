// src/components/Header.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Waves, Bot, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Lakot Network', path: '/network', badge: 'Jobs' },
    { name: 'Lakot Vibe', path: '/feed' },
    { name: 'NISAR Lab', path: '/analytics' },
    { name: 'Beach & Lagoon Watch', path: '/recreation' },
    { name: 'Ti-Planz Lab', path: '/kids', isSpecial: true },
  ];

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-ocean-100 shadow-sm w-full transition-all duration-300">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Logo & Branding */}
          <NavLink to="/" className="flex items-center space-x-3.5 flex-shrink-0">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-ocean-700 via-lagoon-500 to-amber-300 flex items-center justify-center shadow-lg shadow-ocean-500/20 text-white font-bold text-xl overflow-hidden group">
              <Waves className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -bottom-1 text-[9px] tracking-widest uppercase font-extrabold text-amber-200">NISAR</span>
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl font-black bg-gradient-to-r from-ocean-900 via-ocean-700 to-lagoon-600 bg-clip-text text-transparent">Zitwar Lakot</span>
                <span className="hidden sm:flex px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> NISAR 2026 LIVE
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 hidden 2xl:block">Nou Lamer, Nou Zeritaz, Nou Lavenir • Mauritius Ocean Platform</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-2 xl:gap-5 px-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition ${
                    link.isSpecial
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 shadow-sm hover:brightness-105'
                      : isActive
                      ? 'text-ocean-700 bg-ocean-50'
                      : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
                {link.badge && (
                  <span className="px-2 py-0.5 bg-ocean-100 text-ocean-800 text-[10px] font-bold rounded-full">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Side: Language Toggle & AI Bot */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="hidden sm:inline-flex items-center p-1 bg-slate-200/80 rounded-xl text-xs font-bold text-slate-700 shadow-inner">
              {['en', 'fr', 'kreol'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-lg transition uppercase ${
                    lang === l ? 'bg-white text-ocean-900 shadow-sm' : 'hover:text-ocean-900'
                  }`}
                >
                  {l === 'kreol' ? 'Kreol' : l}
                </button>
              ))}
            </div>

            <button className="relative p-2.5 rounded-xl bg-ocean-50 text-ocean-700 hover:bg-ocean-100 border border-ocean-200 transition">
              <Bot className="w-5 h-5 text-ocean-600" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-coral-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 pt-3 pb-6 space-y-2 shadow-xl absolute w-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-2.5 rounded-xl font-medium ${
                  link.isSpecial
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : isActive
                    ? 'bg-ocean-50 text-ocean-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}