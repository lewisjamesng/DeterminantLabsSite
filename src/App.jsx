import { useState, useEffect } from 'react'
import './App.css'

const SERVICES = [
  {
    n: '01',
    title: 'Custom Software',
    desc: 'Production-grade software built to your exact requirements. No templates, no off-the-shelf compromises — just working code that fits your problem.',
  },
  {
    n: '02',
    title: 'Technical Architecture',
    desc: 'System design, infrastructure decisions, and the kind of planning that keeps software maintainable years after we ship it.',
  },
  {
    n: '03',
    title: 'MVP & Rapid Builds',
    desc: 'Validate ideas fast with working software, not wireframes. We move quickly and build things that can grow.',
  },
  {
    n: '04',
    title: 'Integration & Modernization',
    desc: 'Connect systems, migrate platforms, and bring legacy software into the present without burning everything down.',
  },
]

const TICKER_ITEMS = [
  'Custom Software',
  'Technical Architecture',
  'MVP Builds',
  'Systems Design',
  'Boutique Consulting',
  'Whatever the Purpose',
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site">

      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a href="#top" className="nav-logo">
          <span className="nav-logo__det">det</span>
          <span className="nav-logo__paren nav-logo__paren--l">(</span>
          <span className="nav-logo__dot">·</span>
          <span className="nav-logo__paren nav-logo__paren--r">)</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Let's talk</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="top">
        <div className="hero__grid" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="tag">Boutique Software Consultancy</span>
          </p>

          <h1 className="hero__title">
            <span className="hero__word hero__word--1">DETER</span>
            <span className="hero__word hero__word--2">MINANT</span>
            <span className="hero__word hero__word--3">
              <span className="hero__labs">LABS</span>
            </span>
          </h1>

          <p className="hero__sub">
            We build software for every purpose.<br />
            With precision that decides outcomes.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">View our work</a>
            <a href="#services" className="btn btn--ghost">What we do →</a>
          </div>
        </div>

        <div className="hero__matrix" aria-hidden="true">
          <div className="matrix">
            <div className="matrix__bracket matrix__bracket--l"></div>
            <div className="matrix__cells">
              <span className="matrix__val">l</span>
              <span className="matrix__val">b</span>
              <span className="matrix__val">s</span>
              <span className="matrix__val">a</span>
            </div>
            <div className="matrix__bracket matrix__bracket--r"></div>
          </div>
          <div className="matrix__label">det(A) = la − bs</div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker__item">
              {item}
              <span className="ticker__sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="section-container about__layout">
          <div className="section-label">About</div>
          <div className="about__body">
            <h2 className="about__heading">
              The boutique firm that builds what others call impossible.
            </h2>
            <div className="about__text">
              <p>
                Determinant Labs is a boutique software consultancy. We work with
                founders, companies, and teams to build software that solves real
                problems — whatever the purpose, whatever the stack.
              </p>
              <p>
                We keep things small on purpose. Every engagement gets our full
                attention, our best thinking, and software we're proud to ship.
              </p>
            </div>
            <a href="#contact" className="btn btn--outline">Work with us →</a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="section-container">
          <div className="services__header">
            <div className="section-label">Services</div>
            <h2 className="services__title">What we build</h2>
          </div>
          <div className="services__grid">
            {SERVICES.map(s => (
              <article className="service-card" key={s.n}>
                <div className="service-card__number">{s.n}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="work" id="work">
        <div className="section-container">
          <div className="work__header">
            <div className="section-label">Work</div>
            <h2 className="work__title">Selected projects</h2>
          </div>
          <div className="work__grid">
            {['Systems platform for a logistics startup', 'Mobile app for a healthcare provider', 'Internal tooling for a fintech firm'].map((desc, i) => (
              <article className="work-item" key={i}>
                <div className="work-item__thumb">
                  <div className="work-item__overlay">
                    <span>Case study coming soon</span>
                  </div>
                  <div className="work-item__bg" style={{ '--hue': `${200 + i * 40}deg` }} />
                </div>
                <div className="work-item__meta">
                  <span className="work-item__tag">Project 0{i + 1}</span>
                  <h3 className="work-item__title">{desc}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="section-container contact__layout">
          <div className="section-label">Contact</div>
          <div className="contact__body">
            <h2 className="contact__heading">
              Let's build something
              <br />
              <em>that matters.</em>
            </h2>
            <p className="contact__sub">
              Tell us what you're working on. We'll figure out the rest together.
            </p>
            <a href="mailto:hello@determinantlabs.com" className="contact__email">
              hello@determinantlabs.com
              <span className="contact__arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="section-container footer__layout">
          <div className="footer__logo">det(·)</div>
          <div className="footer__copy">
            © {new Date().getFullYear()} Determinant Labs. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}
