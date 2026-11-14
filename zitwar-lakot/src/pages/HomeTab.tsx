import { useNavigate } from 'react-router-dom';
import { 
  Satellite, Activity, MapPin, Briefcase, Info, 
  Anchor, Check, HeartHandshake, ArrowRight 
} from 'lucide-react';

export default function HomeTab() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-ocean-950 text-white pt-14 pb-20">
        
        {/* Background Image with Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1600&q=85"
            alt="Le Morne Brabant, Mauritius"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/60 via-ocean-950/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 via-transparent to-ocean-950/20"></div>
        </div>

        <div className="w-full px-6 sm:px-12 lg:px-20 relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-800/80 border border-ocean-600/50 text-cyan-300 text-xs font-bold tracking-wide">
                <Satellite className="w-4 h-4 text-lagoon-400" />
                <span>NASA Space Apps Mauritius • NASA-ISRO NISAR L-Band SAR Mission</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Zitwar Lakot: <br/>
                <span className="bg-gradient-to-r from-lagoon-400 via-sky-300 to-amber-200 bg-clip-text text-transparent">
                  Nou Lamer, Nou Zeritaz, Nou Lavenir
                </span>
              </h1>
              
              <p className="text-lg text-ocean-100 max-w-2xl leading-relaxed">
                An advanced Mauritian coastal observatory connecting state-of-the-art NASA-ISRO NISAR radar observations with local marine science, NGO conservation initiatives, and authentic lagoon communities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={() => navigate('/analytics')} className="px-6 py-3.5 rounded-xl font-bold bg-lagoon-500 hover:bg-lagoon-400 text-ocean-950 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-lagoon-500/25 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Explore NISAR Radar Lab
                </button>
                <button onClick={() => navigate('/recreation')} className="px-6 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-300" />
                  Live Lagoon & Boat Watch
                </button>
                <button onClick={() => navigate('/network')} className="px-5 py-3.5 rounded-xl font-bold bg-ocean-800/70 hover:bg-ocean-700 text-cyan-200 border border-ocean-600/40 transition-all flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Join Expeditions
                </button>
              </div>

              {/* Scientific Disclaimer */}
              <div className="p-4 rounded-2xl bg-ocean-900/90 border border-ocean-700/60 text-xs text-ocean-200 flex items-start gap-3 mt-4">
                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-amber-300 font-semibold">Core Scientific Principle:</strong> NISAR L-band SAR observations provide high-fidelity radar backscatter and phase measurements, but signal changes do not automatically constitute standalone erosion verdicts. We integrate tide gauge records, optical Sentinel-2 overlays, and local studies for validated coastal intelligence.
                </p>
              </div>
            </div>

            {/* Right Column: Live Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 bg-gradient-to-b from-ocean-800/90 to-ocean-950/90 border border-ocean-600/50 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-ocean-700/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-bold text-sm text-cyan-300">Live Coastal Telemetry</span>
                  </div>
                  <span className="text-xs text-ocean-300 font-mono">CRS: EPSG:3857</span>
                </div>

                <div className="mt-4 space-y-3">
                  {/* Site 1 */}
                  <div className="p-3.5 rounded-2xl bg-ocean-900/80 border border-ocean-700/70 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-ocean-300">Focal Site 01 • Southwest</div>
                      <div className="font-bold text-white text-base">Le Morne Brabant</div>
                      <div className="text-xs text-emerald-400 mt-0.5">NISAR L-band Polarimetric GCOV</div>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">Stable Reef</span>
                  </div>

                  {/* Site 2 */}
                  <div className="p-3.5 rounded-2xl bg-ocean-900/80 border border-ocean-700/70 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-ocean-300">Focal Site 02 • West Coast</div>
                      <div className="font-bold text-white text-base">Flic en Flac Lagoon</div>
                      <div className="text-xs text-amber-400 mt-0.5">Coherence Loss: -1.8 dB</div>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-950/80 text-amber-300 border border-amber-500/30">Shoreline Shift</span>
                  </div>

                  {/* Site 3 */}
                  <div className="p-3.5 rounded-2xl bg-ocean-900/80 border border-ocean-700/70 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-ocean-300">Focal Site 03 • Southeast</div>
                      <div className="font-bold text-white text-base">Blue Bay Marine Park</div>
                      <div className="text-xs text-lagoon-300 mt-0.5">Tide: High (+0.68m) | 14 Boats</div>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">5 Knots Zone</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-ocean-700/60 flex justify-between items-center text-xs text-ocean-300">
                  <span>Last Orbit: Track 127 L-SAR</span>
                  <button onClick={() => navigate('/analytics')} className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                    Full Spectrum <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= KPI STATS BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Satellite, val: "5 Sites", label: "NISAR Cal/Val", color: "text-ocean-700 bg-ocean-100" },
            { icon: Anchor, val: "28 Live", label: "Vessels Tracked", color: "text-emerald-700 bg-emerald-100" },
            { icon: Check, val: "14 Verified", label: "NGOs & Labs", color: "text-purple-700 bg-purple-100" },
            { icon: HeartHandshake, val: "182 Youths", label: "Volunteers", color: "text-amber-700 bg-amber-100" }
          ].map((kpi, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${kpi.color}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-800">{kpi.val}</div>
                <div className="text-xs font-medium text-slate-500">{kpi.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 3 PILLARS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ocean-600 font-bold text-xs uppercase tracking-widest">Holistic Framework</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">The Three Pillars of Mauritian Coastal Stewardship</h2>
          <p className="text-slate-600 mt-3 text-sm">Connecting satellite science with sustainable livelihood and cultural memory.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Economic */}
          <div className="group rounded-3xl p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-ocean-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Anchor className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Economic Pillar</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Supporting sustainable artisanal fisheries, ecotourism operators, and blue carbon economies with real-time lagoon navigation safety and verified water clarity indicators.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Artisanal pirogue speed safety alerts</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Coastal hotel beach erosion awareness</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Blue carbon mangrove economic valuation</li>
            </ul>
            <button onClick={() => navigate('/recreation')} className="text-sm font-semibold text-ocean-700 group-hover:text-ocean-900 flex items-center gap-1">
              Explore Blue Economy Maps <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Environmental */}
          <div className="group rounded-3xl p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-ocean-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Satellite className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Environmental Pillar</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Deciphering coastal geomorphology through NASA-ISRO NISAR L-band Synthetic Aperture Radar. Tracking soil moisture, ground subsidence, and coral reef fringe vulnerability.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> L-band penetration through cloud cover</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Soil moisture mapping at 200m resolution</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Multi-temporal interferometric coherence</li>
            </ul>
            <button onClick={() => navigate('/analytics')} className="text-sm font-semibold text-emerald-700 group-hover:text-emerald-900 flex items-center gap-1">
              Launch NISAR Scientific Console <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Social */}
          <div className="group rounded-3xl p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-ocean-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Social & Cultural Pillar</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Reconnecting every Mauritian citizen with our maritime heritage: from Le Morne Maroons history to Grand Port naval heritage, passing through intergenerational fisherfolk lore.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Intergenerational storytelling & Kreol voices</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Child-safe coastal heritage quest games</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Volunteer recruitment for reef restoration</li>
            </ul>
            <button onClick={() => navigate('/kids')} className="text-sm font-semibold text-cyan-700 group-hover:text-cyan-900 flex items-center gap-1">
              Enter Ti-Planz Kids Quest <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}