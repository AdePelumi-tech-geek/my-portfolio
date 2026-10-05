'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Download,
  Globe2,
  Mail,
  Menu,
  Palette,
  Send,
  Server,
  Sparkles,
  X,
  XIcon,
} from 'lucide-react'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'PHP',
  'PostgreSQL',
  'Drizzle ORM',
  'Cloudinary',
  'Git',
  'Vercel',
  'Data Annotation',
]

const journey = [
  { year: '2024', title: 'GDSS Bwari', detail: 'Secondary school graduate' },
  { year: '2025', title: 'Techminds Academy', detail: 'Front-End Development Certificate' },
  { year: '2026', title: 'IJMB completed', detail: 'Continuing to grow through focused learning' },
  { year: 'Present', title: 'Building real-world projects', detail: 'Learning, shipping and improving every day' },
]

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Ali home">
      <span className="logo-mark">A</span>
      <span>Ali</span>
    </a>
  )
}

function ProjectPreview({ type }: { type: 'gleemorra' | 'vendors' }) {
  if (type === 'gleemorra') {
    return (
      <div className="project-preview gleemorra-preview" aria-label="Gleemorra fashion storefront preview">
        <div className="preview-top">
          <span className="mini-logo">GLEEMORRA</span>
          <span>New arrivals</span>
          <span>Shop</span>
          <span>About</span>
          <span className="mini-bag">Bag (0)</span>
        </div>
        <div className="fashion-hero">
          <div>
            <p className="mini-eyebrow">NEW SEASON / 2026</p>
            <h3>
              Soft nights.<br />
              <em>Beautiful days.</em>
            </h3>
            <span className="mini-button">
              Shop collection <ArrowUpRight />
            </span>
          </div>
          <div className="fashion-model">
            <div className="model-head" />
            <div className="model-body" />
          </div>
        </div>
        <div className="preview-bottom">
          <span>Nightwear</span>
          <span>Wedding accessories</span>
          <span>Wholesale available</span>
        </div>
      </div>
    )
  }
  return (
    <div className="project-preview vendors-preview" aria-label="Vendors Market marketplace preview">
      <div className="market-nav">
        <span className="market-logo">VM</span>
        <strong>Vendors Market</strong>
        <span>Browse</span>
        <span>Categories</span>
        <span className="market-search">Search products...</span>
        <span className="market-avatar">A</span>
      </div>
      <div className="market-hero">
        <p className="mini-eyebrow">LOCAL COMMERCE, MADE EASY</p>
        <h3>
          Shop local.<br />
          <span>Support real people.</span>
        </h3>
        <p>Discover trusted vendors near you.</p>
        <div className="market-cta">
          Explore marketplace <ArrowUpRight />
        </div>
      </div>
      <div className="market-cards">
        <div>
          <span>Fresh produce</span>
          <b>From nearby sellers</b>
        </div>
        <div>
          <span>Handmade goods</span>
          <b>Made with care</b>
        </div>
        <div>
          <span>Fashion & more</span>
          <b>Find your next favorite</b>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <div className="container nav-inner">
          <Logo />
          <nav
            className={menuOpen ? 'nav-links open' : 'nav-links'}
            aria-label="Primary navigation"
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="button button-small nav-cta" href="#contact">
            Let&apos;s Talk <ArrowUpRight />
          </a>
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="home" className="hero container section-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse-dot" />
            Frontend Developer · Nigeria
          </p>
          <h1>
            Hi, I&apos;m <span>Ali</span>.<br />
            I build modern<br />
            web experiences.
          </h1>
          <p className="hero-description">
            I&apos;m a frontend developer focused on turning ideas into clean,
            responsive and user-friendly digital products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button">
              View My Projects <ArrowDown />
            </a>
            <a href="#" className="button button-ghost">
              Download CV <Download />
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com" aria-label="GitHub"><Code2 /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Globe2 /></a>
            <a href="https://x.com" aria-label="X"><XIcon /></a>
            <a href="mailto:hello@example.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="portrait-card">
            <Image
              className="portrait-image"
              src="/profile.jpg"
              alt="Ali"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 410px"
            />
            <div className="portrait-label">
              <Sparkles /> Turning ideas<br /> into real products
            </div>
          </div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </div>
      </section>

      <section id="about" className="about-section section-border">
        <div className="container section-grid about-grid">
          <div>
            <p className="section-kicker">01 · About me</p>
            <h2>Who <span>I am</span></h2>
          </div>
          <div className="about-content">
            <p>
              I&apos;m Ali, a frontend developer based in Nigeria. I started my
              journey with a passion for technology, and I&apos;ve been building
              ever since — from learning HTML and CSS to working on real-world
              projects like Gleemorra.
            </p>
            <p>
              I&apos;m currently focused on growing my skills in Next.js, backend
              integration and modern web technologies. My goal is to become a
              well-rounded developer and contribute to products that make a
              difference.
            </p>
            <div className="traits">
              <span><Code2 /> Problem solver</span>
              <span><Globe2 /> Team player</span>
              <span><Sparkles /> Always learning</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 · Selected work</p>
            <h2>Things I&apos;ve <span>built</span></h2>
          </div>
          <a className="text-link" href="#contact">
            Have a project in mind? <ArrowUpRight />
          </a>
        </div>
        <div className="project-grid">
          <article className="project-card featured-card">
            <ProjectPreview type="gleemorra" />
            <div className="project-info">
              <div className="project-title-row">
                <div>
                  <p className="project-number">01 / E-COMMERCE</p>
                  <h3>GLEEMORRA</h3>
                </div>
                <span className="status status-live"><span /> Launched</span>
              </div>
              <p>
                A modern e-commerce platform for nightwear and wedding
                accessories, with retail and wholesale pricing, inventory,
                orders and a focused admin experience.
              </p>
              <div className="tag-list">
                {['Next.js', 'Neon PostgreSQL', 'Drizzle ORM', 'Cloudinary', 'Tailwind CSS'].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href="#contact">
                View case study <ArrowUpRight />
              </a>
            </div>
          </article>
          <article className="project-card">
            <ProjectPreview type="vendors" />
            <div className="project-info">
              <div className="project-title-row">
                <div>
                  <p className="project-number">02 / MARKETPLACE</p>
                  <h3>VENDORS MARKET</h3>
                </div>
                <span className="status status-progress"><span /> In progress</span>
              </div>
              <p>
                A local marketplace concept connecting Nigerian vendors with
                nearby buyers through a simple, safe and community-driven
                experience.
              </p>
              <div className="tag-list">
                {['Next.js', 'PostgreSQL', 'Better Auth', 'Cloudinary', 'Paystack'].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href="#contact">
                View project <ArrowUpRight />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="skills-section section-border">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 · Skills & tools</p>
              <h2>Technologies I <span>work with</span></h2>
            </div>
            <p className="section-note">Always learning, always improving.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-pill" key={skill}>
                <span className="skill-icon">
                  {index % 3 === 0 ? <Code2 /> : index % 3 === 1 ? <Palette /> : <Database />}
                </span>
                {skill}
              </div>
            ))}
          </div>
          <div className="stats">
            <div><strong>02+</strong><span>Real projects</span></div>
            <div><strong>02</strong><span>Completed training</span></div>
            <div><strong>∞</strong><span>Curiosity</span></div>
            <div><strong>24/7</strong><span>Big dreams</span></div>
          </div>
        </div>
      </section>

      <section id="journey" className="journey-section container section-grid">
        <div>
          <p className="section-kicker">04 · The journey</p>
          <h2>Learning by <span>doing</span></h2>
          <p className="journey-intro">
            Every project is a chance to learn something new, solve a real
            problem and become a better builder.
          </p>
        </div>
        <div className="timeline">
          {journey.map((item, index) => (
            <div className="timeline-item" key={item.year}>
              <div className="timeline-marker">
                {index === journey.length - 1 ? <Sparkles /> : <Check />}
              </div>
              <div>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section section-border">
        <div className="container contact-grid">
          <div>
            <p className="section-kicker">05 · Get in touch</p>
            <h2>Let&apos;s build something <span>together.</span></h2>
            <p className="contact-copy">
              Have an idea, a collaboration in mind or just want to say hello?
              I&apos;d love to hear from you.
            </p>
            <a className="contact-email" href="mailto:emmanekchi@gmail.com">
              <Mail /> emmanekechi@gmail.com <ArrowUpRight />
            </a>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
          >
            <label>
              Name
              <input required placeholder="Your name" />
            </label>
            <label>
              Email
              <input required type="email" placeholder="your email" />
            </label>
            <label>
              Message
              <textarea required placeholder="Tell me about your project..." rows={4} />
            </label>
            <button className="button" type="submit">
              {sent ? 'Message ready to send' : 'Send message'}
              {sent ? <Check /> : <Send />}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo />
          <p>Frontend Developer · Creator · Lifelong Learner</p>
          <div className="footer-social">
            <a href="https://github.com" aria-label="GitHub"><Code2 /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Globe2 /></a>
            <a href="mailto:hello@example.com" aria-label="Email"><Mail /></a>
          </div>
          <small>© 2026 Ali. Built with intention.</small>
        </div>
      </footer>
    </main>
  )
}
