import Editor from "@monaco-editor/react";
import styles from "./styles/editorMonaco.module.css";
import { useEffect, useState } from "react";
import ShareIcon from "../assets/Share.svg";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import copy from "copy-to-clipboard";
import LinkIcon from "../assets/link.svg";

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

const EditorMonaco = () => {
  const { id } = useParams();
  const [queryParameters] = useSearchParams();
  const [language, setLanguage] = useState("html");
  const [editorValue, setEditorValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(
    JSON.parse(queryParameters.get("isBd") || "false")
  );
  const navigate = useNavigate();
  const [loadedSnippet, setLoadedSnippet] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://notecode-k1uq.onrender.com/${id}`)
        .then((res) => {
          setLoadedSnippet(res.data?.content);
        })
        .catch((err) => {
          console.error("Error fetching snippet:", err);
        });
    }
  }, [id]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    if (editorValue) {
      setIsButtonDisabled(!isButtonDisabled);
      axios
        .post(`https://notecode-k1uq.onrender.com/create`, {
          content: editorValue,
        })
        .then((res) => {
          console.log(res);
          navigate(`/${res.data?.id}?isBd=true`);
        });
    } else {
      alert("You need to change the snippet to share!");
    }
  };

  const handleEditorChange = (value: any) => {
    setEditorValue(value);
    setIsButtonDisabled(false);
  };

  if (id && !loadedSnippet) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        language={language}
        value={loadedSnippet !== null ? loadedSnippet : defaultValue}
        onChange={handleEditorChange}
      />
      <div className={styles.interaction}>
        <div className={styles.selectorholder}>
          <select
            className={styles.select_input}
            onChange={handleSelect}
            value={language}
          >
            <option value="html">HTML</option>
            <option value="javascript">javascript</option>
            <option value="typescript">typescript</option>
            <option value="css">CSS</option>
            <option value="json">JSON</option>
          </select>
        </div>
        <div className={styles.share_section}>
          {isButtonDisabled && (
            <div
              onClick={() => {
                copy(window.location.href);
              }}
              className={styles.link_sharing}
            >
              <img src={LinkIcon} alt="Link icon"></img>
              <p>{window.location.href}</p>
            </div>
          )}
          <button
            className={styles.btn}
            onClick={handleClick}
            disabled={isButtonDisabled}
          >
            <img src={ShareIcon}></img>Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorMonaco;
