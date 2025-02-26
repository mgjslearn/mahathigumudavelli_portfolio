import React from 'react';

import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Arts, Contact } from './pages';

import Navbar  from './components/Navbar';
const App = () => {
    return ( 
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/mahathigumudavelli_portfolio/home" element= {<Home />} />
                    <Route path="/mahathigumudavelli_portfolio/about" element= {<About />} />
                    <Route path="/mahathigumudavelli_portfolio/projects" element= {<Projects />} />
                    <Route path="/mahathigumudavelli_portfolio/contact" element= {<Contact />} />
                    <Route path="/mahathigumudavelli_portfolio/arts" element= {<Arts />} />
                </Routes>
            </Router>
        </main>
    )
}
export default App;
