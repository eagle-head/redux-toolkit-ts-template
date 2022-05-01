import { Props } from "./types";
import styles from "./styles/Row.module.css";

const Row: React.FC<Props> = ({ children }): JSX.Element => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
