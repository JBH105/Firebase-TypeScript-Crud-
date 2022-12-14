// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWMhP0vzWXlnT9_vf1Gyp4TfZ6zFjrXRU",
  authDomain: "react-crud-b6cca.firebaseapp.com",
  projectId: "react-crud-b6cca",
  storageBucket: "react-crud-b6cca.appspot.com",
  messagingSenderId: "1023923964575",
  appId: "1:1023923964575:web:ef575cbe4bf07d1e4f70aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
