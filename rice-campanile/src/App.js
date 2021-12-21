import Home from './pages/Home';
import About from './pages/About';
import ClassOf2022 from './pages/about-pages/ClassOf2022';
import Theme2022 from './pages/about-pages/Theme2022';
import Yearbook2021 from './pages/about-pages/Yearbook2021';
import Events from './pages/Events';
import BooksAndBoba from './pages/events-pages/BooksAndBoba';
import PictureYourself from './pages/events-pages/PictureYourself';
import Join from './pages/Join'; 
import Team from './pages/Team'; 
import Contact from './pages/meet-team-pages/Contact'


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
        <Route path="/about/class-of-2022" element={<ClassOf2022 />} />
        <Route path="/about/theme-2022" element={<Theme2022/>} />
        <Route path="/about/yearbook-2021" element={<Yearbook2021/>} />


        <Route path="/events" element={<Events />} />
        <Route path="/events/books-and-boba" element={<BooksAndBoba />} />
        <Route path="/events.picture-yourself" element={<PictureYourself />} />

        <Route path="/join-us" element={<Join />} />

        <Route path="/team" element={<Team />} />
        <Route path="/team/contact-us" element={<Contact />} />

      </Routes>
    </Router>      
    </div>
  );
}

export default App;
