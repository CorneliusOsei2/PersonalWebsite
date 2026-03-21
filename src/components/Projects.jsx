import React from 'react';
import './Projects.scss';

const projects = [
  { name: 'DocumentDB', desc: 'MongoDB-compatible database engine for cloud-native and open-source workloads. Scalable query engine, wire-protocol compatibility, and production-grade performance.', tags: ['C','Databases','Open Source'], stars: '3.2k+', link: 'https://github.com/documentdb/documentdb', featured: true },
  { name: 'TechElevate', desc: 'Platform empowering the next generation of African tech talent — mentorship, workshops, and hands-on engineering programs.', tags: ['Next.js','TypeScript','Education','Full-Stack'], link: 'https://techelevate.org' },
  { name: 'Traduire', desc: 'Native iOS French utility app with translations, conjugation tables, vocabulary drills, and offline support.', tags: ['Swift','SwiftUI','iOS'], link: 'https://github.com/CorneliusOsei2/traduire' },
  { name: 'StudyPot', desc: "Ghana's premier medical school peer-tutoring platform. Hosts organized learning materials across clinical sciences with video lectures and quizzes.", tags: ['Node.js','MongoDB','AWS S3','EJS'], link: 'https://www.studypot.org' },
  { name: 'Dijkstra Visualizer', desc: "Interactive step-by-step visualization of Dijkstra's shortest path algorithm on weighted graphs.", tags: ['JavaScript','Algorithms','Canvas'], link: 'https://github.com/CorneliusOsei2/dijkstraVisualizer' },
  { name: 'Focus Platform', desc: 'Full-stack app for Focus Inc. (Ghana) — connecting smallholder farmers to urban markets to enhance food accessibility.', tags: ['Django','SQLite','Bootstrap','AWS'], link: 'https://github.com/CorneliusOsei2/focus' },
  { name: 'RISC-V Processor', desc: 'Pipelined RISC-V processor implementation covering fetch, decode, execute, memory, and writeback stages.', tags: ['OCaml','Computer Architecture','RISC-V'], link: 'https://github.com/CorneliusOsei2/rv-warmup' },
];

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
