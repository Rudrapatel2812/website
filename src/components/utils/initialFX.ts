import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  // Critical: enable scrolling first (must run before any code that might throw)
  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);

  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Optional animations - exclude .landing-name so gradient text stays visible (SplitText breaks it)
  try {
    const selectors = [".landing-greeting", ".landing-tagline"];
    const elements = selectors.flatMap((sel) => Array.from(document.querySelectorAll(sel)));
    if (elements.length > 0) {
      const landingText = new SplitText(elements, {
        type: "chars,lines",
        linesClass: "split-line",
      });
      if (landingText.chars?.length) {
        gsap.fromTo(
          landingText.chars,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.3,
          }
        );
      }
    }
  } catch (e) {
    console.warn("Landing animation skipped:", e);
  }
}
