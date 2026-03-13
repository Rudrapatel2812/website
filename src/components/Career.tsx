import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Assistant</h4>
                <h5>NASA Collaborative Robotics & AI, ARCS Lab, CSUN</h5>
              </div>
              <h3>Feb 2025 – Present</h3>
            </div>
            <p>
              Designing reinforcement learning-based navigation using ROS2 and PyTorch
              for autonomous rover pathfinding. Simulating Mars-like environments
              with GANs for robust testing. Reduced localization error by 30%
              through optimized spatial landmark detection. Collaborating on diagnostic
              tooling and telemetry for firmware validation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>Indian Space Research Organization (ISRO)</h5>
              </div>
              <h3>Jan 2024 – May 2024</h3>
            </div>
            <p>
              Built CNN-LSTM models in TensorFlow for rainfall prediction and mineral
              detection using satellite-based time-series data. Developed Python-SQL
              ETL pipelines for 35GB+ multi-source sensor data. Created Tableau and
              Power BI dashboards. Enabled 30% faster training cycles through pipeline
              optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Developer</h4>
                <h5>Nxon AI Pvt. Ltd., Gujarat, India</h5>
              </div>
              <h3>May 2021 – Nov 2023</h3>
            </div>
            <p>
              Built RAG systems using LangChain, OpenAI, and FAISS for document search
              and answer generation. Deployed LSTM-based financial models with
              containerized batch pipelines. Reduced inference time by 50% through
              batch optimizations and query caching. Designed modular CI/CD workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
