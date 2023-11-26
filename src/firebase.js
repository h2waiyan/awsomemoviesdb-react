// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcJZ8lJYCA38LtzfwdXMtGYEE_Ls4qluU",
  authDomain: "react-movie-db-90c48.firebaseapp.com",
  projectId: "react-movie-db-90c48",
  storageBucket: "react-movie-db-90c48.appspot.com",
  messagingSenderId: "571863743240",
  appId: "1:571863743240:web:da95ca356c345fad5fcabd",
  measurementId: "G-NEESFR31K7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
