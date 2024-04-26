import { auth } from "./Firebase";
import { formaDate } from "./helpers";

export const Messages = ({ message }) => {
  let newStyle = "message";
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = message.uid;
    newStyle = user === newUser ? "my-message" : "message";
  }
  // console.log(message.timestamp);

  return (
    <>
      <article className={newStyle}>
        <div>
          <div className="text-message">
            <p className="text">{message.text}</p>
          </div>
          <p className="time">{formaDate(message.timestamp)}</p>
        </div>

        <img src={message.photo} alt="" referrerPolicy="no-referrer" />
      </article>
    </>
  );
};
