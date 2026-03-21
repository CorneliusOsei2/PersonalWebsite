import React from 'react';
import './About.scss';

const skills = [
  { cat: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Swift', 'OCaml', 'SQL'] },
  { cat: 'Systems & Infra', items: ['Distributed Systems', 'Database Engines', 'Operating Systems', 'Cloud (Azure)'] },
  { cat: 'Frameworks', items: ['React', 'Node.js', 'Django', 'Flask', 'FastAPI', 'SwiftUI', 'Express'] },
  { cat: 'Tools', items: ['Git', 'Docker', 'PostgreSQL', 'MongoDB', 'DocumentDB', 'Firebase', 'AWS S3'] },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <p className="section__label">about</p>
      <h2 className="section__heading"><span className="br">{'<'}</span>About <span className="hl">/</span><span className="br">{'>'}</span></h2>
      <div className="about__grid">
        <div className="about__prose">
          <p>I'm currently a software engineer at <strong>Microsoft</strong>, where I work on cloud-native database infrastructure and open-source tooling. I graduated from <strong>Cornell University</strong> in 2024 with a degree in Computer Science.</p>
          <p>At Cornell, I was a TA for <strong>CS 1110</strong> (Intro to Computing) and <strong>CS 4410</strong> (Operating Systems). I was recognized with the <strong>Teaching Award</strong> from CIS, the <strong>Jonathan Marx Memorial Senior Prize</strong>, and the <strong>Leadership in Service Award</strong> from the Office of DEIB.</p>
          <p>Outside of work, I run <a href="https://techelevate.org" target="_blank" rel="noopener noreferrer">TechElevate</a> — an initiative empowering the next generation of African tech talent through mentorship, workshops, and hands-on engineering programs.</p>
          <p>I'm driven by building things that scale, writing code that lasts, and making the industry more inclusive.</p>
        </div>
        <div className="about__skills">
          {skills.map(s => (
            <div key={s.cat} className="about__group">
              <h4><span className="about__arrow">▸</span>{s.cat}</h4>
              <div className="about__tags">{s.items.map(t => <span key={t} className="pill">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
