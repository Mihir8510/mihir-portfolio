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
            <a href="#key-projects">Key Projects</a>
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

          <h2>Full Stack Developer</h2>

          <p className="hero-text">
            Full Stack Developer with 2+ years of experience,
            including internships, building web applications and
            backend systems using Python, Django, FastAPI, NestJS,
            and Next.js.
          </p>

          <div className="hero-buttons">
            <a href="#key-projects" className="btn primary-btn">
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
            I am a Full Stack Developer with 2+ years of experience,
            including internships, in building web applications and
            backend systems. I work with technologies such as Python,
            Django, FastAPI, NestJS, and Next.js.
          </p>

          <p>
            I have hands-on experience in developing RESTful APIs,
            implementing JWT-based authentication, asynchronous
            programming, and managing relational databases such as
            PostgreSQL, SQL Server, and MySQL using Prisma ORM and
            other database tools.
          </p>

          <p>
            I enjoy solving technical problems, building reliable
            applications, writing clean code, and continuously
            learning new technologies to improve my development skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-category">

          <div className="skill-group">
            <h3>Programming Languages</h3>
            <div className="skills-container">
              <div className="skill">Python</div>
              <div className="skill">JavaScript</div>
              <div className="skill">SQL</div>
              <div className="skill">HTML5</div>
              <div className="skill">CSS3</div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Backend Technologies</h3>
            <div className="skills-container">
              <div className="skill">NestJS</div>
              <div className="skill">Node.js</div>
              <div className="skill">Django</div>
              <div className="skill">FastAPI</div>
              <div className="skill">Prisma ORM</div>
              <div className="skill">REST APIs</div>
              <div className="skill">JWT Authentication</div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Frontend Technologies</h3>
            <div className="skills-container">
              <div className="skill">React</div>
              <div className="skill">Next.js</div>
              <div className="skill">Bootstrap</div>
              <div className="skill">WordPress</div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Databases</h3>
            <div className="skills-container">
              <div className="skill">PostgreSQL</div>
              <div className="skill">SQL Server</div>
              <div className="skill">MySQL</div>
              <div className="skill">SQLite</div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools & Technologies</h3>
            <div className="skills-container">
              <div className="skill">Git</div>
              <div className="skill">GitHub</div>
              <div className="skill">VS Code</div>
              <div className="skill">Postman</div>
              <div className="skill">Pytest</div>
              <div className="skill">Manual Testing</div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Core Concepts</h3>
            <div className="skills-container">
              <div className="skill">CRUD Operations</div>
              <div className="skill">API Development</div>
              <div className="skill">Asynchronous Programming</div>
              <div className="skill">REST API Design</div>
              <div className="skill">Version Control</div>
            </div>
          </div>

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
              An ATM management application with banking operations,
              authentication, transactions, balance management, and
              transaction history functionality.
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
              A machine learning project focused on generating text using
              an LSTM-based neural network model.
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
            <h3>Full Stack Developer</h3>
            <h4>The Bombay Group</h4>

            <p className="experience-date">
              August 2026 - Present
            </p>

            <ul>
              <li>
                Developing backend applications using NestJS, Prisma ORM,
                and PostgreSQL, with frontend functionality using Next.js,
                JavaScript, and CSS.
              </li>
              <li>
                Built a To-Do application with task creation, updating,
                deletion, and management features.
              </li>
              <li>
                Implemented JWT-based authentication, including registration,
                login, logout, profile updates, and password reset functionality.
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <h3>Python Developer</h3>
            <h4>Datanova Software Solutions Pvt. Ltd.</h4>

            <p className="experience-date">
              March 2026 - July 2026
            </p>

            <ul>
              <li>
                Developed backend REST APIs and asynchronous endpoints
                using Python, Django, and FastAPI.
              </li>
              <li>
                Worked with API views, data models, and backend application
                functionality.
              </li>
              <li>
                Worked with SQL Server and MySQL, including query and
                stored procedure optimization.
              </li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <h3>Full Stack Developer Intern</h3>
            <h4>Weltec Institute</h4>

            <p className="experience-date">
              May 2024 - May 2025
            </p>

            <ul>
              <li>
                Developed web application features using Python, Django,
                HTML, CSS, Bootstrap, and MySQL.
              </li>
              <li>
                Worked on user authentication, role-based access control,
                and data validation.
              </li>
              <li>
                Worked on database schemas and application workflows
                for reliable data management.
              </li>
            </ul>
          </div>

          {/* Experience 4 */}
          <div className="experience-card">
            <h3>WordPress Developer Intern</h3>
            <h4>Infonaya Software</h4>

            <p className="experience-date">
              January 2024 - May 2024
            </p>

            <ul>
              <li>
                Contributed to feature development and modules for a
                University Management Portal.
              </li>
              <li>
                Worked on performance reports, scheduling, and tracking
                functionality.
              </li>
              <li>
                Created manual test cases and performed functional testing
                to improve application reliability.
              </li>
            </ul>
          </div>

        </div>
      </section>

      
      {/* Key Projects Section */}
      <section id="key-projects" className="section">
        <h2 className="section-title">Key Projects</h2>

        <div className="projects-container">

          {/* URL Shortener API */}
          <div className="project-card">
            <h3>URL Shortener API</h3>

            <p>
              A RESTful URL shortening API built with FastAPI and PostgreSQL.
              The application provides URL shortening and redirection
              functionality with a clean backend architecture.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>REST API</span>
            </div>

            <a href="https://github.com/Mihir8510/url-shortener-api"
              target="_blank" rel="noreferrer" className="project-link">
              View Code →
            </a>
          </div>

          {/* AI-Assisted Box Selection */}
          <div className="project-card">
            <h3>AI-Assisted Box Selection System</h3>

            <p>
              An ecommerce-focused system that recommends suitable shipping
              boxes based on product dimensions and weight, helping optimize
              packaging selection.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Django</span>
              <span>SQLite</span>
              <span>REST API</span>
              <span>AI-Assisted Development</span>
            </div>

            <a href="https://github.com/Mihir8510/ai-assisted-box-selection-system"
              target="_blank" rel="noreferrer" className="project-link">
              View Code →
            </a>
          </div>

          {/* TaskFlow */}
          <div className="project-card">
            <h3>TaskFlow – Task Management App</h3>

            <p>
              A full-stack task management application with a Kanban-style
              board for creating, updating, deleting, filtering, and managing
              tasks efficiently.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>FastAPI</span>
              <span>React</span>
              <span>Vite</span>
              <span>SQLAlchemy</span>
              <span>SQLite</span>
              <span>Pytest</span>
            </div>

            <a href="https://github.com/Mihir8510/taskflow"
              target="_blank" rel="noreferrer" className="project-link">
              View Code →
            </a>
          </div>

          {/* Login & Authentication System */}
          <div className="project-card">
            <h3>Login & Authentication System</h3>

            <p>
              A full-stack authentication application with user registration,
              login, JWT-based authentication, profile management, and
              OTP-based password reset through email verification.
            </p>

            <div className="tech-stack">
              <span>NestJS</span>
              <span>Next.js</span>
              <span>Prisma ORM</span>
              <span>PostgreSQL</span>
              <span>JWT</span>
              <span>Nodemailer</span>
            </div>

            <a href="https://github.com/Mihir8510/Login-Project"
              target="_blank" rel="noreferrer" className="project-link">
              View Code →
            </a>
          </div>

          {/* To-Do Application */}
          <div className="project-card">
            <h3>To-Do Application</h3>

            <p>
              A full-stack task management application that allows users
              to create, view, update, and delete tasks through a simple
              and user-friendly interface.
            </p>

            <div className="tech-stack">
              <span>NestJS</span>
              <span>Prisma ORM</span>
              <span>PostgreSQL</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <a href="https://github.com/Mihir8510/TO-DO_Project"
              target="_blank" rel="noreferrer" className="project-link">
              View Code →
            </a>
          </div>

        </div>
      </section>

      
      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Bachelor of Engineering (B.E.)</h3>

          <h4>Computer Engineering</h4>

          <p>Dr. Jivraj Mehta Institute of Technology</p>

          <p>2020 - 2024</p>

          <p>Anand, Gujarat</p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary Certificate (HSC)</h3>

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
          I am currently open to new opportunities as a Full Stack Developer.
          Feel free to contact me for job opportunities, collaborations,
          or professional discussions.
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

    export default App
