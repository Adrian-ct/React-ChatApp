import { useState } from "react";
import styles from "./MessagesForm.module.css";
function MessagesForm(props) {
  const [typedMessage, setTypedMessage] = useState("");
  const [invalid, setInvalid] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (typedMessage.trim().length === 0) {
      setInvalid(true);
      return;
    }
    props.sendMessage(typedMessage);
    setTypedMessage("");
  };
  const messageChangedHandler = (e) => {
    setInvalid(false);
    setTypedMessage(e.target.value);
  };

  return (
    <form className={`${styles.inputForm}`} onSubmit={onSubmitHandler}>
      <input
        className={`${styles.input} ${invalid && styles.inputInvalid}`}
        type="text"
        placeholder="Type your message here"
        value={typedMessage}
        onChange={messageChangedHandler}
      ></input>
      <button className={styles.buttonForm} type="submit">
        Send Message
      </button>
    </form>
  );
}

export default MessagesForm;
