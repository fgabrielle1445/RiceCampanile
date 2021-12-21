import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Join from './pages/Join'; 
import Team from './pages/Team'; 


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      {/* Rest of the code remains same */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join-us" element={<Join />} />
        <Route path="/team" element={<Team />} />


      </Routes>
    </Router>      
    </div>
  );
}

export default App;
