```jsx
import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Mihir Darji</h2>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          
          <img
              src="/profile.jpg"
              alt="Mihir Darji"
              className="profile-photo"
          />
          <p className="intro">Hello, I'm</p>

          <h1>Mihir Darji</h1>

          <h2>Software Developer</h2>

          <p className="hero-text">
            Software Developer with 1.5 years of total work experience
            specializing in scalable web applications using Python, FastAPI,
            and Django ecosystems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download="Mihir_Darji_Resume.pdf"
              className="btn secondary-btn"
            >
              Download Resume
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Mihir8510"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/mihir-tailor-10b288203"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:mihirtailornil22@gmail.com">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            I am a Software Developer specializing in designing and developing
            scalable web applications using Python, FastAPI, and Django
            ecosystems.
          </p>

          <p>
            I have a strong understanding of system design, backend API
            architecture, asynchronous programming, and database optimization
            using SQL Server and MySQL.
          </p>

          <p>
            I am experienced in collaborating across cross-functional teams to
            deliver performance-driven features and clean system integrations.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-container">
          <div className="skill">Python</div>
          <div className="skill">HTML5</div>
          <div className="skill">CSS3</div>
          <div className="skill">JavaScript</div>
          <div className="skill">SQL</div>

          <div className="skill">FastAPI</div>
          <div className="skill">Django</div>
          <div className="skill">Bootstrap</div>
          <div className="skill">WordPress</div>

          <div className="skill">SQL Server</div>
          <div className="skill">MySQL</div>

          <div className="skill">Visual Studio Code</div>
          <div className="skill">Postman</div>
          <div className="skill">Manual Testing</div>
          <div className="skill">Git</div>
          <div className="skill">Version Control</div>

          <div className="skill">REST APIs</div>
          <div className="skill">Asynchronous Programming</div>
          <div className="skill">High-Performance API Gateways</div>
          <div className="skill">Secure Authentication Architecture</div>
          <div className="skill">Cloud Deployment Models</div>
        </div>
      </section>

    {/* Projects Section */}
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <h3>AI-First CRM</h3>

          <p>
            An AI-powered CRM application designed to manage and summarize
            interactions using modern AI and web technologies.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>FastAPI</span>
            <span>MySQL</span>
            <span>LangGraph</span>
          </div>

          <a
            href="https://github.com/Mihir8510/AI-First-CRM"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Code →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>ATM System</h3>

          <p>
            An ATM management application with banking operations and
            transaction-related functionality.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>FastAPI</span>
            <span>MySQL</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://github.com/Mihir8510/ATM-SY"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Code →
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>LSTM Text Generator</h3>

          <p>
            A machine learning project focused on generating text using an
            LSTM-based neural network model.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>LSTM</span>
            <span>Machine Learning</span>
          </div>

          <a
            href="https://github.com/Mihir8510/lstm-text-generator"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Code →
          </a>
        </div>

      </div>
    </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-container">

          {/* Experience 1 */}
          <div className="experience-card">
            <h3>Python Developer</h3>

            <h4>Datanova Software Solutions Pvt Ltd.</h4>

            <p className="experience-date">
              March 2026 - Present
            </p>

            <ul>
              <li>
                Designing, developing, and maintaining scalable backend
                RESTful APIs and high-performance asynchronous endpoints using
                Python, Django, and FastAPI frameworks.
              </li>

              <li>
                Developing robust data architecture models and structured API
                views to ensure secure, clean, and reliable system data flows.
              </li>

              <li>
                Optimizing database scripts, stored procedures, complex query
                configurations, and schema designs across SQL Server and MySQL
                platforms.
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <h3>Full Stack Developer Intern</h3>

            <h4>Weltec Institute</h4>

            <p className="experience-date">
              May 2024 - May 2025
            </p>

            <ul>
              <li>
                Gained hands-on architecture experience in software
                development utilizing Python, Django, HTML5, CSS3, Bootstrap,
                and relational MySQL instances.
              </li>

              <li>
                Designed and integrated user authentication protocols, custom
                role-based access control measures, and precise data security
                validations.
              </li>

              <li>
                Developed fully functional responsive web applications
                supporting dynamic product inventories and secure transactional
                workflows.
              </li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <h3>WordPress Developer Intern</h3>

            <h4>Infonaya Software</h4>

            <p className="experience-date">
              Jan 2024 - May 2024
            </p>

            <ul>
              <li>
                Contributed to functional feature developments and module
                structures for an enterprise University Management Portal
                platform.
              </li>

              <li>
                Built clean web interfaces mapping key application workflows
                for performance reports, schedule managers, and tracking
                systems.
              </li>

              <li>
                Authored precise manual test cases and validated functional
                paths to ensure application reliability and cross-module
                consistency.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Bachelor of Engineering</h3>

          <h4>Computer Science</h4>

          <p>Dr. Jivraj Mehta Institute Of Technology</p>

          <p>2020 - 2024</p>

          <p>Anand, Gujarat</p>
        </div>

        <div className="education-card">
          <h3>HSC</h3>

          <h4>GHSEB Board</h4>

          <p>Arpi Science School</p>

          <p>2018 - 2020</p>

          <p>Vadodara, Gujarat</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Let's Connect</h2>

        <p>
          I am open to new opportunities and would love to connect with you.
        </p>

        <div className="contact-links">
          <a href="mailto:mihirtailornil22@gmail.com">
             📧 Email
          </a>

          <a
            href="https://linkedin.com/in/mihir-tailor-10b288203"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Mihir8510"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Mihir Darji. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App;
```
