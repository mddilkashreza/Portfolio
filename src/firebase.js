// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-AfFCEMryT7_D9jCYMlCC0G3aUe4rFM",
  authDomain: "react-portfoilo-768e4.firebaseapp.com",
  projectId: "react-portfoilo-768e4",
  storageBucket: "react-portfoilo-768e4.appspot.com",
  messagingSenderId: "599840984815",
  appId: "1:599840984815:web:03e77299db55c36a9bd51a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();