import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMh9E4PSKkjH4HxLkBNXHsHU3uWN5JuXc",
  authDomain: "dzp-crwn-db.firebaseapp.com",
  databaseURL: "https://dzp-crwn-db.firebaseio.com",
  projectId: "dzp-crwn-db",
  storageBucket: "",
  messagingSenderId: "434549349717",
  appId: "1:434549349717:web:c5dbed080dfda54d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfile = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      });
    } catch (err) {
      console.log(`Error while creating a user: ${err.message}`);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
