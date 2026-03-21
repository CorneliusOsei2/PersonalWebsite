import React from 'react';
import { Link } from 'react-router-dom';
import './AgriPage.scss';

const stats = [
  { value: '$600M', label: 'Lost annually to post-harvest waste in Ghana' },
  { value: '30-50%', label: 'Produce rots before reaching consumers' },
  { value: '~5%', label: 'Of agriculture has cold chain access' },
  { value: '$900M', label: 'Untapped cold chain market in vegetables' },
];

const layers = [
  { num: '01', title: 'Cold Chain Orchestration', desc: 'Booking & routing marketplace for cold storage and refrigerated transport. IoT temperature monitoring and AI demand forecasting — all asset-light.', tags: ['IoT', 'AI Routing', 'Asset-Light'] },
  { num: '02', title: 'Produce Marketplace', desc: 'Connects farmers directly to buyers with transparent pricing, quality grading, and reputation systems. Accessible via USSD, WhatsApp, and web.', tags: ['USSD', 'WhatsApp', 'Dynamic Pricing'] },
  { num: '03', title: 'Embedded Financial Services', desc: 'Inventory financing, invoice factoring, crop micro-insurance, and credit scoring — all built on mobile money rails and transaction data.', tags: ['Mobile Money', 'Micro-Insurance', 'Credit Scoring'] },
];

const comparisons = [
  { name: 'Twiga Foods', market: 'Kenya', raised: '~$140M' },
  { name: 'Ninjacart', market: 'India', raised: '$377M+' },
  { name: 'Choco', market: 'Germany/USA', raised: '$300M+' },
  { name: 'Silo', market: 'USA', raised: '$132M' },
];

export default function AgriPage() {
  return (
    <div className="agri">
      {/* Nav */}
      <nav className="agri__nav">
        <div className="agri__nav-inner">
          <Link to="/" className="agri__nav-logo">
            <span className="agri__nav-leaf">🌱</span> Lepta
          </Link>
          <div className="agri__nav-links">
            <a href="#problem">problem</a>
            <a href="#platform">platform</a>
            <a href="#market">market</a>
            <a href="#contact-agri">connect</a>
            <Link to="/dev" className="agri__nav-switch">← engineering</Link>
          </div>
        </div>
      </nav>

      <main className="agri__main">
        {/* Hero */}
        <section className="agri__hero">
          <div className="agri__hero-badge">By Cornelius Boateng</div>
          <h1 className="agri__hero-title">
            <span className="agri__hero-pre">Lepta</span>
            The Operating System for<br/>Ghana's Food Supply Chain
          </h1>
          <p className="agri__hero-sub">
            A digital platform orchestrating the entire food supply chain — connecting
            farmers to buyers, coordinating cold chain logistics, and embedding
            financial services — all through mobile money and basic phone interfaces.
          </p>
          <div className="agri__hero-actions">
            <a href="#platform" className="agri__btn agri__btn--primary">Explore the Platform ↓</a>
            <a href="#contact-agri" className="agri__btn">Get in Touch</a>
          </div>
        </section>

        {/* Problem */}
        <section className="agri__section" id="problem">
          <p className="agri__label">The Problem</p>
          <h2 className="agri__heading">Ghana grows enough food.<br/>The supply chain is broken.</h2>
          <div className="agri__stats">
            {stats.map((s, i) => (
              <div key={i} className="agri__stat">
                <span className="agri__stat-value">{s.value}</span>
                <span className="agri__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="agri__story-card">
            <h4>A Day in the Life of a Ghanaian Farmer</h4>
            <p>
              A tomato farmer in Techiman harvests 100 crates. With no cold storage,
              prices are invisible, trucks are unreliable, and 30-40% spoils before
              reaching market. The farmer earns GH₵200 instead of GH₵600.
              <strong> This is not a production failure — it's a logistics, information,
              and financing failure.</strong>
            </p>
          </div>
        </section>

        {/* Platform */}
        <section className="agri__section" id="platform">
          <p className="agri__label">The Platform</p>
          <h2 className="agri__heading">Three layers. One system.</h2>
          <p className="agri__sub-text">
            Like Uber for food logistics — Lepta doesn't own cold rooms or trucks.
            It coordinates farmers, buyers, cold chain operators, and financial
            institutions into a single seamless platform.
          </p>
          <div className="agri__layers">
            {layers.map(l => (
              <div key={l.num} className="agri__layer">
                <span className="agri__layer-num">{l.num}</span>
                <div>
                  <h3 className="agri__layer-title">{l.title}</h3>
                  <p className="agri__layer-desc">{l.desc}</p>
                  <div className="agri__layer-tags">
                    {l.tags.map(t => <span key={t} className="agri__tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market */}
        <section className="agri__section" id="market">
          <p className="agri__label">Market Validation</p>
          <h2 className="agri__heading">Nearly $1B raised globally.<br/>No dominant player in West Africa.</h2>
          <div className="agri__comps">
            <div className="agri__comp-header">
              <span>Company</span><span>Market</span><span>Raised</span>
            </div>
            {comparisons.map(c => (
              <div key={c.name} className="agri__comp-row">
                <span className="agri__comp-name">{c.name}</span>
                <span>{c.market}</span>
                <span className="agri__comp-raised">{c.raised}</span>
              </div>
            ))}
          </div>
          <p className="agri__window">The window is open for Ghana and West Africa.</p>
        </section>

        {/* Contact */}
        <section className="agri__section agri__contact" id="contact-agri">
          <h2 className="agri__heading">Let's grow together.</h2>
          <p className="agri__sub-text">
            Whether you're a farmer, buyer, investor, or partner —
            Lepta is building the future of food in Ghana.
          </p>
          <div className="agri__contact-links">
            <a href="mailto:corneliusosei2@gmail.com" className="agri__btn agri__btn--primary">
              corneliusosei2@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/cornelius-boateng-29b5b01a5" target="_blank" rel="noopener noreferrer" className="agri__btn">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="agri__footer">
        <p>© {new Date().getFullYear()} Cornelius Boateng · <Link to="/">kornelio.net</Link></p>
      </footer>
    </div>
  );
}
