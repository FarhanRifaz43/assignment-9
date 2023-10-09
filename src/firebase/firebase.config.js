import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBGVacxCnNsiTm7WsRxU4LhtalD0v3hcd0",
  authDomain: "assignment-9-auth-7f3ab.firebaseapp.com",
  projectId: "assignment-9-auth-7f3ab",
  storageBucket: "assignment-9-auth-7f3ab.appspot.com",
  messagingSenderId: "520598355239",
  appId: "1:520598355239:web:2c78614ddd386b2074fd02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;