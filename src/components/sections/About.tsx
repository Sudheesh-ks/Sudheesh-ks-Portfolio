import { aboutCards } from "../../data/about";
import { skills } from "../../data/skills";


export default function About() {
  return (
    <section className="sk-about-section" id="about">
      <div className="sk-about-inner">
        <div className="sk-reveal">
          <div className="sk-section-tag">About me</div>
          <h2 className="sk-section-title">
            Developer by craft,<br />
            <span className="sk-italic">creator</span> by heart.
          </h2>
        </div>

        <div className="sk-about-grid">
          <div className="sk-reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="sk-about-text">
              <p>
                I'm <strong>Sudheesh KS</strong>, a passionate full-stack developer
                from India. I specialize in building real-world, production-grade
                web applications that solve genuine problems.
              </p>
              <p>
                My approach combines <strong>clean architecture</strong> with
                thoughtful design — every line of code is written with purpose.
              </p>
            </div>

            <div style={{ marginTop: 40 }}>
              <div className="sk-skills-title">Tech I work with</div>
              <div className="sk-skills-grid">
                {skills.map((s) => (
                  <span key={s} className="sk-skill-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="sk-cards-col sk-reveal" style={{ transitionDelay: "0.2s" }}>
            {aboutCards.map((c) => (
              <div key={c.title} className="sk-about-card">
                <div className="sk-card-icon">
                  <c.Icon />
                </div>
                <div>
                  <div className="sk-card-label">{c.title}</div>
                  <div className="sk-card-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}