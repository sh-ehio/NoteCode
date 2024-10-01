import Editor from "@monaco-editor/react";
import styles from "./styles/EditorMonaco.module.css";

const EditorMonaco = () => {
  return (
    <div className={styles.main}>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
};

export default EditorMonaco;
