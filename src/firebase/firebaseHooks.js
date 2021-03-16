import { useEffect } from "react";
import { auth, createUserProfile } from "./firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../actions/authActions";

export const useGoogleUser = () => {
  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer);
  const { currentUser } = authReducer;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });

        console.log(currentUser, "firebasehook");
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => {
      unsubscribe();
    };
    //eslint-disable-next-line
  }, []);
  return currentUser;
};
