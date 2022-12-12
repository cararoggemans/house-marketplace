
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo313TTeR9XddPsWPh4g3mquJSGtakHf4",
  authDomain: "house-marketplace-b0a12.firebaseapp.com",
  projectId: "house-marketplace-b0a12",
  storageBucket: "house-marketplace-b0a12.appspot.com",
  messagingSenderId: "701560637557",
  appId: "1:701560637557:web:c59881ba27a89658cfd03c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()