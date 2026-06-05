import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">TechNova</div>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="nav-btn">
            Get Started
          </button>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;