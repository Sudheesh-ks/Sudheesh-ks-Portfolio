export default function Contact() {
  return (
    <section className="sk-cta-section" id="contact">
      <h2 className="sk-reveal">
        Let's build something
        <br />
        <span className="sk-italic">remarkable.</span>
      </h2>

      <p className="sk-reveal" style={{ transitionDelay: "0.1s" }}>
        Have a project in mind, or just want to say hi? I'm always open to new
        opportunities.
      </p>

      <div className="sk-cta-actions sk-reveal" style={{ transitionDelay: "0.2s" }}>
        <a href="mailto:sudheeshks132@gmail.com" className="sk-btn-main">
          Send me a message
        </a>
        <a
          href="https://www.linkedin.com/in/sudheeshkarippadath"
          className="sk-btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}