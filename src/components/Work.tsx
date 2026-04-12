import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Alex – Multi Agent Financial Advisor",
    category: "Multi-Agent AI System",
    description:
      "Built a full multi-agent financial advisor on AWS where five specialized AI agents collaborate to analyze portfolios, plan retirement, and research markets automatically. Designed an orchestration layer using LangChain to coordinate agent workflows, memory, and tool use across parallel tasks.",
    tools: "LangChain, AWS, Python, Multi-Agent Orchestration, Containerized Microservices",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    link: "https://github.com/Rudrapatel2812/Alex_Finance_Planner",
  },
  {
    title: "Legal Chatbot for Washington State Law",
    category: "RAG & Document Intelligence",
    description:
      "Developed a retrieval-augmented chatbot that answers legal questions specific to Washington State law, combining document vector search with large language models for accurate, context-aware responses.",
    tools: "LLaMA, OpenAI, LangChain, FAISS, Document Vector Search",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    title: "AI Health Assistant",
    category: "Symptom-to-Treatment Recommendation",
    description:
      "Built an intelligent health assistant that maps user-reported symptoms to potential treatments using domain-specific embeddings and clinical data, reducing time-to-insight for early health decisions.",
    tools: "LLMs, Domain Embeddings, Ranking Models, Clinical Data",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "Interview AI Agent",
    category: "Mock Interview Platform",
    description:
      "Created a voice-enabled mock interview agent that parses resumes, generates role-specific questions, transcribes answers in real time, and provides structured feedback using LLMs.",
    tools: "Whisper, Claude/OpenAI, LangChain, Resume Parsing",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  },
  {
    title: "Mars Rover RL Navigation",
    category: "Reinforcement Learning",
    description:
      "Designed an RL-based autonomous navigation system for Mars rovers at NASA ARCS Lab, using GAN-generated terrain simulations to train robust path-planning agents with ROS2 and PyTorch.",
    tools: "ROS2, PyTorch, GAN-based Terrain Simulation",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
  },
  {
    title: "Satellite Data Analytics",
    category: "Time-Series Prediction",
    description:
      "Developed CNN-LSTM pipelines at ISRO to process and predict patterns in satellite time-series data, building ETL workflows and interactive dashboards for mission analytics.",
    tools: "TensorFlow, CNN-LSTM, ETL Pipelines, Tableau, Power BI",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.description && (
                          <p className="carousel-description">
                            {project.description}
                          </p>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-github-link"
                            data-cursor="disable"
                          >
                            View on GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
