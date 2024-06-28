// TODO : Use a module bundler for size reduction
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyBqHnK_3b8wC08t0xvfHqxw0tyLR_8t494",
  authDomain: "lcboard-85d25.firebaseapp.com",
  projectId: "lcboard-85d25",
  storageBucket: "lcboard-85d25.appspot.com",
  messagingSenderId: "344003910610",
  appId: "1:344003910610:web:f04577fa15d757ee7d460b",
  measurementId: "G-GXB2YZXFZ5"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const auth = getAuth(app);

