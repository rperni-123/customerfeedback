import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDVUiBsSvhYnW-rVcK8LF2CR61mARHIpgg",
  authDomain: "auth-9d347.firebaseapp.com",
  projectId: "auth-9d347",
  storageBucket: "auth-9d347.appspot.com",
  messagingSenderId: "1090950901108",
  appId: "1:1090950901108:web:dca508ac55318881fb5021"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// export default db;
