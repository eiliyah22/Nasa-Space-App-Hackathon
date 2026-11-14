import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { coastalSites } from '../data/sites';
import { MapPin, RefreshCw } from 'lucide-react';

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
  
  // Centered perfectly on the island
  const center: [number, number] = [-20.28, 57.55];

  const mapLocations = [
    { id: 'baiedutombeau', coords: [-20.1325, 57.4966] as [number, number] },
    { id: 'morne', coords: [-20.452, 57.319] as [number, number] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      {/* Page Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-black text-slate-900">Mauritius Coastal Live & Lagoon Radar</h2>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Real-time
          </span>
        </div>
        <p className="text-slate-600 text-sm mt-1">
          Click any coastal region to view its historical and erosion report.
        </p>
      </div>

      {/* Full Width & Elongated Map Container */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between w-full">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <MapPin className="w-4 h-4 text-ocean-600" />
            <span>Interactive Mauritius Coast & Vessel AIS</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Scale: 1:250,000</span>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[70vh] min-h-[500px] rounded-2xl border border-slate-100 overflow-hidden z-0">
          <MapContainer 
            center={center} 
            zoom={10} // <--- CHANGED 
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
                >
                  <Popup className="rounded-xl">
                    <div className="text-center p-1 font-sans">
                      <strong className="block text-sm mb-1 text-slate-800">{siteData.title}</strong>
                      <p className="text-[11px] text-slate-500 mb-3">{siteData.status}</p>
                      <button 
                        onClick={() => navigate(`/beach/${loc.id}`)}
                        className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg hover:bg-ocean-700 transition font-bold"
                      >
                        View Full Report
                      </button>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
        
        {/* Map Footer */}
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
    </div>
  );
}