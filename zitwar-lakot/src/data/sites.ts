// src/data/sites.ts

export interface CoastalEvent {
  icon: string;
  title: string;
  time: string;
  badge: string;
}

export interface CoastalSite {
  title: string;
  coords: string;
  status: string;
  tide: string;
  uv: string;
  clarity: string;
  nisarNote: string;
  events: CoastalEvent[];
}

export const coastalSites: Record<string, CoastalSite> = {
  bluebay: {
    title: "Blue Bay Marine Park",
    coords: "20.443° S, 57.712° E • Grand Port District",
    status: "Protected MPA (5 kts)",
    tide: "+0.68 m",
    uv: "7 (High)",
    clarity: "14 m",
    nisarNote: "Recent L-band backscatter confirms stability across the internal brain coral zones. Minor coherence variance detected on the northern sand spit attributed to high weekend tourist boat wash.",
    events: [
      { icon: "⛵", title: "Artisanal Regatta Practice", time: "Mahebourg to Blue Bay • 14:00 - 16:30", badge: "Public Regatta" },
      { icon: "🪸", title: "Guided Seagrass Snorkel Trail", time: "Eco-Sud Educational Booth • 10:00 - 12:00", badge: "Free / Kids Welcome" }
    ]
  },
  baiedutombeau: {
    title: "Baie du Tombeau",
    coords: "20.1325° S, 57.4966° E • Port Louis District",
    status: "Mangrove & Estuary Zone",
    tide: "+0.45 m",
    uv: "7 (High)",
    clarity: "6 m",
    nisarNote: "Mixed backscatter observed at the river mouth. High coherence in the developed coastal areas, but lower coherence in the mangroves due to tidal inundation and vegetation movement.",
    history: "Baie du Tombeau (Tomb Bay) is historically significant, named after a tomb erected for a Dutch governor or shipwrecked sailors. It is home to one of the island's most important remaining mangrove ecosystems, which acts as a natural barrier against erosion.",
    erosionInfo: "The bay faces erosion exacerbated by the Rivière du Tombeau estuary and storm surges. Conservation efforts are focused on restoring the mangrove forests which trap sediment and stabilize the shoreline.",
    images: [
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589825765896-2350a572a305?auto=format&fit=crop&w=800&q=80"
    ],
    events: [
      { icon: "🌱", title: "Mangrove Reforestation Drive", time: "Baie du Tombeau Estuary • 09:00 - 12:00", badge: "NGO Volunteer" },
      { icon: "🎣", title: "Community Fishing & Heritage Talk", time: "Village Coastline • 16:00", badge: "Local Event" }
    ]
  },
  flic: {
    title: "Flic en Flac Beach & Lagoon",
    coords: "20.273° S, 57.363° E • Black River District",
    status: "High Tourism & Erosion Zone",
    tide: "+0.42 m",
    uv: "8 (Very High)",
    clarity: "11 m",
    nisarNote: "Level-2 GUNW interferometry reveals -1.8 dB coherence loss adjacent to central public beach. Coupled with tide gauge data, this reflects seasonal wave refraction rather than sudden cliff retreat.",
    events: [
      { icon: "🧘", title: "Sunset Lagoon Yoga", time: "Near Villa Caroline • 17:30", badge: "Community" },
      { icon: "🧹", title: "Youth Sand Clean & Microplastic Audit", time: "South Public Beach • 09:00", badge: "Volunteer" }
    ]
  },
  morne: {
    title: "Le Morne Brabant Coastal Fringe",
    coords: "20.452° S, 57.319° E • Black River District",
    status: "UNESCO Cultural Heritage Buffer",
    tide: "+0.55 m",
    uv: "8 (Very High)",
    clarity: "16 m",
    nisarNote: "NASA L-band dual-pol HH/HV backscatter exhibits steady sand spit elevation. Mangrove patches on the northern creek show strong volumetric scattering (+3.1 dB).",
    events: [
      { icon: "🪁", title: "Kite Lagoon Wind & Safety Watch", time: "Pointe Sud Ouest • 11:00 - 17:00", badge: "Watersport" },
      { icon: "📜", title: "Maroons Heritage Walk & Discussion", time: "Cultural Trailhead • 15:00", badge: "Heritage" }
    ]
  },
  montchoisy: {
    title: "Mont Choisy Beach & Dune Reserve",
    coords: "20.016° S, 57.555° E • Pamplemousses District",
    status: "Public Reserve",
    tide: "+0.35 m",
    uv: "6 (Moderate)",
    clarity: "13 m",
    nisarNote: "Level-3 Soil Moisture indicates rapid drainage across the Casuarina (Filao) belt. Minimal wave run-up observed during neap tide cycles.",
    events: [
      { icon: "🏐", title: "Inter-Village Beach Volleyball", time: "Mont Choisy Central • 15:30", badge: "Sports" }
    ]
  },
  bellemare: {
    title: "Belle Mare High-Energy Lagoon",
    coords: "20.198° S, 57.772° E • Flacq District",
    status: "East Coast Coral Belt",
    tide: "+0.72 m",
    uv: "7 (High)",
    clarity: "12 m",
    nisarNote: "High wave energy on the outer reef barrier detected via radar roughness metrics. In-lagoon seagrass meadows maintain robust sediment binding.",
    events: [
      { icon: "🤿", title: "Reef Outplanting Dive Briefing", time: "Belle Mare Public Pass • 08:30", badge: "NGO Expedition" }
    ]
  }
};