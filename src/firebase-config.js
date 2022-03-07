import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPPUoTkbv_8NsPl-Xh7bBF-Crz9InsNns",
  authDomain: "react-chat-app-6bc99.firebaseapp.com",
  projectId: "react-chat-app-6bc99",
  storageBucket: "react-chat-app-6bc99.appspot.com",
  messagingSenderId: "375712956060",
  appId: "1:375712956060:web:171e0aa83ea956ac733759",
  measurementId: "G-3XPZTX7LXB",
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
