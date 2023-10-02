import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: 'AIzaSyCmeLtJgWCz03Qi7aKuyZG_MYBmyLGZCqQ',
  authDomain: 'flyt-news.firebaseapp.com',
  projectId: 'flyt-news',
  storageBucket: 'flyt-news.appspot.com',
  messagingSenderId: '160022995321',
  appId: '1:160022995321:web:882107569c4ab7cc07cfa8',
  measurementId: 'G-4HEHDJWKGP',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
