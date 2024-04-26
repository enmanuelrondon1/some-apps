import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Login = () => {


  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <>
      <button className="btn-login " onClick={googleLogin}>
      <i className="fa-brands fa-google"></i>
        Sing in with Google
      </button>
    </>
  );
};
