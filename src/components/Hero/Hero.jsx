import React, { useState, useEffect } from 'react';
import data from '../../data/profile';
import './Hero.scss';

const { hero, social } = data;
const t = hero.terminal;

export default function Hero() {
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => { if (i <= hero.role.length) { setTyped(hero.role.slice(0, i)); i++; } else clearInterval(iv); }, 50);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__left">
        <div className="hero__line-numbers">
          {Array.from({length: 8}, (_, i) => <span key={i}>{i + 1}</span>)}
        </div>
        <div className="hero__code">
          <p className="hero__comment">{'// hello, world'}</p>
          <h1 className="hero__name">{hero.firstName}<span className="hero__punct">.</span></h1>
          <h2 className="hero__role">{typed}<span className="hero__cursor">▌</span></h2>
          <p className="hero__bio">{hero.bio}</p>
          <div className="hero__actions">
            {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer" className="hero__btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              github
            </a>}
            {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--accent">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 11-.001-4.128 2.064 2.064 0 01.001 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              say hello
            </a>}
            {social.email && <a href={`mailto:${social.email}`} className="hero__btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              email
            </a>}
          </div>
        </div>
      </div>

      <div className="hero__terminal">
        <div className="hero__tb">
          <span className="hero__td hero__td--r"></span>
          <span className="hero__td hero__td--y"></span>
          <span className="hero__td hero__td--g"></span>
          <span className="hero__tt">{t.user} ~ /about</span>
        </div>
        <pre className="hero__tc"><code><span className="c-m">$</span> cat {t.fileName}
<span className="c-br">{'{'}</span>
{Object.entries(t.fields).map(([k, v]) =>
  <React.Fragment key={k}>{'  '}<span className="c-k">"{k}"</span>: <span className="c-s">"{v}"</span>,{'\n'}</React.Fragment>
)}{'  '}<span className="c-k">"focus"</span>: [{'\n'}{t.focus.map((f, i) =>
  <React.Fragment key={f}>{'    '}<span className="c-s">"{f}"</span>{i < t.focus.length - 1 ? ',' : ''}{'\n'}</React.Fragment>
)}{'  '}],
{'  '}<span className="c-k">"also"</span>: [{'\n'}{t.also.map((a, i) =>
  <React.Fragment key={a}>{'    '}<span className="c-s">"{a}"</span>{i < t.also.length - 1 ? ',' : ''}{'\n'}</React.Fragment>
)}{'  '}],
{'  '}<span className="c-k">"motto"</span>: <span className="c-s">"{t.motto}"</span>
<span className="c-br">{'}'}</span></code></pre>
      </div>
    </section>
  );
}
