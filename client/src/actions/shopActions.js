import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_CATEGORY,
} from "./types";
// import {
//   firestore,
//   getCollectionAndDocuments,
// } from "../firebase/firebase.utils";
import axios from "axios";

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (error) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionsCategory = (value) => ({
  type: FETCH_COLLECTIONS_CATEGORY,
  payload: value,
});

// export const getCollections = () => async (dispatch) => {
//   const collectionRef = firestore.collection("collections");
//   dispatch(fetchCollectionsStart());
//   collectionRef
//     .get()
//     .then((snapshot) => {
//       const data = getCollectionAndDocuments(snapshot);
//       dispatch(fetchCollectionsSuccess(data));
//     })
//     .catch((error) => {
//       dispatch(fetchCollectionsFailure(error));
//       console.log(error);
//     });
// };

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(fetchCollectionsStart());

    const { data } = await axios.get("/api/shop");

    dispatch(fetchCollectionsSuccess(data));
  } catch (error) {
    dispatch(fetchCollectionsFailure(error));
  }
};
