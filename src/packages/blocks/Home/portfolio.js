import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import image_Avatar from './assets/image_Avatar.png'
const Portfolio = () => {
    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[theme]);
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }
  return (
    <div>
      <div className="portfolio-container">
        <nav className="navbar">
          <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
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
      </div>
      <section id="about" className="hero">
        <div className="hero-text">
          <h1>Hi, I’m Shilpa 👋</h1>
          <p>
            I’m a front-end developer (React Native & React.js) with a focus on
            creating (and occasionally designing) exceptional digital
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
      <section id="work" className="about-section">
          <hi>About Me</hi>
        <div className="about-img">
          <img src={image_Avatar}  />
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

      <section className="work-section">
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
          <img src={image_Avatar}  />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
