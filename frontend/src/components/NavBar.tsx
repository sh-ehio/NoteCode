import styles from "./styles/navBar.module.css";
import NoteCodeLogo from "../assets/NoteCodeLogo.svg";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <img src={NoteCodeLogo}></img>
      <div>
        <p className={styles.small_heading}>Create & Share</p>
        <p className={styles.big_heading}>Your Code easily</p>
      </div>
    </div>
  );
};

export default NavBar;
