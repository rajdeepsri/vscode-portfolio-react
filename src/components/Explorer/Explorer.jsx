import classes from "./Explorer.module.css";
import css from "/css_icon.svg";
import html from "/html_icon.svg";
import js from "/js_icon.svg";
import react_icon from "/react_icon.svg";
import json from "/json_icon.svg";
import md from "/markdown_icon.svg";

const list = [
  { title: "home.jsx", icon: react_icon },
  { title: "education.html", icon: html },
  { title: "skills.json", icon: json },
  { title: "projects.js", icon: js },
  { title: "contact.css", icon: css },
  { title: "github.md", icon: md },
];

const Explorer = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>EXPLORER</h2>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            <img src={item.icon} alt="icon" />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explorer;
