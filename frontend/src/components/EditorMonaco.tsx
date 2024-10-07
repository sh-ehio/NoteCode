import Editor from "@monaco-editor/react";
import styles from "./styles/EditorMonaco.module.css";
import { useState } from "react";
import ShareIcon from "../assets/Share.svg";

const EditorMonaco = () => {
  const [language, setLanguage] = useState("javascript");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  const defaultValue = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setIsButtonDisabled(!isButtonDisabled);


  };

  return (
    <div className={styles.main}>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        language={language}
        defaultValue={defaultValue}
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
        <button
          className={styles.btn}
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          <img src={ShareIcon}></img>Share
        </button>
      </div>
    </div>
  );
};

export default EditorMonaco;
