import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./Firebase";
import EmojiPicker from "emoji-picker-react";

export const SendMessage = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState("close");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      photo: photoURL,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  const emoji = () => {
    setOpen("open");
  };
  const closeEmoji = () => {
    setOpen("close");
  };

  const onEmojiClick =(event, emojiObject) => {
    // console.log(emojiObject)
    setInput(`${input}${emojiObject.emoji}`)
    // setChosenEmoji(emojiObject);
  }
  return (
    <>
      <form onSubmit={sendMessage}>
        <button type="button" className="btn-emoji" onClick={emoji}>
          <i className="fa-sharp fa-solid fa-face-smile"></i>
        </button>
        <div className={open}>
          <button className="colse-emoji " type="button" onClick={closeEmoji}>
            <i className="fa-solid fa-x"></i>
          </button>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
        <input
          type="text"
          className="text"
          placeholder="Enter ypur message here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
