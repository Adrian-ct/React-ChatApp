import { useEffect } from "react";
import { useRef } from "react";
import styles from "./Message.module.css";

function Message(props) {
  const testRef = useRef();
  const scrollToElement = () =>
    testRef.current.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToElement);

  const sent = props.sent;
  const photoURL = props.msg.photoURL;
  return (
    <div
      ref={testRef}
      key={props.msg.id}
      className={`${styles.card} ${
        sent ? styles["sentCard"] : styles["receivedCard"]
      }`}
    >
      <div
        key={props.msg.id}
        className={`${styles["message-container"]} ${
          sent
            ? styles["sent-message-container"]
            : styles["received-message-container"]
        }`}
      >
        <p
          className={`${styles["message"]} 
       ${sent ? styles["sent-message"] : styles["received-message"]}`}
        >
          {props.msg.text}
        </p>
      </div>
      <img src={photoURL} alt="" className={styles.profilePhoto}></img>
    </div>
  );
}

export default Message;
