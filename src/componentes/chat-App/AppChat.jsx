import { Chat } from "./Chat";
import { User } from "./User";
import './chat.css'

export const AppChat = () => {
  return (
    <>
      <div className="App grid  ">
        <User />
        <Chat />
      </div>
    </>
  );
};
