import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDW2Kf9SWma93KlEkzb7SgLuSZUmqOzoLI",
  authDomain: "todolist-react-18.firebaseapp.com",
  projectId: "todolist-react-18",
  storageBucket: "todolist-react-18.appspot.com",
  messagingSenderId: "785432670932",
  appId: "1:785432670932:web:0b59d87e033a858b7cc141"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);