import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAmj4H0ubECc1JwRb9OG88Sc1XSrq61ZNU",
  authDomain: "alien-annie.firebaseapp.com",
  projectId: "alien-annie",
  storageBucket: "alien-annie.appspot.com",
  messagingSenderId: "976161617874",
  appId: "1:976161617874:web:7964dc8c98a22c1ab73a0b",
  measurementId: "G-4X9XD21ZZ5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
