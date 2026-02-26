import { processSteps } from "../../data/process";

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="sk-section" style={{ paddingBottom: 80 }}>
        <div className="sk-reveal">
          <div className="sk-section-tag">How I work</div>
          <h2 className="sk-section-title">
            My process,<br />
            <span className="sk-italic">distilled.</span>
          </h2>
        </div>

        <div className="sk-process-list">
          {processSteps.map((s, i) => (
            <div
              key={s.n}
              className="sk-process-item sk-reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="sk-process-num">{s.n}</div>
              <div className="sk-process-content">
                <div className="sk-process-icon">{s.icon}</div>
                <div>
                  <div className="sk-process-title">{s.title}</div>
                  <div className="sk-process-desc">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}