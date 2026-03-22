import React from 'react';
import data from '../../data/profile';
import './Projects.scss';

const { projects } = data;

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section__label">projects</p>
      <h2 className="section__heading">ls <span className="hl">~/</span>projects</h2>
      {projects.filter(p => p.featured).map(p => (
        <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="proj__feat card">
          <div className="proj__feat-top">
            <span className="proj__feat-badge">★ Featured · {p.stars} stars</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </div>
          <h3 className="proj__name">{p.name}</h3>
          <p className="proj__desc">{p.desc}</p>
          <div className="proj__tags">{p.tags.map(t => <span key={t} className="pill">{t}</span>)}</div>
        </a>
      ))}
      <div className="proj__grid">
        {projects.filter(p => !p.featured).map(p => (
          <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="proj__card card">
            <div className="proj__card-top">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
            <h3 className="proj__name">{p.name}</h3>
            <p className="proj__desc">{p.desc}</p>
            <div className="proj__tags">{p.tags.map(t => <span key={t} className="pill">{t}</span>)}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
