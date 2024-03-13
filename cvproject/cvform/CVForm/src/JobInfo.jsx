import "./CVApp.css";
import { useState } from "react";

function JobInfo() {
  const [jobs, setJobs] = useState([
    { employer: "", jobTitle: "", timeAtJob: "" }, // Initial empty job object
  ]);
  const [maxJobs] = useState(4); // Maximum allowed jobs

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setJobs((prevJobs) =>
      prevJobs.map((jobObj, i) =>
        i === index ? { ...jobObj, [name]: value } : jobObj
      )
    );
  };

  const handleAddJob = () => {
    if (jobs.length < maxJobs) {
      setJobs([...jobs, { employer: "", jobTitle: "", timeAtJob: "" }]);
    }
  };

  return (
    <div className="job-container">
      {jobs.map((jobObj, index) => (
        <div className="previous-jobs" key={index}>
          <form>
            <label>Employer</label>
            <input
              type="text"
              name="employer"
              value={jobObj.employer}
              onChange={(event) => handleChange(event, index)}
            />
            <label className="job-title">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={jobObj.jobTitle}
              onChange={(event) => handleChange(event, index)}
            />
            <label>Time Employed</label>
            <input
              type="text"
              name="timeAtJob"
              value={jobObj.timeAtJob}
              onChange={(event) => handleChange(event, index)}
            />
          </form>
        </div>
      ))}
      <div className="button-container">
        <button
          className="addJobButton"
          onClick={handleAddJob}
          disabled={jobs.length >= maxJobs}
        >
          + Job
        </button>
      </div>
    </div>
  );
}

export default JobInfo;
