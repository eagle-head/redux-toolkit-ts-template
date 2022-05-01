import { Props } from "./types";
import styles from "./styles/Row.module.css";

const Row: React.FC<Props> = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
