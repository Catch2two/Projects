import "./CVApp.css";
import { useState } from "react";

function EduInfo() {
  const [schools, setSchools] = useState([
    { school: "", areaOfStudy: "", years: "" }, // Initial empty education object
  ]);

  const [maxSchools] = useState(4); // Set max schools to click

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setSchools((prevSchools) =>
      prevSchools.map((schoolObj, i) =>
        i === index ? { ...schoolObj, [name]: value } : schoolObj
      )
    );
  };

  const handleAddSchool = () => {
    if (schools.length < maxSchools) {
      setSchools([...schools, { school: "", areaOfStudy: "", years: "" }]);
    }
  };

  return (
    <div className="education-container">
      {schools.map((schoolObj, index) => (
        <form key={index}>
          <label>School Attended</label>
          <input
            type="text"
            name="school"
            value={schoolObj.school}
            onChange={(event) => handleChange(event, index)}
          />
          <label>Area of Study</label>
          <input
            type="text"
            name="areaOfStudy"
            value={schoolObj.areaOfStudy}
            onChange={(event) => handleChange(event, index)}
          />
          <label>Years Attended</label>
          <input
            type="text"
            name="years"
            value={schoolObj.years}
            onChange={(event) => handleChange(event, index)}
          />
        </form>
      ))}
      <div className="button-container">
        <button
          className="schoolButton"
          onClick={handleAddSchool}
          disabled={schools.length >= maxSchools} // Disables button when 4 is Reached.
        >
          + School
        </button>
      </div>
    </div>
  );
}
export default EduInfo;
