import "./App.css";
import { useState } from "react";
import icon from "./assets/user.png";

function CvInfo() {
  const [name, setName] = useState("Name"); // Initial state for name
  const [title, setTitle] = useState("Professional Artist / Novice Programmer"); // Initial state for title
  const [email, setEmail] = useState("Email@mail.com"); // Initial state for email
  const [website, setWebsite] = useState("Add Website"); // Initial state for website
  const [summary, setSummary] = useState(
    "As a kid i've always been obsessed with computers. Wondering how they work hardware and software side, constantly I would explore as much as I could... (Finish rest on Word for Formatting) " // Initial state for summary
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "website":
        setWebsite(value);
        break;
      case "summary":
        setSummary(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cv-info">
      <div className="nameAndLogo">
        <img src={icon} className="icon"></img>
        <h1>{name}</h1>
      </div>
      <h2>{title}</h2>
      <ul>
        <li>
          Email: <a href={`mailto:${email}`}>{email}</a> (Edit)
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </li>
        <li>
          Website: <a href={website}>{website}</a> (Edit)
          <input
            type="url" // Set input type to url for website validation
            name="website"
            value={website}
            onChange={handleChange}
          />
        </li>
        {/* Add similar input elements for name, title, and summary */}
      </ul>
      <p className="summary">{summary}</p>
      <textarea // Use textarea for a larger text input area for summary
        name="summary"
        value={summary}
        onChange={handleChange}
      />
    </div>
  );
}

export default CvInfo;
