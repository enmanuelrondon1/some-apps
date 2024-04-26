import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

export const LogOut = () => {
  const logOut = () => {
    signOut(auth);
  };
  return (
    <>
      <button className="btn-login btn-logout" onClick={logOut}>
      <i className="fa-brands fa-google"></i>
        LogOut
      </button>
      
    </>
  );
};
