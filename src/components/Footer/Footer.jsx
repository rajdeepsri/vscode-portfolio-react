import classes from "./Footer.module.css";
import {
  VscBell,
  VscRemote,
  VscSourceControl,
  VscSymbolEvent,
  VscError,
  VscWarning,
  VscSync,
  VscCheckAll,
} from "react-icons/vsc";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerDiv}>
        <div className={classes.remote_icon}>
          <VscRemote />
        </div>
        <div className={classes.div_icon}>
          <VscSourceControl />
          <p>main</p>
          <VscSync style={{ marginLeft: "0.1rem" }} />
        </div>
        <div className={classes.div_icon}>
          <VscError />
          <p>0</p>
          <VscWarning />
          <p>0</p>
        </div>
        <div className={classes.div_icon}>
          <VscSymbolEvent />
        </div>
      </div>
      <div className={classes.innerDiv}>
        <div className={classes.div_icon}>
          <VscCheckAll />
          <p>Prettier</p>
        </div>
        <div className={classes.div_icon}>
          <VscBell />
        </div>
      </div>
    </div>
  );
};

export default Footer;
