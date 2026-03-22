import React from 'react';
import data from '../../data/profile';
import './Footer.scss';

const { footer } = data;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__credit">
          <span className="footer__comment">{'// '}</span>
          designed & built by <strong>{footer.credit}</strong>
        </p>
        <p className="footer__copy">
          <span className="footer__mono">{'{'}</span> {new Date().getFullYear()} <span className="footer__mono">{'}'}</span>
        </p>
      </div>
    </footer>
  );
}
