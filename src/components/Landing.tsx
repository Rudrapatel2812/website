import { PropsWithChildren, useEffect, useRef } from "react";
import { MdDownload } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const introRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      introRef.current?.classList.add("landing-visible");
    }, 400);
    const timer2 = setTimeout(() => {
      infoRef.current?.classList.add("landing-visible");
    }, 700);
    const timer3 = setTimeout(() => {
      ctaRef.current?.classList.add("landing-visible");
    }, 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro" ref={introRef}>
            <p className="landing-greeting">Hi, I&apos;m</p>
            <h1 className="landing-name">
              <span className="landing-name-first">Rudra</span>
              <span className="landing-name-last">Patel</span>
            </h1>
            <p className="landing-subtitle">
              ML & AI Researcher · NASA ARCS Lab · San Francisco
            </p>
          </div>
          <div className="landing-info" ref={infoRef}>
            <p className="landing-tagline">
              Building intelligent systems through
              <br />
              <span className="landing-tagline-accent">
                Reinforcement Learning
              </span>
              {" & "}
              <span className="landing-tagline-accent">Generative AI</span>
            </p>
            <div className="landing-scroll-hint">
              <span className="landing-scroll-line" />
              <span className="landing-scroll-text">Scroll to explore</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
