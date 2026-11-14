import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeTab from './pages/HomeTab';
import RecreationTab from './pages/RecreationTab';
import BeachDetail from './pages/BeachDetail';
import SatelliteAnalysis from './pages/SatelliteAnalysis'; // <-- ADDED: New Satellite Page

// If your friend's Feed component is in the src folder, import it here:
// import Feed from './Feed'; 

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 flex flex-col font-sans antialiased selection:bg-ocean-500 selection:text-white">
        
        <Header />

        <main className="flex-grow w-full">
          <Routes>
            {/* Your Main Routes */}
            <Route path="/" element={<HomeTab />} />
            <Route path="/recreation" element={<RecreationTab />} />
            <Route path="/beach/:id" element={<BeachDetail />} />
            
            {/* NEW ROUTE: Links to the graphs page */}
            <Route path="/satellite-analysis" element={<SatelliteAnalysis />} />
            
            {/* Placeholders & Friend's Code */}
            <Route path="/network" element={<div className="p-10 text-2xl font-bold">Lakot Network - Coming Soon</div>} />
            
            {/* Replace this div with <Feed /> if you want to see your friend's work */}
            <Route path="/feed" element={<div className="p-10 text-2xl font-bold">Lakot Vibe - Coming Soon</div>} />
            
            <Route path="/analytics" element={<div className="p-10 text-2xl font-bold">NISAR Lab - Coming Soon</div>} />
            <Route path="/kids" element={<div className="p-10 text-2xl font-bold">Ti-Planz Lab - Coming Soon</div>} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;