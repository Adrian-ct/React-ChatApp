import styles from "./MenuItem.module.css";

function MenuItem(props) {
  return (
    <li className={styles.li} onClick={props.fct}>
      <p className={styles.p}>{props.text}</p>
    </li>
  );
}

export default MenuItem;
