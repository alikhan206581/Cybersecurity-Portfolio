
const projects = [
  {
    number: "01",
    title: "Linux Attendance System",
    description:
      "A Bash-based attendance management system with attendance records and saved history.",
    tech: ["Linux", "Bash", "Shell Scripting"],
  },
  {
    number: "02",
    title: "Java OOP Project",
    description:
      "An object-oriented programming project demonstrating classes, inheritance and encapsulation.",
    tech: ["Java", "OOP"],
  },
  {
    number: "03",
    title: "Cybersecurity Portfolio",
    description:
      "A personal portfolio showcasing cybersecurity interests, skills and development projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
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
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/85 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-sky-400">
            ALI<span className="text-white">.DEV</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#home" className="hover:text-sky-400">Home</a>
            <a href="#about" className="hover:text-sky-400">About</a>
            <a href="#skills" className="hover:text-sky-400">Skills</a>
            <a href="#projects" className="hover:text-sky-400">Projects</a>
            <a href="#contact" className="hover:text-sky-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-sky-400/50 px-5 py-2 text-sm text-sky-400 transition hover:bg-sky-400 hover:text-black"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="grid-background relative flex min-h-screen items-center px-6 pt-28"
      >
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div className="fade-up">
            <p className="mb-6 font-mono text-sm tracking-[4px] text-sky-400">
              &gt; CYBERSECURITY ENTHUSIAST
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Muhammad Ali
              <br />
              <span className="glow-text text-sky-400">
                Imran.
              </span>
            </h1>

            <h2 className="mt-6 text-xl text-gray-300">
              Cybersecurity Student & Developer
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-400">
              Exploring cybersecurity, networking, Linux and
              software development. Building practical projects
              and continuously learning new technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-sky-500 px-7 py-3 font-semibold text-black transition hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-500/30"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-7 py-3 transition hover:border-sky-400 hover:text-sky-400"
              >
                Contact Me
              </a>
              <a
  href="/Ali-Imran-CV.pdf"
  download="Muhammad-Ali-Imran-CV.pdf"
  className="inline-block rounded-lg border border-sky-500 px-8 py-4 font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-black"
>
  Download My CV
</a>
            </div>
          </div>

          {/* PROFILE VISUAL */}
          <div className="fade-delay flex justify-center">
            <div className="float-animation glow relative flex h-72 w-72 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/5 md:h-96 md:w-96">
              <div className="absolute inset-5 rounded-full border border-dashed border-sky-400/30" />

              <div className="text-center">
                <div className="text-8xl text-sky-400">⌘</div>
                <p className="mt-5 font-mono text-sm tracking-widest text-sky-300">
                  SYSTEM ONLINE
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  LEARN · BUILD · SECURE
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-sm text-sky-400">// ABOUT ME</p>

          <h2 className="mt-4 text-4xl font-bold">
            Building my future in <span className="text-sky-400">Cybersecurity.</span>
          </h2>

          <p className="mt-8 max-w-3xl leading-8 text-gray-400">
            I am currently pursuing a BS in Cyber Security at
            Iqra University. I enjoy learning about information
            security, operating systems, networking and programming.
            My goal is to develop practical technical skills
            through hands-on projects and continuous learning.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/5 bg-[#080d20] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-sky-400">// TECHNICAL SKILLS</p>

          <h2 className="mt-4 text-4xl font-bold">
            My <span className="text-sky-400">Expertise</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="glow rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center text-gray-300 transition hover:-translate-y-2 hover:border-sky-400 hover:text-sky-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-sky-400">// MY WORK</p>

          <h2 className="mt-4 text-4xl font-bold">
            Featured <span className="text-sky-400">Projects</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-white/10 bg-[#0b1124] p-7 transition hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-500/10"
              >
                <p className="font-mono text-sky-400">
                  PROJECT_{project.number}
                </p>

                <h3 className="mt-6 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-24 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
    
<section id="contact" className="bg-[#080d20] px-6 py-28 text-center">
  <p className="font-mono text-sm text-sky-400">// GET IN TOUCH</p>

  <h2 className="mt-5 text-4xl font-bold">
    Let's Build Something <span className="text-sky-400">Great.</span>
  </h2>

  <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
    Interested in cybersecurity, technology or collaboration?
    Feel free to get in touch.
  </p>

  <div className="mt-9 flex flex-wrap justify-center gap-4">
   <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=alikhan206581@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-sky-500 px-8 py-4 font-semibold text-black transition hover:bg-sky-300"
>
  Send Me an Email
</a>

    <a
      href="https://github.com/alikhan206581"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-sky-500 px-8 py-4 font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-black"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/muhammad-ali-imran-582136308/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-sky-500 px-8 py-4 font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-black"
    >
      LinkedIn
    </a>
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Muhammad Ali Imran. Built with Next.js.
      </footer>

    </main>
  );
}
