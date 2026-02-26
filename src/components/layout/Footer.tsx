import { socialLinks } from "../../data/socials";

export default function Footer() {
  return (
    <footer>
      <div className="sk-footer">
        <div className="sk-footer-brand">
          <a href="#" className="sk-logo">
            <span className="sk-logo-dot" />
            Sudheesh KS
          </a>
          <p>
            FullStack developer crafting purposeful digital experiences, one
            project at a time.
          </p>

          <div className="sk-footer-social">
            {socialLinks.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                className="sk-footer-soc"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="sk-footer-col">
          <h4>Navigate</h4>
          {["Home", "About", "Projects", "Process", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </div>

        <div className="sk-footer-col">
          <h4>Projects</h4>
          {["MediSlot", "Techy Zone", "Colearnix", "Wishly", "NotezAura"].map(
            (p) => (
              <a key={p} href="#projects">
                {p}
              </a>
            )
          )}
        </div>

        <div className="sk-footer-bottom">
          <span>© 2026 Sudheesh KS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}