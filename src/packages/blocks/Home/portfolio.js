import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import image_Avatar from "./assets/image_Avatar.png";
import logo from "./assets/logo.jpg";
import sportsFans from "./assets/sportsFans.jpeg";
import learning from "./assets/learning.jpeg";
import seedCart from "./assets/seedCart.jpeg";

const SkillCard = ({ icon, name }) => (
  <div className="skill-card">
    <img src={icon} alt={name} className="skill-icon" />
    <p>{name}</p>
  </div>
);

const Portfolio = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const experiences = [
    {
      title: "Sr. Frontend Developer",
      company: "Wovvtech Technology",
      duration: "Feb 2021 - Present",
      direction: "left",
      points: [
        "Developed and maintained responsive web applications using React.js and Tailwind CSS.",
        "Collaborated with cross-functional teams to deliver features on time and with high code quality.",
        "Optimized UI performance, reducing load times by 30% through code-splitting and lazy loading.",
        "Implemented reusable components and design systems, improving development efficiency.",
      ],
    },
    {
      title: "Software Developer (Python)",
      company: "Invictus Dynamics",
      duration: "May 2020 - Dec 2020",
      direction: "right",
      points: [
        "Built backend APIs using Django and Flask to support internal tools and customer dashboards.",
        "Wrote efficient data parsers and automation scripts for large-scale data ingestion.",
        "Integrated third-party APIs and worked on OAuth-based authentication systems.",
        "Collaborated with frontend teams to deliver seamless user experiences.",
      ],
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  });

  // useEffect(() => {
  //   let slideIndex = 0;
  //   const x = document.getElementsByClassName("mySlides");

  //   function carousel() {
  //     for (let i = 0; i < x.length; i++) {
  //       x[i].style.display = "none";
  //     }
  //     slideIndex++;
  //     if (slideIndex > x.length) {
  //       slideIndex = 1;
  //     }
  //     x[slideIndex - 1].style.display = "block";
  //     setTimeout(carousel, 2000);
  //   }

  //   carousel();
  // }, []);

  useEffect(() => {
    if (expandedIndex == null) {
      const interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % projects.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [expandedIndex]);

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const skills = [
    { name: "Javascript", icon: require("./assets/js.png") },
    { name: "Typescript", icon: require("./assets/typeScript.png") },
    { name: "React", icon: require("./assets/react.png") },
    { name: "React Native", icon: require("./assets/reactNative.png") },
    { name: "React Js", icon: require("./assets/reactJs.png") },
    { name: "Visual Studio", icon: require("./assets/vsCode.png") },
    { name: "sublime", icon: require("./assets/sublime.png") },
    { name: "github", icon: require("./assets/github.png") },
    { name: "gitlab", icon: require("./assets/gitlab.png") },
    { name: "python", icon: require("./assets/python.png") },
    { name: "pycharm", icon: require("./assets/pycharm.png") },
    { name: "html", icon: require("./assets/html5.png") },
    { name: "figma", icon: require("./assets/figma.png") },
    { name: "css", icon: require("./assets/css3.png") },
    { name: "sql", icon: require("./assets/sql.png") },
    { name: "git", icon: require("./assets/git.png") },
  ];

  const projects = [
    {
      title: "Seed Cart ECommerce",
      description:
        "An E-Commerce platform for farmers and sellers wherein they will buy and sell all types of agricultural products (seed, pulses, gardening tools ,plants, fertilizers etc).",
      tech: ["Python", "Tensorflow", "Keras", "+2"],
      image: seedCart,
      detailsUrl: "#",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "HG Application",
      description:
        "One of an application in an online school environment which provides a platform for the parents/guardians to enroll their students into a course out of many offered by them. The user can manage the payments and learn about the other activities via announcements and raise a ticket in case of a concern",
      tech: ["Python", "Tensorflow", "Keras", "+2"],
      image: learning,
      detailsUrl: "#",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "My Builder Project",
      description:
        "A mobile dating for sports fans to connect over their shared interest in the same teams, sporting events, and activities. Users will primarily be entering teams that they like with priority then seeing matches that also share their team interest. ",
      tech: ["Python", "Tensorflow", "Keras", "+2"],
      image: sportsFans,
      detailsUrl: "#",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];
  return (
    <div>
      <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
          <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
          <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a className="anchorTag" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="anchorTag" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="anchorTag" href="#work">
              Experience
            </a>
          </li>
          <li>
            <a className="anchorTag" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? "🌙 " : "☀️"}
            </button>
          </li>
        </ul>
      </nav>

      {/* <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
          <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
          <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a className="anchorTag" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="anchorTag" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="anchorTag" href="#work">
            Experience
            </a>
          </li>
          
          
          <li>
          <a className="anchorTag" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? "🌙 " : "☀️"}
            </button>
          </li>
        </ul>
      </nav> */}
      <div className="portfolio-container">
        <section className="hero">
          <div className="hero-text">
            <h2>Hi, I’m Shilpa 👋</h2>
            <p>
              I’m a front-end developer (React Native & React.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I’ve been building mobile applications for
              over 3 years, I still love it as if it were something new.
            </p>
            <div className="hero-details">
              <span>📍 Pune, India</span>
              <span>✅ Available for new projects</span>
            </div>
          </div>
          <div className="about-img">
            <img src={image_Avatar} />
          </div>
        </section>
      </div>
      <div id="about" className="about-portion">
        <div className="about-heading">
          <div className="experience-badge">About Me</div>
        </div>

        {/* <section className="about-section"> */}

        <div className="about-text">
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I’m a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I’m not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <ul>
            <li>🎓 Bachlor of Engineering</li>
            <li>💼 Full time freelancer</li>
            <li>📚 Avid learner</li>
            <li>💡 Aspiring indie hacker</li>
          </ul>
          <p>
            One last thing, I’m available for freelance work, so feel free to
            reach out and say hello! I promise I don’t bite 😊
          </p>
        </div>
        {/* </section> */}
      </div>
      <section id="skills" className="skills-section">
        <div className="experience-badge">skills</div>
        <p className="skills-subtitle">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>

      <section id="work" className="experience-section fade-in">
        <div className="experience-container">
          <div className="experience-header">
            <div className="experience-badge">Experience</div>
            <h2 className="experience-title">
              Here is a quick summary of my most recent experiences:
            </h2>
          </div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${
                exp.direction === "left" ? "slide-in-left" : "slide-in-right"
              }`}
            >
              <h4 className="company-name">{exp.company}</h4>
              <h3>{exp.title}</h3>
              <span className="duration">{exp.duration}</span>
              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="testimonials-section">
      <h1>Projects</h1>
      <div className="w3-content testimonial-carousel" style={{ maxWidth: "400px" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mySlides w3-container w3-xlarge w3-white w3-card-4"
            style={{ display: index === slideIndex || expandedIndex === index ? "block" : "none" }}
          >
            <h1><b>{project.title}</b></h1>
            <p className={expandedIndex === index ? "expanded" : "clamp"}>
              {project.description}
            </p>
            <span className="read-more" onClick={() => toggleReadMore(index)}>
              {expandedIndex === index ? "Read less" : "Read more"}
            </span>
          </div>
        ))}
      </div>
    </section> */}

      <section className="projects-section">
        <div className="experience-badge">Projects</div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <div className="project-tags">
                  {project.tech.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a href={project.detailsUrl} target="_blank" rel="noreferrer">
                    👁️ Details
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      🔗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      🖥️
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="experience-badge">Contact</div>
        <p className="contact-subtitle">
          Got a project or just want to say hi? Feel free to reach out 👇
        </p>
        <div className="contact-details">
          <p>
            <a href="shilpaneware@gmail.com">📧 Email: </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn:{" "}
            </a>
          </p>
          <p>
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Portfolio:{" "}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
