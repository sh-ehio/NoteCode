import styles from "./styles/navBar.module.css";
import NoteCodeLogo from "../assets/NoteCodeLogo.svg";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <img src={NoteCodeLogo}></img>
      <div>
        <p>Create & Share</p>
        <p>Your Code easily</p>
      </div>
    </div>
  );
};

export default NavBar;
