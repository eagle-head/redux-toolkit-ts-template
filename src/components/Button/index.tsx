import { Props } from "./types";
import styles from "./styles/Button.module.css";

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={props.isAsync ? styles.asyncButton : styles.button}
      aria-label={props.ariaLabel}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
