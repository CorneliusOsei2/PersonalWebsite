import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const ventures = [
  { path: '/dev', label: 'Software Engineering', icon: '⌘', desc: 'Microsoft · Open Source · Distributed Systems', color: '#00e5a0' },
  { path: '/agri', label: 'Agriculture & Food Systems', icon: '🌱', desc: 'Lepta · Farm-to-Consumer · Ghana', color: '#4ade80' },
];

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__bg" />
      <div className="home__content">
        <p className="home__greeting">{'// '} hello, world</p>
        <h1 className="home__name">Cornelius<span>.</span></h1>
        <p className="home__motto">"Building and being built"</p>
        <div className="home__divider" />
        <div className="home__ventures">
          {ventures.map(v => (
            <Link key={v.path} to={v.path} className="home__card" style={{'--accent': v.color}}>
              <span className="home__card-icon">{v.icon}</span>
              <div>
                <h3 className="home__card-title">{v.label}</h3>
                <p className="home__card-desc">{v.desc}</p>
              </div>
              <svg className="home__card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          ))}
        </div>
        <div className="home__links">
          <a href="https://github.com/CorneliusOsei2" target="_blank" rel="noopener noreferrer">github</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/cornelius-boateng-29b5b01a5" target="_blank" rel="noopener noreferrer">linkedin</a>
          <span>·</span>
          <a href="mailto:corneliusosei2@gmail.com">email</a>
        </div>
      </div>
    </div>
  );
}
