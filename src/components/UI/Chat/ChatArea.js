import MessagesForm from "./MessagesForm";
import styles from "./ChatArea.module.css";

import MessagesList from "./MessagesList";
function ChatArea(props) {
  const messages = props.messages;
  return (
    <div className={styles.chat_area}>
      <div className={styles.chat}>
        <MessagesList messages={messages} uid={props.uid} />
      </div>
      <div className={styles["form-container"]}>
        <MessagesForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
}
export default ChatArea;
