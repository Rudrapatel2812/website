import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Machine Learning & AI researcher with experience at NASA and ISRO.
          Currently pursuing a Master of Computer Science at California State University,
          Northridge (expected May 2026). Skilled in reinforcement learning, generative
          AI, RAG systems, and computer vision. Built production ML pipelines at
          Nxon AI, developed CNN-LSTM models for satellite data at ISRO, and now
          designing RL-based navigation for Mars rovers at NASA ARCS Lab. Passionate
          about pushing the boundaries of AI for robotics and intelligent systems.
        </p>
        <p className="para certifications">
          <strong>Certifications:</strong> Oracle Cloud Infrastructure 2024 Generative AI Professional,
          Microsoft & LinkedIn Career Essentials in Data Analysis, AZ-104 Azure Administrator.
          <strong>Publication:</strong> GAN-based Image Super-Resolution (ICT for Intelligent Systems, 2023).
        </p>
      </div>
    </div>
  );
};

export default About;
