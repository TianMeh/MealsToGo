import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgqJZ-TvnyJK3p5uSlOZV7hNlCKxU92LU",
  authDomain: "mealstogo-ec349.firebaseapp.com",
  projectId: "mealstogo-ec349",
  storageBucket: "mealstogo-ec349.appspot.com",
  messagingSenderId: "404293977401",
  appId: "1:404293977401:web:08b3539e70933cf91994e8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
