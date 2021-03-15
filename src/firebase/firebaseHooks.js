import { useState, useEffect } from "react";
import { auth, createUserProfile } from "./firebase.utils";

export const useGoogleUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });

        console.log(currentUser, "firebasehook");
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribe();
    };
    //eslint-disable-next-line
  }, []);
  return currentUser;
};
