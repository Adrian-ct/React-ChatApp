import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { db, authentication } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  limit,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

import UserConnect from "./components/connection/UserConnect";
import ChatArea from "./components/UI/Chat/ChatArea";
import Menu from "./components/UI/Menu/Menu";

function App() {
  const [messages, setMessages] = useState([]);
  const messagesCollectionRef = collection(db, "messages");
  const [user] = useAuthState(authentication);

  useEffect(() => {
    const subscribe = async () => {
      const q = query(
        messagesCollectionRef,
        orderBy("createdAt", "desc"),
        limit(35)
      );

      await onSnapshot(q, (snapshot) => {
        setMessages([]);
        const allMessages = snapshot.docs.reverse().map((msg) => {
          return {
            id: msg.id,
            ...msg.data(),
          };
        });
        setMessages(allMessages);
      });
    };
    subscribe();
  }, []);
  const sendMessageHandler = async (newtext) => {
    await addDoc(messagesCollectionRef, {
      text: newtext,
      uid: user.uid,
      createdAt: serverTimestamp(),
      photoURL: user.photoURL,
    });
  };

  const deleteMessageHandler = async () => {
    messages.map(async (msg) => {
      await deleteDoc(doc(db, "messages", msg.id));
    });
    setMessages([]);
  };

  return (
    <div className={styles.App}>
      <UserConnect />
      {user ? (
        <div className={styles["chat-area"]}>
          <React.Fragment>
            <Menu deleteMessage={deleteMessageHandler} />
          </React.Fragment>
          <section className={styles["chat_messages"]}>
            <ChatArea
              messages={messages}
              sendMessage={sendMessageHandler}
              uid={user.uid}
            />
          </section>
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
}

export default App;
