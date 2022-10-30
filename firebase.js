// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq21YD-NMGiccRbFjZGq0q2kpar_o1irc",
  authDomain: "udemy-lesson-896c2.firebaseapp.com",
  projectId: "udemy-lesson-896c2",
  storageBucket: "udemy-lesson-896c2.appspot.com",
  messagingSenderId: "371234357273",
  appId: "1:371234357273:web:28751da3e7f1e576d1ea88",
  measurementId: "G-TCD4TWKRXS",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

export default firebase;
