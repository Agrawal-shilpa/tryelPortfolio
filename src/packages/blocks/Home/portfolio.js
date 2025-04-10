import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import image_Avatar from "./assets/image_Avatar.png";

const SkillCard = ({ icon, name }) => (
  <div className="skill-card">
    <img src={icon} alt={name} className="skill-icon" />
    <p>{name}</p>
  </div>
);

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

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
  return (
    <div>
      <div className="portfolio-container">
        <nav className="navbar">
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
            <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
            <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>
              <button className="download-btn">Download CV</button>
            </li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </li>
          </ul>
        </nav>
        <section className="hero">
          <div className="hero-text">
            <h1>Hi, I’m Shilpa 👋</h1>
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
        </section>
      </div>

      <section id="about" className="about-section">
        <hi>About Me</hi>
        <div className="about-img">
          <img src={image_Avatar} />
        </div>
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
            <li>🎓 B.E. in Computer Engineering</li>
            <li>💼 Full time freelancer</li>
            <li>📚 Avid learner</li>
            <li>💡 Aspiring indie hacker</li>
          </ul>
          <p>
            One last thing, I’m available for freelance work, so feel free to
            reach out and say hello! I promise I don’t bite 😊
          </p>
        </div>
      </section>

      <section id="work" className="work-section">
        <div>
          <hi>Work Experience</hi>
        </div>
        <div className="work-text">
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I’m a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clean,
            readable, highly performant code matters to me.
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
            <li>🎓 B.E. in Computer Engineering</li>
            <li>💼 Full time freelancer</li>
            <li>📚 Avid learner</li>
            <li>💡 Aspiring indie hacker</li>
          </ul>
          <p>
            One last thing, I’m available for freelance work, so feel free to
            reach out and say hello! I promise I don’t bite 😊
          </p>
        </div>
        <div className="work-img">
          <img src={image_Avatar} />
        </div>
      </section>

      <section className="skills-section">
        <h3 className="skills-label">Skills</h3>
        <p className="skills-subtitle">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
