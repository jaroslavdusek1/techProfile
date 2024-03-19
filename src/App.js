import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutPage } from './pages/About/About.jsx';
import HomePage from './pages/HomePage/Home.jsx';
import LoginModal from './components/LoginForm/LoginForm';
import TypingText from './components/Introductory/TypingText';
import './App.css';

const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <div>
        {isModalOpen ? (
          <>
            <TypingText phrase="- welcome folks, here you can check out what ive been up to, grab my CV, peep my skills, hit up my GitHub projects, or connect on linkedIn or gitHub" />
            <LoginModal onClose={handleClose} />
          </>
        ) : (
          <>
            <nav>
              <ul>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/about">about me</Link></li>
                <li><Link to="/projects">GH projects</Link></li>
              </ul>
            </nav>

            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<Contact />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
