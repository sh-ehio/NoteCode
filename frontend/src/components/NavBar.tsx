import styles from "./styles/navBar.module.css";
import NoteCodeLogo from "../assets/NoteCodeLogo.svg";

const NavBar = () => {
  return (
    <div>
      <div className={styles.logoSection}>
        <img src={NoteCodeLogo}></img>
      </div>
    </div>
  );
};

export default NavBar;
