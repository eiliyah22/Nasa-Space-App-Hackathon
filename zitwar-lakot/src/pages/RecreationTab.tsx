import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon, divIcon } from 'leaflet';
import { MapPin, RefreshCw } from 'lucide-react';

// --- IMPORT ALL IMAGES DIRECTLY ---
import iconMorne from '../assets/icon-morne.png';
import iconCannon from '../assets/icon-cannon.png';
import iconSugar from '../assets/icon-sugar.png';
import iconBoat from '../assets/icon-boat.png'; 
import iconWaterfront from '../assets/icon-waterfront.png';
import lemorneAerial from '../assets/lemorne-aerial.jpg'; 
// ----------------------------------

// 1. Helper for the Cultural Icons
const createCustomIcon = (iconUrl: string) => {
  return icon({
    iconUrl: iconUrl,
    iconSize: [70, 70],       
    iconAnchor: [35, 70],     
    popupAnchor: [0, -70],    
    className: 'custom-leaflet-icon'
  });
};

// 2. Helper for the Classic Location Pin
const createLocationPointer = () => {
  return divIcon({
    html: `
      <div style="position: relative; width: 36px; height: 48px;">
        <!-- Base Oval Shadow -->
        <div style="position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%); width: 24px; height: 8px; border: 2.5px solid #374151; border-radius: 50%; background: transparent; z-index: 1;"></div>
        <!-- Pin Shape -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 44" width="36" height="44" style="position: absolute; top: 0; left: 0; z-index: 2; filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));">
          <path d="M18 0C8.05888 0 0 8.05888 0 18C0 31.5 18 44 18 44C18 44 36 31.5 36 18C36 8.05888 27.9411 0 18 0Z" fill="#2B7FFF"/>
          <circle cx="18" cy="16" r="6.5" fill="white"/>
        </svg>
      </div>
    `,
    className: 'bg-transparent', 
    iconSize: [36, 48],
    iconAnchor: [18, 44], 
    popupAnchor: [0, -40],
  });
};

export default function RecreationTab() {
  
  const center: [number, number] = [-20.28, 57.58];

  const mapLocations = [
    // --- LOCATION POINTERS ---
    {
      id: 'pointer-morne',
      // UPDATED: Longitude increased to 57.345 to move it right, latitude aligned to -20.452
      coords: [-20.452, 57.345] as [number, number], 
      icon: createLocationPointer(),
      title: "Le Morne Beach",
      status: "Live Location Pointer",
      description: "Exact coordinates for Le Morne coastal monitoring station."
    },
    {
      id: 'pointer-tombeau',
      coords: [-20.1325, 57.4966] as [number, number], 
      icon: createLocationPointer(),
      title: "Baie du Tombeau",
      status: "Live Location Pointer",
      description: "Exact coordinates for Baie du Tombeau coastal monitoring station."
    },

    // --- CULTURAL HERITAGE ICONS ---
    { 
      id: 'morne', 
      coords: [-20.452, 57.319] as [number, number],
      icon: createCustomIcon(iconMorne), 
      title: "Le Morne Brabant",
      status: "UNESCO Cultural Heritage",
      image: lemorneAerial, 
      description: "A majestic basalt monolith and UNESCO World Heritage site. In the 18th century, it served as a shelter for maroons (escaped slaves), becoming a powerful symbol of freedom and resistance."
    },
    { 
      id: 'vieuxgrandport', 
      coords: [-20.370, 57.705] as [number, number],
      icon: createCustomIcon(iconCannon),
      title: "Vieux Grand Port",
      status: "Historic Naval Battle Site",
    },
    { 
      id: 'flacq', 
      coords: [-20.198, 57.714] as [number, number], 
      icon: createCustomIcon(iconSugar),
      title: "Centre de Flacq",
      status: "East Coast Sugar Heritage",
    },
    { 
      id: 'north', 
      coords: [-20.010, 57.580] as [number, number],
      icon: createCustomIcon(iconBoat),
      title: "Northern Lagoons",
      status: "Traditional Fishing Grounds",
    },
    { 
      id: 'portlouis', 
      coords: [-20.160, 57.497] as [number, number],
      icon: createCustomIcon(iconWaterfront),
      title: "Caudan Waterfront",
      status: "Port Louis Capital Heritage",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-black text-slate-900">Mauritius Coastal Live & Lagoon Radar</h2>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Real-time
          </span>
        </div>
        <p className="text-slate-600 text-sm mt-1">
          Click any heritage icon or location pointer to explore the site.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between w-full">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <MapPin className="w-4 h-4 text-ocean-600" />
            <span>Interactive Mauritius Heritage & Environmental Map</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Scale: 1:250,000</span>
        </div>

        <div className="relative w-full h-[85vh] min-h-[600px] rounded-2xl border border-slate-100 overflow-hidden z-0">
          <MapContainer 
            center={center} 
            zoom={9} 
            style={{ height: '100%', width: '100%', zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="map-tiles"
            />

            {mapLocations.map((loc) => (
              <Marker 
                key={loc.id} 
                position={loc.coords}
                icon={loc.icon}
              >
                <Popup className="custom-popup">
                  <div className="font-sans">
                    {loc.image && (
                      <img 
                        src={loc.image} 
                        alt={loc.title} 
                        className="w-full h-32 object-cover" 
                      />
                    )}
                    
                    <div className="p-4 text-center">
                      <strong className="block text-base mb-1 text-slate-900">{loc.title}</strong>
                      <p className="text-[11px] font-bold text-ocean-600 mb-2 uppercase tracking-wide">{loc.status}</p>
                      
                      {loc.description && (
                        <p className="text-xs text-slate-600 text-left leading-relaxed">
                          {loc.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-bold text-slate-700">Cultural & Heritage Sites</span>
            </div>
            <button onClick={() => window.location.reload()} className="text-ocean-700 font-bold hover:underline flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh Map Data
            </button>
        </div>
      </div>
    </div>
  );
}