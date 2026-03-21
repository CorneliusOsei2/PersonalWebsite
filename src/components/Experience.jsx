import React from 'react';
import './Experience.scss';

const jobs = [
  { role: 'Software Engineer', co: 'Microsoft', when: 'Jul 2024 — Present', loc: 'Redmond, WA',
    bullets: [
      'Building DocumentDB — an open-source, MongoDB-compatible database engine (documentdb.io)',
      'Working across C, C++, and distributed systems at production scale',
    ], tags: ['C','C++','Distributed Systems','Azure','Open Source','DocumentDB'] },
  { role: 'Software Engineer Intern', co: 'Microsoft', when: 'Summer 2023', loc: 'Redmond, WA',
    bullets: [
      'Interned on infrastructure and cloud platform engineering teams',
    ], tags: ['Cloud','Infrastructure','Azure'] },
  { role: 'Software Engineer Intern', co: 'Meta', when: 'Summer 2022', loc: 'Menlo Park, CA',
    bullets: [
      'Built and shipped production features as part of a core engineering team',
      'Collaborated across cross-functional teams at scale',
    ], tags: ['Python','Infrastructure','Full-Stack'] },
  { role: 'Teaching Assistant', co: 'Cornell University', when: '2021 — 2024', loc: 'Ithaca, NY',
    bullets: [
      'TA for CS 4410 (Operating Systems), CS 4320 (Database Systems), CS 3410 (Computer System Organization), and CS 1110 (Intro to Computing)',
      'Led discussion sections, designed exam problems, and mentored hundreds of students',
      'Received the CIS Teaching Award (2022) for outstanding instruction and student impact',
    ], tags: ['Operating Systems','Python','Teaching','Mentoring'] },
  { role: 'Founder & Lead', co: 'TechElevate', when: '2022 — Present', loc: 'Ghana',
    bullets: [
      'Built techelevate.org — a platform empowering the next generation of African tech talent',
      'Organize workshops, bootcamps, and career guidance for aspiring software engineers across Ghana',
    ], tags: ['Education','Community','Leadership','Ghana'] },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section__label">experience</p>
      <h2 className="section__heading">work<span className="hl">.</span>history<span className="br">()</span></h2>
      <div className="exp__list">
        {jobs.map((j, i) => (
          <div key={i} className="exp__item card">
            <div className="exp__head">
              <div>
                <h3 className="exp__role">{j.role}</h3>
                <p className="exp__co">{j.co} <span className="exp__loc">· {j.loc}</span></p>
              </div>
              <span className="exp__when">{j.when}</span>
            </div>
            <ul className="exp__bullets">
              {j.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
            </ul>
            <div className="exp__tags">{j.tags.map(t => <span key={t} className="pill">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
