import "./App.css";

function experiences() {
  const skills = "Skills";
  const previousJobs = "Past Jobs";

  return (
    <div className="experiences-container">
      <div className="skills-container">
        <h3>{skills}</h3>
        <ul>
          <li>Adobe Suite (Photoshop, Illustrator, etc)</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>REACT</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="jobs-container">
        <h3>{previousJobs}</h3>
        <div className="jobOne">
          <h4>Inventory Management</h4>
          <h5>Salem Motors Inc.</h5>
          <ul>
            <li>Managed Inventory and Online Presence</li>
            <li>Managed/Created Images for Advertisement</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className="jobTwo">
          <h4>Freelance Work</h4>
          <ul>
            <li>Freelance Artwork from Digital to Traditional Mediums.</li>
            <li>Image restoration and digitization.</li>
            <li>Photo Edits</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default experiences;
