// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDerI3Tu-uTOXIxfmw7OxJYj93JvwldBFU",
  authDomain: "fir-auth-cc9b2.firebaseapp.com",
  projectId: "fir-auth-cc9b2",
  storageBucket: "fir-auth-cc9b2.appspot.com",
  messagingSenderId: "251622741880",
  appId: "1:251622741880:web:74959692e098ee4831da8d",
  measurementId: "G-6H8XVC9WEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
