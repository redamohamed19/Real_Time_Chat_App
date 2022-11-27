// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAUpKkeMqfFU0L47ks6PA32lCsZJmLQjw',
  authDomain: 'chatapp-baf96.firebaseapp.com',
  projectId: 'chatapp-baf96',
  storageBucket: 'chatapp-baf96.appspot.com',
  messagingSenderId: '1001368768387',
  appId: '1:1001368768387:web:209db3ad9b05abe949b0b6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
