export default function Stats() {
  const stats = [
    { n: "6", s: "+", label: "Projects shipped" },
    { n: "1", s: "yr", label: "Of experience" },
    { n: "12", s: "+", label: "Skills mastered" },
    { n: "100", s: "%", label: "Passion driven" },
  ];

  return (
    <div className="sk-stats-section">
      <div className="sk-stats-inner">
        {stats.map(({ n, s, label }) => (
          <div className="sk-stat sk-reveal" key={label}>
            <div className="sk-stat-num">
              {n}
              <span>{s}</span>
            </div>
            <div className="sk-stat-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}