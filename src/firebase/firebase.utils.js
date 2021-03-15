import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDE1xpRT1Z372rPvUXSueAiqIWLa2aaRWU",
  authDomain: "crwn-store-62616.firebaseapp.com",
  projectId: "crwn-store-62616",
  storageBucket: "crwn-store-62616.appspot.com",
  messagingSenderId: "486369063028",
  appId: "1:486369063028:web:71764c3236104f2bc66121",
  measurementId: "G-F1KWR514DJ",
};

export const createUserProfile = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
