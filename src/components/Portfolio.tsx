import React, { useState, useEffect, type JSX } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

// Types
interface SocialLink {
  icon: JSX.Element;
  url: string;
  label: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

// Main App Component
const Portfolio: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Load theme from memory on mount
  useEffect(() => {
    const savedTheme = isDark;
    setIsDark(savedTheme);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sudheeshkarippadath",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Sudheesh-ks",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/_sudhiiz_",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:sudheeshks132@gmail.com",
      label: "Email",
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      image: "/medislot.png",
      title: "MediSlot",
      description:
        "A full-stack doctor consultation platform, enabling seamless appointment booking, real-time consultation.",
      link: "https://github.com/Sudheesh-ks/MEDISLOT",
    },
    {
      id: 2,
      image: "/techyzone.png",
      title: "Techy Zone",
      description:
        "An ecommerce web app for a smooth and modern tech gadget shopping experience.",
      link: "https://github.com/Sudheesh-ks/TECHY-ZONE-ecommerce",
    },
    {
      id: 3,
      image: "/notezaura.png",
      title: "NoteZaurA",
      description:
        "Notezaura is a simple notes app built using Next.js 15, React, Shadcn UI, and Better Auth.",
      link: "https://github.com/Sudheesh-ks/Notezaura",
    },
  ];

  const aboutCards: AboutCard[] = [
    {
      icon: "🎨",
      title: "Design",
      description:
        "Crafting clean, user-friendly interfaces that combine creativity with functionality. Making every interaction feel effortless and engaging.",
    },
    {
      icon: "💻",
      title: "Development",
      description:
        "Building real-world, scalable applications using the MERN stack. With clean, maintainable code and standardized best practices.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Constantly exploring new ideas and technologies, turning curiosity into code, and sharing knowledge to inspire others.",
    },
  ];

  return (
    <div
      className={isDark ? "dark-mode" : "light-mode"}
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Light Mode Colors */
        .light-mode {
            --bg-primary: #F5F1E8;
            --bg-secondary: #FFFFFF;
            --text-primary: #4A4A4A;
            --text-secondary: #8B8B8B;
            --accent: #D4C5B0;
            --card-bg: #F5F1E8;
            --nav-bg: rgba(245, 241, 232, 0.95);
            --drop-1: #8B8B8B;
            --drop-2: #D4C5B0;
            --shadow: rgba(0,0,0,0.05);
        }

        /* Dark Mode Colors */
        .dark-mode {
            --bg-primary: #1a1a1a;
            --bg-secondary: #2d2d2d;
            --text-primary: #e0e0e0;
            --text-secondary: #a0a0a0;
            --accent: #c5a880;
            --card-bg: #252525;
            --nav-bg: rgba(26, 26, 26, 0.95);
            --drop-1: #3d3d3d;
            --drop-2: #4a4a4a;
            --shadow: rgba(0,0,0,0.3);
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            overflow-x: hidden;
            transition: background 0.3s ease, color 0.3s ease;
        }

        /* Paint Droplet Background Effects */
        .paint-drop {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.15;
            transition: background 0.3s ease;
        }

        .drop-1 {
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, var(--drop-1), transparent);
            top: -100px;
            right: -50px;
            animation: float 20s infinite ease-in-out;
        }

        .drop-2 {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, var(--drop-2), transparent);
            bottom: 100px;
            left: -50px;
            animation: float 15s infinite ease-in-out reverse;
        }

        .drop-3 {
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, var(--drop-1), transparent);
            top: 50%;
            right: 10%;
            animation: float 18s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Navbar */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 1.5rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--nav-bg);
            backdrop-filter: blur(10px);
            z-index: 1000;
            box-shadow: 0 2px 20px var(--shadow);
            transition: background 0.3s ease;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: 2px;
            transition: color 0.3s ease;
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-secondary);
            font-weight: 500;
            transition: all 0.3s;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--text-primary);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--text-primary);
            transition: width 0.3s;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .social-icons {
            display: flex;
            gap: 1rem;
        }

        .social-icon {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: var(--bg-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s;
            box-shadow: 0 2px 10px var(--shadow);
        }

        .social-icon:hover {
            background: var(--text-primary);
            color: var(--bg-secondary);
            transform: translateY(-3px);
        }

        /* Theme Toggle Button */
        .theme-toggle {
            width: 50px;
            height: 26px;
            background: var(--card-bg);
            border-radius: 50px;
            border: none;
            cursor: pointer;
            position: relative;
            transition: all 0.3s;
            box-shadow: 0 2px 10px var(--shadow);
        }

        .theme-toggle::before {
            content: '☀️';
            position: absolute;
            left: 3px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.9rem;
            transition: opacity 0.3s;
        }

        .theme-toggle::after {
            content: '🌙';
            position: absolute;
            right: 3px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.9rem;
            transition: opacity 0.3s;
        }

        .theme-toggle-slider {
            width: 20px;
            height: 20px;
            background: var(--text-primary);
            border-radius: 50%;
            position: absolute;
            top: 3px;
            left: 3px;
            transition: transform 0.3s;
        }

        .dark-mode .theme-toggle-slider {
            transform: translateX(24px);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8rem 5% 4rem;
            position: relative;
            z-index: 2;
            background: var(--bg-primary);
            transition: background 0.3s ease;
        }

        .hero-content {
            display: flex;
            align-items: center;
            gap: 5rem;
            max-width: 1200px;
            width: 100%;
        }

        .profile-card {
            position: relative;
            width: 350px;
            height: 350px;
        }

        .animated-border {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: conic-gradient(
                from 0deg,
                var(--text-secondary),
                var(--accent),
                var(--text-primary),
                var(--text-secondary)
            );
            animation: rotate 8s linear infinite;
            padding: 4px;
            transition: background 0.3s ease;
        }

        @keyframes rotate {
            100% { transform: rotate(360deg); }
        }

        .profile-img {
            position: absolute;
            inset: 4px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--card-bg), var(--bg-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            box-shadow: 0 10px 40px var(--shadow);
            transition: background 0.3s ease;
        }

        .profile-img img {
            width: 350px;
            height: 490px;
            object-fit: contain;
            border-radius: 50%;
        }


        .profile-img::before {
            content: '';
            width: 80%;
            height: 80%;
            background: var(--accent);
            border-radius: 50%;
            opacity: 0.3;
            transition: background 0.3s ease;
        }

        .hero-text {
            flex: 1;
        }

        .hero-text h1 {
            font-size: 4rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 1rem;
            line-height: 1.2;
            transition: color 0.3s ease;
        }

        .hero-text h2 {
            font-size: 1.8rem;
            color: var(--text-secondary);
            font-weight: 400;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
        }

        .hero-text p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 2rem;
            transition: color 0.3s ease;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--text-primary);
            color: var(--bg-primary);
            text-decoration: none;
            border-radius: 50px;
            font-weight: 500;
            transition: all 0.3s;
            box-shadow: 0 5px 20px var(--shadow);
        }

        .cta-button:hover {
            background: var(--text-secondary);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px var(--shadow);
        }

        /* About Section */
        .about {
            padding: 6rem 5%;
            background: var(--bg-secondary);
            position: relative;
            z-index: 2;
            transition: background 0.3s ease;
        }

        .section-title {
            font-size: 3rem;
            color: var(--text-primary);
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
            transition: color 0.3s ease;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: var(--accent);
            margin: 1rem auto;
            border-radius: 2px;
            transition: background 0.3s ease;
        }

        .about-content {
            max-width: 900px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
        }

        .about-card {
            padding: 2rem;
            background: var(--card-bg);
            border-radius: 20px;
            transition: all 0.3s;
            box-shadow: 0 5px 20px var(--shadow);
        }

        .about-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px var(--shadow);
        }

        .about-card h3 {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 1rem;
            transition: color 0.3s ease;
        }

        .about-card p {
            color: var(--text-secondary);
            line-height: 1.8;
            transition: color 0.3s ease;
        }

        /* Projects Section */
        .projects {
            padding: 6rem 5%;
            background: var(--bg-primary);
            position: relative;
            z-index: 2;
            transition: background 0.3s ease;
        }

        .projects-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
        }

        .project-card {
            background: var(--bg-secondary);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s;
            box-shadow: 0 5px 20px var(--shadow);
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px var(--shadow);
        }

        .project-img {
            width: 100%;
            height: 250px;
            position: relative;
            overflow: hidden;
            transition: background 0.3s ease;
        }

        .project-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .project-img::after {
            content: '';
            position: absolute;
            inset: 0;
        }

        .project-info {
            padding: 2rem;
        }

        .project-info h3 {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 1rem;
            transition: color 0.3s ease;
        }

        .project-info p {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1.5rem;
            transition: color 0.3s ease;
        }

        .project-link {
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .project-link:hover {
            color: var(--text-secondary);
        }

        /* Footer */
        footer {
            padding: 4rem 5%;
            background: var(--bg-secondary);
            text-align: center;
            position: relative;
            z-index: 2;
            transition: background 0.3s ease;
        }

        .footer-social {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            margin-bottom: 2rem;
        }

        .footer-social .social-icon {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
        }

        footer p {
            color: var(--text-secondary);
            margin-top: 2rem;
            transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
            .hero-content {
                flex-direction: column;
                gap: 3rem;
                text-align: center;
            }

            .hero-text h1 {
                font-size: 2.5rem;
            }

            .profile-card {
                width: 280px;
                height: 280px;
            }

            .nav-links {
                gap: 1.5rem;
            }
        }
      `}</style>

      {/* Paint Droplet Effects */}
      <div className="paint-drop drop-1"></div>
      <div className="paint-drop drop-2"></div>
      <div className="paint-drop drop-3"></div>

      {/* Navbar */}
      <Navbar
        socialLinks={socialLinks}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection cards={aboutCards} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Footer */}
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

// Navbar Component
const Navbar: React.FC<{
  socialLinks: SocialLink[];
  isDark: boolean;
  toggleTheme: () => void;
}> = ({ socialLinks, toggleTheme }) => {
  return (
    <nav>
      <div className="logo">SUDHEESH KS</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-right">
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-icon"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="theme-toggle-slider"></div>
        </button>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="profile-card">
          <div className="animated-border"></div>
          <div className="profile-img">
            <img src="./profile_pic.jpg" alt="profile_image" />
          </div>
        </div>
        <div className="hero-text">
          <h1>Sudheesh ks</h1>
          <h2>FullStack Developer & Creator</h2>
          <p>
            Building impactful apps with clean code and creative vision. Always
            learning, sharing, and crafting seamless digital experiences.
          </p>
          <a href="#projects" className="cta-button">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection: React.FC<{ cards: AboutCard[] }> = ({ cards }) => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        {cards.map((card, index) => (
          <div key={index} className="about-card">
            <h3>
              {card.icon} {card.title}
            </h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img">
              <img src={project.image} alt="" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC<{ socialLinks: SocialLink[] }> = ({ socialLinks }) => {
  return (
    <footer id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <div className="footer-social">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="social-icon"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p>Stay connected, Let's build something together.</p>
    </footer>
  );
};

export default Portfolio;
