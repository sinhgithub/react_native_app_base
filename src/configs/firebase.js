import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref as firebaseDatabaseRef, set as firebaseSet } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAnqvDvvg2P4bbMYzoQrfwdC5JVlTCVAWc',
  authDomain: 'chat-leaning.firebaseapp.com',
  databaseURL: 'https://chat-leaning-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'chat-leaning',
  storageBucket: 'chat-leaning.appspot.com',
  messagingSenderId: '71257409565',
  appId: '1:71257409565:android:5a4c69712ce70311f65ef4',
  measurementId: 'G-MEASUREMENT_ID'
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
  firebaseSet
};
export default app;
