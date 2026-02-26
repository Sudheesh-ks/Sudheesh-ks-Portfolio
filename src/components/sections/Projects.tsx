import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";


export default function Projects() {
  const heroProject = projects.find((p) => p.hero);
  const gridProjects = projects.filter((p) => !p.hero);

  return (
    <section className="sk-section" id="projects">
      <div className="sk-reveal">
        <div className="sk-section-tag">Featured work</div>
        <h2 className="sk-section-title">
          Things I've <span className="sk-italic">built.</span>
        </h2>
        <p className="sk-section-sub">
          A selection of projects that showcase my skills in design, development,
          and problem solving.
        </p>
      </div>

      <div className="sk-projects-grid">
        {heroProject && (
          <ProjectCard project={heroProject} hero />
        )}
        {gridProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={(i + 1) * 0.08} />
        ))}
      </div>
    </section>
  );
}