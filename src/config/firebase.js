import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const config = {
  apiKey: "AIzaSyA9N0nB6V-Jl5gIV1HbYciGnO6IUu7Mrdk",
  authDomain: "ha-briyani.firebaseapp.com",
  projectId: "ha-briyani",
  storageBucket: "ha-briyani.appspot.com",
  messagingSenderId: "72106572082",
  appId: "1:72106572082:web:7c460df6149de2f99b3f2b",
  measurementId: "G-HE1P74QF7D",
};

const app = initializeApp(config);

export const db = getFirestore(app);
