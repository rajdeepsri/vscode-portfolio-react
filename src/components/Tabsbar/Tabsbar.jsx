import { useState } from "react";
import css from "/css_icon.svg";
import html from "/html_icon.svg";
import js from "/js_icon.svg";
import react_icon from "/react_icon.svg";
import json from "/json_icon.svg";
import md from "/markdown_icon.svg";
import classes from "./Tabsbar.module.css";

const list = [
  { title: "home.jsx", icon: react_icon },
  { title: "education.html", icon: html },
  { title: "skills.json", icon: json },
  { title: "projects.js", icon: js },
  { title: "contact.css", icon: css },
  { title: "github.md", icon: md },
];

const Tabsbar = () => {
  const [selectedList, setSelectedList] = useState("home.jsx");
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {list.map((item, idx) => (
          <ListItem
            key={idx}
            title={item.title}
            icon={item.icon}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ title, icon, selectedList, setSelectedList }) => {
  return (
    <li onClick={() => setSelectedList(title)}>
      <div
        className={classes.blue_bar}
        style={{ backgroundColor: selectedList === title ? "#0466f8" : "" }}
      />
      <div
        className={classes.list_item}
        style={{ backgroundColor: selectedList === title ? "#1F1F1F" : "" }}
      >
        <img src={icon} alt="icon" />
        <p>{title}</p>
      </div>
    </li>
  );
};

export default Tabsbar;
