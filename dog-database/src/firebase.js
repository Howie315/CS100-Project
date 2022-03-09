// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPUOFdBnI47r221GyC0gxJmUJXXCHaSLE",
  authDomain: "dog-database-d87bb.firebaseapp.com",
  projectId: "dog-database-d87bb",
  storageBucket: "dog-database-d87bb.appspot.com",
  messagingSenderId: "733640408617",
  appId: "1:733640408617:web:71949d3d98b0e08a12a638",
  measurementId: "G-8BD8K08P52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
