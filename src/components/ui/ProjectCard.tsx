import { GitHubIcon } from "../../icons/SocialIcons";
import { ExternalIcon } from "../../icons/UiIcons";
import type { ProjectCardProps } from "../../types/projects";


export default function ProjectCard({ project, hero = false, delay = 0 }: ProjectCardProps) {
  const p = project;

  return (
    <div
      className={`${hero ? "sk-project-card-hero" : "sk-project-card"} sk-reveal`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image frame */}
      <div className="sk-project-img-frame">
        <div className="sk-project-num">0{p.id}</div>

        <div className="sk-project-img">
          <img
            src={p.image}
            alt={p.title}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLElement).parentElement!.innerHTML = `
                <div class="sk-project-placeholder">
                  <div class="sk-project-placeholder-grid"></div>
                  <div class="sk-project-placeholder-letter">${p.placeholder}</div>
                </div>`;
            }}
          />
          <div className="sk-project-img-vignette" />
          <div className="sk-project-img-overlay" />

          {p.livelink && (
            <a
              href={p.livelink}
              className="sk-project-img-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="sk-project-body">
        <div className="sk-project-header">
          <div className="sk-project-name">{p.title}</div>
          <a
            href={p.link}
            className="sk-project-gh-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>

        <p className="sk-project-desc">{p.desc}</p>

        <div className="sk-project-footer">
          <div className="sk-project-tags">
            {p.tags.map((t) => (
              <span key={t.label} className={`sk-project-tag ${t.cls}`}>
                {t.label}
              </span>
            ))}
          </div>

          <a
            href={p.link}
            className="sk-project-view-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
}