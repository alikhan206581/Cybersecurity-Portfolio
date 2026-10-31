
const projects = [
  {
    number: "01",
    title: "SentinelAI",
    description:
      "AI-powered continuous cybersecurity monitoring and security validation platform.",
    tech: ["AI", "Cybersecurity", "Security Monitoring"],
    github: "https://github.com/alikhan206581/SentinelAI",
    status: "Personal Project",
    icon: "⌬",
  },
  {
    number: "02",
    title: "Login Monitoring System",
    description:
      "Linux-based Login Monitoring and Security Management System developed using Java Swing and Bash scripting for authentication, user management, and login monitoring.",
    tech: ["Java Swing", "Bash", "Linux"],
    github: "https://github.com/alikhan206581/login-monitoring-system",
    status: "University Project",
    icon: "⌨",
  },
  {
    number: "03",
    title: "Java Phone Book – DSA",
    description:
      "Iqra University final lab project built with Java and Data Structures and Algorithms. Supports adding, searching, updating, deleting, and displaying contacts.",
    tech: ["Java", "DSA"],
    github: "https://github.com/alikhan206581/Java-phoneBook-DSA",
    status: "University Project",
    icon: "▤",
  },
  {
    number: "04",
    title: "Cybersecurity Portfolio",
    description:
      "My personal cybersecurity portfolio website, built with Next.js and TypeScript to present my skills and projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/alikhan206581/Cybersecurity-Portfolio",
    status: "Personal Project",
    icon: "⌘",
  },
];

const skills = [
  "Cybersecurity",
  "Linux",
  "Networking",
  "Java",
  "JavaScript",
  "Next.js",
  "Bash",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="portfolio relative min-h-screen overflow-hidden bg-[#030817] text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .portfolio {
          background:
            radial-gradient(ellipse at 15% 15%, rgba(0,145,255,.13), transparent 35%),
            radial-gradient(ellipse at 85% 45%, rgba(0,225,255,.09), transparent 35%),
            #030817;
        }

        .hero-grid {
          background-image:
            linear-gradient(rgba(75,170,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(75,170,255,.045) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .cyan-text {
          background: linear-gradient(90deg, #38bdf8, #22d3ee, #60a5fa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-glow {
          box-shadow:
            0 0 80px rgba(14,165,233,.17),
            inset 0 0 45px rgba(14,165,233,.06);
        }

        .glass-card {
          background: linear-gradient(
            145deg,
            rgba(15,35,65,.78),
            rgba(5,15,34,.72)
          );
          border: 1px solid rgba(125,211,252,.13);
          backdrop-filter: blur(16px);
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(34,211,238,.55);
          box-shadow: 0 15px 45px rgba(0,145,255,.12);
        }

        .fade-up {
          animation: fadeUp 1s ease both;
        }

        .fade-delay {
          animation: fadeUp 1.2s .2s ease both;
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .orbit {
          animation: spin 22s linear infinite;
        }

        .pulse-dot {
          animation: pulse 2s infinite;
        }

        .shine-button {
          transition: all .3s ease;
        }

        .shine-button:hover {
          box-shadow: 0 0 30px rgba(34,211,238,.35);
          transform: translateY(-3px);
        }

        .section-label {
          letter-spacing: .3em;
          color: #38bdf8;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 12px #22d3ee;
          }
          50% {
            opacity: .45;
            box-shadow: 0 0 3px #22d3ee;
          }
        }

        ::selection {
          background: #0891b2;
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-cyan-300/10 bg-[#030817]/80 px-5 py-5 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="text-2xl font-black tracking-wider">
            <span className="cyan-text">ALI</span>
            <span className="text-white">.DEV</span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-slate-400 md:flex">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-cyan-300"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Let's Talk ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32"
      >
        <div className="hero-grid pointer-events-none absolute inset-0" />

        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-400" />

              <span className="font-mono text-xs tracking-[.2em] text-cyan-300">
                CYBERSECURITY ENTHUSIAST
              </span>
            </div>

            <p className="mb-4 font-mono text-sm tracking-widest text-slate-500">
              HELLO, WORLD. I'M
            </p>

            <h1 className="text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Muhammad
              <br />
              <span className="cyan-text">Ali Imran.</span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-slate-300 md:text-2xl">
              Cybersecurity Student
              <span className="text-cyan-400"> & Developer</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Exploring cybersecurity, networking, Linux and software
              development. Building practical projects and continuously
              learning new technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="shine-button rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-7 py-4 font-bold text-[#03101c]"
              >
                Explore My Work ↗
              </a>

              <a
                href="/Ali-Imran-CV.pdf"
                download="Muhammad-Ali-Imran-CV.pdf"
                className="shine-button rounded-lg border border-cyan-400/40 px-7 py-4 font-semibold text-cyan-300 hover:bg-cyan-400/10"
              >
                Download CV ↓
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-500">
              <div>
                <p className="text-2xl font-bold text-white">04</p>
                <p>Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">08</p>
                <p>Technologies</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">∞</p>
                <p>Learning mindset</p>
              </div>
            </div>
          </div>

          {/* ANIMATED CYBER VISUAL */}
          <div className="fade-delay flex justify-center">
            <div className="float relative flex h-[300px] w-[300px] items-center justify-center sm:h-[390px] sm:w-[390px]">
              <div className="hero-glow absolute inset-8 rounded-full border border-cyan-400/20 bg-blue-500/[0.04]" />

              <div className="orbit absolute inset-3 rounded-full border border-dashed border-cyan-400/30" />

              <div className="absolute inset-12 rounded-full border border-blue-400/20" />

              <div className="absolute inset-20 rounded-full border border-cyan-300/20" />

              <div className="absolute left-7 top-20 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" />

              <div className="absolute bottom-16 right-7 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]" />

              <div className="relative z-10 text-center">
                <div className="cyan-text text-8xl font-black sm:text-9xl">
                  ⌘
                </div>

                <p className="mt-5 font-mono text-sm tracking-[.3em] text-cyan-300">
                  SYSTEM ONLINE
                </p>

                <p className="mt-3 text-xs tracking-widest text-slate-500">
                  LEARN · BUILD · SECURE
                </p>
              </div>

              <div className="absolute -bottom-2 rounded-full border border-cyan-400/20 bg-[#07172c] px-5 py-2 font-mono text-xs text-cyan-300">
                [ ACCESS GRANTED ]
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-slate-600 md:flex">
          SCROLL TO EXPLORE
          <span className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="section-label font-mono text-xs">
            // 01 — ABOUT ME
          </p>

          <div className="mt-5 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Building my future in
                <span className="cyan-text"> Cybersecurity.</span>
              </h2>

              <p className="mt-8 leading-8 text-slate-400">
                I am currently pursuing a BS in Cyber Security at Iqra
                University. I enjoy learning about information security,
                operating systems, networking and programming. My goal is
                to develop practical technical skills through hands-on
                projects and continuous learning.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <p className="font-mono text-sm text-cyan-300">
                &gt; CURRENT STATUS
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-sm text-slate-500">Education</p>
                  <p className="mt-1 text-lg font-semibold">
                    BS Cyber Security
                  </p>
                  <p className="text-sm text-slate-400">
                    Iqra University, Karachi
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm text-slate-500">Main Interests</p>
                  <p className="mt-1 font-semibold text-slate-200">
                    Cybersecurity · Networking · Linux
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm text-slate-500">Career Goal</p>
                  <p className="mt-1 font-semibold text-cyan-300">
                    Growing in IT & Cybersecurity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-cyan-300/10 bg-[#071329]/70 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="section-label font-mono text-xs">
            // 02 — TECHNICAL SKILLS
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            My <span className="cyan-text">Technical Arsenal.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Technologies and tools I am learning and using to build my
            technical foundation.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="glass-card group rounded-xl p-6"
              >
                <p className="font-mono text-xs text-cyan-400/60">
                  SKILL_0{index + 1}
                </p>

                <h3 className="mt-4 text-base font-semibold text-slate-200 transition group-hover:text-cyan-300 sm:text-lg">
                  {skill}
                </h3>

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL GITHUB PROJECTS */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="section-label font-mono text-xs">
            // 03 — SELECTED WORK
          </p>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-bold md:text-5xl">
              Featured <span className="cyan-text">Projects.</span>
            </h2>

            <a
              href="https://github.com/alikhan206581"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-300 transition hover:text-white"
            >
              Explore all GitHub repositories ↗
            </a>
          </div>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            A selection of my personal and university projects in
            cybersecurity, programming and software development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="glass-card group rounded-2xl p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-cyan-300">
                    PROJECT_{project.number}
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-slate-400">
                    {project.status}
                  </span>
                </div>

                <div className="my-8 flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-24 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.07] px-3 py-1.5 text-xs text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
                >
                  View on GitHub <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-cyan-300/10 bg-[#071329]/80 px-6 py-28 text-center"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="section-label font-mono text-xs">
            // 04 — GET IN TOUCH
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Let's Build Something
            <br />
            <span className="cyan-text">Great Together.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-slate-400">
            Interested in cybersecurity, technology or collaboration?
            Feel free to get in touch. I would be happy to connect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alikhan206581@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-4 font-bold text-[#03101c]"
            >
              Send Me an Email ↗
            </a>

            <a
              href="https://github.com/alikhan206581"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button rounded-lg border border-cyan-400/40 px-8 py-4 font-semibold text-cyan-300 hover:bg-cyan-400/10"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-ali-imran-582136308/"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button rounded-lg border border-cyan-400/40 px-8 py-4 font-semibold text-cyan-300 hover:bg-cyan-400/10"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © 2026 Muhammad Ali Imran. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

