import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; // Your real header
import Feed from './Feed';

function App() {
  return (
    <Router>
      {/* Real Navigation Bar */}
      <Header />
      
      {/* Pages */}
      <Routes>
        {/* Automatically redirect home to /feed for now */}
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;