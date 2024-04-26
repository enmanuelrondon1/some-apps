import { LogOut } from "./LogOut";
import { Login } from "./Login";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const User = () => {
  const [user] = useAuthState(auth);  
  
  // console.log(user);

  const image = user
    ? user.photoURL
    : "https://i.ibb.co/XkGRjsf/user-Image.png";
  const name = user ? user.displayName : "Name User";

  return (
    <>
      <div className="right-side">
        <h1 className="text-black  "> <i className="fa-solid fa-cat"></i>QuickChat</h1>
        <article className="card-user">
          <img src={image} alt="" referrerPolicy="no-referrer" />
          <p>{name}</p>
          {user ? <LogOut /> : <Login />}
        </article>
      </div>
    </>
  );
};
