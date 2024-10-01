import Editor from "@monaco-editor/react";
import styles from "./styles/EditorMonaco.module.css";

const EditorMonaco = () => {
  return (
    <div className={styles.main}>
      <Editor height="40vh" defaultLanguage="javascript" defaultValue="" />
      <div className={styles.interaction}>
        <div className={styles.selectorholder}>
          <select className={styles.select_input}>
            <option>HTML</option>
            <option>Javascript</option>
          </select>

          <select className={styles.select_input_colortheme}>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <button className={styles.btn}>Share</button>
      </div>
    </div>
  );
};

export default EditorMonaco;
