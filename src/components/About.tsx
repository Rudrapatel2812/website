import "./styles/About.css";

const certifications = [
  {
    title: "CLOUD INFRASTRUCTURE 2024 GENERATIVE AI CERTIFIED PROFESSIONAL",
    issuer: "ORACLE",
  },
  {
    title: "Building LLM Applications With Prompt Engineering",
    issuer: "NVIDIA",
  },
  {
    title: "Advanced Software Engineering Virtual Experience Program",
    issuer: "Walmart",
  },
  {
    title: "Software Engineering Virtual Experience Program",
    issuer: "Goldman Sachs",
  },
  {
    title: "AWS Academy Graduate – Machine Learning Foundations",
    issuer: "Amazon Web Services",
  },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Machine Learning & AI researcher who genuinely loves figuring
          out how intelligent systems can do more whether that's a rover
          navigating Mars or a model that learns from raw satellite data. I've
          worked at{" "}
          <span className="about-highlight">NASA ARCS Lab</span> and{" "}
          <span className="about-highlight">ISRO</span>, and right now I'm
          finishing up my Master's in Computer Science at{" "}
          <span className="about-highlight">Cal State Northridge</span>.
        </p>
        <p className="para about-para-2">
          Outside of research, I enjoy building things end-to-end from
          training RL agents to shipping full stack products. I care a lot about
          clean code, good design, and work that actually makes a difference.
        </p>

        <div className="about-certs">
          <h4 className="about-certs-title">Certifications</h4>
          <ul className="about-certs-list">
            {certifications.map((cert, i) => (
              <li key={i} className="about-cert-item">
                <span className="about-cert-dot" />
                <div>
                  <span className="about-cert-name">{cert.title}</span>
                  <span className="about-cert-issuer">{cert.issuer}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;