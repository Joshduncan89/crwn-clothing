import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} from "./types";
import {
  firestore,
  getCollectionAndDocuments,
} from "../firebase/firebase.utils";

export const getCollections = () => async (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch({ type: FETCH_COLLECTIONS_START });
  collectionRef
    .get()
    .then((snapshot) => {
      const data = getCollectionAndDocuments(snapshot);
      dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_COLLECTIONS_FAILURE, payload: error.message });
      console.log(error);
    });
};
