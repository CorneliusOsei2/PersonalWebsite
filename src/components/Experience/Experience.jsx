import React from 'react';
import data from '../../data/profile';
import './Experience.scss';

const { experience } = data;

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section__label">experience</p>
      <h2 className="section__heading">work<span className="hl">.</span>history<span className="br">()</span></h2>
      <div className="exp__list">
        {experience.map((j, i) => (
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
