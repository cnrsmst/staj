// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmm8ZZCBvDfzJR6Qv6fNVM5hkxmLtkvs",
  authDomain: "deneme-141d9.firebaseapp.com",
  projectId: "deneme-141d9",
  storageBucket: "deneme-141d9.appspot.com",
  messagingSenderId: "607423549064",
  appId: "1:607423549064:web:916825c25e6c9d2164d93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;