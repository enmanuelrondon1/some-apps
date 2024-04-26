import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc6Yr_MaRzfgZRzCcxLqZLR-G7Yb_osE4",
  authDomain: "chat-react-9cd9f.firebaseapp.com",
  projectId: "chat-react-9cd9f",
  storageBucket: "chat-react-9cd9f.appspot.com",
  messagingSenderId: "68407088745",
  appId: "1:68407088745:web:2813ebb578ba06c101f4f8",
};

const app = initializeApp(firebaseConfig);


export const auth =  getAuth(app);
export const db = getFirestore(app)