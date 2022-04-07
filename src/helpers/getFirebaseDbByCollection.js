import {
  auth,
  firebaseDatabase,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  firebaseDatabaseRef,
  firebaseSet,
  child,
  get
} from 'src/configs/firebase';
export const getFirebaseDbByCollection = (collection, exists, empty, handleError) => {
  const refDb = firebaseDatabaseRef(firebaseDatabase);
  get(child(refDb, collection))
    .then(snapShot => {
      if (snapShot.exists()) {
        exists?.(snapShot);
      } else {
        empty?.();
      }
    })
    .catch(e => {
      handleError?.(e);
    });
};
