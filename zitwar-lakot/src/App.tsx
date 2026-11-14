import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeTab from './pages/HomeTab';
import RecreationTab from './pages/RecreationTab';
import BeachDetail from './pages/BeachDetail';

function App() {
  return (
    <BrowserRouter>
      {/* Added w-full and overflow-x-hidden here to prevent horizontal scrolling */}
      <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 flex flex-col font-sans antialiased selection:bg-ocean-500 selection:text-white">
        
        <Header />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomeTab />} />
            <Route path="/recreation" element={<RecreationTab />} />
            <Route path="/beach/:id" element={<BeachDetail />} />
            
            {/* Placeholders */}
            <Route path="/network" element={<div className="p-10 text-2xl font-bold">Lakot Network - Coming Soon</div>} />
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