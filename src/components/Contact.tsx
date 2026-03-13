import { MdArrowOutward, MdCopyright, MdDownload } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:patelrudra854@gmail.com" data-cursor="disable">
                patelrudra854@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>(747) 786-5589</p>
            <h4>Location</h4>
            <p>San Francisco, CA</p>
            <h4>Education</h4>
            <p>M.S. Computer Science, CSUN (2026) · B.E. IT, Charusat (2024)</p>
          </div>
          <div className="contact-box">
            <h4>Social & Resume</h4>
            <a
              href="https://www.linkedin.com/in/rudra-patel-643324203"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/patelrudra"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="/Users/patelrudra/Downloads/rajesh-portfolio-main/public/resume.pdf"
              download="Rudra_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social contact-resume"
            >
              Download Resume <MdDownload />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rudra Patel</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
