import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './Router.css';
import Home from './home';
import Gujarat from './Route_s/Gujarat';
import Punjab from './Route_s/Panjab';
import Rajasthan from './Route_s/Rajasthan';
import Chennai from './Route_s/Chennai';

function Router_s() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
         <Link to="/">Home</Link>|
          <Link to="/Route_s/Gujarat">Gujarat</Link>|
          <Link to="/Route_s/Panjab">Panjab</Link>|
          <Link to="/Route_s/Rajasthan">Rajasthan</Link>|
         <Link to="/Route_s/Chennai">Chennai</Link>|
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Route_s/Gujarat" element={<Gujarat />} />
          <Route path="/Route_s/Panjab" element={<Punjab />} />
          <Route path="/Route_s/Rajasthan" element={<Rajasthan />} />
          <Route path="/Route_s/Chennai" element={<Chennai />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router_s;