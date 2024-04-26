import { useRef, useState } from "react";
import { auth, db } from "./Firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect } from "react";
import { Messages } from "./Messages";
import { User } from "./User";
import { SendMessage } from "./SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef()
  const [user] = useAuthState(auth);

  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(newQuery, (QuerySnapshot) => {
      let currentMessages = [];
      QuerySnapshot.forEach((item) => {
        currentMessages.push({
          content: item.data(),
          id: item.id,
        });
        // console.log(item.data());
      });
      setMessages(currentMessages);
    });
    return unsubscribe;
  }, []);

  return (
    <>
        <section className="chat-content">
          {messages &&
            messages.map((item) => (
              <Messages key={item.id} message={item.content} />
            ))}
        </section>
      {user && <SendMessage scroll={scroll} />}
    </>
  );
};
