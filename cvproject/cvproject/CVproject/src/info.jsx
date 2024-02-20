import "./App.css";
import icon from "./assets/user.png";
function CvInfo() {
  const name = "Joshua Menko";
  const title = "Professional Artist / Novice Programmer";
  const email = "Definitejosh@gmail.com";
  const website = "https://joshmenko.com";
  const summary = "Write a brief summary of yourself and your skills.";

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
      <p>{summary}</p>
    </div>
  );
}

export default CvInfo;
