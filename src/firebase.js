// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt7UuKds-IHSII_FiqxRXINfq9Hk511kY",
  authDomain: "react-blog-with-firebase.firebaseapp.com",
  projectId: "react-blog-with-firebase",
  storageBucket: "react-blog-with-firebase.appspot.com",
  messagingSenderId: "599536896213",
  appId: "1:599536896213:web:f1298efe61505a04e83a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
