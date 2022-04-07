import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
  child,
  get
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAKRwldppVmH1awRFkUK43a_3073FbloWM',
  authDomain: 'ttv-work.firebaseapp.com',
  // databaseURL: 'https://chat-leaning-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'ttv-work',
  storageBucket: 'ttv-work.appspot.com',
  messagingSenderId: '542310957066',
  appId: '1:542310957066:android:e5db8752a5f4be528f5ff3'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  child,
  get
};
export default app;
