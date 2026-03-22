import React from 'react';
import './Experience.scss';

const jobs = [
  { role: 'Software Engineer', co: 'Microsoft', when: 'Jun 2024 — Present', loc: 'Azure Cosmos DB',
    bullets: [
      'Building a highly scalable document-oriented NoSQL database utilizing a PostgreSQL engine',
      'Design and implement indexing, index selectivity, and query optimization algorithms in C',
      'Implement features such as collation and variables support; optimize aggregation operators',
      'Contribute to open-source Azure DocumentDB — write design docs, C#/JS/SQL integration tests',
    ], tags: ['C','PostgreSQL','Distributed Systems','Azure','Open Source'] },
  { role: 'Data Engineer', co: 'Cornell University', when: 'Jan 2024 — May 2024', loc: 'CIO-CIT Enterprise Services',
    bullets: [
      'Contributed to design and migration of validation routines from Oracle to Amazon Redshift',
      'Automated validation table population with Python, improving data management efficiency',
    ], tags: ['Python','Oracle','Redshift','Data Engineering'] },
  { role: 'Software Engineer Intern', co: 'Microsoft', when: 'May 2023 — Aug 2023', loc: 'Azure Cosmos DB',
    bullets: [
      'Enabled indexing columns generating keys exceeding PostgreSQL limits in Cosmos DB vCore',
      'Designed and implemented truncation algorithms for utf-8 and document keys in C',
      'Implemented query/value extraction, comparison, and consistency support for truncated keys',
    ], tags: ['C','PostgreSQL','Indexing','SQL'] },
  { role: 'Software Engineer Intern', co: 'Meta (Facebook)', when: 'May 2022 — Aug 2022', loc: 'Ads ML Infrastructure',
    bullets: [
      'Built an internal tool for ML ranking engineers to query privacy-related info on 1000s of Ads features',
      'Implemented a GraphQL API in Hack communicating with a SQL database at faster response times',
      'Created an interactive React frontend using Meta\'s XDS framework with Relay integration',
    ], tags: ['React','GraphQL','Hack','Python','ML Infra'] },
  { role: 'Software Engineer Intern', co: 'Kehillah Ghana', when: 'May 2021 — Aug 2021', loc: 'Backend',
    bullets: [
      'Developed CRUD apps for investment platform APIs with Python Django',
      'Built CI/CD pipelines using GitHub Actions; integrated error logging with Sentry',
    ], tags: ['Django','Python','CI/CD','GitHub Actions'] },
  { role: 'Teaching Assistant', co: 'Cornell University', when: 'Aug 2021 — Dec 2023', loc: 'Ithaca, NY',
    bullets: [
      'Teaching Assistant for CS 4410 (Operating Systems), CS 4320 (Database Systems), CS 3410 (Computer System Organization), and CS 1110 (Intro to Computing with Python)',
      'Led discussion sections, designed exam problems, and mentored hundreds of students',
      'Received the CIS Teaching Award (2022) for outstanding instruction and student impact',
    ], tags: ['Operating Systems','Databases','Computer Architecture','Python','Teaching'] },
  { role: 'Founder & Lead', co: 'TechElevate', when: 'Jan 2022 — Present', loc: 'Ghana',
    bullets: [
      'Built techelevate.org — a platform empowering the next generation of African tech talent',
      'Building awesome software systems; mentoring aspiring developers across Ghana',
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
