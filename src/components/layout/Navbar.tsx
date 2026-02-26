type NavbarProps = {
  isDark: boolean;
  toggle: () => void;
};

export default function Navbar({ isDark, toggle }: NavbarProps) {
  return (
    <nav className="sk-nav">
      <a href="#" className="sk-logo"><span className="sk-logo-dot" />Sudheesh KS</a>
      <ul className="sk-nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="sk-nav-right">
        <button className="sk-theme-toggle" onClick={toggle}>
          <div className="sk-theme-knob">{isDark ? "🌙" : "☀️"}</div>
        </button>
        <a href="mailto:sudheeshks132@gmail.com" className="sk-hire-btn">Hire me</a>
      </div>
    </nav>
  );
}