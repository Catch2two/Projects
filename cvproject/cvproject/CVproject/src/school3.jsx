import "./App.css";

function SchoolThree() {
  const schoolName = "Northwestern Connecticut Community College";
  const titleOfStudy = "Graphic Design/Fine Arts";
  const dateOfStudy = "2010-2012";

  return (
    <div className="schoolTwo">
      <h4>{schoolName}</h4>
      <h5>{titleOfStudy}</h5>
      <h6>{dateOfStudy}</h6>
    </div>
  );
}

export default SchoolThree;
