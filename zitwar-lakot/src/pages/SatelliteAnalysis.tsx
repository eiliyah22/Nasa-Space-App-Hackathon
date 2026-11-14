import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

// --- IMPORT YOUR GRAPH IMAGES HERE ---
import sentinel1Graph from '../assets/sentinel1-graph.png'; 
import sentinel2Graph from '../assets/sentinel2-graph.png';
import lemorne1Graph from '../assets/lemorne1-graph.png';
import lemorne2Graph from '../assets/lemorne2-graph.png';
// ------------------------------------

export default function SatelliteAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      
      {/* Top Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-ocean-700 hover:text-ocean-900 font-bold text-sm transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Map
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12">
        
        {/* Top Section: Sentinel-2 vs NISAR */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Sentinel-2 Column */}
          <div>
            <h1 className="text-5xl font-serif mb-4 tracking-wide">Sentinel-2</h1>
            <p className="text-sm font-medium text-slate-600 mb-1">14 October 2025</p>
            <p className="text-sm font-medium text-slate-600 mb-8">06:25 UTC</p>
            
            <div className="space-y-4 mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wide text-center md:text-left">Sentinel 1 graph</h2>
              <div className="h-56 w-full bg-slate-50 border border-slate-300 rounded-lg p-2 flex items-center justify-center">
                <img src={sentinel1Graph} alt="Sentinel 1 Graph" className="w-full h-full object-contain" />
              </div>
              
              <h2 className="text-xl font-bold uppercase tracking-wide mt-8 text-center md:text-left">Sentinel 2 graph</h2>
              <div className="h-56 w-full bg-slate-50 border border-slate-300 rounded-lg p-2 flex items-center justify-center">
                <img src={sentinel2Graph} alt="Sentinel 2 Graph" className="w-full h-full object-contain" />
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed text-justify">
              NASA Harmonized Landsat and Sentinel-2 (HLS) data was used to generate an optical representation of the study area. The Normalized Difference Water Index (NDWI), calculated using green and near-infrared bands, was applied to classify land and water surfaces and extract the shoreline.
            </p>
          </div>

          {/* NISAR Column */}
          <div>
            <h1 className="text-4xl font-serif mb-4 tracking-wide text-center md:text-left">NASA-ISRO Synthetic Aperture Radar</h1>
            <p className="text-sm font-medium text-slate-600 mb-1 text-center md:text-left">23 October 2026</p>
            <p className="text-sm font-medium text-slate-600 mb-8 text-center md:text-left">14:18 UTC</p>
            
            <div className="space-y-4 mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wide text-center md:text-left">NISAR Le Morne 1 graph</h2>
              <div className="h-56 w-full bg-slate-50 border border-slate-300 rounded-lg p-2 flex items-center justify-center">
                <img src={lemorne1Graph} alt="NISAR Le Morne 1 Graph" className="w-full h-full object-contain" />
              </div>
              
              <h2 className="text-xl font-bold uppercase tracking-wide mt-8 text-center md:text-left">NISAR Le Morne 2 graph</h2>
              <div className="h-56 w-full bg-slate-50 border border-slate-300 rounded-lg p-2 flex items-center justify-center">
                <img src={lemorne2Graph} alt="NISAR Le Morne 2 Graph" className="w-full h-full object-contain" />
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed text-justify">
              NISAR Ground Range Complex (GCOV) data was used to visualise the radar backscatter channels HHHH and HVHV. These channels were analysed to distinguish land and water surfaces and extract the coastal boundary.
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-16 border-t border-slate-300 pt-12">
          <h2 className="text-3xl font-serif font-bold text-center mb-6">
            Comparative Shoreline Observation: Sentinel-2 (2025) vs NISAR (2026)
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed text-center max-w-4xl mx-auto mb-10 text-justify">
            The extracted shorelines from NISAR GCOV (2026) and NASA HLS Sentinel-2 (14 October 2025) are displayed side by side to provide a visual comparison of the coastline at two observation dates. <br className="mb-2"/>
            The visualisation highlights areas where differences in shoreline position can be observed. These differences may indicate possible coastal changes, although they can also be influenced by sensor characteristics, spatial resolution, tidal conditions and classification uncertainty.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-center mb-4">Comparison 1 Graph</h3>
              <div className="h-64 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 rounded-lg">
                [ Comparison 1 Placeholder ]
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-center mb-4">Comparison 2 Graph</h3>
              <div className="h-64 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 rounded-lg">
                [ Comparison 2 Placeholder ]
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center gap-2 text-red-500 font-bold text-sm text-center max-w-2xl mx-auto mt-8">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p>Note: This comparison is a preliminary visual observation rather than a quantified erosion or accretion analysis.</p>
          </div>
        </div>

        {/* Parameters Table */}
        <div className="border-t border-slate-300 pt-8 w-full max-w-3xl mx-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-2 font-bold text-slate-600">Parameters</th>
                <th className="py-2 font-bold text-slate-600">Values for Sentinel</th>
                <th className="py-2 font-bold text-slate-600">Values for NISAR</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-200">
                <td className="py-2">Cloud Height</td>
                <td className="py-2 text-slate-400">-</td>
                <td className="py-2 text-slate-400">-</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2">High Tide</td>
                <td className="py-2 text-slate-400">-</td>
                <td className="py-2 text-slate-400">-</td>
              </tr>
              <tr>
                <td className="py-2">Low Tide</td>
                <td className="py-2 text-slate-400">-</td>
                <td className="py-2 text-slate-400">-</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}