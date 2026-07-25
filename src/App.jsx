import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header is outside Routes so it stays visible on every page */}
        <Header />
        <Navbar/>
        
        {/* Main page content changes based on path */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;