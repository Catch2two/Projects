import "./App.css";

function SchoolTwo() {
  const schoolName = "Manchester Community College";
  const titleOfStudy = "Computer Science/Graphic Design";
  const dateOfStudy = "2008-2010";

  return (
    <div className="schoolTwo">
      <h4>{schoolName}</h4>
      <h5>{titleOfStudy}</h5>
      <h6>{dateOfStudy}</h6>
    </div>
  );
}

export default SchoolTwo;
