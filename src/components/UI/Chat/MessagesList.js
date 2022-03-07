import Message from "./Message";
import styles from "./MessagesList.module.css";
function MessagesList(props) {
  let messages = props.messages;
  return (
    <div key="m" className={styles.list}>
      {messages.map((msg) => {
        let sent = false;
        {
          msg.uid === props.uid && (sent = true);
        }
        return <Message msg={msg} sent={sent} />;
      })}
    </div>
  );
}
export default MessagesList;
