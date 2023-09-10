import classes from "./Sidebar.module.css";
import {
  VscFiles,
  VscSourceControl,
  VscGithubInverted,
  VscSearch,
  VscSettingsGear,
  VscAccount,
} from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner_div}>
        <VscFiles className={classes.icon} />
        <VscSearch className={classes.icon} />
        <VscSourceControl className={classes.icon} />
        <VscGithubInverted className={classes.icon} />
        <a href="https://www.linkedin.com/feed/" target="_">
          <FaLinkedin className={classes.icon} />
        </a>
      </div>
      <div className={classes.inner_div}>
        <VscAccount className={classes.icon} />
        <VscSettingsGear className={classes.icon} />
      </div>
    </div>
  );
};

export default Sidebar;
