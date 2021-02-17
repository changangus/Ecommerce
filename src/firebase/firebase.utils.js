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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user:', error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log('newDocRef:', newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      items,
      title,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => firebase.auth().signInWithPopup(googleProvider);

export default firebase;