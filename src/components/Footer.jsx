import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__credit">
          <span className="footer__comment">{'// '}</span>
          designed & built by <strong>Cornelius Boateng</strong>
        </p>
        <p className="footer__copy">
          <span className="footer__mono">{'{'}</span> {new Date().getFullYear()} <span className="footer__mono">{'}'}</span>
        </p>
      </div>
    </footer>
  );
}
