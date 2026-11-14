import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { coastalSites } from '../data/sites';
import { ShieldCheck, Activity, ArrowRight, Calendar, MapPin, RefreshCw } from 'lucide-react';

// --- Fix for missing Leaflet marker icons in React ---
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});
// -----------------------------------------------------

export default function RecreationTab() {
  const navigate = useNavigate();
  
  const [selectedSite, setSelectedSite] = useState<string>('bluebay');
  const center: [number, number] = [-20.348404, 57.552152];

  const mapLocations = [
    { id: 'flic', coords: [-20.273, 57.363] as [number, number] },
    { id: 'morne', coords: [-20.452, 57.319] as [number, number] },
    { id: 'bluebay', coords: [-20.443, 57.712] as [number, number] },
    { id: 'montchoisy', coords: [-20.016, 57.555] as [number, number] },
    { id: 'bellemare', coords: [-20.198, 57.772] as [number, number] },
  ];

  const activeData = coastalSites[selectedSite];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      {/* Page Header (Speed Zones removed) */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-black text-slate-900">Mauritius Coastal Live & Lagoon Radar</h2>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Real-time
          </span>
        </div>
        <p className="text-slate-600 text-sm mt-1">
          Click any coastal region to monitor live beach activities, tide state, and speed limit compliance.
        </p>
      </div>

      {/* Main Split View */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive Map */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <MapPin className="w-4 h-4 text-ocean-600" />
              <span>Interactive Mauritius Coast & Vessel AIS</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Scale: 1:250,000</span>
          </div>

          <div className="relative w-full h-[520px] rounded-2xl border border-slate-100 overflow-hidden z-0">
            <MapContainer 
              center={center} 
              zoom={10} 
              style={{ height: '100%', width: '100%', zIndex: 0 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                className="map-tiles"
              />

              {mapLocations.map((loc) => {
                const siteData = coastalSites[loc.id];
                return (
                  <Marker 
                    key={loc.id} 
                    position={loc.coords}
                    eventHandlers={{
                      click: () => setSelectedSite(loc.id),
                    }}
                  >
                    <Popup className="rounded-xl">
                      <div className="text-center p-1 font-sans">
                        <strong className="block text-sm mb-2 text-slate-800">{siteData.title}</strong>
                        <button 
                          onClick={() => setSelectedSite(loc.id)}
                          className="bg-ocean-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-ocean-700 transition"
                        >
                          Load Telemetry
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
             <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Stations</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Vessels (Demo)</span>
             </div>
             <button onClick={() => window.location.reload()} className="text-ocean-700 font-bold hover:underline flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" /> Refresh AIS Radar Pings
             </button>
          </div>
        </div>

        {/* Right Column: Dynamic Dossier */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-ocean-600 tracking-wider">Live Coastal Station</span>
                <h3 className="text-2xl font-black text-slate-900">{activeData.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{activeData.coords}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 whitespace-nowrap flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> {activeData.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-6">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Tide Level</div>
                <div className="text-base font-black text-ocean-700 mt-0.5">{activeData.tide}</div>
                <div className="text-[10px] text-emerald-600 font-semibold">Active</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">UV Index</div>
                <div className="text-base font-black text-amber-600 mt-0.5">{activeData.uv}</div>
                <div className="text-[10px] text-slate-500">Reef-safe Sunscreen</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Clarity</div>
                <div className="text-base font-black text-teal-600 mt-0.5">{activeData.clarity}</div>
                <div className="text-[10px] text-teal-600 font-semibold">NISAR Optimal</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-ocean-50 border border-ocean-100 text-xs space-y-2">
              <div className="font-bold text-ocean-900 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-ocean-600" /> Radar Observation Insight:
              </div>
              <p className="text-ocean-800 leading-relaxed">
                {activeData.nisarNote}
              </p>
            </div>

            <button 
              onClick={() => navigate(`/beach/${selectedSite}`)}
              className="w-full mt-6 py-3.5 bg-slate-900 hover:bg-ocean-900 text-white rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              View Historical & Erosion Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-ocean-600" />
                <h4 className="font-bold text-slate-900 text-sm">Happening Today</h4>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Validated Events</span>
            </div>

            <div className="space-y-3">
              {activeData.events.map((ev, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                      {ev.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">{ev.title}</h5>
                      <p className="text-[11px] text-slate-500">{ev.time}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-100 text-cyan-800 whitespace-nowrap">
                    {ev.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}