// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSS8Dc0h57LtSlyBe7WDnFXTvqEdP7skg",
  authDomain: "transportation-app-d4ad4.firebaseapp.com",
  projectId: "transportation-app-d4ad4",
  storageBucket: "transportation-app-d4ad4.appspot.com",
  messagingSenderId: "401582463002",
  appId: "1:401582463002:web:3b76fa13c639c44d90d9a3",
  measurementId: "G-0BFMYMBT65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const dataBase = getFirestore(app)

export default app;
