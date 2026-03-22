import React, { useState, useEffect } from 'react';
import './Nav.scss';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    ['about','about'],['experience','experience'],['projects','projects'],
    ['open source','oss'],['contact','contact'],
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo"><span className="nav__br">{'{'}</span>CB<span className="nav__br">{'}'}</span></a>
        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
}
