import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import CtfSingle from "./components/CtfSingle";
import Ctf from "./components/Ctf";
import Contact from "./components/Contact";
import Blogpost from "./components/Blogpost";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <About />
              <Skills />
              <Footer />

            </>
          }
        />

        {/* Other Pages */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ctf" element={<Ctf />} />
        <Route path="/ctf/:id" element={<CtfSingle />} />
        <Route path="/blog" element={<Blogpost />} />
      </Routes>
    </Router>
  );
}

export default App;
