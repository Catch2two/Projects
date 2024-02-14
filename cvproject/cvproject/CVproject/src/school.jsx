import "./App.css";

function School() {
  const schoolName = "University of Hartford";
  const titleOfStudy = "Bachelors of Fine Arts / Illustration Major";
  const dateOfStudy = "2013-2015";

  return (
    <div className="school">
      <h3>{schoolName}</h3>
      <h4>{titleOfStudy}</h4>
      <h5>{dateOfStudy}</h5>
    </div>
  );
}

export default School;
