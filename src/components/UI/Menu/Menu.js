import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";
function Menu(props) {
  const fct = () => {
    console.log("Pressed button");
  };
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.navbar}>
        <MenuItem text="Delete all messages" fct={props.deleteMessage} />
        <MenuItem text="Change background" fct={fct} />
        <MenuItem text="Change nickname" fct={fct} />
        <MenuItem text="Change profile picture" fct={fct} />
      </ul>
    </div>
  );
}

export default Menu;
