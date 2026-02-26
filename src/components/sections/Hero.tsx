import { socialLinks } from "../../data/socials";
import { ChipBuildIcon, ChipCodeIcon, ChipCompassIcon, ChipNetworkIcon, ChipVideoIcon } from "../../icons/ChipIcons";
import { ArrowRight } from "../../icons/UiIcons";


export default function Hero() {
  return (
    <section className="sk-hero" id="home">
      <div className="sk-hero-bg-text">sudhiiz</div>

      <div className="sk-hero-left">
        <div className="sk-mobile-avatar">
          <div className="sk-mobile-avatar-ring">
            <div className="sk-mobile-avatar-spinner" />
            <div className="sk-mobile-avatar-gap" />
            <div className="sk-mobile-avatar-inner">
              <img
                src="/profile_pic.jpg"
                alt="Sudheesh KS"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLElement).parentElement!.innerHTML =
                    '<div class="sk-mobile-avatar-inner-placeholder">S</div>';
                }}
              />
            </div>
          </div>
        </div>

        <div className="sk-hero-eyebrow">
          <span className="sk-logo-dot" />
          Open to work · Available
        </div>

        <h1>
          I craft <em>digital</em>
          <br />
          experiences.
        </h1>

        <p className="sk-hero-role">FullStack Developer & Creator</p>

        <p className="sk-hero-desc">
          Building impactful apps with clean code and creative vision. Always
          learning, sharing, and crafting seamless digital experiences that make
          a difference.
        </p>

        <div className="sk-hero-actions">
          <a href="#projects" className="sk-btn-main">
            View my work <ArrowRight />
          </a>
          <a href="mailto:sudheeshks132@gmail.com" className="sk-btn-outline">
            Get in touch
          </a>
        </div>

        <div className="sk-hero-socials">
          {socialLinks.map(({ label, url, Icon }) => (
            <a
              key={label}
              href={url}
              className="sk-social-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon /> {label}
            </a>
          ))}
        </div>
      </div>

      <div className="sk-hero-right">
        <div className="sk-profile-container">
          <div className="sk-profile-card">
            <div className="sk-profile-img-wrap">
              <img
                src="/profile_pic.jpg"
                alt="Sudheesh KS"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLElement).parentElement!.innerHTML =
                    '<div class="sk-profile-img-placeholder">SK</div>';
                }}
              />
            </div>
            <div className="sk-profile-overlay" />
            <div className="sk-profile-badge">
              <div className="sk-badge-av">S</div>
              <div>
                <div className="sk-badge-text">Sudheesh KS</div>
                <div className="sk-badge-sub">FullStack Developer</div>
              </div>
            </div>
          </div>

          <div className="sk-geo sk-geo-ring" />

          <div className="sk-geo sk-id-chip sk-chip-code">
            <ChipCodeIcon /> Code
          </div>
          <div className="sk-geo sk-id-chip sk-chip-explore">
            <ChipCompassIcon /> Explorer
          </div>
          <div className="sk-geo sk-id-chip sk-chip-content">
            <ChipVideoIcon /> Content Creator
          </div>
          <div className="sk-geo sk-id-chip sk-chip-connect">
            <ChipNetworkIcon /> Networking
          </div>
          <div className="sk-geo sk-id-chip sk-chip-build">
            <ChipBuildIcon /> Builder
          </div>
        </div>
      </div>
    </section>
  );
}