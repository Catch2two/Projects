import "./App.css";

function School() {
  const schoolName = "University of Hartford";
  const titleOfStudy = "Bachelors of Fine Arts: Illustration Major";
  const dateOfStudy = "2013-2015";

  const schoolName2 = "Manchester Community College";
  const titleOfStudy2 = "Graphic Design";
  const dateOfStudy2 = "2008-2010";

  const schoolName3 = "Northwestern Connecticut Community College";
  const titleOfStudy3 = "Graphic Design & Fine Arts";
  const dateOfStudy3 = "2010-2012";

  return (
    <div className="school-container">
      <div className="school">
        <h3>{schoolName}</h3>
        <h4>{titleOfStudy}</h4>
        <h5>{dateOfStudy}</h5>
      </div>
      <div className="school2">
        <h3>{schoolName2}</h3>
        <h4>{titleOfStudy2}</h4>
        <h5>{dateOfStudy2}</h5>
      </div>
      <div className="school3">
        <h3>{schoolName3}</h3>
        <h4>{titleOfStudy3}</h4>
        <h5>{dateOfStudy3}</h5>
      </div>
    </div>
  );
}

export default School;
