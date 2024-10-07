import { useParams } from "react-router-dom";
import EditorMonaco from "../components/EditorMonaco";
import styles from "./styles/share.module.css";

const Share = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className={styles.main}>
      <EditorMonaco />
    </div>
  );
};

export default Share;
