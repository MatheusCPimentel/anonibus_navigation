import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcfK5hgsa-IWQYCgKNhdi7beOqQfKdtAE",
  authDomain: "anonibus-416c4.firebaseapp.com",
  databaseURL: "https://anonibus-416c4.firebaseio.com",
  projectId: "anonibus-416c4",
  storageBucket: "anonibus-416c4.appspot.com",
  messagingSenderId: "366422661468",
  appId: "1:366422661468:web:6e6d64cb4bf1738d8b0999",
  measurementId: "G-75CJSNV0YS"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();