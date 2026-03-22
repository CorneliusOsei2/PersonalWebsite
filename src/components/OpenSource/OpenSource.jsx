import React from 'react';
import data from '../../data/profile';
import './OpenSource.scss';

const { awards, social } = data;

export default function OpenSource() {
  return (
    <section className="section" id="oss">
      <p className="section__label">recognition</p>
      <h2 className="section__heading">awards <span className="hl">&amp;&amp;</span> honors</h2>
      <div className="oss__awards">
        {awards.map((a, i) => (
          <div key={i} className="oss__award card">
            <div className="oss__award-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div>
              <h4 className="oss__award-title">{a.title}</h4>
              <p className="oss__award-org">{a.org} · {a.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="oss__cta card" style={{ marginTop: 24 }}>
        <div className="oss__cta-left">
          <h3>Open Source</h3>
          <p>I believe in building in the open. Check out my contributions and projects on GitHub.</p>
        </div>
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="oss__cta-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}
