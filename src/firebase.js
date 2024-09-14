// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP8YqIl4p0rY9-WHT3v6GrtGoHRQoOmyc",
  authDomain: "cgpa--leaderboard.firebaseapp.com",
  projectId: "cgpa--leaderboard",
  storageBucket: "cgpa--leaderboard.appspot.com",
  messagingSenderId: "843525577472",
  appId: "1:843525577472:web:2be14ffa7c334411a571e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
