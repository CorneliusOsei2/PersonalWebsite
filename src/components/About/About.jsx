import React from 'react';
import data from '../../data/profile';
import './About.scss';

const { about } = data;

export default function About() {
  return (
    <section className="section about" id="about">
      <p className="section__label">about</p>
      <h2 className="section__heading"><span className="br">{'<'}</span>About <span className="hl">/</span><span className="br">{'>'}</span></h2>
      <div className="about__grid">
        <div className="about__prose">
          {about.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div className="about__skills">
          {about.skills.map(s => (
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
