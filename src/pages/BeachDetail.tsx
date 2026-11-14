import { useParams, Link } from 'react-router-dom';
import { coastalSites } from '../data/sites';

export default function BeachDetail() {
  const { id } = useParams();
  const site = id ? coastalSites[id] : null;

  if (!site) return <div className="p-10">Site not found.</div>;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Link to="/recreation" className="text-ocean-600 hover:underline mb-4 block">&larr; Back to Map</Link>
      <h1 className="text-4xl font-black text-slate-900 mb-2">{site.title}</h1>
      <p className="text-slate-500 mb-6">{site.coords}</p>
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Historical & Erosion Data</h2>
        <p className="text-slate-700">{site.nisarNote}</p>
        {/* We will add images here later */}
      </div>
    </div>
  );
}