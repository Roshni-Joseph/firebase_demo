import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9FhXw6ag0LTxjxG6ta6CtnxWkKXcXFkc",
  authDomain: "login-auth-8c7f0.firebaseapp.com",
  projectId: "login-auth-8c7f0",
  storageBucket: "login-auth-8c7f0.firebasestorage.app",
  messagingSenderId: "992706386258",
  appId: "1:992706386258:web:47b391872bb2103c7c428b"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;