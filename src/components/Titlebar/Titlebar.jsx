import classes from "./Titlebar.module.css";
import vsCode from "/vscode_icon.svg";
import {
  VscChromeMinimize,
  VscChromeRestore,
  VscChromeClose,
} from "react-icons/vsc";

const list = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const Titlebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left_div}>
        <img src={vsCode} alt="logo" className={classes.logo} />
        <ul className={classes.options}>
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={classes.middle_div}>
        <p>Rajdeep Shrivastava [Administrator]</p>
      </div>
      <div className={classes.right_div}>
        <VscChromeMinimize className={classes.icon} />
        <VscChromeRestore className={classes.icon} />
        <VscChromeClose className={`${classes.icon} ${classes.cross_icon}`} />
      </div>
    </div>
  );
};

export default Titlebar;
