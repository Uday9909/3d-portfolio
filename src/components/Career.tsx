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
                <h4>Open Source Contributor</h4>
                <h5>C2SI & CircuitVerse</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to GDB-GUI (C2SI) and CircuitVerse. Building UI components,
              mentor-led code reviews, and working on web-based simulators used globally.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React.js Intern</h4>
                <h5>Locobuzz Solutions · Mumbai</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Developed React UI components for enterprise social media analytics dashboards.
              Integrated REST APIs for high-volume datasets across full SDLC. Received
              Letter of Recommendation from CTO.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Google India · President</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Founded and led a 50+ member student developer community. Organized
              workshops and hackathons to foster a culture of product engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Product Engineering</h4>
                <h5>Kalvium @ MIT ADT University</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science, focusing on hands-on software
              development, system architecture, and product ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
