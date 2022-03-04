import React from 'react';
import '../../styles/Nav.css';

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="inner-header">
        <div className="logo-container">
          <p className="myName">Anthony</p>
        </div>
        <div className="nav-container">
          <ul>
            <li className="links">
              <a
                href="#about"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="links">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="links">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="links">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );

}