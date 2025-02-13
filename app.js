import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1>Hi, I'm Sakshi Kamble</h1>
        <p>Web Developer | Problem solver </p>
        <a href="#contact" className="btn primary-btn">Contact Me</a>
      </div>
    </section>
  );
};

export default App;
