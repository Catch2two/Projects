import "./App.css";
import icon from "./assets/user.png";
function CvInfo() {
  const name = "Joshua Menko";
  const title = "Professional Artist / Novice Programmer";
  const email = "Definitejosh@gmail.com";
  const website = "https://joshmenko.com";
  const summary =
    "As a kid i've always been obsessed with computers. Wondering how they work hardware and software side, constantly I would explore as much as I could... (Finish rest on Word for Formatting) ";

  return (
    <div className="cv-info">
      <div className="nameAndLogo">
        <img src={icon} className="icon"></img>
        <h1>{name}</h1>
      </div>
      <h2>{title}</h2>
      <ul>
        <li>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          Website: <a href={website}>{website}</a>
        </li>
      </ul>
      <p className="summary">{summary}</p>
    </div>
  );
}

export default CvInfo;
