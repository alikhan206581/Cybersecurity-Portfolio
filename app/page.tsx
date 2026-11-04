"use client";

import { useEffect, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  status: string;
  symbol: string;
};

const initialProjects: Project[] = [
  {
    number: "01",
    title: "SentinelAI",
    category: "CYBERSECURITY / AI",
    description:
      "AI-powered continuous cybersecurity monitoring and security validation platform.",
    tech: ["AI", "Cybersecurity", "Security Monitoring"],
    github: "https://github.com/alikhan206581/SentinelAI",
    status: "PERSONAL PROJECT",
    symbol: "⌬",
  },
  {
    number: "02",
    title: "Login Monitoring System",
    category: "LINUX / SECURITY",
    description:
      "Linux-based login monitoring and security management system developed using Java Swing and Bash scripting for authentication, user management, and login monitoring.",
    tech: ["Java Swing", "Bash", "Linux"],
    github: "https://github.com/alikhan206581/login-monitoring-system",
    status: "UNIVERSITY PROJECT",
    symbol: "⌘",
  },
  {
    number: "03",
    title: "Java Phone Book — DSA",
    category: "JAVA / DATA STRUCTURES",
    description:
      "Iqra University final lab project built with Java and Data Structures and Algorithms. Supports adding, searching, updating, deleting, and displaying contacts.",
    tech: ["Java", "DSA"],
    github: "https://github.com/alikhan206581/Java-phoneBook-DSA",
    status: "UNIVERSITY PROJECT",
    symbol: "▤",
  },
  {
    number: "04",
    title: "Cybersecurity Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "Personal cybersecurity portfolio website built with Next.js and TypeScript to present skills and projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/alikhan206581/Cybersecurity-Portfolio",
    status: "PERSONAL PROJECT",
    symbol: "◈",
  },
];

const skills = [
  ["Cybersecurity", "SEC_01", "◈"],
  ["Linux", "SYS_02", "⌘"],
  ["Networking", "NET_03", "⌁"],
  ["Java", "DEV_04", "♨"],
  ["JavaScript", "DEV_05", "JS"],
  ["Next.js", "WEB_06", "N"],
  ["Bash", "OPS_07", "$_"],
  ["Git & GitHub", "VCS_08", "⑂"],
];

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [repositorySyncState, setRepositorySyncState] = useState<
    "loading" | "synced" | "error"
  >("loading");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observedElements = new WeakSet<Element>();
    const observeRevealElements = (root: ParentNode) => {
      root.querySelectorAll(".reveal").forEach((element) => {
        if (!observedElements.has(element)) {
          observedElements.add(element);
          observer.observe(element);
        }
      });
    };

    observeRevealElements(document);

    const projectsGrid = document.querySelector(".projects-grid");
    let mutationObserver: MutationObserver | undefined;
    if (projectsGrid) {
      mutationObserver = new MutationObserver(() =>
        observeRevealElements(projectsGrid)
      );
      mutationObserver.observe(projectsGrid, { childList: true });
    }

    return () => {
      observer.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch("/api/github-repos", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load GitHub repositories");
        }

        const updatedProjects: Project[] = await response.json();

        if (!Array.isArray(updatedProjects)) {
          throw new Error("GitHub repository response was invalid");
        }

        if (isMounted) {
          setProjects(updatedProjects);
          setRepositorySyncState("synced");
        }
      } catch {
        if (isMounted) {
          setRepositorySyncState("error");
        }
      }
    };

    void loadProjects();
    const refreshInterval = window.setInterval(() => {
      void loadProjects();
    }, 60 * 1000);

    return () => {
      isMounted = false;
      window.clearInterval(refreshInterval);
    };
  }, []);

  return (
    <main className="neural-site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="noise-layer" />

      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="nav-shell">
          <a href="#home" className="brand-mark">
            <span className="brand-symbol">◈</span>
            <span>
              ALI<span className="brand-muted">/IMRAN</span>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            LET&apos;S CONNECT <span>↗</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* HOME / HERO */}
      <section id="home" className="hero-section">
        <div className="hero-grid" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow reveal">
              <span className="status-light" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
              <span className="eyebrow-line" />
              <span className="eyebrow-code">KHI / PK</span>
            </div>

            <p className="hero-kicker reveal">HELLO, WORLD. I AM</p>

            <h1 className="hero-title reveal">
              Muhammad
              <span className="hero-name-gradient">
                Ali Imran<span className="title-period">.</span>
              </span>
            </h1>

            <div className="hero-role reveal">
              <span className="role-bracket">[</span>
              CYBERSECURITY STUDENT
              <span className="role-divider">/</span>
              DEVELOPER
              <span className="role-bracket">]</span>
            </div>

            <p className="hero-description reveal">
              Exploring the space where security meets technology. I build,
              experiment and learn across cybersecurity, Linux, networking
              and software development.
            </p>

            <div className="hero-actions reveal">
              <a href="#projects" className="button-primary">
                EXPLORE MY WORK <span>↗</span>
              </a>

              <a
                href="/Ali-Imran-CV.pdf"
                download="Muhammad-Ali-Imran-CV.pdf"
                className="button-secondary"
              >
                DOWNLOAD CV <span>↓</span>
              </a>
            </div>

            <div className="hero-stats reveal">
              <div>
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <span>PROJECTS</span>
              </div>
              <i />
              <div>
                <strong>08</strong>
                <span>CORE SKILLS</span>
              </div>
              <i />
              <div>
                <strong>∞</strong>
                <span>LEARNING MINDSET</span>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL PROFILE PHOTO */}
          <div
            className="hero-art reveal"
            aria-label="Professional profile photograph"
          >
            <div className="profile-photo-frame">
              <div className="profile-photo-glow" />

              <div className="profile-photo-inner">
                <img
                  src="/profile.jpeg"
                  alt="Muhammad Ali Imran - Cybersecurity Student and Developer"
                  className="profile-photo"
                />
              </div>

             <div className="profile-info">
  <div className="profile-status">
    <span className="status-light"></span>
    AVAILABLE FOR OPPORTUNITIES
  </div>

  <div className="profile-identity">
    <span className="identity-tag">IDENTITY VERIFIED</span>
    <h3>MUHAMMAD ALI IMRAN</h3>
    <p>CYBERSECURITY STUDENT <span>/</span> DEVELOPER</p>
  </div>
</div>
            </div>
          </div>
        </div>

        <div className="hero-bottomline">
          <span>INDEPENDENT THINKING. CONTINUOUS LEARNING.</span>
          <a href="#about">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
          <span className="hero-index">01 — 06</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-block about-section">
        <div className="section-heading reveal">
          <span className="section-index">01 / PROFILE</span>
          <span className="section-overline">A LITTLE ABOUT ME</span>
        </div>

        <div className="about-layout">
          <div className="about-main reveal">
            <p className="micro-label">THE MINDSET</p>

            <h2>
              Curious by nature.
              <br />
              <span className="text-gradient">
                Driven by technology.
              </span>
            </h2>

            <p className="about-description">
              I am pursuing a BS in Cyber Security at Iqra University,
              Karachi. I enjoy understanding how systems work, exploring
              security concepts and turning what I learn into practical
              projects. My focus is on building a strong foundation in
              cybersecurity, operating systems, networking and programming.
            </p>

            <a className="text-link" href="#journey">
              EXPLORE MY JOURNEY <span>↗</span>
            </a>
          </div>

          {/* IDENTITY CARD */}
          <div className="identity-panel reveal">
            <div className="panel-topline">
              <span>IDENTITY FILE</span>
              <span className="panel-live">
                <i /> ACTIVE
              </span>
            </div>

            <div className="identity-monogram">
              AI<span>.</span>
            </div>

            <div className="identity-name">MUHAMMAD ALI IMRAN</div>

            <div className="identity-role">
              CYBERSECURITY STUDENT / DEVELOPER
            </div>

            <div className="identity-rule" />

            <div className="identity-data">
              <div>
                <span>BASE</span>
                <b>KARACHI, PAKISTAN</b>
              </div>

              <div>
                <span>EDUCATION</span>
                <b>BS CYBER SECURITY</b>
              </div>

              <div>
                <span>INSTITUTION</span>
                <b>IQRA UNIVERSITY</b>
              </div>

              <div>
                <span>FOCUS</span>
                <b>SECURITY / SYSTEMS / CODE</b>
              </div>
            </div>

            <div className="panel-corner">AI / 001</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-block skills-section">
        <div className="section-heading reveal">
          <span className="section-index">02 / CAPABILITIES</span>
          <span className="section-overline">TOOLS OF THE TRADE</span>
        </div>

        <div className="skills-intro reveal">
          <h2>
            My technical <span className="text-gradient">arsenal.</span>
          </h2>

          <p>
            Technologies and disciplines I am learning and using to grow my
            technical foundation.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(([name, code, symbol], index) => (
            <article
              className="skill-tile reveal"
              key={name}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="skill-top">
                <span>{code}</span>
                <span>0{index + 1}</span>
              </div>

              <div className="skill-symbol">{symbol}</div>

              <h3>{name}</h3>

              <div className="skill-bottom">
                <span>CONTINUOUS DEVELOPMENT</span>
                <span className="skill-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-block projects-section">
        <div className="section-heading reveal">
          <span className="section-index">03 / SELECTED OPERATIONS</span>
          <span className="section-overline">IDEAS INTO REALITY</span>
        </div>

        <div className="projects-heading reveal">
          <h2>
            Selected <span className="text-gradient">projects.</span>
          </h2>

          <a
            href="https://github.com/alikhan206581"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            ALL REPOSITORIES <span>↗</span>
          </a>
        </div>

        <p className="projects-lead reveal">
          A collection of personal and university work across cybersecurity,
          systems and software development.
        </p>

        <p className="github-sync-status" role="status">
          {repositorySyncState === "loading" &&
            "CONNECTING TO GITHUB..."}
          {repositorySyncState === "synced" &&
            "LIVE FROM GITHUB · AUTOMATICALLY REFRESHED"}
          {repositorySyncState === "error" &&
            "GITHUB SYNC UNAVAILABLE · SHOWING THE LAST AVAILABLE PROJECT LIST"}
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal ${
                index === 0 ? "project-featured" : ""
              }`}
              key={project.number}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="project-card-top">
                <span className="project-number">
                  PROJECT / {project.number}
                </span>

                <span className="project-status">
                  <i /> {project.status}
                </span>
              </div>

              <div className="project-visual">
                <span className="project-symbol">{project.symbol}</span>
                <span className="project-visual-ring ring-one" />
                <span className="project-visual-ring ring-two" />
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                VIEW SOURCE CODE <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section-block journey-section">
        <div className="section-heading reveal">
          <span className="section-index">04 / THE JOURNEY</span>
          <span className="section-overline">LEARNING IN MOTION</span>
        </div>

        <div className="journey-layout">
          <div className="journey-title reveal">
            <h2>
              Every step
              <br />
              builds the <span className="text-gradient">next.</span>
            </h2>

            <p>
              A growing foundation shaped by education, experimentation and
              hands-on learning.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item reveal">
              <span className="timeline-point" />
              <span className="timeline-label">CURRENT</span>
              <h3>BS Cyber Security</h3>
              <p>Iqra University, Karachi</p>
              <span className="timeline-detail">
                Building knowledge in cybersecurity, systems and computing.
              </span>
            </article>

            <article className="timeline-item reveal">
              <span className="timeline-point" />
              <span className="timeline-label">2023 — 2024</span>
              <h3>Intermediate</h3>
              <p>PECHS Government Degree Boys College</p>
            </article>

            <article className="timeline-item reveal">
              <span className="timeline-point" />
              <span className="timeline-label">2022</span>
              <h3>Matriculation</h3>
              <p>Uloom n Hikmah Islamic School</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-orb" />

        <div className="contact-content reveal">
          <span className="section-index">05 / OPEN CHANNEL</span>

          <p className="contact-overline">
            HAVE A PROJECT OR OPPORTUNITY?
          </p>

          <h2>
            Let&apos;s make
            <br />
            <span className="text-gradient">something matter.</span>
          </h2>

          <p className="contact-description">
            Interested in technology, cybersecurity or collaboration?
            I&apos;d be glad to connect and hear what you&apos;re working on.
          </p>

          {/* EMAIL AND PHONE */}
          <div className="contact-methods">
            <a
              className="contact-email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alikhan206581@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-method-icon">✉</span>

              <span>
                <small>EMAIL ME</small>
                ALIKHAN206581@GMAIL.COM
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <a className="contact-email" href="tel:+923362065801">
              <span className="contact-method-icon">☎</span>

              <span>
                <small>CALL ME</small>
                +92 336 2065801
              </span>

              <span className="contact-arrow">↗</span>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a
              href="https://github.com/alikhan206581"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">⌘</span>
              GITHUB
              <span className="social-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-ali-imran-582136308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin-icon">in</span>
              LINKEDIN
              <span className="social-arrow">↗</span>
            </a>

            <a
              href="/Ali-Imran-CV.pdf"
              download="Muhammad-Ali-Imran-CV.pdf"
            >
              <span className="social-icon">↓</span>
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div className="contact-footer">
          <span>NEURAL ECLIPSE / PERSONAL PORTFOLIO</span>
          <span>© 2026 MUHAMMAD ALI IMRAN</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </section>
    </main>
  );
}