import Editor from "@monaco-editor/react";
import styles from "./styles/EditorMonaco.module.css";
import { useState } from "react";
import ShareIcon from "../assets/Share.svg";

const EditorMonaco = () => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("light");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.main}>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        language={language}
        defaultValue="// some comment"
        foreground={theme === "dark" ? "vs-dark" : "vs"}
      />
      <div className={styles.interaction}>
        <div className={styles.selectorholder}>
          <select
            className={styles.select_input}
            onChange={handleSelect}
            value={language}
          >
            <option value="javascript">javascript</option>
            <option value="html">HTML</option>
            <option value="typescript">typescript</option>
            <option value="css">CSS</option>
            <option value="json">JSON</option>
          </select>
        </div>
        <button className={styles.btn}>
          <img src={ShareIcon}></img>Share
        </button>
      </div>
    </div>
  );
};

export default EditorMonaco;
