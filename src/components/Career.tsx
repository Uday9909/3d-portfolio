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
              <h3 className="timeline-year">NOW</h3>
            </div>
            <ul>
              <li>Contributing to GDB-GUI (C2SI) and CircuitVerse.</li>
              <li>Building UI components and participating in mentor-led code reviews.</li>
              <li>Working on web-based simulators used globally.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React.js Intern</h4>
                <h5>Locobuzz Solutions · Mumbai</h5>
              </div>
              <h3 className="timeline-year">2025–26</h3>
            </div>
            <ul>
              <li>Developed React UI components for enterprise social media analytics dashboards.</li>
              <li>Integrated REST APIs for high-volume datasets across full SDLC.</li>
              <li>Received Letter of Recommendation from CTO.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Google Gemini Students Club · President</h5>
              </div>
              <h3 className="timeline-year">2024–25</h3>
            </div>
            <ul>
              <li>Founded and led a 50+ member student developer community.</li>
              <li>Organized workshops and hackathons to foster a culture of product engineering.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Product Engineering</h4>
                <h5>Kalvium @ MIT ADT University</h5>
              </div>
              <h3 className="timeline-year">2024–28</h3>
            </div>
            <ul>
              <li>Pursuing B.Tech in Computer Science, focusing on hands-on software development.</li>
              <li>Studying system architecture and product ownership.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
